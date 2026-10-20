/* @ds-bundle: {"format":4,"namespace":"HexagoneDesignSystem_4acaef","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"CtaLink","sourcePath":"components/actions/CtaLink.jsx"},{"name":"HexMark","sourcePath":"components/brand/HexMark.jsx"},{"name":"TricolorRule","sourcePath":"components/brand/TricolorRule.jsx"},{"name":"ModuleCard","sourcePath":"components/content/ModuleCard.jsx"},{"name":"ModuleHeader","sourcePath":"components/content/ModuleHeader.jsx"},{"name":"RelatedLinks","sourcePath":"components/content/RelatedLinks.jsx"},{"name":"ScenarioLabel","sourcePath":"components/content/ScenarioLabel.jsx"},{"name":"WhyHowWhat","sourcePath":"components/content/WhyHowWhat.jsx"},{"name":"StatStrip","sourcePath":"components/data/StatStrip.jsx"},{"name":"Timeline","sourcePath":"components/data/Timeline.jsx"},{"name":"DisplayTitle","sourcePath":"components/editorial/DisplayTitle.jsx"},{"name":"QuoteBlock","sourcePath":"components/editorial/QuoteBlock.jsx"},{"name":"SectionEyebrow","sourcePath":"components/editorial/SectionEyebrow.jsx"},{"name":"ICON_NAMES","sourcePath":"components/icons/Icon.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"LangSwitch","sourcePath":"components/navigation/LangSwitch.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"b28e161f20c5","components/actions/CtaLink.jsx":"98a90708c88e","components/brand/HexMark.jsx":"4e6cbdd68161","components/brand/TricolorRule.jsx":"d89084b47bb9","components/content/ModuleCard.jsx":"6fe0d6a2780c","components/content/ModuleHeader.jsx":"f1e485efc99a","components/content/RelatedLinks.jsx":"430780f71afb","components/content/ScenarioLabel.jsx":"451aee8b9131","components/content/WhyHowWhat.jsx":"b1d6b4b2b88a","components/data/StatStrip.jsx":"c4db6fd6cb59","components/data/Timeline.jsx":"8ab23db4a74d","components/editorial/DisplayTitle.jsx":"a042167efece","components/editorial/QuoteBlock.jsx":"ef062bd678b8","components/editorial/SectionEyebrow.jsx":"8a376c7c818b","components/icons/Icon.jsx":"433b09c1f6ff","components/navigation/Breadcrumb.jsx":"4bac91a5885c","components/navigation/LangSwitch.jsx":"a9b150d5a906","components/navigation/NavBar.jsx":"cd19f92bee76","components/navigation/SiteFooter.jsx":"47d43e1019f0","image-slot.js":"fff26d081c8d","ui_kits/website/HomeScreen.jsx":"10dc918a1b47","ui_kits/website/ModuleScreen.jsx":"5a63cb6645b6","ui_kits/website/data.js":"ee426e9b785a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HexagoneDesignSystem_4acaef = window.HexagoneDesignSystem_4acaef || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/HexMark.jsx
try { (() => {
// The hexagon "H" monogram — the site's one signature mark (design.md §6).
function HexMark({
  size = 32,
  tone = 'gold',
  letter = 'H',
  withWordmark = false,
  wordmark = 'HEXAGONE',
  filled = false,
  style
}) {
  const color = tone === 'paper' ? 'var(--paper-50)' : 'var(--gold-500)';
  const mark = /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 100 100",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "25,1 75,1 99,50 75,99 25,99 1,50",
    fill: filled ? 'var(--surface-chip-scrim)' : 'none',
    stroke: color,
    strokeWidth: "1.5",
    vectorEffect: "non-scaling-stroke"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-display)',
      fontSize: Math.round(size * 0.4),
      lineHeight: 1,
      color
    }
  }, letter));
  if (!withWordmark) return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      ...style
    },
    role: "img",
    "aria-label": wordmark
  }, mark);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size >= 30 ? 10 : 10,
      ...style
    }
  }, mark, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 800,
      letterSpacing: 'var(--tracking-brand)',
      color: 'var(--paper-50)'
    }
  }, wordmark));
}
Object.assign(__ds_scope, { HexMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/HexMark.jsx", error: String((e && e.message) || e) }); }

// components/brand/TricolorRule.jsx
try { (() => {
// Literal flag citation — the only place bleu/blanc/rouge appear (design.md §3).
function TricolorRule({
  width = 170,
  height = 4,
  gap = 5,
  palette = 'muted',
  style
}) {
  const c = palette === 'brief' ? ['var(--brand-navy)', 'var(--brand-white)', 'var(--brand-red)'] : ['var(--tricolor-bleu)', 'var(--tricolor-blanc)', 'var(--tricolor-rouge)'];
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    style: {
      display: 'flex',
      gap,
      width,
      ...style
    }
  }, c.map((bg, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      height,
      flex: 1,
      background: bg
    }
  })));
}
Object.assign(__ds_scope, { TricolorRule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/TricolorRule.jsx", error: String((e && e.message) || e) }); }

// components/content/ModuleHeader.jsx
try { (() => {
const hc = h => 'oklch(68% 0.1 ' + h + ')';

// Module page header: big hued numeral + uppercase serif title, subtitle, intro, slot for ScenarioLabel.
function ModuleHeader({
  n,
  title,
  subtitle,
  intro,
  hue = 236,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'flex-start',
      paddingBottom: 28,
      borderBottom: '1px solid var(--ink-700)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 56,
      fontWeight: 600,
      color: hc(hue),
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 34,
      fontWeight: 600,
      margin: '0 0 4px',
      textTransform: 'uppercase',
      color: 'var(--paper-50)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--paper-300)',
      marginBottom: 14
    }
  }, subtitle), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.65,
      color: 'var(--paper-50-85)',
      maxWidth: 640,
      margin: '0 0 16px',
      textWrap: 'pretty'
    }
  }, intro), children));
}
Object.assign(__ds_scope, { ModuleHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ModuleHeader.jsx", error: String((e && e.message) || e) }); }

// components/content/RelatedLinks.jsx
try { (() => {
// Footer cross-link row (design.md §8.8): text + arrow, not cards.
function RelatedLinks({
  label = 'Modules liés',
  links = [],
  onNavigate,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: '18px 0',
      borderTop: '1px solid var(--ink-700)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      letterSpacing: '.04em',
      color: 'var(--paper-300)',
      textTransform: 'uppercase',
      fontSize: 11
    }
  }, label), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.n,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(l.key);
    }
  }, l.n, " ", l.name, " \u2192")));
}
Object.assign(__ds_scope, { RelatedLinks });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/RelatedLinks.jsx", error: String((e && e.message) || e) }); }

// components/content/ScenarioLabel.jsx
try { (() => {
// Speculative-content disclosure (design.md §10) — the single most important integrity rule.
function ScenarioLabel({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "note",
    style: {
      display: 'inline-block',
      border: '1px solid var(--gold-700)',
      color: 'var(--paper-300)',
      padding: '7px 14px',
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '.04em',
      maxWidth: 520,
      lineHeight: 1.5,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { ScenarioLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ScenarioLabel.jsx", error: String((e && e.message) || e) }); }

// components/data/Timeline.jsx
try { (() => {
// Era timeline (design.md §8.4/§9.5): nodes are buttons; active node gold, year scales 1.08, gold line fills up to it.
function Timeline({
  eras = [],
  activeIndex,
  defaultActiveIndex,
  onSelect,
  bordered = true,
  style
}) {
  const last = eras.length - 1;
  const [inner, setInner] = React.useState(defaultActiveIndex != null ? defaultActiveIndex : last);
  const active = activeIndex != null ? activeIndex : inner;
  const pick = i => {
    setInner(i);
    onSelect && onSelect(i, eras[i]);
  };
  const progress = last > 0 ? active / last : 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: bordered ? '1px solid var(--ink-700)' : 'none',
      padding: '44px 40px',
      position: 'relative',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 95,
      right: 95,
      top: 58,
      height: 1,
      background: 'var(--ink-700)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--gold-700)',
      transformOrigin: 'left center',
      transform: 'scaleX(' + progress + ')',
      transition: 'transform var(--dur-base) var(--ease-settle)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      position: 'relative'
    }
  }, eras.map((e, i) => {
    const on = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: e.year,
      type: "button",
      onClick: () => pick(i),
      "aria-pressed": on,
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textAlign: 'center',
        width: 110,
        background: 'none',
        border: 0,
        padding: 0,
        cursor: 'pointer',
        font: 'inherit',
        color: 'inherit'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: on ? 'var(--gold-500)' : 'var(--paper-300)',
        margin: '0 auto 10px',
        transition: 'background-color var(--dur-fast) var(--ease-standard)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontWeight: 600,
        fontSize: 15,
        color: on ? 'var(--gold-500)' : 'var(--paper-50)',
        transform: on ? 'scale(1.08)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-settle), color var(--dur-fast) var(--ease-standard)'
      }
    }, e.year), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--paper-300)',
        marginTop: 6
      }
    }, e.caption));
  })));
}
Object.assign(__ds_scope, { Timeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Timeline.jsx", error: String((e && e.message) || e) }); }

// components/editorial/DisplayTitle.jsx
try { (() => {
// Monumental serif title. reveal=true runs the GRANDEUR per-letter fade+rise (design.md §9.2) once on mount.
function DisplayTitle({
  children,
  as = 'h1',
  size = 'hero',
  accentWord,
  reveal = false,
  style
}) {
  const [shown, setShown] = React.useState(!reveal);
  React.useEffect(() => {
    if (!reveal) return;
    const id = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(id);
  }, [reveal]);
  const fs = size === 'grandeur' ? 'var(--fs-grandeur)' : 'var(--fs-hero)';
  const ls = size === 'grandeur' ? 'var(--tracking-grandeur)' : 'var(--tracking-hero)';
  const text = typeof children === 'string' ? children : null;
  let idx = 0;
  const renderWord = (w, wi) => {
    const gold = accentWord && w.replace(/[^\p{L}]/gu, '').toLowerCase() === accentWord.toLowerCase();
    return /*#__PURE__*/React.createElement("span", {
      key: wi,
      style: {
        display: 'inline-block',
        whiteSpace: 'nowrap',
        color: gold ? 'var(--gold-500)' : undefined
      }
    }, reveal ? Array.from(w).map(ch => {
      const i = idx++;
      return /*#__PURE__*/React.createElement("span", {
        key: i,
        style: {
          display: 'inline-block',
          opacity: shown ? 1 : 0,
          transform: shown ? 'none' : 'translateY(var(--rise-letter))',
          transition: 'opacity var(--dur-slow) var(--ease-settle), transform var(--dur-slow) var(--ease-settle)',
          transitionDelay: 'calc(var(--stagger-letter) * ' + i + ')'
        }
      }, ch);
    }) : w);
  };
  const content = text ? text.split(/(\s+)/).map((w, wi) => /^\s+$/.test(w) ? w : renderWord(w, wi)) : children;
  return React.createElement(as, {
    'aria-label': text || undefined,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: fs,
      lineHeight: 1.1,
      letterSpacing: ls,
      textTransform: 'uppercase',
      color: 'var(--paper-50)',
      margin: 0,
      textWrap: 'balance',
      ...style
    }
  }, content);
}
Object.assign(__ds_scope, { DisplayTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/DisplayTitle.jsx", error: String((e && e.message) || e) }); }

// components/editorial/QuoteBlock.jsx
try { (() => {
// Serif italic pull-quote. card = hero overlay (250px, ink-800 85%); panel = section panel over a dimmed portrait.
function QuoteBlock({
  quote,
  attribution,
  variant = 'card',
  imageSrc,
  imageSlotId,
  style
}) {
  if (variant === 'panel') {
    const bg = imageSrc ? /*#__PURE__*/React.createElement("img", {
      src: imageSrc,
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    }) : imageSlotId ? React.createElement('image-slot', {
      id: imageSlotId,
      shape: 'rect',
      placeholder: 'Portrait, dimmed background',
      style: {
        display: 'block',
        width: '100%',
        height: '100%'
      }
    }) : null;
    return /*#__PURE__*/React.createElement("figure", {
      style: {
        margin: 0,
        background: 'var(--ink-900)',
        padding: 30,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'var(--font-sans)',
        ...style
      }
    }, bg && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        opacity: 0.22
      }
    }, bg), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement("blockquote", {
      style: {
        margin: '0 0 12px',
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontSize: 19,
        lineHeight: 1.5,
        color: 'var(--paper-50)',
        textWrap: 'pretty'
      }
    }, quote), attribution && /*#__PURE__*/React.createElement("figcaption", {
      style: {
        fontSize: 12,
        color: 'var(--paper-300)'
      }
    }, attribution)));
  }
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      width: 250,
      background: 'var(--surface-overlay)',
      border: '1px solid var(--ink-700)',
      padding: 18,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: '0 0 10px',
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--paper-50)'
    }
  }, quote), attribution && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      borderTop: '1px solid var(--gold-700)',
      paddingTop: 7,
      width: 'fit-content',
      fontSize: 11.5,
      color: 'var(--paper-300)'
    }
  }, attribution));
}
Object.assign(__ds_scope, { QuoteBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/QuoteBlock.jsx", error: String((e && e.message) || e) }); }

// components/editorial/SectionEyebrow.jsx
try { (() => {
// Eyebrow label. centered = rule · TEXT · rule (section opener). lead = short dash + TEXT (hero).
function SectionEyebrow({
  children,
  variant = 'centered',
  style
}) {
  const text = /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: 'var(--tracking-eyebrow-wide)',
      color: 'var(--paper-300)',
      textTransform: 'uppercase'
    }
  }, children);
  if (variant === 'lead') return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 1,
      background: 'var(--paper-300)'
    }
  }), text);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 100,
      height: 1,
      background: 'var(--ink-700)'
    }
  }), text, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 100,
      height: 1,
      background: 'var(--ink-700)'
    }
  }));
}
Object.assign(__ds_scope, { SectionEyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/SectionEyebrow.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
// Path data copied verbatim from UI Mockup v3.0 inline SVGs (thin-line, 24px grid).
const PATHS = {
  search: [['circle', {
    cx: 11,
    cy: 11,
    r: 7
  }], ['path', {
    d: 'M21 21l-4.3-4.3'
  }]],
  arrowRight: [['path', {
    d: 'M5 12h14M13 6l6 6-6 6'
  }]],
  compass: [['circle', {
    cx: 12,
    cy: 12,
    r: 9
  }], ['path', {
    d: 'M15 9l-2 6-6 2 2-6 6-2z'
  }]],
  sun: [['circle', {
    cx: 12,
    cy: 12,
    r: 3
  }], ['path', {
    d: 'M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1'
  }]],
  document: [['path', {
    d: 'M7 3h7l4 4v14H7z'
  }], ['path', {
    d: 'M14 3v4h4'
  }], ['path', {
    d: 'M9 13h6M9 17h6'
  }]],
  target: [['circle', {
    cx: 12,
    cy: 12,
    r: 8
  }], ['circle', {
    cx: 12,
    cy: 12,
    r: 3.5
  }]],
  person: [['path', {
    d: 'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4.4 3.6-7 8-7s8 2.6 8 7'
  }]],
  speech: [['path', {
    d: 'M4 5h16v11H9l-5 4V5z'
  }]],
  anchor: [['circle', {
    cx: 12,
    cy: 5,
    r: 2
  }], ['path', {
    d: 'M12 7v13M6 13a6 6 0 0012 0M4 13h3M17 13h3'
  }]],
  star: [['path', {
    d: 'M12 3l2.5 5.6 6.1.6-4.6 4.1 1.3 6-5.3-3.1-5.3 3.1 1.3-6-4.6-4.1 6.1-.6z'
  }]],
  camera: [['rect', {
    x: 4,
    y: 4,
    width: 16,
    height: 16,
    rx: 3
  }], ['circle', {
    cx: 12,
    cy: 12,
    r: 3.5
  }]],
  play: [['path', {
    d: 'M8 5l11 7-11 7V5z'
  }]],
  hexagon: [['polygon', {
    points: '6,1.5 18,1.5 23,12 18,22.5 6,22.5 1,12'
  }]]
};
const ICON_NAMES = Object.keys(PATHS);
function Icon({
  name,
  size = 16,
  strokeWidth = 1.5,
  color = 'currentColor',
  title,
  style
}) {
  const parts = PATHS[name];
  if (!parts) return null;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    role: title ? 'img' : undefined,
    "aria-hidden": title ? undefined : true,
    "aria-label": title,
    style: {
      display: 'block',
      flex: 'none',
      ...style
    }
  }, parts.map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })));
}
Object.assign(__ds_scope, { ICON_NAMES, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Outline / ghost button. Square corners; press = instant scale .98; hover = faint gold wash.
function Button({
  children,
  variant = 'outline',
  icon,
  iconPosition = 'end',
  disabled = false,
  onClick,
  href,
  type = 'button',
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const canHover = () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(hover: hover)').matches;
  const outline = variant === 'outline';
  const color = disabled ? 'var(--text-disabled)' : outline ? 'var(--gold-500)' : 'var(--paper-50)';
  const s = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    minHeight: 44,
    padding: outline ? '0 18px' : '0 4px',
    border: outline ? '1px solid ' + (disabled ? 'var(--ink-700)' : 'var(--gold-500)') : '1px solid transparent',
    borderRadius: 0,
    background: outline && hover && !disabled ? 'rgba(239,180,75,0.08)' : 'transparent',
    color,
    fontFamily: 'var(--font-sans)',
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: 'var(--tracking-label)',
    textTransform: 'uppercase',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    transform: press && !disabled ? 'scale(0.98)' : 'none',
    transition: 'transform var(--dur-instant) var(--ease-standard), background-color var(--dur-fast) var(--ease-standard)',
    ...style
  };
  const ic = icon ? variant === 'ghost' && icon === 'play' ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      border: '1px solid ' + (disabled ? 'var(--ink-700)' : 'var(--gold-500)'),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: disabled ? 'var(--ink-700)' : 'var(--gold-500)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "play",
    size: 11
  })) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    strokeWidth: 1.8
  }) : null;
  const handlers = {
    onMouseEnter: () => canHover() && setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onPointerDown: () => setPress(true),
    onPointerUp: () => setPress(false)
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, iconPosition === 'start' && ic, children, iconPosition === 'end' && ic);
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick,
    style: s
  }, handlers), content);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    "aria-disabled": disabled,
    onClick: onClick,
    style: s
  }, handlers), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/CtaLink.jsx
