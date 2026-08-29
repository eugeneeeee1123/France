const { NavBar, ModuleCard, StatBlock, Divider } = window.HexagoneDesignSystem_e9210e;
const A = "../../assets/";

const sidebarModules = [
  { num: "01", title: "ARSENAL", desc: "Forces de frappe, indépendance stratégique.", img: A + "thumb-arsenal.jpg" },
  { num: "02", title: "STATECRAFT", desc: "Conseil de sécurité de l'ONU, droit de veto.", img: A + "thumb-statecraft.jpg" },
  { num: "03", title: "ÉPOQUES", desc: "Des Gaulois à aujourd'hui.", img: A + "thumb-epoques.jpg" },
  { num: "04", title: "TERRITOIRES", desc: "Outre-mer et 2e ZEE mondiale.", img: A + "thumb-territories.jpg" },
  { num: "05", title: "ARENA", desc: "Football, Tour de France, JO.", img: A + "thumb-arena.jpg" },
  { num: "06", title: "AESTHÉTICS", desc: "Art, cuisine et littérature.", img: A + "thumb-aesthetics.jpg" },
];
const rowModules = [
  { num: "01", title: "ARSENAL", sub: "Puissance militaire", accent: "var(--color-gold)", img: A + "thumb-arsenal.jpg" },
  { num: "02", title: "STATECRAFT", sub: "Gouvernance et institutions", accent: "var(--color-gold)", img: A + "thumb-statecraft.jpg" },
  { num: "03", title: "ÉPOQUES", sub: "Notre histoire", accent: "var(--color-red)", img: A + "thumb-epoques.jpg" },
  { num: "04", title: "TERRITOIRES", sub: "Géographie et Outre-mer", accent: "var(--color-gold)", img: A + "thumb-territories.jpg" },
  { num: "05", title: "ARENA", sub: "Sport et compétition", accent: "var(--color-red)", img: A + "thumb-arena.jpg" },
  { num: "06", title: "AESTHÉTICS", sub: "Culture et art de vivre", accent: "var(--color-gold)", img: A + "thumb-aesthetics.jpg" },
];
const stats = [
  ["551,695 km²", "Superficie réelle (avec outre-mer)"],
  ["11,000,000 km²", "Zone Économique Exclusive - 2e zone mondiale"],
  ["67 M+", "Population (estimation 2024)"],
  ["57", "Pays francophones dans le monde"],
  ["2ᵉ", "Puissance maritime mondiale"],
  ["Permanent member", "Conseil de sécurité de l'ONU"],
];

function useInView(ref) {
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setInView(true); return; }
    const timer = setTimeout(() => setInView(true), 500);
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold: 0.01, rootMargin: "0px 0px 600px 0px" });
    obs.observe(ref.current);
    return () => { obs.disconnect(); clearTimeout(timer); };
  }, []);
  return inView;
}
function Reveal({ children, delay = 0 }) {
  const ref = React.useRef(null);
  const inView = useInView(ref);
  return <div ref={ref} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s var(--ease-monument) " + delay + "s, transform 0.6s var(--ease-monument) " + delay + "s" }}>{children}</div>;
}
function SocialDot({ label }) {
  return <div style={{ width: "34px", height: "34px", borderRadius: "50%", border: "1px solid var(--border-hairline)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", color: "var(--color-gold)", fontFamily: "var(--font-sans-ui)", cursor: "pointer" }}>{label}</div>;
}

