import { ImageResponse } from "next/og"

/** Shared 1200×630 social card used by every route's opengraph-image. */
export const ogSize = { width: 1200, height: 630 }
export const ogContentType = "image/png"

export function ogResponse({ tag, title }: { tag: string; title: string }) {
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
          background: "#0A0A0A",
          color: "#FAFAFA",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Grid backdrop */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Orange glow */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 520,
            height: 520,
            display: "flex",
            background: "radial-gradient(circle, rgba(249,115,22,0.28), transparent 60%)",
          }}
        />

        {/* Top: wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#F97316", display: "flex" }} />
          <div style={{ display: "flex", fontSize: 30, fontWeight: 700, letterSpacing: -0.5 }}>
            <span>Geeky</span>
            <span style={{ color: "#A1A1AA" }}>Techh</span>
          </div>
        </div>

        {/* Bottom: tag + title */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: 4,
              color: "#F97316",
              marginBottom: 24,
            }}
          >
            {tag}
          </div>
          <div style={{ display: "flex", fontSize: 68, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 940 }}>
            {title}
          </div>
        </div>
      </div>
    ),
    ogSize,
  )
}
