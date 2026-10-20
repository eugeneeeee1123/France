// Module detail — recreation of UI Mockup v3.0 #screen-module / "UI Mockup v3.0 - Arsenal". Same template for all 10 modules.
const hxMod = window.HexagoneDesignSystem_4acaef;

function ModuleScreen({ moduleKey, t, lang, onNavigate }) {
  const { Breadcrumb, ModuleHeader, ScenarioLabel, WhyHowWhat, StatStrip, RelatedLinks } = hxMod;
  const { MODULES } = window.HX_DATA;
  const m = MODULES.find((x) => x.key === moduleKey) || MODULES[0];
  const links = (m.links || []).map((k) => MODULES.find((x) => x.key === k)).filter(Boolean).map((x) => ({ key: x.key, n: x.n, name: x.name }));
  const slot = (id, ph, h) => <div style={{ height: h }}><image-slot id={id} shape="rect" placeholder={ph} style={{ display: 'block', width: '100%', height: '100%' }}></image-slot></div>;
  return (
    <main style={{ padding: '32px 40px 0' }}>
      <Breadcrumb style={{ marginBottom: 20 }} items={[{ label: t.breadcrumb, key: 'home' }, m.n + ' ' + m.name]} onNavigate={() => onNavigate('home')} />
      <ModuleHeader n={m.n} title={m.name.charAt(0) + m.name.slice(1).toLowerCase()} subtitle={m.subtitle} intro={m.intro} hue={m.hue}>
        {m.scenario && <ScenarioLabel>{t.scenario}</ScenarioLabel>}
      </ModuleHeader>
      <div style={{ margin: '28px 0' }}>{slot('hx-module-hero-' + m.key, m.heroPlaceholder || (m.name + ' — image de référence, grade navy'), 220)}</div>
      <WhyHowWhat hue={m.hue} lang={m.textLang === 'zh' ? lang : 'fr'} why={m.why} how={m.how} what={m.what} style={{ marginBottom: m.textLang === 'zh' ? 10 : 32 }} />
      {m.textLang === 'zh' && <div style={{ fontSize: 11, color: 'var(--paper-300)', marginBottom: 32 }}>{t.sourceNote}</div>}
      {m.stats && <StatStrip variant="boxed" items={m.stats} style={{ marginBottom: 32 }} />}
      {m.body && (
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 32, marginBottom: 36 }}>
          <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--paper-50-85)', margin: 0 }}>{m.body}</p>
          {slot('hx-module-diagram-' + m.key, 'Diagramme ou photo de référence', 200)}
        </div>
      )}
      {links.length > 0 && <RelatedLinks label={t.related} links={links} onNavigate={onNavigate} />}
    </main>
  );
}

Object.assign(window, { ModuleScreen });