try { (() => {
// Gold uppercase text CTA with arrow — the mockup's primary call to action.
function CtaLink({
  children,
  href = '#',
  onClick,
  size = 13,
  uppercase = true,
  arrow = true,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const canHover = () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(hover: hover)').matches;
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => canHover() && setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--gold-500)',
      fontFamily: 'var(--font-sans)',
      fontSize: size,
      fontWeight: uppercase ? 600 : 400,
      letterSpacing: uppercase ? 'var(--tracking-label)' : 0,
      textTransform: uppercase ? 'uppercase' : 'none',
      textDecoration: hover ? 'underline' : 'none',
      textUnderlineOffset: 3,
      cursor: 'pointer',
      ...style
    }
  }, children, arrow && (uppercase ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrowRight",
    size: 16,
    strokeWidth: 1.8
  }) : /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192")));
}
Object.assign(__ds_scope, { CtaLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/CtaLink.jsx", error: String((e && e.message) || e) }); }

// components/content/ModuleCard.jsx
try { (() => {
const hc = h => 'oklch(68% 0.1 ' + h + ')';

// Numbered module tile for the homepage matrix (design.md §8.2, mockup v3 grid).
function ModuleCard({
  n,
  name,
  hue = 236,
  bullets = [],
  imageSrc,
  imageSlotId,
  imagePlaceholder,
  active = false,
  href = '#',
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const canHover = () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const accent = hc(hue);
  const lit = active || hover;
  const img = imageSrc ? /*#__PURE__*/React.createElement("img", {
    src: imageSrc,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : React.createElement('image-slot', {
    id: imageSlotId || 'hx-thumb-' + n,
    shape: 'rect',
    placeholder: imagePlaceholder || name + ' — photo, cool navy grade',
    style: {
      display: 'block',
      width: '100%',
      height: '100%'
    }
  });
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => canHover() && setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid ' + (hover ? 'var(--gold-500)' : active ? accent : 'var(--ink-700)'),
      textDecoration: 'none',
      overflow: 'hidden',
      background: 'var(--ink-800)',
      boxShadow: active ? 'var(--glow-module) ' + accent : 'none',
      fontFamily: 'var(--font-sans)',
      transform: hover ? 'translateY(var(--lift-card))' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 120,
      position: 'relative',
      background: 'var(--ink-900)'
    }
  }, img, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-thumb)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 10,
      bottom: 8,
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      color: hover ? 'var(--gold-500)' : accent,
      pointerEvents: 'none'
    }
  }, n)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: 'var(--tracking-nav)',
      color: 'var(--paper-50)',
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--paper-300)',
      lineHeight: 1.7,
      marginBottom: 8
    }
  }, bullets.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, b))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      justifyContent: 'flex-end',
      color: lit ? 'var(--gold-500)' : 'var(--paper-300)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrowRight",
    size: 14,
    strokeWidth: 1.8
  }))));
}
Object.assign(__ds_scope, { ModuleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ModuleCard.jsx", error: String((e && e.message) || e) }); }

// components/content/WhyHowWhat.jsx
try { (() => {
const hc = h => 'oklch(68% 0.1 ' + h + ')';
const LABELS = {
  fr: ['Pourquoi', 'Comment', 'Quoi'],
  en: ['Why', 'How', 'What'],
  zh: ['为什么', '如何', '是什么']
};

// Fixed three-part template at the top of every module (design.md §8.7).
function WhyHowWhat({
  why,
  how,
  what,
  hue = 236,
  lang = 'fr',
  labels,
  style
}) {
  const L = labels || LABELS[lang] || LABELS.fr;
  const cols = [['compass', L[0], why], ['sun', L[1], how], ['document', L[2], what]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      gap: 28,
      borderTop: '1px solid var(--ink-700)',
      borderBottom: '1px solid var(--ink-700)',
      padding: '32px 0',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, cols.map(([icon, label, text]) => /*#__PURE__*/React.createElement("div", {
    key: label
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24,
    color: hc(hue),
    style: {
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: 'var(--tracking-label)',
      color: hc(hue),
      marginBottom: 10
    }
  }, label), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: lang === 'zh' ? 1.8 : 1.6,
      color: 'var(--paper-50-85)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, text))));
}
Object.assign(__ds_scope, { WhyHowWhat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/WhyHowWhat.jsx", error: String((e && e.message) || e) }); }

// components/data/StatStrip.jsx
try { (() => {
// Hairline-separated stat row (design.md §8.3). open = homepage strip with icons; boxed = module page.
function StatStrip({
  items = [],
  variant = 'open',
  style
}) {
  const boxed = variant === 'boxed';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      fontFamily: 'var(--font-sans)',
      ...(boxed ? {
        border: '1px solid var(--ink-700)'
      } : {
        borderTop: '1px solid var(--ink-700)',
        borderBottom: '1px solid var(--ink-700)'
      }),
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      minWidth: 0,
      padding: boxed ? 18 : '20px 8px',
      borderRight: i < items.length - 1 ? '1px solid var(--ink-700)' : 'none',
      textAlign: 'center'
    }
  }, !boxed && it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 15,
    color: "var(--paper-300)",
    style: {
      margin: '0 auto 9px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: boxed ? 19 : 18,
      color: 'var(--gold-500)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, it.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: boxed ? 10.5 : 10,
      color: 'var(--paper-300)',
      marginTop: boxed ? 5 : 4,
      ...(boxed ? {} : {
        textTransform: 'uppercase',
        letterSpacing: '.05em'
      })
    }
  }, it.label))));
}
Object.assign(__ds_scope, { StatStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatStrip.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function Breadcrumb({
  items = [],
  onNavigate,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--paper-300)',
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      ...style
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    const label = typeof it === 'string' ? it : it.label;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, last ? /*#__PURE__*/React.createElement("span", {
      "aria-current": "page"
    }, label) : /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(it.key || label, i);
      },
      style: {
        color: 'var(--paper-300)'
      }
    }, label), !last && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, "/"));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/LangSwitch.jsx
try { (() => {
const LANGS = [{
  code: 'fr',
  label: 'FR'
}, {
  code: 'en',
  label: 'EN'
}, {
  code: 'zh',
  label: '中'
}];

// FR / EN / 中 switch. inline = footer row; menu = nav "FR ▾" dropdown.
function LangSwitch({
  value = 'fr',
  onChange,
  variant = 'inline',
  style
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const close = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const esc = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', close);
    document.addEventListener('keydown', esc);
    return () => {
      document.removeEventListener('pointerdown', close);
      document.removeEventListener('keydown', esc);
    };
  }, [open]);
  const btn = (l, extra) => /*#__PURE__*/React.createElement("button", {
    key: l.code,
    type: "button",
    onClick: () => {
      onChange && onChange(l.code);
      setOpen(false);
    },
    "aria-pressed": l.code === value,
    style: {
      background: 'none',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      font: 'inherit',
      fontSize: 13,
      color: l.code === value ? 'var(--paper-50)' : 'var(--paper-300)',
      ...extra
    }
  }, l.label);
  if (variant === 'inline') return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, LANGS.map(l => btn(l)));
  const cur = LANGS.find(l => l.code === value) || LANGS[0];
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-haspopup": "listbox",
    "aria-expanded": open,
    onClick: () => setOpen(!open),
    style: {
      background: 'none',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      font: 'inherit',
      fontSize: 12,
      color: 'var(--paper-300)'
    }
  }, cur.label, " \u25BE"), open && /*#__PURE__*/React.createElement("div", {
    role: "listbox",
    style: {
      position: 'absolute',
      right: 0,
      top: 'calc(100% + 10px)',
      background: 'var(--ink-800)',
      border: '1px solid var(--ink-700)',
      padding: 8,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 72,
      zIndex: 'var(--z-dropdown)'
    }
  }, LANGS.map(l => btn(l, {
    padding: '8px 10px',
    textAlign: 'left',
    fontSize: 12
  }))));
}
Object.assign(__ds_scope, { LangSwitch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/LangSwitch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavItem({
  active,
  onClick,
  children
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onClick && onClick();
    },
    "aria-current": active ? 'page' : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 'var(--tracking-nav)',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      color: active || hover ? 'var(--paper-50)' : 'var(--paper-300)',
      paddingBottom: 13,
      marginBottom: -13,
      borderBottom: '2px solid ' + (active ? 'var(--gold-500)' : 'transparent'),
      transition: 'color var(--dur-fast) var(--ease-standard)'
    }
  }, children);
}

