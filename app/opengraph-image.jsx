import { ImageResponse } from "next/og";

// Generates the 1200x630 image people see when the site is shared on
// social media or in messages. Next.js builds this automatically and
// wires it into the Open Graph + Twitter tags, so no /og.jpg file needed.
export const runtime = "edge";
export const alt = "Brandon Polk | Learning in public. Building with curiosity.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          padding: "90px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 26,
            color: "#5b6f6a",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 56,
              height: 2,
              backgroundColor: "#1b998b",
              marginRight: 20,
            }}
          />
          Brandon Polk
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 76,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#0f2320",
          }}
        >
          <div>Learning in public,</div>
          <div style={{ color: "#1b998b", fontStyle: "italic" }}>
            building with curiosity.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#5b6f6a",
            marginTop: 46,
          }}
        >
          iambrandonpolk.com
        </div>
      </div>
    ),
    { ...size }
  );
}
