// ------------------------------------------------------------------
// Receives a reader's perspective and files it in the "Perspectives"
// Notion database.
//
// Needs two environment variables in Vercel:
//   NOTION_TOKEN        the internal integration secret (starts with ntn_)
//   NOTION_QUESTIONS_DB the Perspectives database id
//
// The token never reaches the browser: this runs on the server only.
// ------------------------------------------------------------------

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NOTION_VERSION = "2022-06-28";
const MAX_PERSPECTIVE = 1500;
const MAX_NAME = 40;

// A public form on the open internet gets bots. These three cheap checks
// stop the overwhelming majority without ever bothering a real reader.
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

// Per-instance memory. Serverless spins up several instances, so this is a
// speed bump rather than a wall. That is the right tradeoff here: the cost
// of a leaked submission is one junk row, not a breach.
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const seen = (hits.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (seen.length >= RATE_LIMIT_MAX) {
    hits.set(ip, seen);
    return true;
  }

  seen.push(now);
  hits.set(ip, seen);

  // Don't let the map grow without bound on a long-lived instance.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) hits.delete(key);
    }
  }

  return false;
}

function clean(value, max) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(request) {
  const token = process.env.NOTION_TOKEN;
  const database = process.env.NOTION_QUESTIONS_DB;

  if (!token || !database) {
    // Log which one is absent and how long it is. Never the value itself.
    console.error(
      "Ask form env check:",
      JSON.stringify({
        tokenPresent: Boolean(token),
        tokenLength: token ? token.length : 0,
        tokenPrefixOk: token ? token.slice(0, 4) === "ntn_" : false,
        databasePresent: Boolean(database),
        databaseLength: database ? database.length : 0,
      })
    );
    return Response.json(
      { error: "This isn't set up quite yet. Please try again later." },
      { status: 500 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: a field hidden from humans. If it's filled in, it was a bot.
  // Return 200 so the bot believes it succeeded and doesn't retry.
  if (clean(body.website, 200)) {
    return Response.json({ ok: true });
  }

  const name = clean(body.name, MAX_NAME);
  const perspective = clean(body.perspective, MAX_PERSPECTIVE);

  if (!name || !perspective) {
    return Response.json(
      { error: "Please add your first name and something to share." },
      { status: 400 }
    );
  }

  if (perspective.length < 10) {
    return Response.json(
      { error: "Could you say a little more? Even a sentence or two helps." },
      { status: 400 }
    );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";

  if (rateLimited(ip)) {
    return Response.json(
      { error: "That's a few already. Try again in a little while." },
      { status: 429 }
    );
  }

  try {
    const res = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Notion-Version": NOTION_VERSION,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        parent: { database_id: database },
        properties: {
          Perspective: { title: [{ text: { content: perspective } }] },
          From: { rich_text: [{ text: { content: name } }] },
          Status: { select: { name: "New" } },
          Submitted: { date: { start: new Date().toISOString() } },
        },
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Notion rejected the submission:", res.status, detail);
      return Response.json(
        { error: "Something went wrong saving that. Please try again." },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Ask form failed to reach Notion:", error);
    return Response.json(
      { error: "We couldn't reach the server. Please try again." },
      { status: 502 }
    );
  }
}