// Top bar: mark + HOME + first N modules + "+N ▾" overflow, search, language (mockup v3, design.md §8.1 option B).
function NavBar({
  modules = [],
  activeKey = 'home',
  maxVisible = 7,
  homeLabel = 'HOME',
  lang = 'fr',
  onLangChange,
  onNavigate,
  onSearch,
  brand = 'HEXAGONE',
  logoSrc,
  logoAlt = '',
  logoHeight = 40,
  style
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const close = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const esc = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', close);
    document.addEventListener('keydown', esc);
    return () => {
      document.removeEventListener('pointerdown', close);
      document.removeEventListener('keydown', esc);
    };
  }, [open]);
  // Responsive fit: measure every item in a hidden row, show as many as fit (≤ maxVisible), rest go to "+N ▾".
  const rowRef = React.useRef(null);
  const measureRef = React.useRef(null);
  const [fit, setFit] = React.useState(maxVisible);
  React.useLayoutEffect(() => {
    const row = rowRef.current,
      meas = measureRef.current;
    if (!row || !meas || typeof ResizeObserver === 'undefined') return;
    const calc = () => {
      const ws = Array.from(meas.children).map(c => c.getBoundingClientRect().width);
      const GAP = 24,
        CHIP = 64;
      const avail = row.clientWidth;
      let used = ws[0] || 0,
        n = 0;
      const limit = Math.min(maxVisible, modules.length);
      for (let i = 0; i < limit; i++) {
        const restAfter = modules.length - (i + 1);
        const need = used + GAP + ws[i + 1] + (restAfter > 0 ? GAP + CHIP : 0);
        if (need > avail) break;
        used += GAP + ws[i + 1];
        n = i + 1;
      }
      setFit(n);
    };
    calc();
    const ro = new ResizeObserver(calc);
    ro.observe(row);
    return () => ro.disconnect();
  }, [modules, maxVisible, homeLabel]);
  const visible = modules.slice(0, fit);
  const overflow = modules.slice(fit);
  const overflowActive = overflow.some(m => m.key === activeKey);
  const go = k => {
    setOpen(false);
    onNavigate && onNavigate(k);
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 26,
      padding: '16px 40px',
      borderBottom: '1px solid var(--ink-700)',
      position: 'sticky',
      top: 0,
      background: 'var(--ink-900)',
      zIndex: 'var(--z-nav)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('home');
    },
    style: {
      flex: 'none',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, logoSrc ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: logoAlt,
    style: {
      height: logoHeight,
      width: 'auto',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 800,
      letterSpacing: 'var(--tracking-brand)',
      color: 'var(--paper-50)'
    }
  }, brand)) : /*#__PURE__*/React.createElement(__ds_scope.HexMark, {
    size: 32,
    withWordmark: true,
    wordmark: brand
  })), /*#__PURE__*/React.createElement("div", {
    ref: rowRef,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      flex: 1,
      minWidth: 0,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: measureRef,
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      visibility: 'hidden',
      pointerEvents: 'none',
      display: 'flex',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 'var(--tracking-nav)'
    }
  }, homeLabel), modules.map(m => /*#__PURE__*/React.createElement("span", {
    key: m.key,
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 'var(--tracking-nav)'
    }
  }, m.n, " ", m.name))), /*#__PURE__*/React.createElement(NavItem, {
    active: activeKey === 'home',
    onClick: () => go('home')
  }, homeLabel), visible.map(m => /*#__PURE__*/React.createElement(NavItem, {
    key: m.key,
    active: activeKey === m.key,
    onClick: () => go(m.key)
  }, m.n, " ", m.name)), overflow.length > 0 && /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-haspopup": "menu",
    "aria-expanded": open,
    onClick: () => setOpen(!open),
    style: {
      font: 'inherit',
      fontSize: 11,
      fontWeight: 700,
      cursor: 'pointer',
      color: overflowActive || open ? 'var(--paper-50)' : 'var(--paper-300)',
      background: 'none',
      border: '1px solid ' + (overflowActive ? 'var(--gold-500)' : 'var(--ink-700)'),
      borderRadius: 'var(--radius-chip)',
      padding: '5px 12px'
    }
  }, "+", overflow.length, " \u25BE"), open && /*#__PURE__*/React.createElement("div", {
    role: "menu",
    style: {
      position: 'absolute',
      top: 'calc(100% + 10px)',
      left: 0,
      background: 'var(--ink-800)',
      border: '1px solid var(--ink-700)',
      padding: 8,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 170,
      zIndex: 'var(--z-dropdown)'
    }
  }, overflow.map(m => /*#__PURE__*/React.createElement("a", {
    key: m.key,
    role: "menuitem",
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(m.key);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 10px',
      fontSize: 12,
      color: 'var(--paper-50)',
      textDecoration: 'none',
      background: activeKey === m.key ? 'var(--ink-700)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      color: 'oklch(68% 0.1 ' + m.hue + ')',
      fontSize: 13
    }
  }, m.n), m.name))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      fontSize: 12,
      color: 'var(--paper-300)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Rechercher",
    onClick: onSearch,
    style: {
      background: 'none',
      border: 0,
      padding: 0,
      color: 'inherit',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 14,
    strokeWidth: 1.6
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      borderLeft: '1px solid var(--ink-700)',
      paddingLeft: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.LangSwitch, {
    variant: "menu",
    value: lang,
    onChange: onLangChange
  }))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
