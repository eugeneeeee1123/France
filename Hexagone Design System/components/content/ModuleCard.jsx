import React from "react";
export function ModuleCard({ number, title, titleFr, description, accent = "var(--color-gold)", image, onClick }) {
  const [hover, setHover] = React.useState(false);
  const outer = {
    padding: "6px", borderRadius: "10px", height: "100%",
    background: hover ? "rgba(239,180,75,0.10)" : "var(--surface-card)",
    border: "1px solid " + (hover ? accent : "var(--surface-card-border)"),
    boxShadow: hover ? "0 28px 56px -28px rgba(0,0,0,0.65), 0 0 0 1px rgba(239,180,75,0.15)" : "var(--shadow-card)",
    transform: hover ? "translateY(-4px)" : "translateY(0)",
    transition: "transform 0.35s var(--ease-monument), border-color 0.25s, box-shadow 0.35s, background 0.25s",
    cursor: onClick ? "pointer" : "default",
  };
  const core = {
    position: "relative", borderRadius: "6px", overflow: "hidden", height: "100%", minHeight: "180px",
    background: "var(--surface-page-deep)", boxShadow: "inset 0 1px 0 rgba(248,246,242,0.06)",
    display: "flex", flexDirection: "column", justifyContent: image ? "flex-end" : "flex-start",
  };
  return (
    <div style={outer} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={onClick}>
      <div style={core}>
        {image && <div style={{ position: "absolute", inset: 0, backgroundImage: "url(" + image + ")", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(0.25) contrast(1.1)" }} />}
        {image && <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,13,31,0.15) 0%, rgba(0,13,31,0.92) 88%)" }} />}
        <div style={{ position: "relative", padding: image ? "24px" : "24px", fontFamily: "var(--font-sans-ui)" }}>
          <div style={{ fontSize: "12px", letterSpacing: "var(--tracking-label)", color: accent, marginBottom: "10px" }}>{number}</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: "26px", color: "var(--text-primary)", marginBottom: "4px" }}>{title}</div>
          <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "15px", color: accent, marginBottom: "12px" }}>{titleFr}</div>
          <div style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: "var(--leading-body)" }}>{description}</div>
        </div>
      </div>
    </div>
  );
}
