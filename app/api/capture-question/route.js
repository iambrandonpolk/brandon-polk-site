// ------------------------------------------------------------------
// Receives Cap Genius "AI Query" webhooks from the "A Better Question"
// app and files each question (and the answer it gave) into the
// "Reader Questions" Notion database.
//
// Env: NOTION_TOKEN (internal integration secret, already set in Vercel).
// Optional env: CAPGENIUS_WEBHOOK_SECRET  a shared secret. If set, the
//   webhook must send it as the "x-webhook-secret" header.
//
// The token never reaches the browser: this runs on the server only.
// ------------------------------------------------------------------

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NOTION_VERSION = "2022-06-28";
const QUESTIONS_DB = "67d50398967e470e8153a5fc570752a8";
const MAX = 1900;

function clean(v, max = MAX) {
  if (v == null) return "";
  const s = typeof v === "string" ? v : JSON.stringify(v);
  return s.trim().slice(0, max);
}

// Return the first non-empty string found at any of the given dot-paths.
function pick(obj, paths) {
  for (const p of paths) {
    const val = p.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);
    if (typeof val === "string" && val.trim()) return val.trim();
  }
  return "";
}

export async function GET() {
  return Response.json({ ok: true, note: "capture-question is live" });
}

export async function POST(request) {
  const token = process.env.NOTION_TOKEN;
  if (!token) {
    console.error("capture-question: NOTION_TOKEN missing");
    return Response.json({ error: "not configured" }, { status: 500 });
  }

  const secret = process.env.CAPGENIUS_WEBHOOK_SECRET;
  if (secret && request.headers.get("x-webhook-secret") !== secret) {
    return Response.json({ error: "unauthorized" }, { status: 401 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid json" }, { status: 400 });
  }

  const question = pick(body, [
    "question", "query", "prompt", "input", "message", "user_message",
    "userInput", "text",
    "data.question", "data.query", "data.prompt", "data.input", "data.message",
    "data.text", "data.query.text", "data.input.text",
    "payload.question", "payload.query", "payload.input", "payload.message",
    "event.question", "event.query", "event.input",
  ]);

  const answer = pick(body, [
    "answer", "response", "output", "result", "completion", "ai_response",
    "assistant_message", "reply",
    "data.answer", "data.response", "data.output", "data.result",
    "data.completion", "data.reply",
    "payload.answer", "payload.response", "payload.output",
    "event.answer", "event.response", "event.output",
  ]);

  const appName = pick(body, [
    "applet", "applet_name", "app", "app_name", "appName",
    "data.applet_name", "data.app_name", "data.appName", "data.applet", "name",
  ]);

  // Only keep "A Better Question" events. If the app name isn't present in
  // the payload, capture anyway so nothing is silently lost.
  if (appName && !/better\s*question/i.test(appName)) {
    return Response.json({ ok: true, skipped: "other applet" });
  }

  const title = question || "(question not detected — see raw payload below)";

  try {
    const res = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Notion-Version": NOTION_VERSION,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        parent: { database_id: QUESTIONS_DB },
        properties: {
          Question: { title: [{ text: { content: clean(title, 1900) } }] },
          Answer: { rich_text: [{ text: { content: clean(answer, 1900) } }] },
          Status: { select: { name: "New" } },
          Date: { date: { start: new Date().toISOString() } },
        },
        // Raw payload stashed while we confirm the exact field shape.
        // Once verified, this block can be removed.
        children: [
          {
            object: "block",
            type: "code",
            code: {
              language: "json",
              rich_text: [
                { text: { content: clean(JSON.stringify(body, null, 2), 1900) } },
              ],
            },
          },
        ],
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("capture-question: Notion rejected", res.status, detail);
      return Response.json({ error: "notion error", detail }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch (error) {
    console.error("capture-question: failed to reach Notion", error);
    return Response.json({ error: "unreachable" }, { status: 502 });
  }
}