const H = {
  fontSize: 11,
  letterSpacing: 'var(--tracking-label)',
  color: 'var(--paper-300)',
  textTransform: 'uppercase',
  marginBottom: 12
};
function SiteFooter({
  tagline = 'Comprendre la France dans toute sa complexité, sa richesse et son influence.',
  navLabel = 'Navigation',
  navLinks = ['À propos', 'Sources', 'Contact', 'Mentions légales'],
  socialLabel = 'Suivez-nous',
  langLabel = 'Langue',
  lang = 'fr',
  onLangChange,
  legal = '© Hexagone. Projet éditorial indépendant.',
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--ink-700)',
      background: 'var(--ink-950)',
      padding: '48px 40px 24px',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 32,
      paddingBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.HexMark, {
    size: 24,
    tone: "paper",
    withWordmark: true
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: 'var(--paper-300)',
      lineHeight: 1.6,
      maxWidth: 220,
      margin: 0
    }
  }, tagline)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: H
  }, navLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9,
      fontSize: 13
    }
  }, navLinks.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#"
  }, l)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: H
  }, socialLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, ['speech', 'camera', 'play'].map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    "aria-label": n,
    style: {
      width: 28,
      height: 28,
      border: '1px solid var(--ink-700)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--paper-300)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: n,
    size: 12
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: H
  }, langLabel), /*#__PURE__*/React.createElement(__ds_scope.LangSwitch, {
    value: lang,
    onChange: onLangChange
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--ink-700)',
      padding: '18px 0 0',
      textAlign: 'center',
      fontSize: 11.5,
      color: 'var(--paper-300)'
    }
  }, legal));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
