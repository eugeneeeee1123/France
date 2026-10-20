// Home screen — recreation of UI Mockup v3.0 #screen-home.
const hxHome = window.HexagoneDesignSystem_4acaef;

function ParisClock() {
  const fmt = () => new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Paris', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).format(new Date());
  const [t, setT] = React.useState(fmt);
  React.useEffect(() => { const id = setInterval(() => setT(fmt()), 1000); return () => clearInterval(id); }, []);
  return <span style={{ fontVariantNumeric: 'tabular-nums' }}>{t}</span>;
}

function HeroCollage({ t, onCta }) {
  const { HexMark, SectionEyebrow, DisplayTitle, TricolorRule, CtaLink, QuoteBlock } = hxHome;
  return (
    <div style={{ position: 'relative', height: 620, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, clipPath: 'var(--clip-hero-left)' }}>
        <image-slot id="hx-hero-left" shape="rect" placeholder="Archival painting, Delacroix-style — keeps its own period grain (§7)" style={{ display: 'block', width: '100%', height: '100%' }}></image-slot>
      </div>
      <div style={{ position: 'absolute', inset: 0, clipPath: 'var(--clip-hero-right)' }}>
        <image-slot id="hx-hero-right" shape="rect" src="../../assets/images/eiffel-daylight-hero.png" placeholder="Paris skyline / Eiffel Tower — cool navy photo grade" style={{ display: 'block', width: '100%', height: '100%' }}></image-slot>
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--scrim-hero)', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', top: 30, left: '50%', transform: 'translateX(-50%)', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--paper-300)', textTransform: 'uppercase' }}>{t.clock} · <ParisClock /></div>
      <div style={{ position: 'absolute', top: 90, left: '50%', transform: 'translate(-50%,-50%)', zIndex: 2 }}><HexMark size={100} filled /></div>
      <div style={{ position: 'absolute', left: 56, bottom: 60, maxWidth: 600, zIndex: 2 }}>
        <SectionEyebrow variant="lead" style={{ marginBottom: 14 }}>{t.eyebrowHero}</SectionEyebrow>
        <DisplayTitle reveal style={{ marginBottom: 16 }}>La France n'est pas un pays, c'est une idée</DisplayTitle>
        <TricolorRule style={{ marginBottom: 18 }} />
        <p style={{ fontSize: 15.5, lineHeight: 1.6, color: 'var(--paper-50-85)', maxWidth: 460, margin: '0 0 22px' }}>{t.bodyHero}</p>
        <CtaLink onClick={(e) => { e.preventDefault(); onCta(); }}>{t.cta}</CtaLink>
      </div>
      <QuoteBlock style={{ position: 'absolute', right: 56, bottom: 96, zIndex: 2 }} quote="La grandeur de la France ne se mesure pas seulement à ce qu'elle possède, mais à ce qu'elle apporte au monde." attribution="Charles de Gaulle" />
      <div style={{ position: 'absolute', right: 56, bottom: 60, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--paper-300)', zIndex: 2 }}>48.8566° N, 2.3522° E</div>
    </div>
  );
}

function HomeScreen({ t, lastModule, onOpen }) {
  const { StatStrip, SectionEyebrow, ModuleCard, Timeline, QuoteBlock, CtaLink } = hxHome;
  const { MODULES, HOME_STATS, ERAS } = window.HX_DATA;
  const gridRef = React.useRef(null);
  return (
    <div>
      <HeroCollage t={t} onCta={() => { const el = gridRef.current; if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' }); }} />
      <StatStrip items={HOME_STATS} />
      <div ref={gridRef}><SectionEyebrow style={{ padding: '52px 24px 30px' }}>{t.eyebrowGrid}</SectionEyebrow></div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: 20, padding: '0 40px 72px' }}>
        {MODULES.map((m) => (
          <ModuleCard key={m.key} n={m.n} name={m.name} hue={m.hue} bullets={m.bullets} active={m.key === lastModule}
            imageSrc={m.thumb} imageSlotId={'hx-thumb-' + m.key} imagePlaceholder={m.name + ' — photo, cool navy grade'}
            onClick={(e) => { e.preventDefault(); onOpen(m.key); }} />
        ))}
      </div>
      <Timeline eras={ERAS} onSelect={(i) => { if (i < ERAS.length - 1) onOpen('epochs'); }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 1, background: 'var(--ink-700)', borderTop: '1px solid var(--ink-700)' }}>
        <div style={{ background: 'var(--ink-900)', padding: 30 }}>
          <div style={{ fontSize: 11, letterSpacing: 'var(--tracking-eyebrow)', color: 'var(--paper-300)', textTransform: 'uppercase', marginBottom: 14 }}>{t.map}</div>
          <div style={{ height: 220, marginBottom: 14 }}><image-slot id="hx-map-world" shape="rect" placeholder="Carte du monde en ligne fine, territoires français en points lumineux" style={{ display: 'block', width: '100%', height: '100%' }}></image-slot></div>
          <CtaLink uppercase={false} onClick={(e) => { e.preventDefault(); onOpen('territories'); }}>{t.mapCta}</CtaLink>
        </div>
        <QuoteBlock variant="panel" imageSrc="../../assets/images/degaulle-portrait.jpg" quote="Un territoire présent sur toutes les mers du globe, de la Guyane à la Polynésie." attribution="La France, puissance maritime" />
      </div>
    </div>
  );
}

Object.assign(window, { HomeScreen });
