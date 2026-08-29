import React from "react";
export function NavBar({ logoSrc, brandName = "LA FRANCE", brandSub = "EN PROFONDEUR", links = [], activeLink, lang = "FR", ctaLabel, onNavigate, onCtaClick, onSearchClick }) {
  return (
    <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 32px", background: "var(--surface-page-deep)", borderBottom: "1px solid var(--border-hairline)", fontFamily: "var(--font-sans-ui)", gap: "24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {logoSrc ? <img src={logoSrc} alt={brandName} style={{ height: "32px", display: "block" }} /> : (
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "17px", letterSpacing: "var(--tracking-monument)", color: "var(--color-gold)" }}>{brandName}</div>
            <div style={{ fontSize: "9px", letterSpacing: "var(--tracking-label)", color: "var(--text-muted)" }}>{brandSub}</div>
          </div>
        )}
      </div>
      <div style={{ display: "flex", gap: "14px", flex: 1, justifyContent: "flex-start", overflowX: "auto", whiteSpace: "nowrap", scrollbarWidth: "none" }}>
        {links.map((l) => (
          <span key={l} onClick={() => onNavigate && onNavigate(l)} style={{ fontSize: "11px", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: l === activeLink ? "var(--color-gold)" : "var(--text-muted)", borderBottom: l === activeLink ? "2px solid var(--color-gold)" : "2px solid transparent", paddingBottom: "4px", cursor: "pointer", flexShrink: 0 }}>{l}</span>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
        <div onClick={onSearchClick} style={{ position: "relative", width: "15px", height: "15px", cursor: "pointer" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "10px", height: "10px", border: "1.5px solid var(--color-gold)", borderRadius: "50%" }} />
          <div style={{ position: "absolute", bottom: "1px", right: "0px", width: "6px", height: "1.5px", background: "var(--color-gold)", transform: "rotate(45deg)", transformOrigin: "right center" }} />
        </div>
        <span style={{ fontSize: "12px", color: "var(--text-primary)", cursor: "pointer" }}>{lang} &#9662;</span>
        {ctaLabel && (
          <button onClick={onCtaClick} style={{ fontFamily: "var(--font-sans-ui)", fontSize: "12px", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--color-gold)", background: "transparent", border: "1px solid var(--color-gold)", borderRadius: "var(--radius-md)", padding: "10px 18px", cursor: "pointer", whiteSpace: "nowrap" }}>{ctaLabel}</button>
        )}
      </div>
    </nav>
  );
}