// Home screen — recreation of UI Mockup v3.0 #screen-home.
const hxHome = window.HexagoneDesignSystem_4acaef;
function ParisClock() {
  const fmt = () => new Intl.DateTimeFormat('fr-FR', {
    timeZone: 'Europe/Paris',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format(new Date());
  const [t, setT] = React.useState(fmt);
  React.useEffect(() => {
    const id = setInterval(() => setT(fmt()), 1000);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: 'tabular-nums'
    }
  }, t);
}
function HeroCollage({
  t,
  onCta
}) {
  const {
    HexMark,
    SectionEyebrow,
    DisplayTitle,
    TricolorRule,
    CtaLink,
    QuoteBlock
  } = hxHome;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 620,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      clipPath: 'var(--clip-hero-left)'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "hx-hero-left",
    shape: "rect",
    placeholder: "Archival painting, Delacroix-style \u2014 keeps its own period grain (\xA77)",
    style: {
      display: 'block',
      width: '100%',
      height: '100%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      clipPath: 'var(--clip-hero-right)'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "hx-hero-right",
    shape: "rect",
    src: "../../assets/images/eiffel-daylight-hero.png",
    placeholder: "Paris skyline / Eiffel Tower \u2014 cool navy photo grade",
    style: {
      display: 'block',
      width: '100%',
      height: '100%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-hero)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 30,
      left: '50%',
      transform: 'translateX(-50%)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--paper-300)',
      textTransform: 'uppercase'
    }
  }, t.clock, " \xB7 ", /*#__PURE__*/React.createElement(ParisClock, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 90,
      left: '50%',
      transform: 'translate(-50%,-50%)',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(HexMark, {
    size: 100,
    filled: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 56,
      bottom: 60,
      maxWidth: 600,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(SectionEyebrow, {
    variant: "lead",
    style: {
      marginBottom: 14
    }
  }, t.eyebrowHero), /*#__PURE__*/React.createElement(DisplayTitle, {
    reveal: true,
    style: {
      marginBottom: 16
    }
  }, "La France n'est pas un pays, c'est une id\xE9e"), /*#__PURE__*/React.createElement(TricolorRule, {
    style: {
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      lineHeight: 1.6,
      color: 'var(--paper-50-85)',
      maxWidth: 460,
      margin: '0 0 22px'
    }
  }, t.bodyHero), /*#__PURE__*/React.createElement(CtaLink, {
    onClick: e => {
      e.preventDefault();
      onCta();
    }
  }, t.cta)), /*#__PURE__*/React.createElement(QuoteBlock, {
    style: {
      position: 'absolute',
      right: 56,
      bottom: 96,
      zIndex: 2
    },
    quote: "La grandeur de la France ne se mesure pas seulement \xE0 ce qu'elle poss\xE8de, mais \xE0 ce qu'elle apporte au monde.",
    attribution: "Charles de Gaulle"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 56,
      bottom: 60,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--paper-300)',
      zIndex: 2
    }
  }, "48.8566\xB0 N, 2.3522\xB0 E"));
}
function HomeScreen({
  t,
  lastModule,
  onOpen
}) {
  const {
    StatStrip,
    SectionEyebrow,
    ModuleCard,
    Timeline,
    QuoteBlock,
    CtaLink
  } = hxHome;
  const {
    MODULES,
    HOME_STATS,
    ERAS
  } = window.HX_DATA;
  const gridRef = React.useRef(null);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HeroCollage, {
    t: t,
    onCta: () => {
      const el = gridRef.current;
      if (el) window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 70,
        behavior: 'smooth'
      });
    }
  }), /*#__PURE__*/React.createElement(StatStrip, {
    items: HOME_STATS
  }), /*#__PURE__*/React.createElement("div", {
    ref: gridRef
  }, /*#__PURE__*/React.createElement(SectionEyebrow, {
    style: {
      padding: '52px 24px 30px'
    }
  }, t.eyebrowGrid)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
      gap: 20,
      padding: '0 40px 72px'
    }
  }, MODULES.map(m => /*#__PURE__*/React.createElement(ModuleCard, {
    key: m.key,
    n: m.n,
    name: m.name,
    hue: m.hue,
    bullets: m.bullets,
    active: m.key === lastModule,
    imageSrc: m.thumb,
    imageSlotId: 'hx-thumb-' + m.key,
    imagePlaceholder: m.name + ' — photo, cool navy grade',
    onClick: e => {
      e.preventDefault();
      onOpen(m.key);
    }
  }))), /*#__PURE__*/React.createElement(Timeline, {
    eras: ERAS,
    onSelect: i => {
      if (i < ERAS.length - 1) onOpen('epochs');
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 1,
      background: 'var(--ink-700)',
      borderTop: '1px solid var(--ink-700)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-900)',
      padding: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--paper-300)',
      textTransform: 'uppercase',
      marginBottom: 14
    }
  }, t.map), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 220,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "hx-map-world",
    shape: "rect",
    placeholder: "Carte du monde en ligne fine, territoires fran\xE7ais en points lumineux",
    style: {
      display: 'block',
      width: '100%',
      height: '100%'
    }
  })), /*#__PURE__*/React.createElement(CtaLink, {
    uppercase: false,
    onClick: e => {
      e.preventDefault();
      onOpen('territories');
    }
  }, t.mapCta)), /*#__PURE__*/React.createElement(QuoteBlock, {
    variant: "panel",
    imageSrc: "../../assets/images/degaulle-portrait.jpg",
    quote: "Un territoire pr\xE9sent sur toutes les mers du globe, de la Guyane \xE0 la Polyn\xE9sie.",
    attribution: "La France, puissance maritime"
  })));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ModuleScreen.jsx