function Homepage() {
  return (
    <div style={{ background: "var(--surface-page)", minHeight: "100vh", fontFamily: "var(--font-sans-ui)" }}>
      <NavBar logoSrc={A + "logo-lockup.png"} links={["Accueil", "Arsenal", "Statecraft", "Époques", "Territoires", "Arena", "Aesthétics", "Science", "Économie", "Francophonie"]} activeLink="Accueil" ctaLabel="Commencer l'exploration" onCtaClick={() => alert("Explore")} />

      <section className="grain" style={{ position: "relative", padding: "48px 32px 0", maxWidth: "1440px", margin: "0 auto", display: "grid", gridTemplateColumns: "0.95fr 0.85fr 0.55fr", gap: "28px", alignItems: "stretch" }}>
        <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
          <div style={{ fontSize: "12px", letterSpacing: "var(--tracking-label)", color: "var(--color-gold)", textTransform: "uppercase" }}>&#10070; La France sous tous les angles &#10070;</div>
          <div style={{ marginTop: "18px", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2.4rem,5vw,3.8rem)", letterSpacing: "0.02em", color: "var(--color-gold)", lineHeight: 1.05 }}>GRANDEUR<br />DE LA FRANCE</div>
          <div style={{ display: "flex", gap: "4px", width: "220px", height: "3px", margin: "18px 0" }}>
            <div style={{ flex: 1, background: "#0055A4" }} />
            <div style={{ flex: 1, background: "#F8F6F2" }} />
            <div style={{ flex: 1, background: "#E3051C" }} />
          </div>
          <p style={{ fontFamily: "var(--font-serif-body)", fontSize: "17px", color: "var(--text-primary)", maxWidth: "42ch", lineHeight: "var(--leading-body)" }}>La France n'est pas un pays, c'est une idée.</p>
          <p style={{ fontFamily: "var(--font-sans-ui)", fontSize: "14px", color: "var(--text-muted)", maxWidth: "44ch", lineHeight: "var(--leading-body)", marginTop: "8px" }}>De la Gaule à l'espace, des profondeurs océaniques aux sommets de la pensée : explorez toutes les dimensions de la France et de son influence dans le monde.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
            <button style={{ fontFamily: "var(--font-sans-ui)", fontSize: "13px", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--color-navy)", background: "var(--color-gold)", border: "none", borderRadius: "var(--radius-md)", padding: "14px 26px", cursor: "pointer" }}>Commencer l'exploration &#8594;</button>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", color: "var(--text-primary)", fontSize: "13px", letterSpacing: "var(--tracking-label)", textTransform: "uppercase" }}>
              <div style={{ width: "26px", height: "26px", borderRadius: "50%", border: "1px solid var(--border-hairline)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 0, height: 0, borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: "6px solid var(--color-gold)", marginLeft: "2px" }} />
              </div>
              Voir la vidéo
            </div>
          </div>
        </div>
        <div style={{ position: "relative", borderRadius: "6px", overflow: "hidden", width: "100%", aspectRatio: "744/394", alignSelf: "center" }}>
          <img src={A + "hero-collage.jpg"} alt="La France : Marianne, la Tour Eiffel, le Rafale et l'emblème du coq" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        <div style={{ borderLeft: "1px solid var(--border-hairline)", paddingLeft: "24px", height: "100%", maxHeight: "100%", overflowY: "auto", scrollbarWidth: "none" }}>
          {sidebarModules.map((m, i) => (
            <Reveal key={m.num} delay={i * 0.05}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0", borderTop: i === 0 ? "none" : "1px solid var(--border-hairline)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "17px", color: "var(--color-gold)", width: "22px" }}>{m.num}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "var(--font-sans-ui)", fontWeight: 700, fontSize: "12px", letterSpacing: "var(--tracking-label)", color: "var(--text-primary)" }}>{m.title}</div>
                  <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "3px", lineHeight: 1.4 }}>{m.desc}</div>
                </div>
                <img src={m.img} alt="" style={{ width: "38px", height: "38px", borderRadius: "4px", objectFit: "cover", flexShrink: 0 }} />
              </div>
            </Reveal>
          ))}
          <div style={{ marginTop: "10px", fontSize: "11px", letterSpacing: "var(--tracking-label)", color: "var(--color-gold)", textTransform: "uppercase", cursor: "pointer" }}>Voir toutes les sections &#8594;</div>
        </div>
      </section>

      <section style={{ maxWidth: "1440px", margin: "40px auto 0", padding: "20px 32px", borderTop: "1px solid var(--border-hairline)", borderBottom: "1px solid var(--border-hairline)", display: "grid", gridTemplateColumns: "repeat(6, minmax(0,1fr))", gap: "20px" }}>
        {stats.map(([v, l], i) => (
          <Reveal key={l} delay={i * 0.04}><StatBlock value={v} label={l} size="sm" /></Reveal>
        ))}
      </section>

      <section style={{ maxWidth: "1440px", margin: "0 auto", padding: "40px 32px 0", display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: "16px" }}>
        {rowModules.map((m, i) => (
          <Reveal key={m.num} delay={i * 0.05}>
            <ModuleCard number={m.num} title={m.title} titleFr={m.sub} description="" accent={m.accent} image={m.img} onClick={() => alert("→ /" + m.title.toLowerCase())} />
          </Reveal>
        ))}
      </section>

      <section style={{ maxWidth: "1440px", margin: "40px auto 0", padding: "0 32px 64px", display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: "20px" }}>
        <Reveal>
          <div style={{ background: "var(--surface-card)", border: "1px solid var(--surface-card-border)", borderRadius: "var(--radius-md)", padding: "22px", height: "100%" }}>
            <div style={{ fontSize: "12px", letterSpacing: "var(--tracking-label)", color: "var(--color-gold)", textTransform: "uppercase" }}>Carte interactive</div>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "10px", lineHeight: "var(--leading-body)" }}>Explorez la France et ses territoires dans le monde.</p>
            <div style={{ marginTop: "16px", height: "80px", borderRadius: "var(--radius-sm)", background: "radial-gradient(circle at 20% 30%, rgba(239,180,75,0.35) 0 3px, transparent 4px), radial-gradient(circle at 60% 60%, rgba(239,180,75,0.35) 0 3px, transparent 4px), radial-gradient(circle at 85% 25%, rgba(239,180,75,0.35) 0 3px, transparent 4px), var(--surface-page-deep)" }} />
            <div style={{ marginTop: "14px", fontSize: "12px", color: "var(--color-gold)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", cursor: "pointer" }}>Explorer la carte &#8594;</div>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div style={{ background: "var(--surface-card)", border: "1px solid var(--surface-card-border)", borderRadius: "var(--radius-md)", padding: "22px", height: "100%" }}>
            <div style={{ fontSize: "12px", letterSpacing: "var(--tracking-label)", color: "var(--color-gold)", textTransform: "uppercase" }}>À la une</div>
            <div style={{ display: "flex", gap: "8px", marginTop: "14px" }}>
              {["hexagone-news-1", "hexagone-news-2", "hexagone-news-3"].map((s) => (
                <div key={s} style={{ flex: 1, aspectRatio: "1/1", borderRadius: "var(--radius-sm)", backgroundImage: "url(https://picsum.photos/seed/" + s + "/200/200)", backgroundSize: "cover", filter: "grayscale(0.4) contrast(1.1)" }} />
              ))}
            </div>
            <div style={{ marginTop: "12px", fontSize: "13px", color: "var(--text-primary)" }}>Ariane 6 : l'Europe accède à l'espace</div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ background: "var(--surface-card)", border: "1px solid var(--surface-card-border)", borderRadius: "var(--radius-md)", padding: "22px", height: "100%" }}>
            <div style={{ fontSize: "12px", letterSpacing: "var(--tracking-label)", color: "var(--color-gold)", textTransform: "uppercase" }}>Chronologie interactive</div>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "10px", lineHeight: "var(--leading-body)" }}>Parcourez les moments clés qui ont façonné la France.</p>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "22px", position: "relative" }}>
              <div style={{ position: "absolute", top: "4px", left: 0, right: 0, height: "1px", background: "var(--border-hairline)" }} />
              {["-52", "1789", "1940", "1958", "Auj."].map((y) => (
                <div key={y} style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "9px", height: "9px", borderRadius: "50%", background: y === "1789" ? "var(--color-gold)" : "var(--text-muted)" }} />
                  <div style={{ fontSize: "11px", color: y === "1789" ? "var(--color-gold)" : "var(--text-muted)" }}>{y}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div style={{ background: "var(--surface-card)", border: "1px solid var(--surface-card-border)", borderRadius: "var(--radius-md)", padding: "22px", height: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
              <div style={{ fontSize: "12px", letterSpacing: "var(--tracking-label)", color: "var(--color-gold)", textTransform: "uppercase" }}>Citation</div>
              <img src={A + "degaulle-portrait.jpg"} alt="Charles de Gaulle" style={{ width: "56px", height: "48px", borderRadius: "var(--radius-sm)", objectFit: "cover", flexShrink: 0 }} />
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "14px", color: "var(--text-primary)", marginTop: "12px", lineHeight: "var(--leading-body)" }}>&#8220;La grandeur de la France ne se mesure pas seulement à ce qu'elle possède, mais à ce qu'elle apporte au monde.&#8221;</div>
            <div style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "8px" }}>- Charles de Gaulle</div>
          </div>
        </Reveal>
      </section>

      <Divider />
      <footer style={{ maxWidth: "1440px", margin: "0 auto", padding: "32px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <img src={A + "logo-lockup.png"} alt="La France en Profondeur" style={{ height: "30px" }} />
        <div style={{ display: "flex", gap: "24px", fontSize: "12px", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--text-muted)" }}>
          <span>À propos</span><span>Mentions légales</span><span>Confidentialité</span><span>Crédits</span><span>Contact</span>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <SocialDot label="IG" /><SocialDot label="X" /><SocialDot label="YT" /><SocialDot label="in" />
        </div>
      </footer>
    </div>
  );
}
window.Homepage = Homepage;
