import { ImageResponse } from "next/og";

export const alt = "MPL Digital Services, web design and digital services in Marlboro, NJ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#f4f1ea",
          color: "#17150f",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 4, color: "#7a7466" }}>MPL DIGITAL SERVICES · MARLBORO, NJ</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, fontWeight: 800, letterSpacing: -4, lineHeight: 1 }}>Need a website?</div>
          <div style={{ fontSize: 104, fontWeight: 800, letterSpacing: -4, lineHeight: 1, color: "#e2542b" }}>
            I&apos;ll build it.
          </div>
        </div>
        <div style={{ fontSize: 30, color: "#4a463d" }}>Websites · Apps · Social media · AI help</div>
      </div>
    ),
    size,
  );
}