try { (() => {
// Module detail — recreation of UI Mockup v3.0 #screen-module / "UI Mockup v3.0 - Arsenal". Same template for all 10 modules.
const hxMod = window.HexagoneDesignSystem_4acaef;
function ModuleScreen({
  moduleKey,
  t,
  lang,
  onNavigate
}) {
  const {
    Breadcrumb,
    ModuleHeader,
    ScenarioLabel,
    WhyHowWhat,
    StatStrip,
    RelatedLinks
  } = hxMod;
  const {
    MODULES
  } = window.HX_DATA;
  const m = MODULES.find(x => x.key === moduleKey) || MODULES[0];
  const links = (m.links || []).map(k => MODULES.find(x => x.key === k)).filter(Boolean).map(x => ({
    key: x.key,
    n: x.n,
    name: x.name
  }));
  const slot = (id, ph, h) => /*#__PURE__*/React.createElement("div", {
    style: {
      height: h
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: id,
    shape: "rect",
    placeholder: ph,
    style: {
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }));
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: '32px 40px 0'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    style: {
      marginBottom: 20
    },
    items: [{
      label: t.breadcrumb,
      key: 'home'
    }, m.n + ' ' + m.name],
    onNavigate: () => onNavigate('home')
  }), /*#__PURE__*/React.createElement(ModuleHeader, {
    n: m.n,
    title: m.name.charAt(0) + m.name.slice(1).toLowerCase(),
    subtitle: m.subtitle,
    intro: m.intro,
    hue: m.hue
  }, m.scenario && /*#__PURE__*/React.createElement(ScenarioLabel, null, t.scenario)), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '28px 0'
    }
  }, slot('hx-module-hero-' + m.key, m.heroPlaceholder || m.name + ' — image de référence, grade navy', 220)), /*#__PURE__*/React.createElement(WhyHowWhat, {
    hue: m.hue,
    lang: m.textLang === 'zh' ? lang : 'fr',
    why: m.why,
    how: m.how,
    what: m.what,
    style: {
      marginBottom: m.textLang === 'zh' ? 10 : 32
    }
  }), m.textLang === 'zh' && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--paper-300)',
      marginBottom: 32
    }
  }, t.sourceNote), m.stats && /*#__PURE__*/React.createElement(StatStrip, {
    variant: "boxed",
    items: m.stats,
    style: {
      marginBottom: 32
    }
  }), m.body && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 32,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.7,
      color: 'var(--paper-50-85)',
      margin: 0
    }
  }, m.body), slot('hx-module-diagram-' + m.key, 'Diagramme ou photo de référence', 200)), links.length > 0 && /*#__PURE__*/React.createElement(RelatedLinks, {
    label: t.related,
    links: links,
    onNavigate: onNavigate
  }));
}
Object.assign(window, {
  ModuleScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ModuleScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Hexagone website UI kit — content data. Module names/bullets/copy verbatim from UI Mockup v3.0;
// non-Arsenal why/how/what verbatim from hexagone-content-plan-v2.md "Why → How → What 总览表" (中文 source).
(function () {
  const mk = (n, key, name, hue, bullets, extra) => Object.assign({
    n,
    key,
    name,
    hue,
    bullets
  }, extra || {});
  const T = '../../assets/images/';
  const MODULES = [mk('01', 'arsenal', 'ARSENAL', 236, ['Arme nucléaire', 'Forces armées', 'Industrie de défense', 'OPEX & Légion étrangère'], {
    thumb: T + 'thumb-arsenal.jpg',
    subtitle: 'Puissance militaire',
    scenario: true,
    intro: "Depuis la force de frappe gaullienne jusqu'aux appareils de nouvelle génération, l'Arsenal français conjugue dissuasion nucléaire, industrie souveraine et projection de force.",
    why: "Parce que la dissuasion nucléaire et une armée expéditionnaire restent, pour la France, la garantie ultime de sa liberté d'action.",
    how: 'Une dissuasion océanique et aéroportée, une industrie de défense souveraine, des forces projetables sur tous les théâtres.',
    what: 'Un scénario prospectif 2035-2040 : sous-marins de nouvelle génération, Rafale F5, un second porte-avions.',
    textLang: 'fr',
    links: ['statecraft', 'economy', 'francophonie'],
    heroPlaceholder: 'Concept art requis — Rafale F5, vue trois quarts (matériel spéculatif, §7)',
    stats: [{
      value: '290',
      label: 'têtes nucléaires (scénario)'
    }, {
      value: '4',
      label: 'SNLE nouvelle génération'
    }, {
      value: '225',
      label: 'Rafale F5 (scénario 2035)'
    }, {
      value: '2',
      label: 'groupes aéronavals'
    }],
    body: "Le scénario prospectif présenté ici prolonge les programmes déjà engagés (Rafale F5, sous-marins Suffren, futur porte-avions) jusqu'à un horizon 2035-2040, pour explorer ce que pourrait être la puissance française si ces trajectoires se confirment."
  }), mk('02', 'statecraft', 'STATECRAFT', 272, ['Ve République', 'Politique étrangère', 'Union européenne', 'Francophonie & influence'], {
    thumb: T + 'thumb-statecraft.jpg',
    subtitle: 'Gouvernance & institutions',
    textLang: 'zh',
    links: ['arsenal', 'francophonie'],
    why: '决策自主不受制于联盟多数意见',
    how: '第五共和国总统制 + 戴高乐主义独立外交路线',
    what: '退出北约指挥体系、欧洲干预倡议'
  }), mk('03', 'epochs', 'EPOCHS', 56, ["Des Gaulois à aujourd'hui", 'Révolutions & Empires', 'Deux guerres mondiales', 'La France contemporaine'], {
    thumb: T + 'thumb-epochs.jpg',
    subtitle: 'Notre histoire',
    textLang: 'zh',
    links: [],
    why: '今天的能力都是历史断裂重构出来的',
    how: '中央集权→大革命→拿破仑法典→戴高乐主义',
    what: '全站 Timeline 组件的数据源'
  }), mk('04', 'territories', 'TERRITORIES', 200, ['Hexagone & régions', 'Outre-mer & territoires', 'ZEE & espaces maritimes', 'Exploration & recherche'], {
    thumb: T + 'thumb-territories.jpg',
    subtitle: 'Géographie & outre-mer',
    textLang: 'zh',
    links: ['industry', 'arsenal'],
    why: '领土纵深决定全球到达能力',
    how: '海外省 + 1100万 km² EEZ + 军事支点（FAZSOI 等）',
    what: '六大洲存在、全球第二大 EEZ'
  }), mk('05', 'arena', 'ARENA', 20, ['Football & Coupe du monde', 'Tour de France', 'Roland Garros & tennis', 'JO & champions français'], {
    thumb: T + 'thumb-arena.jpg',
    subtitle: 'Sport & compétition',
    textLang: 'zh',
    links: ['statecraft'],
    why: '体育是国家认同与融合叙事的展示窗',
    how: '移民融合模式 + 国家体育投入',
    what: '世界杯冠军、姆巴佩融合叙事'
  }), mk('06', 'aesthetics', 'AESTHETICS', 344, ['Art & architecture', 'Cinéma & littérature', 'Mode & luxe', 'Gastronomie française'], {
    thumb: T + 'thumb-aesthetics.jpg',
    subtitle: 'Culture & art de vivre',
    textLang: 'zh',
    links: ['francophonie'],
    why: '文化输出转化为全球话语权',
    how: '文化例外原则 + 电影/时尚/艺术产业保护',
    what: '戛纳、卢浮宫、Paris+ 艺博会'
  }), mk('07', 'science', 'SCIENCE', 164, ['Ariane & espace', 'Nucléaire & énergie', 'Mathématiques', 'Recherche & CNRS'], {
    textLang: 'zh',
    links: ['industry', 'economy'],
    why: '科研自主是长期国力的地基',
    how: 'CNRS/CNES/ESA最大出资国 + 量子/AI战略',
    what: 'Ariane 6、Mistral AI、菲尔兹奖 13 人'
  }), mk('08', 'economy', 'ECONOMY', 308, ['CAC 40 & multinationales', 'Luxe & savoir-faire', 'Agriculture & vin', 'Transports & infrastructures'], {
    textLang: 'zh',
    links: ['industry', 'francophonie'],
    why: '经济体量支撑军费与外交筹码',
    how: 'CAC 40 跨国企业 + 农业自主 + 奢侈品资本',
    what: '全球第七大 GDP、LVMH 全球第一'
  }), mk('09', 'francophonie', 'FRANCOPHONIE', 128, ['Langue française', '57 pays membres', 'Influence culturelle', 'Avenir & perspectives'], {
    textLang: 'zh',
    links: ['aesthetics', 'statecraft'],
    why: '语言与文化是软实力的长期投资',
    how: 'OIF 88 国网络 + 文化院/法语联盟全球布点',
    what: '3.2亿母语者、2050 预测 7–8 亿使用者'
  }), mk('10', 'industry', 'INDUSTRY', 92, ['Défense & aéronautique', 'Énergie & nucléaire civil', 'Souveraineté technologique', 'Réindustrialisation'], {
    textLang: 'zh',
    scenario: true,
    links: ['arsenal', 'territories', 'economy'],
    why: '军事与外交自主的前提，是工业链不被"卡脖子"',
    how: '能源→军工→电子→交通→奢侈品资本化的全产业链',
    what: 'Rafale 全产业链自研、EPR2 核电扩张、Ariane 6 发射能力'
  })];
  const HOME_STATS = [{
    icon: 'hexagon',
    value: '551,695',
    label: 'km² hexagone'
  }, {
    icon: 'target',
    value: '11,000,000',
    label: 'km² ZEE'
  }, {
    icon: 'person',
    value: '67M+',
    label: 'population'
  }, {
    icon: 'speech',
    value: '57',
    label: 'pays francophones'
  }, {
    icon: 'anchor',
    value: '2e',
    label: 'puissance maritime'
  }, {
    icon: 'star',
    value: 'P5',
    label: 'membre ONU'
  }];
  const ERAS = [{
    year: '-52',
    caption: "Victoire d'Alésia"
  }, {
    year: '1789',
    caption: 'Révolution française'
  }, {
    year: '1815',
    caption: 'Congrès de Vienne'
  }, {
    year: '1870',
    caption: 'IIIe République'
  }, {
    year: '1940',
    caption: 'Seconde Guerre mondiale'
  }, {
    year: '1958',
    caption: 'Ve République'
  }, {
    year: "Aujourd'hui",
    caption: 'Une France mondiale'
  }];
  const DICT = {
    fr: {
      home: 'HOME',
      eyebrowHero: 'La France sous tous les angles',
      cta: "Commencer l'exploration",
      bodyHero: "De la Gaule à l'espace, des profondeurs océaniques aux sommets de la pensée : explorez toutes les dimensions de la France et de son influence dans le monde.",
      eyebrowGrid: 'Explorez la France dans toutes ses dimensions',
      related: 'Modules liés',
      breadcrumb: 'Home',
      footerNav: ['À propos', 'Sources', 'Contact', 'Mentions légales'],
      scenario: 'Scénario prospectif 2035-2040. Ces chiffres décrivent un scénario, pas la situation actuelle.',
      clock: 'Heure à Paris',
      map: 'Carte interactive',
      mapCta: 'Explorer la carte',
      sourceNote: 'Texte source : plan de contenu v2 (中文). Traduction à venir.'
    },
    en: {
      home: 'HOME',
      eyebrowHero: 'France from every angle',
      cta: 'Start exploring',
      bodyHero: 'From Gaul to space, from ocean trenches to the summits of thought: explore every dimension of France and its influence in the world.',
      eyebrowGrid: 'Explore every dimension of France',
      related: 'Related modules',
      breadcrumb: 'Home',
      footerNav: ['About', 'Sources', 'Contact', 'Legal'],
      scenario: 'Speculative scenario 2035-2040. These figures describe a scenario, not current reality.',
      clock: 'Heure à Paris',
      map: 'Carte interactive',
      mapCta: 'Explorer la carte',
      sourceNote: 'Source text: content plan v2 (中文). Translation pending.'
    },
    zh: {
      home: '首页',
      eyebrowHero: '全方位解读法国',
      cta: '开始探索',
      bodyHero: '从高卢到太空，从深海到思想的顶峰，探索法国及其世界影响力的方方面面。',
      eyebrowGrid: '探索法国的方方面面',
      related: '相关板块',
      breadcrumb: '首页',
      footerNav: ['关于', '资料来源', '联系我们', '法律声明'],
      scenario: '前瞻情景 2035-2040。以下数字描述的是一种情景，并非当前现实。',
      clock: 'Heure à Paris',
      map: 'Carte interactive',
      mapCta: 'Explorer la carte',
      sourceNote: '来源：内容规划 v2。'
    }
  };
  window.HX_DATA = {
    MODULES,
    HOME_STATS,
    ERAS,
    DICT
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CtaLink = __ds_scope.CtaLink;

__ds_ns.HexMark = __ds_scope.HexMark;

__ds_ns.TricolorRule = __ds_scope.TricolorRule;

__ds_ns.ModuleCard = __ds_scope.ModuleCard;

__ds_ns.ModuleHeader = __ds_scope.ModuleHeader;

__ds_ns.RelatedLinks = __ds_scope.RelatedLinks;

__ds_ns.ScenarioLabel = __ds_scope.ScenarioLabel;

__ds_ns.WhyHowWhat = __ds_scope.WhyHowWhat;

__ds_ns.StatStrip = __ds_scope.StatStrip;

__ds_ns.Timeline = __ds_scope.Timeline;

__ds_ns.DisplayTitle = __ds_scope.DisplayTitle;

__ds_ns.QuoteBlock = __ds_scope.QuoteBlock;

__ds_ns.SectionEyebrow = __ds_scope.SectionEyebrow;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.LangSwitch = __ds_scope.LangSwitch;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

})();
