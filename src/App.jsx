import React, { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  AirplaneTilt,
  ArrowRight,
  Atom,
  Basketball,
  BookOpenText,
  Buildings,
  Compass,
  CookingPot,
  Crosshair,
  Crown,
  CastleTurret,
  Factory,
  FishSimple,
  GlobeHemisphereWest,
  MapTrifold,
  Medal,
  Mountains,
  ShieldChevron,
  Sparkle,
  Train,
  Waves
} from '@phosphor-icons/react';

const base = window.location.pathname.includes('/pages/') ? '..' : '.';
const TerritoryInteractiveMap = lazy(() => import('./TerritoryInteractiveMap'));

const navItems = [
  { key: 'arsenal', label: { zh: '军工霸权', fr: 'Arsenal', en: 'Arsenal' }, href: `${base}/pages/arsenal.html` },
  { key: 'statecraft', label: { zh: '地缘政治', fr: 'Diplomatie', en: 'Statecraft' }, href: `${base}/pages/statecraft.html` },
  { key: 'territories', label: { zh: '全球疆域', fr: 'Territoires', en: 'Territories' }, href: `${base}/pages/territories.html` },
  { key: 'sport', label: { zh: '体育竞技', fr: 'Sport', en: 'Sport' }, href: `${base}/pages/sport.html` },
  { key: 'epochs', label: { zh: '历史引擎', fr: 'Époques', en: 'History' }, href: `${base}/pages/epochs.html` },
  { key: 'aesthetics', label: { zh: '文化美学', fr: 'Esthétique', en: 'Aesthetics' }, href: `${base}/pages/aesthetics.html` }
];

const pageKey = (() => {
  const file = window.location.pathname.split('/').pop() || 'index.html';
  return file === 'index.html' || file === '' ? 'home' : file.replace('.html', '');
})();

const pages = {
  arsenal: {
    number: '01',
    icon: ShieldChevron,
    accent: '#d54a36',
    pale: '#f5e8e5',
    image: `${base}/assets/images/site/arsenal-hero.png`,
    title: { zh: '军工与霸权', fr: "L'Arsenal souverain", en: 'The Sovereign Arsenal' },
    intro: {
      zh: '法国是欧盟内部少数拥有核威慑、航空、潜艇、导弹与陆战装备完整自主链条的国家。技术主权在这里不是口号，而是工业组织方式。',
      fr: "La souveraineté française repose sur une chaîne industrielle complète, de la dissuasion nucléaire à l'aéronautique et aux forces navales.",
      en: 'French sovereignty rests on an integrated industrial chain spanning nuclear deterrence, aerospace, naval power and land systems.'
    },
    label: 'DÉFENSE · INDUSTRIE · SOUVERAINETÉ',
    metrics: [['Rafale', '全谱系多用途战机'], ['4', '弹道导弹核潜艇'], ['290', '约计核弹头规模'], ['1831', '外籍兵团创立']],
    sections: [
      { title: '制空权的系统设计', subtitle: 'Rafale + SPECTRA + RBE2 AESA', text: '阵风并非依靠单一性能取胜。航电融合、电子战、自卫系统和多任务挂载构成一套可独立作战的空中体系。', icon: AirplaneTilt },
      { title: '深海中的国家意志', subtitle: 'Naval Group · Barracuda · Triomphant', text: '攻击核潜艇与战略核潜艇共同维持水下情报、远洋护航和二次核打击能力。', icon: Atom },
      { title: '陆战火力的出口模型', subtitle: 'CAESAR · Leclerc · Scorpion', text: '法国陆战装备强调轮式机动、网络化指挥与远程精确火力，适合快速部署和海外行动。', icon: Crosshair },
      { title: '两个世纪的全球部署', subtitle: 'Légion étrangère', text: '外籍兵团兼具军事单位、国家神话和人才吸纳机制，是法国全球军事存在最独特的制度之一。', icon: Medal }
    ],
    note: '法国军工体系的核心不是装备数量，而是关键决策与维护能力不依赖外部许可。',
    forceStructure: true
  },
  statecraft: {
    number: '02',
    icon: Buildings,
    accent: '#3159a7',
    pale: '#e7edf8',
    image: `${base}/assets/images/site/statecraft-hero.png`,
    title: { zh: '地缘与政治', fr: 'La puissance de décision', en: 'The Power to Decide' },
    intro: {
      zh: '从戴高乐主义到印太战略，法国外交的持续命题是如何在联盟内部保持最终决策权，并把欧洲、海外领土与核威慑组织成独立行动空间。',
      fr: "Du gaullisme à l'Indo-Pacifique, la diplomatie française cherche à préserver sa liberté de décision au sein des alliances.",
      en: 'From Gaullism to the Indo-Pacific, French diplomacy seeks to preserve freedom of decision within alliances.'
    },
    label: 'DIPLOMATIE · EUROPE · AUTONOMIE',
    metrics: [['UNSC', '安理会常任理事国'], ['EU', '欧洲战略核心国家'], ['11M km²', '海外经济海域纵深'], ['1966', '退出北约一体化指挥']],
    sections: [
      { title: '爱丽舍宫的棋局', subtitle: 'Ambiguïté stratégique', text: '法国在北约、欧盟和双边关系之间保留模糊空间，用可预测的国家利益代替自动站队。', icon: Crown },
      { title: '欧洲战略自主', subtitle: 'Défense européenne', text: '推动欧洲具备独立防务、产业和外交能力，是法国长期政策，而非短期口号。', icon: ShieldChevron },
      { title: '法非关系重构', subtitle: 'Après la Françafrique', text: '军事基地、货币安排与政治网络正在面对主权诉求和公众反弹，法国影响力转向更透明的合作模式。', icon: GlobeHemisphereWest },
      { title: '印太存在', subtitle: 'Résident, pas invité', text: '海外领土使法国成为印太常驻国家，海军、科研、气候与伙伴关系构成长期存在。', icon: Compass }
    ],
    note: '战略自主并不意味着孤立，而是联盟关系中的选择权和退出权。'
  },
  territories: {
    number: '03',
    icon: MapTrifold,
    accent: '#0787a7',
    pale: '#e1f1f4',
    image: `${base}/assets/images/site/territories-hero.png`,
    title: { zh: '全球地理纵深', fr: 'La France des océans', en: 'France Across the Oceans' },
    intro: {
      zh: '法国不仅位于欧洲。海外省与海外领地让法国横跨大西洋、印度洋、太平洋与南极周边，形成全球第二大的专属经济区。',
      fr: "Les territoires ultramarins projettent la France dans l'Atlantique, l'océan Indien, le Pacifique et les mers australes.",
      en: 'Overseas territories project France across the Atlantic, Indian Ocean, Pacific and Southern seas.'
    },
    label: 'OUTRE-MER · OCÉANS · PRÉSENCE',
    metrics: [['12', '主要海外实体'], ['11M km²', '专属经济区'], ['4', '大洋覆盖'], ['2nd', '全球 EEZ 排名']],
    regions: [
      ['加勒比海', '瓜德罗普、马提尼克、法属圭亚那', '航天、海洋治理与美洲存在'],
      ['印度洋', '留尼汪、马约特、南部领地', '海上通道、科研与反走私'],
      ['太平洋', '新喀里多尼亚、法属波利尼西亚', '印太战略、镍资源与广阔海域'],
      ['北大西洋', '圣皮埃尔和密克隆', '渔业、北极通道与北美邻接']
    ],
    note: '海外领土既是法国全球力量的基础，也包含自治、身份与去殖民化的复杂政治问题。'
  },
  epochs: {
    number: '05',
    icon: BookOpenText,
    accent: '#a44735',
    pale: '#f2e8e5',
    image: `${base}/assets/images/site/epochs-hero.png`,
    title: { zh: '历史引擎', fr: 'Les ruptures françaises', en: 'The French Ruptures' },
    intro: {
      zh: '法国历史并非平滑展开，而是由革命、帝国、总体战、抵抗与重建不断断裂。每一次危机都重新定义国家、共和国与公民。',
      fr: "L'histoire française avance par ruptures: révolution, empire, guerre totale, résistance et reconstruction.",
      en: 'French history moves through ruptures: revolution, empire, total war, resistance and reconstruction.'
    },
    label: 'RÉVOLUTION · GUERRE · RÉPUBLIQUE',
    metrics: [['1789', '革命与旧制度终结'], ['1805', '奥斯特里茨'], ['1916', '凡尔登'], ['1940', '自由法国']],
    timeline: [
      ['1789', '法国大革命', '主权从君主转向国民，权利、共和国与群众政治进入现代世界。'],
      ['1805', '奥斯特里茨战役', '拿破仑把革命国家的动员能力转化为欧洲大陆霸权。'],
      ['1916', '凡尔登战役', '工业化战争把坚守、牺牲与国家记忆永久绑定。'],
      ['1940-44', '自由法国', '在国家崩溃之后，抵抗运动重新争夺法国的合法性。'],
      ['1958', '第五共和国', '强化总统权力，以制度稳定回应殖民战争和政治碎片化。']
    ],
    heritageFeature: true,
    note: '历史不是静态遗产，而是法国今天讨论国家权力与共和国价值时持续调用的政治资源。'
  },
  aesthetics: {
    number: '06',
    icon: Sparkle,
    accent: '#a63f72',
    pale: '#f3e5ed',
    image: `${base}/assets/images/site/aesthetics-hero.png`,
    title: { zh: '文化与工业美学', fr: "L'esthétique française", en: 'The French Aesthetic' },
    intro: {
      zh: '法国的软实力不只来自奢侈品。航空、铁路、航天、时装、餐饮与葡萄酒共享一种标准：技术必须被转化为可识别的形式与体验。',
      fr: "L'influence française relie ingénierie, forme, usage et art de vivre, de l'aéronautique à la haute couture.",
      en: 'French influence connects engineering, form, use and art de vivre, from aerospace to haute couture.'
    },
    label: 'DESIGN · INDUSTRIE · ART DE VIVRE',
    metrics: [['A350', '复合材料航空平台'], ['574.8', 'TGV 轮轨速度纪录'], ['3★', '米其林最高评级'], ['Haute', '高级定制体系']],
    sections: [
      { title: '空客的工业优雅', subtitle: 'Airbus · Toulouse', text: '复合材料、空气动力学与跨国制造体系被转化为清晰、克制的欧洲工业形象。', icon: AirplaneTilt },
      { title: '速度的公共设计', subtitle: 'TGV', text: '高速铁路将工程、国土规划与公共服务结合，车头轮廓成为法国现代化的视觉符号。', icon: Train },
      { title: '标准制造稀缺', subtitle: 'Michelin · Haute Couture', text: '米其林与高级定制都通过严格认证、匿名评估和稀缺资格维持权威。', icon: Sparkle },
      { title: '地方性成为世界语言', subtitle: 'Vin · Cuisine · Savoir-faire', text: '产区、工艺和生活方式被组织为可传播的文化资产，而不是单纯商品。', icon: Factory }
    ],
    cultureFeature: true,
    note: '法国美学最稳定的特征，是让技术、制度和生活方式共同塑造形式。'
  }
};

const translations = {
  zh: { archive: '法国全维度数字档案', enter: '进入专题', menu: '打开菜单', close: '关闭菜单', view: '查看领域', next: '下一个领域' },
  fr: { archive: 'Archives numériques de la France', enter: 'Entrer dans le dossier', menu: 'Ouvrir le menu', close: 'Fermer le menu', view: 'Voir le domaine', next: 'Domaine suivant', fields: 'Six domaines', continue: 'Continuer', footer: "Une archive numérique consacrée aux capacités, aux territoires, à l'histoire et à la culture de la France." },
  en: { archive: 'A multidimensional archive of France', enter: 'Open the dossier', menu: 'Open menu', close: 'Close menu', view: 'View field', next: 'Next field', fields: 'Six fields', continue: 'Continue exploring', footer: "A digital archive examining France through state capacity, territory, history and culture." }
};

translations.zh.fields = '六个领域';
translations.zh.continue = '继续探索';
translations.zh.footer = '以国家能力、领土、历史和文化为线索重新认识法国。内容用于教育性与创作型数字档案展示。';

const frenchCities = [
  { name: '巴黎', fr: 'Paris', lat: 48.8566, lng: 2.3522, region: '法兰西岛', type: 'capital', note: '共和国首都、政治与文化中枢' },
  { name: '马赛', fr: 'Marseille', lat: 43.2965, lng: 5.3698, region: '普罗旺斯-阿尔卑斯-蓝色海岸', type: 'metropolis', note: '地中海港口与南部都会' },
  { name: '里昂', fr: 'Lyon', lat: 45.764, lng: 4.8357, region: '奥弗涅-罗讷-阿尔卑斯', type: 'metropolis', note: '罗讷河谷工业与交通枢纽' },
  { name: '图卢兹', fr: 'Toulouse', lat: 43.6047, lng: 1.4442, region: '奥克西塔尼', type: 'strategic', note: '法国航空航天工业核心' },
  { name: '尼斯', fr: 'Nice', lat: 43.7102, lng: 7.262, region: '普罗旺斯-阿尔卑斯-蓝色海岸', type: 'metropolis', note: '蔚蓝海岸国际门户' },
  { name: '南特', fr: 'Nantes', lat: 47.2184, lng: -1.5536, region: '卢瓦尔河地区', type: 'metropolis', note: '大西洋工业与文化城市' },
  { name: '蒙彼利埃', fr: 'Montpellier', lat: 43.6108, lng: 3.8767, region: '奥克西塔尼', type: 'regional', note: '地中海科研与大学城市' },
  { name: '斯特拉斯堡', fr: 'Strasbourg', lat: 48.5734, lng: 7.7521, region: '大东部', type: 'strategic', note: '欧洲机构与法德边境中心' },
  { name: '波尔多', fr: 'Bordeaux', lat: 44.8378, lng: -0.5792, region: '新阿基坦', type: 'metropolis', note: '大西洋港口与葡萄酒中心' },
  { name: '里尔', fr: 'Lille', lat: 50.6292, lng: 3.0573, region: '上法兰西', type: 'metropolis', note: '北部跨境都会与铁路枢纽' },
  { name: '雷恩', fr: 'Rennes', lat: 48.1173, lng: -1.6778, region: '布列塔尼', type: 'regional', note: '布列塔尼行政与数字产业中心' },
  { name: '兰斯', fr: 'Reims', lat: 49.2583, lng: 4.0317, region: '大东部', type: 'regional', note: '香槟产区与王室加冕历史城市' },
  { name: '勒阿弗尔', fr: 'Le Havre', lat: 49.4944, lng: 0.1079, region: '诺曼底', type: 'strategic', note: '塞纳河口大型海港' },
  { name: '圣艾蒂安', fr: 'Saint-Étienne', lat: 45.4397, lng: 4.3872, region: '奥弗涅-罗讷-阿尔卑斯', type: 'regional', note: '工业、设计与制造传统' },
  { name: '土伦', fr: 'Toulon', lat: 43.1242, lng: 5.928, region: '普罗旺斯-阿尔卑斯-蓝色海岸', type: 'strategic', note: '法国地中海舰队核心基地' },
  { name: '格勒诺布尔', fr: 'Grenoble', lat: 45.1885, lng: 5.7245, region: '奥弗涅-罗讷-阿尔卑斯', type: 'strategic', note: '阿尔卑斯科研与微电子中心' },
  { name: '第戎', fr: 'Dijon', lat: 47.322, lng: 5.0415, region: '勃艮第-弗朗什-孔泰', type: 'regional', note: '勃艮第行政与交通中心' },
  { name: '昂热', fr: 'Angers', lat: 47.4784, lng: -0.5632, region: '卢瓦尔河地区', type: 'regional', note: '卢瓦尔河谷教育与植物产业中心' },
  { name: '尼姆', fr: 'Nîmes', lat: 43.8367, lng: 4.3601, region: '奥克西塔尼', type: 'regional', note: '古罗马遗产与南法交通节点' },
  { name: '克莱蒙费朗', fr: 'Clermont-Ferrand', lat: 45.7772, lng: 3.087, region: '奥弗涅-罗讷-阿尔卑斯', type: 'strategic', note: '轮胎工业与中央高原门户' },
  { name: '勒芒', fr: 'Le Mans', lat: 48.0061, lng: 0.1996, region: '卢瓦尔河地区', type: 'strategic', note: '世界耐力赛车城市' },
  { name: '艾克斯', fr: 'Aix-en-Provence', lat: 43.5297, lng: 5.4474, region: '普罗旺斯-阿尔卑斯-蓝色海岸', type: 'regional', note: '普罗旺斯文化与大学城市' },
  { name: '布雷斯特', fr: 'Brest', lat: 48.3904, lng: -4.4861, region: '布列塔尼', type: 'strategic', note: '大西洋海军与核潜艇支援中心' },
  { name: '图尔', fr: 'Tours', lat: 47.3941, lng: 0.6848, region: '中央-卢瓦尔河谷', type: 'regional', note: '卢瓦尔河谷交通与历史城市' },
  { name: '亚眠', fr: 'Amiens', lat: 49.8941, lng: 2.2958, region: '上法兰西', type: 'regional', note: '皮卡第行政中心' },
  { name: '利摩日', fr: 'Limoges', lat: 45.8336, lng: 1.2611, region: '新阿基坦', type: 'regional', note: '陶瓷工艺与中西部节点' },
  { name: '梅斯', fr: 'Metz', lat: 49.1193, lng: 6.1757, region: '大东部', type: 'strategic', note: '东北军事与跨境交通城市' },
  { name: '贝桑松', fr: 'Besançon', lat: 47.2378, lng: 6.0241, region: '勃艮第-弗朗什-孔泰', type: 'regional', note: '精密制造与汝拉门户' },
  { name: '奥尔良', fr: 'Orléans', lat: 47.903, lng: 1.9093, region: '中央-卢瓦尔河谷', type: 'regional', note: '卢瓦尔河中部行政中心' },
  { name: '鲁昂', fr: 'Rouen', lat: 49.4432, lng: 1.0993, region: '诺曼底', type: 'regional', note: '塞纳河航运与诺曼底历史城市' },
  { name: '卡昂', fr: 'Caen', lat: 49.1829, lng: -0.3707, region: '诺曼底', type: 'regional', note: '诺曼底教育与二战记忆中心' },
  { name: '南锡', fr: 'Nancy', lat: 48.6921, lng: 6.1844, region: '大东部', type: 'regional', note: '洛林文化、大学与新艺术中心' },
  { name: '佩皮尼昂', fr: 'Perpignan', lat: 42.6887, lng: 2.8948, region: '奥克西塔尼', type: 'regional', note: '法国加泰罗尼亚门户' },
  { name: '巴约讷', fr: 'Bayonne', lat: 43.4929, lng: -1.4748, region: '新阿基坦', type: 'regional', note: '法属巴斯克地区中心' },
  { name: '拉罗谢尔', fr: 'La Rochelle', lat: 46.1603, lng: -1.1511, region: '新阿基坦', type: 'strategic', note: '大西洋海事与帆船城市' },
  { name: '阿讷西', fr: 'Annecy', lat: 45.8992, lng: 6.1294, region: '奥弗涅-罗讷-阿尔卑斯', type: 'regional', note: '阿尔卑斯湖区与户外产业中心' },
  { name: '阿雅克肖', fr: 'Ajaccio', lat: 41.9192, lng: 8.7386, region: '科西嘉', type: 'regional', note: '科西嘉行政中心与地中海港口' },
  { name: '巴斯蒂亚', fr: 'Bastia', lat: 42.6973, lng: 9.4509, region: '科西嘉', type: 'regional', note: '科西嘉北部港口城市' },
  { name: '库鲁', fr: 'Kourou', lat: 5.1611, lng: -52.6493, region: '法属圭亚那', type: 'overseas', note: '圭亚那航天中心所在地' },
  { name: '卡宴', fr: 'Cayenne', lat: 4.9224, lng: -52.3135, region: '法属圭亚那', type: 'overseas', note: '法属圭亚那首府' },
  { name: '法兰西堡', fr: 'Fort-de-France', lat: 14.6161, lng: -61.0588, region: '马提尼克', type: 'overseas', note: '马提尼克行政与港口中心' },
  { name: '皮特尔角城', fr: 'Pointe-à-Pitre', lat: 16.2411, lng: -61.5331, region: '瓜德罗普', type: 'overseas', note: '瓜德罗普主要经济与港口节点' },
  { name: '圣但尼', fr: 'Saint-Denis', lat: -20.8823, lng: 55.4504, region: '留尼汪', type: 'overseas', note: '留尼汪首府与印度洋支点' },
  { name: '马穆楚', fr: 'Mamoudzou', lat: -12.7806, lng: 45.2278, region: '马约特', type: 'overseas', note: '马约特行政中心' },
  { name: '努美阿', fr: 'Nouméa', lat: -22.2758, lng: 166.458, region: '新喀里多尼亚', type: 'overseas', note: '南太平洋政治、海军与镍产业节点' },
  { name: '帕皮提', fr: 'Papeete', lat: -17.5516, lng: -149.5585, region: '法属波利尼西亚', type: 'overseas', note: '法属波利尼西亚首府' },
  { name: '马塔乌图', fr: 'Mata-Utu', lat: -13.2825, lng: -176.1736, region: '瓦利斯和富图纳', type: 'overseas', note: '南太平洋海外集体行政中心' },
  { name: '圣皮埃尔', fr: 'Saint-Pierre', lat: 46.7791, lng: -56.1773, region: '圣皮埃尔和密克隆', type: 'overseas', note: '北大西洋法国海外节点' }
];

function Header({ language, setLanguage }) {
  const [open, setOpen] = useState(false);
  const t = translations[language];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#071226]/94 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 md:px-10">
        <a href={`${base}/index.html`} className="flex items-center gap-3" aria-label="Project Hexagone 首页">
          <span className="grid size-9 place-items-center border border-[#7898f5] text-xs font-black">FR</span>
          <span className="hidden leading-tight sm:block">
            <b className="block text-sm tracking-[-0.02em]">PROJECT HEXAGONE</b>
            <span className="text-[10px] tracking-[0.13em] text-[#9fb2de]">{t.archive}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="主导航">
          {navItems.map(item => (
            <a key={item.key} href={item.href} className={`nav-link ${pageKey === item.key ? 'is-active' : ''}`}>
              {item.label[language]}
            </a>
          ))}
        </nav>

        <div className="header-actions flex items-center gap-3">
          <div className="language-switcher flex border border-white/20">
            {['zh', 'fr', 'en'].map(lang => (
              <button
                key={lang}
                type="button"
                onClick={() => setLanguage(lang)}
                className={`px-3 py-2 text-[10px] font-bold uppercase ${language === lang ? 'bg-white text-[#071226]' : 'text-white/55 hover:text-white'}`}
              >
                {lang === 'zh' ? '中文' : lang}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="menu-toggle grid size-10 place-items-center"
            aria-label={open ? t.close : t.menu}
            onClick={() => setOpen(value => !value)}
            style={{ position: 'fixed', top: '1.25rem', right: '1.25rem', zIndex: 9999, display: 'grid', width: '2.5rem', height: '2.5rem', placeItems: 'center', background: '#ffffff', color: '#071226', border: '1px solid #ffffff' }}
          >
            <span className="text-[11px] font-bold">{open ? '关闭' : '菜单'}</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-white/10 bg-[#071226] px-5 pb-6 xl:hidden"
          >
            {navItems.map(item => (
              <a key={item.key} href={item.href} className="block border-b border-white/10 py-4 text-sm text-white/75">
                {item.label[language]}
              </a>
            ))}
            <div className="mt-5 flex border border-white/20 sm:hidden">
              {['zh', 'fr', 'en'].map(lang => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`flex-1 px-3 py-3 text-[10px] font-bold uppercase ${language === lang ? 'bg-white text-[#071226]' : 'text-white/55'}`}
                >
                  {lang === 'zh' ? '中文' : lang}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer({ language }) {
  const t = translations[language];
  return (
    <footer className="site-footer border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr_1fr] md:px-10">
        <div>
          <b className="text-lg text-slate-950">Project Hexagone</b>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">{t.footer}</p>
        </div>
        <div>
          <span className="text-xs font-bold text-blue-700">{t.fields}</span>
          <div className="mt-4 grid gap-2 text-sm text-slate-600">
            {navItems.slice(0, 3).map(item => <a key={item.key} href={item.href}>{item.label[language]}</a>)}
          </div>
        </div>
        <div>
          <span className="text-xs font-bold text-blue-700">{t.continue}</span>
          <div className="mt-4 grid gap-2 text-sm text-slate-600">
            {navItems.slice(3).map(item => <a key={item.key} href={item.href}>{item.label[language]}</a>)}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 px-5 py-5 text-center text-[11px] tracking-[0.08em] text-slate-400">LIBERTÉ · ÉGALITÉ · AUTONOMIE</div>
    </footer>
  );
}

function Reveal({ children, className = '', delay = 0 }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={false}
      animate={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ArsenalPage() {
  const capabilityRows = [
    ['海上核力量', 'Triomphant SSBN · SNLE 3G · Barracuda', '持续海上核威慑与水下拒止'],
    ['航母航空兵', 'France Libre · PANG · Rafale Marine', '远洋制空、打击与全球干预'],
    ['空天体系', 'Rafale F5/F6 · FCAS · CSO 3G', '制空、电子战与天基侦察'],
    ['陆战集群', 'Leclerc 2.0 · CAESAR Mk3 · SAMP/T NG', '装甲突击、远火与伴随防空']
  ];

  return (
    <main style={{ '--accent': '#e34d38', '--pale': '#251714' }} className="topic-page arsenal-page pt-[76px]">
      <section className="arsenal-command-hero">
        <div className="mx-auto max-w-[1440px] px-5 pb-12 pt-16 md:px-10 md:pt-24">
          <div className="grid gap-10 xl:grid-cols-[0.56fr_1.44fr] xl:items-end">
            <Reveal>
              <div className="flex items-center gap-4 text-[var(--accent)]">
                <span className="font-mono text-xs font-bold">01 / 06</span>
                <ShieldChevron size={28} weight="thin" />
              </div>
              <p className="mt-12 font-mono text-[11px] font-bold tracking-[0.13em] text-[var(--accent)]">FORCE · INDUSTRIE · DISSUASION</p>
              <h1 className="mt-5 text-[clamp(3.8rem,7vw,7.8rem)] font-black leading-[0.86] tracking-[-0.075em]">军工<br />战略沙盘</h1>
              <p className="mt-8 max-w-lg text-base leading-8 text-slate-500">从凯旋级战略核潜艇到 France Libre 航母，从 Rafale 到 Leclerc。这里展示的不是单件武器，而是一套能够独立决策、制造、部署与维护的国家体系。</p>
            </Reveal>

            <Reveal delay={0.08} className="arsenal-hero-frame">
              <img src={`${base}/assets/images/site/arsenal-hero-v3.png`} alt="完整展示 France Libre 航母、凯旋级战略核潜艇、Rafale 战机、Leclerc 坦克与 CAESAR 凯撒自走炮的法兰西军力全景" />
            </Reveal>
          </div>

          <div className="mt-12 grid border-l border-t border-slate-300 sm:grid-cols-2 xl:grid-cols-4">
            {[
              ['SSBN', '凯旋级战略核潜艇'],
              ['CVN', 'France Libre 航母'],
              ['AIR', 'Rafale 多用途战机'],
              ['LAND', 'Leclerc 主战坦克']
            ].map(([code, label]) => (
              <div key={code} className="border-b border-r border-slate-300 p-5">
                <strong className="font-mono text-xl text-[var(--accent)]">{code}</strong>
                <span className="mt-2 block text-xs text-slate-500">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="arsenal-capability-index border-y border-slate-300">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
          <Reveal className="max-w-4xl">
            <p className="eyebrow accent">CAPABILITY MATRIX</p>
            <h2 className="section-title">四条作战链，组成同一套主权系统。</h2>
          </Reveal>
          <div className="mt-10 border-t border-slate-300">
            {capabilityRows.map((row, index) => (
              <Reveal key={row[0]}>
                <article className="grid gap-5 border-b border-slate-300 py-8 lg:grid-cols-[70px_0.65fr_1fr_1fr] lg:items-center">
                  <span className="font-mono text-xs text-[var(--accent)]">0{index + 1}</span>
                  <h3 className="text-2xl font-black">{row[0]}</h3>
                  <b className="text-sm text-slate-300">{row[1]}</b>
                  <p className="text-sm leading-7 text-slate-500">{row[2]}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <MilitaryForceStructure />
    </main>
  );
}

function TerritoriesPage({ language }) {
  const [mode, setMode] = useState('metropole');
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(frenchCities[0]);
  const [reliefActive, setReliefActive] = useState(0);
  const visibleCities = frenchCities.filter(city => {
    const inMode = mode === 'metropole' ? city.type !== 'overseas' : city.type === 'overseas';
    return inMode && (filter === 'all' || city.type === filter);
  });

  const markerColor = type => ({
    capital: '#ffffff',
    metropolis: '#25b8db',
    strategic: '#ff684f',
    regional: '#7f93ba',
    overseas: '#ffca58'
  }[type] || '#7f93ba');

  const reliefs = [
    {
      icon: Waves,
      title: { zh: '莱茵河廊道', fr: 'Le corridor rhénan', en: 'The Rhine Corridor' },
      place: { zh: '阿尔萨斯与斯特拉斯堡', fr: 'Alsace et Strasbourg', en: 'Alsace and Strasbourg' },
      copy: {
        zh: '莱茵河在法国东北部既构成边界，也连接港口、制造业、欧洲机构与跨境城市网络。',
        fr: "Dans le nord-est, le Rhin forme une frontière et relie ports, industrie, institutions européennes et villes transfrontalières.",
        en: 'In the northeast, the Rhine is both a border and a corridor linking ports, industry, European institutions and cross-border cities.'
      }
    },
    {
      icon: Mountains,
      title: { zh: '阿尔卑斯高地', fr: 'Les Alpes', en: 'The Alps' },
      place: { zh: '萨瓦、格勒诺布尔与勃朗峰', fr: 'Savoie, Grenoble et Mont Blanc', en: 'Savoie, Grenoble and Mont Blanc' },
      copy: {
        zh: '高山地形塑造水电、科研、冬季运动和穿越欧洲南北的交通工程。',
        fr: "Le relief alpin structure l'hydroélectricité, la recherche, les sports d'hiver et les grands axes européens.",
        en: 'Alpine terrain shapes hydropower, research, winter sport and major transport routes through Europe.'
      }
    },
    {
      icon: Mountains,
      title: { zh: '比利牛斯边境', fr: 'Les Pyrénées', en: 'The Pyrenees' },
      place: { zh: '大西洋与地中海之间', fr: "Entre l'Atlantique et la Méditerranée", en: 'Between Atlantic and Mediterranean' },
      copy: {
        zh: '东西延伸的山脉把法国与伊比利亚半岛分隔，同时保留山口、牧业和区域文化通道。',
        fr: "La chaîne sépare la France de la péninsule Ibérique tout en maintenant cols, pastoralisme et passages culturels.",
        en: 'The range separates France from Iberia while preserving mountain passes, pastoral economies and cultural corridors.'
      }
    },
    {
      icon: MapTrifold,
      title: { zh: '中央高原', fr: 'Le Massif central', en: 'The Massif Central' },
      place: { zh: '火山台地与河流源区', fr: 'Plateaux volcaniques et sources', en: 'Volcanic plateaus and headwaters' },
      copy: {
        zh: '古老火山地貌、峡谷和高原分散人口，却孕育多条河流，并形成独特的农业与聚落格局。',
        fr: "Volcans anciens, gorges et plateaux dispersent l'habitat, alimentent les fleuves et organisent des économies rurales distinctes.",
        en: 'Ancient volcanoes, gorges and plateaus disperse settlement, feed major rivers and shape distinct rural economies.'
      }
    }
  ];
  const relief = reliefs[reliefActive];
  const ReliefIcon = relief.icon;

  return (
    <main style={{ '--accent': '#20a9ca', '--pale': '#0c2028' }} className="topic-page territories-map-page pt-[76px]">
      <section className="mx-auto max-w-[1440px] px-5 pb-10 pt-14 md:px-10 md:pt-20">
        <Reveal className="grid gap-9 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4 text-[var(--accent)]"><span className="font-mono text-xs">03 / 06</span><MapTrifold size={28} weight="thin" /></div>
            <p className="mt-10 font-mono text-[11px] font-bold tracking-[0.13em] text-[var(--accent)]">CITIES · REGIONS · OUTRE-MER</p>
            <h1 className="mt-5 text-[clamp(3.7rem,7vw,7.5rem)] font-black leading-[0.88] tracking-[-0.075em]">法国<br />互动地理志</h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-500">拖动、缩放并点击城市。地图覆盖法国本土主要都会、区域中心、军事与工业节点，以及从加勒比海到南太平洋的海外城市。</p>
        </Reveal>
      </section>

      <section className="territory-map-shell">
        <div className="territory-map-toolbar">
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={() => { setMode('metropole'); setFilter('all'); setSelected(frenchCities[0]); }} className={mode === 'metropole' ? 'is-active' : ''}>法国本土</button>
            <button type="button" onClick={() => { setMode('overseas'); setFilter('all'); setSelected(frenchCities.find(city => city.type === 'overseas')); }} className={mode === 'overseas' ? 'is-active' : ''}>海外领地</button>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              ['all', '全部'],
              ['capital', '首都'],
              ['metropolis', '都会'],
              ['strategic', '战略节点'],
              ['regional', '区域城市']
            ].filter(item => mode === 'metropole' || ['all'].includes(item[0])).map(([key, label]) => (
              <button type="button" key={key} onClick={() => setFilter(key)} className={filter === key ? 'is-active' : ''}>{label}</button>
            ))}
          </div>
        </div>

        <div className="territory-map-layout">
          <div className="territory-map-canvas">
            <Suspense fallback={<div className="grid h-[720px] place-items-center text-sm text-slate-500">正在加载法国互动地图...</div>}>
              <TerritoryInteractiveMap mode={mode} cities={visibleCities} markerColor={markerColor} onSelect={setSelected} />
            </Suspense>
          </div>

          <aside className="territory-city-panel">
            <span className="font-mono text-xs text-[var(--accent)]">{mode === 'metropole' ? 'FRANCE MÉTROPOLITAINE' : 'FRANCE OUTRE-MER'}</span>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em]">{selected.name}</h2>
            <p className="mt-1 text-lg text-slate-300">{selected.fr}</p>
            <dl className="mt-10">
              <div><dt>区域</dt><dd>{selected.region}</dd></div>
              <div><dt>定位</dt><dd>{selected.note}</dd></div>
              <div><dt>坐标</dt><dd>{selected.lat.toFixed(3)}, {selected.lng.toFixed(3)}</dd></div>
            </dl>
            <div className="mt-10 border-t border-slate-300 pt-7">
              <b className="text-sm">{visibleCities.length} 个当前可见节点</b>
              <p className="mt-3 text-xs leading-6 text-slate-500">点击地图标记查看城市详情。使用滚轮缩放，拖动地图探索城市分布。</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="territory-relief-section border-y border-slate-300">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[0.86fr_1.14fr]">
          <div className="px-5 py-14 md:px-10 md:py-16">
            <h2 className="text-[clamp(2.7rem,4.8vw,5rem)] font-black leading-[0.96] tracking-[-0.06em]">{({
              zh: '河流与山脉，决定法国如何连接欧洲。',
              fr: "Fleuves et montagnes organisent la France en Europe.",
              en: 'Rivers and mountains connect France to Europe.'
            })[language]}</h2>
            <div className="territory-relief-nav mt-10">
              {reliefs.map((item, index) => (
                <button type="button" key={item.title.zh} onClick={() => setReliefActive(index)} className={reliefActive === index ? 'is-active' : ''}>
                  <span>0{index + 1}</span>
                  <b>{item.title[language]}</b>
                </button>
              ))}
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.article key={relief.title.zh} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="territory-relief-stage">
              <ReliefIcon size={54} weight="thin" />
              <div>
                <p>{relief.place[language]}</p>
                <h3>{relief.title[language]}</h3>
                <span>{relief.copy[language]}</span>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </section>

      <section className="territory-underwater-section mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
        <Reveal className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="territory-underwater-frame">
            <img src={`${base}/assets/images/site/territories-underwater.png`} alt="法国地中海海草床与海外珊瑚礁构成的水下生态全景" />
          </div>
          <div>
            <FishSimple size={42} weight="thin" className="text-[var(--accent)]" />
            <h2 className="mt-6 text-[clamp(2.7rem,4.8vw,5rem)] font-black leading-[0.96] tracking-[-0.06em]">{({ zh: '海面之下，还有另一片法国。', fr: 'Sous la surface existe une autre France.', en: 'Below the surface lies another France.' })[language]}</h2>
            <p className="mt-6 max-w-xl text-sm leading-8 text-slate-400">{({
              zh: '地中海的波西多尼亚海草床、科西嘉岩礁、加勒比与太平洋珊瑚群落，把生物多样性、科研和海洋主权连接起来。',
              fr: "Herbiers de posidonie, récifs corses et coraux ultramarins relient biodiversité, recherche et souveraineté maritime.",
              en: 'Posidonia meadows, Corsican reefs and overseas coral communities connect biodiversity, research and maritime sovereignty.'
            })[language]}</p>
            <dl className="territory-underwater-zones mt-8">
              <div><dt>Méditerranée</dt><dd>{({ zh: '海草床与岩礁', fr: 'Herbiers et récifs rocheux', en: 'Seagrass and rocky reefs' })[language]}</dd></div>
              <div><dt>Outre-mer</dt><dd>{({ zh: '珊瑚礁与潟湖', fr: 'Récifs et lagons', en: 'Coral reefs and lagoons' })[language]}</dd></div>
              <div><dt>Profondeur</dt><dd>{({ zh: '深海科研与保护', fr: 'Recherche et protection', en: 'Research and protection' })[language]}</dd></div>
            </dl>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
        <Reveal>
          <p className="eyebrow accent">URBAN NETWORK</p>
          <h2 className="section-title">首都之外，法国由多层城市网络组成。</h2>
        </Reveal>
        <div className="mt-10 grid border-l border-t border-slate-300 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['巴黎盆地', '政治、金融、媒体与全国交通网络高度集中。'],
            ['地中海轴线', '马赛、尼斯、蒙彼利埃和土伦连接港口、旅游与海军。'],
            ['东部工业带', '里昂、格勒诺布尔、斯特拉斯堡和梅斯连接欧洲制造网络。'],
            ['海外城市链', '库鲁、努美阿、圣但尼和帕皮提维持法国全球地理存在。']
          ].map(([title, copy]) => (
            <article key={title} className="border-b border-r border-slate-300 bg-white p-6">
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-10 text-sm leading-7 text-slate-500">{copy}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function HomePage({ language }) {
  const modules = [
    ['arsenal', '01', { zh: '军工与霸权', fr: 'Arsenal souverain', en: 'Sovereign Arsenal' }, { zh: '独立核威慑、航空、潜艇与全球部署', fr: 'Dissuasion, aéronautique, sous-marins et projection mondiale', en: 'Deterrence, aerospace, submarines and global deployment' }, ShieldChevron],
    ['statecraft', '02', { zh: '地缘与政治', fr: 'Diplomatie et puissance', en: 'Statecraft' }, { zh: '战略自主、欧洲、非洲与印太', fr: 'Autonomie stratégique, Europe, Afrique et Indo-Pacifique', en: 'Strategic autonomy across Europe, Africa and the Indo-Pacific' }, Buildings],
    ['territories', '03', { zh: '全球地理纵深', fr: 'Géographie mondiale', en: 'Global Geography' }, { zh: '海外领土、河流、地形与海洋生态', fr: 'Outre-mer, fleuves, reliefs et écologie marine', en: 'Overseas territories, rivers, terrain and marine ecology' }, MapTrifold],
    ['sport', '04', { zh: '体育竞技', fr: 'Sport', en: 'Sport' }, { zh: '国家队、体育体系与全球赛事', fr: 'Équipes nationales, formation et compétitions mondiales', en: 'National teams, development systems and global events' }, Basketball],
    ['epochs', '05', { zh: '历史引擎', fr: 'Moteur historique', en: 'History Engine' }, { zh: '中世纪遗迹、革命、工业化与共和国', fr: 'Vestiges médiévaux, révolution, industrie et République', en: 'Medieval remains, revolution, industry and the Republic' }, BookOpenText],
    ['aesthetics', '06', { zh: '文化与工业美学', fr: 'Culture et esthétique', en: 'Culture and Aesthetics' }, { zh: '料理、电影、铁路、时尚与生活方式', fr: 'Cuisine, cinéma, rail, mode et art de vivre', en: 'Cuisine, cinema, rail, fashion and art de vivre' }, Sparkle]
  ];

  const title = {
    zh: '法国，远不止巴黎。',
    fr: 'La France, au-delà de Paris.',
    en: 'France is more than Paris.'
  }[language];

  const homeCopy = {
    zh: {
      intro: '从军工体系到海外领土，从共和国历史到料理、体育与工业设计。六个入口共同解释法国如何组织国家能力与全球影响力。',
      matrix: '一个国家，六种观察尺度。',
      autonomy: '贯穿六个领域的共同逻辑。',
      principles: [
        ['决策自主', '最终国家决策不外包给联盟或市场。'],
        ['体系完整', '工业、领土、制度与文化形成相互支持的网络。'],
        ['全球投射', '海外存在和世界级品牌把法国能力带到欧洲之外。']
      ]
    },
    fr: {
      intro: "De la défense aux territoires ultramarins, de l'histoire républicaine à la cuisine, au sport et au design. Six entrées expliquent la puissance française.",
      matrix: "Un pays, six échelles d'observation.",
      autonomy: 'Une logique commune traverse les six domaines.',
      principles: [
        ['Décider librement', "La décision nationale finale n'est déléguée ni aux alliances ni aux marchés."],
        ['Relier les systèmes', "Industrie, territoire, institutions et culture forment un réseau cohérent."],
        ['Projeter une présence', "Les territoires ultramarins et les marques mondiales prolongent la France hors d'Europe."]
      ]
    },
    en: {
      intro: 'From defence and overseas territories to republican history, cuisine, sport and industrial design. Six perspectives explain how France projects influence.',
      matrix: 'One country, six ways of seeing it.',
      autonomy: 'One strategic logic connects all six fields.',
      principles: [
        ['Independent decisions', 'Final national decisions are not outsourced to alliances or markets.'],
        ['Connected systems', 'Industry, territory, institutions and culture reinforce one another.'],
        ['Global presence', 'Overseas territories and global brands extend French capacity beyond Europe.']
      ]
    }
  }[language];

  const prototypeCopy = {
    zh: {
      atlas: '国家能力原型',
      brief: '军工、领土、历史、体育与文化被组织成一套可浏览的法国全景索引。',
      signal: '实时索引'
    },
    fr: {
      atlas: 'Prototype de puissance nationale',
      brief: "Defense, territoire, histoire, sport et culture sont rassembles dans un index navigable de la France.",
      signal: 'Index actif'
    },
    en: {
      atlas: 'National capability prototype',
      brief: 'Defence, territory, history, sport and culture are shaped into a navigable index of France.',
      signal: 'Live index'
    }
  }[language];

  const depths = [
    ['aesthetics', CookingPot, { zh: '《料理鼠王》与巴黎餐桌', fr: 'Ratatouille et la table parisienne', en: 'Ratatouille and the Paris Table' }, { zh: '电影把料理、城市与法国生活方式变成全球文化记忆。', fr: 'Le cinéma relie cuisine, ville et art de vivre dans une mémoire mondiale.', en: 'Cinema turns cuisine, city life and art de vivre into global memory.' }],
    ['territories', Waves, { zh: '莱茵河与阿尔萨斯', fr: "Le Rhin et l'Alsace", en: 'The Rhine and Alsace' }, { zh: '河流既是边界，也是欧洲贸易、城市与文化交换的走廊。', fr: "Le fleuve est une frontière et un corridor d'échanges européens.", en: 'The river is both a border and a corridor of European exchange.' }],
    ['territories', Mountains, { zh: '从高山到大西洋', fr: "Des Alpes à l'Atlantique", en: 'From the Alps to the Atlantic' }, { zh: '阿尔卑斯、比利牛斯、中央高原与海岸塑造不同区域经济。', fr: 'Alpes, Pyrénées, Massif central et littoraux structurent les régions.', en: 'Mountain ranges, plateaus and coasts shape distinct regional economies.' }],
    ['epochs', CastleTurret, { zh: '石砌遗迹与钢铁时代', fr: "De la pierre à l'acier", en: 'From Stone to Steel' }, { zh: '中世纪修道院、城堡与工业革命设施叠加在同一片国土。', fr: "Abbayes, forteresses et sites industriels superposent les siècles.", en: 'Abbeys, fortresses and industrial sites layer centuries across the landscape.' }],
    ['territories', FishSimple, { zh: '法国的水下生态', fr: 'Les écosystèmes sous-marins', en: 'Underwater France' }, { zh: '地中海海草床、珊瑚礁与海外海域构成另一种法国疆域。', fr: "Herbiers méditerranéens, récifs et outre-mer composent une autre France.", en: 'Mediterranean seagrass, reefs and overseas waters form another French realm.' }]
  ];

  return (
    <main className="site-page pt-[76px]">
      <section className="home-prototype-hero">
        <div className="home-hero-shell mx-auto grid min-h-[calc(100dvh-76px)] max-w-[1440px] items-center gap-10 px-5 py-10 lg:grid-cols-[0.74fr_1.26fr] lg:px-10">
          <Reveal className="home-hero-copy">
            <p className="eyebrow">FRANCE · SIX DIMENSIONS</p>
            <h1 className={`home-hero-title home-hero-title-${language} mt-5 font-black tracking-[-0.07em]`}>{title}</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-500">{homeCopy.intro}</p>
            <div className="home-hero-actions mt-7">
              <a href="#matrix" className="primary-link">{translations[language].enter} <ArrowRight size={18} /></a>
              <span>{prototypeCopy.signal}</span>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="home-hero-visual relative">
            <img src={`${base}/assets/images/site/home-hero.png`} alt="France capability panorama" className="home-hero-image" />
            <div className="home-hero-meter" aria-hidden="true">
              {modules.slice(0, 6).map(([key, number]) => <span key={key}>{number}</span>)}
            </div>
            <div className="home-command-panel">
              <span>{prototypeCopy.atlas}</span>
              <p>{prototypeCopy.brief}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="home-depth-rail border-y border-slate-300">
        <div className="mx-auto grid max-w-[1440px] md:grid-cols-2 xl:grid-cols-5">
          {depths.map(([key, Icon, depthTitle, copy]) => (
            <a key={depthTitle.zh} href={`${base}/pages/${key}.html`} className="home-depth-item group">
              <Icon size={24} weight="thin" />
              <h2>{depthTitle[language]}</h2>
              <p>{copy[language]}</p>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </section>

      <section id="matrix" className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">THE HEXAGONE MATRIX</p>
          <h2 className="section-title">{homeCopy.matrix}</h2>
        </Reveal>
        <div className="mt-10 grid border-l border-t border-slate-300 md:grid-cols-2 xl:grid-cols-3">
          {modules.map(([key, number, titleText, copy, Icon], index) => (
            <Reveal key={key} delay={index * 0.04}>
              <a href={`${base}/pages/${key}.html`} className="module-tile group">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-blue-700">{number} / 06</span>
                  <Icon size={30} weight="thin" className="text-blue-700 transition-transform group-hover:-translate-y-1" />
                </div>
                <div>
                  <h3 className="text-3xl font-black tracking-[-0.045em]">{titleText[language]}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-slate-500">{copy[language]}</p>
                </div>
                <span className="flex items-center gap-2 text-xs font-bold text-blue-700">{translations[language].enter} <ArrowRight /></span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-300 bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-10 md:py-20">
          <Reveal>
            <p className="eyebrow">AUTONOMIE STRATÉGIQUE</p>
            <h2 className="section-title">{homeCopy.autonomy}</h2>
          </Reveal>
          <Reveal className="grid gap-px bg-slate-300 md:grid-cols-3">
            {homeCopy.principles.map(([titleText, copy]) => (
              <article key={titleText} className="bg-white p-7">
                <h3 className="text-xl font-black">{titleText}</h3>
                <p className="mt-6 text-sm leading-7 text-slate-500">{copy}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function StandardTopic({ data, language }) {
  const Icon = data.icon;
  return (
    <main style={{ '--accent': data.accent, '--pale': data.pale }} className="topic-page pt-[76px]">
      <section className="bg-white">
        <div className="mx-auto grid min-h-[640px] max-w-[1440px] items-center gap-10 px-5 py-10 lg:grid-cols-[0.72fr_1.28fr] lg:px-10">
          <Reveal>
            <div className="flex items-center gap-4 text-[var(--accent)]">
              <span className="font-mono text-xs font-bold">{data.number} / 06</span>
              <Icon size={28} weight="thin" />
            </div>
            <p className="mt-8 font-mono text-[11px] font-bold tracking-[0.13em] text-[var(--accent)]">{data.label}</p>
            <h1 className="mt-5 text-[clamp(3.8rem,7vw,7.7rem)] font-black leading-[0.88] tracking-[-0.075em]">{data.title[language]}</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-500">{data.intro[language]}</p>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <img src={data.image} alt={data.title.zh} className="aspect-[1.22/1] w-full object-cover" />
            <div className="absolute inset-y-0 right-0 w-3 bg-[var(--accent)]" />
          </Reveal>
        </div>
        <Metrics metrics={data.metrics} />
      </section>

      {data.regions ? <Regions data={data} /> : data.timeline ? <Timeline data={data} /> : <FeatureSections data={data} />}
      {data.heritageFeature && <HeritageContinuum language={language} />}
      {data.cultureFeature && <CinemaCuisineFeature language={language} />}
      {data.forceStructure && <MilitaryForceStructure />}

      <section className="border-t border-slate-300 bg-[var(--pale)]">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-14 md:grid-cols-[0.4fr_1.6fr] md:px-10 md:py-16">
          <span className="font-mono text-xs font-bold text-[var(--accent)]">SYNTHÈSE</span>
          <Reveal>
            <p className="max-w-5xl text-[clamp(1.7rem,3.3vw,3.7rem)] font-black leading-[1.08] tracking-[-0.045em]">{data.note}</p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function HomeRedesign({ language }) {
  const heroText = {
    zh: {
      eyebrow: 'PROJECT HEXAGONE',
      title: '法国，不只是一个国家，而是一套被组织出来的世界。',
      intro: '从军工、地缘、历史到体育、文化与全球领土，这个首页把法国拆成可浏览的七个维度。参考图里的深海军蓝、法式衬线标题、拼贴主视觉和玻璃数据层，我把首页从 0 重做成一个资料馆式入口。',
      primary: '进入全景档案',
      secondary: '浏览七个维度',
      meta: ['深海蓝基底', '法式衬线标题', '拼贴主视觉', '玻璃数据层']
    },
    fr: {
      eyebrow: 'PROJECT HEXAGONE',
      title: 'La France, une idee qui se lit comme un atlas.',
      intro: 'De la defense aux territoires, de l’histoire au sport et a la culture, cette page d’accueil recompose la France en sept dimensions navigables. Les trois images de reference m’ont servi de grammaire: bleu nuit, grand serif, collage, panneaux de verre.',
      primary: 'Entrer dans l’atlas',
      secondary: 'Explorer les dimensions',
      meta: ['Bleu nuit', 'Serif francais', 'Collage', 'Verre numerique']
    },
    en: {
      eyebrow: 'PROJECT HEXAGONE',
      title: 'France as a system, not a slogan.',
      intro: 'Defence, territory, history, sport and culture are reorganized into a navigable archive. The three references point to the same language: deep navy, large serif headings, collage imagery, glass data panels, and a cinematic sense of depth.',
      primary: 'Enter the atlas',
      secondary: 'Explore the dimensions',
      meta: ['Deep navy base', 'Serif headline', 'Collage hero', 'Glass data layer']
    }
  }[language];

  const pillars = [
    ['01', { zh: '军工', fr: 'Arsenal', en: 'Arsenal' }, { zh: '核威慑、航空、海军和陆战体系。', fr: 'Dissuasion, air, mer et terre.', en: 'Deterrence, air, sea and land systems.' }, ShieldChevron],
    ['02', { zh: '地缘', fr: 'Statecraft', en: 'Statecraft' }, { zh: '联盟中的自主权与全球部署。', fr: 'Autonomie, alliances et projection.', en: 'Autonomy, alliances and projection.' }, Buildings],
    ['03', { zh: '历史', fr: 'History', en: 'History' }, { zh: '革命、帝国、战争与重建的断裂。', fr: 'Ruptures, empires, guerres et reconstructions.', en: 'Ruptures, empires, wars and reconstruction.' }, BookOpenText],
    ['04', { zh: '领土', fr: 'Territories', en: 'Territories' }, { zh: '海外领地、海洋和四大洋存在。', fr: 'Outre-mer, oceans et presence mondiale.', en: 'Overseas land, oceans and a global footprint.' }, MapTrifold],
    ['05', { zh: '体育', fr: 'Sport', en: 'Sport' }, { zh: '国家队、青训与全球赛事。', fr: 'Equipes, formation et competi­tions.', en: 'Teams, development and world events.' }, Basketball],
    ['06', { zh: '美学', fr: 'Aesthetics', en: 'Aesthetics' }, { zh: '料理、电影、铁路、时尚与生活方式。', fr: 'Cuisine, cinema, rail, mode et art de vivre.', en: 'Cuisine, cinema, rail, fashion and art de vivre.' }, Sparkle],
    ['07', { zh: '科学', fr: 'Science', en: 'Science' }, { zh: '航空、研究、能源与工业体系。', fr: 'Aerospace, recherche, energie et industrie.', en: 'Aerospace, research, energy and industry.' }, Atom]
  ];

  const metrics = [
    ['551,695', { zh: '平方公里本土面积', fr: 'km² metropolitains', en: 'km² mainland area' }],
    ['11,000,000', { zh: '平方公里专属经济区', fr: 'km² de ZEE', en: 'km² of EEZ' }],
    ['67M', { zh: '法语人口影响圈', fr: 'locuteurs et influence', en: 'French-speaking influence' }],
    ['UNSC', { zh: '常任理事国席位', fr: 'siege permanent', en: 'permanent seat' }]
  ];

  const timeline = [
    ['1789', { zh: '革命把主权转交给公民。', fr: 'La souverainete passe au citoyen.', en: 'Sovereignty moves to the citizen.' }],
    ['1805', { zh: '帝国把国家机器推向欧洲。', fr: "L'Empire projette l'Etat en Europe.", en: 'The state is projected across Europe.' }],
    ['1940', { zh: '失败与抵抗重写共和国的合法性。', fr: 'Defaite et Resistance refondent la legitimite.', en: 'Defeat and resistance reshape legitimacy.' }],
    ['1958', { zh: '第五共和国重建执行力。', fr: 'La Ve Republique renforce l’executif.', en: 'The Fifth Republic strengthens execution.' }],
    ['2024', { zh: '法国继续在海洋与联盟之间运作。', fr: 'La France opère entre mer et alliances.', en: 'France still operates between sea and alliances.' }]
  ];

  const [activePillar, setActivePillar] = useState(0);

  return (
    <main className="home-redesign site-page">
      <section className="home-hero-section">
        <div className="mx-auto grid min-h-[100dvh] max-w-[1440px] gap-4 px-4 py-4 lg:grid-cols-[260px_1fr] lg:px-8 lg:py-8">
          <aside className="home-sidebar">
            <div className="home-brand">
              <div className="home-brand-mark">HEX</div>
              <div>
                <p>PROJECT HEXAGONE</p>
                <span>France in depth</span>
              </div>
            </div>
            <nav className="home-nav" aria-label="home">
              {navItems.map(item => (
                <a key={item.key} href={item.href}>{item.label[language]}</a>
              ))}
            </nav>
            <div className="home-sidebar-foot">
              <span>FR</span><span>EN</span><span>中文</span>
            </div>
          </aside>

          <section className="home-hero-stage">
            <div className="home-hero-copy">
              <p className="eyebrow accent">{heroText.eyebrow}</p>
              <h1 className="home-hero-title">{heroText.title}</h1>
              <p className="home-hero-intro">{heroText.intro}</p>
              <div className="home-hero-actions">
                <a href="#home-dimensions" className="home-primary">{heroText.primary} <ArrowRight size={18} /></a>
                <a href="#home-map" className="home-secondary">{heroText.secondary}</a>
              </div>
              <div className="home-meta-strip">
                {heroText.meta.map(item => <span key={item}>{item}</span>)}
              </div>
            </div>

            <div className="home-hero-visual">
              <img src={`${base}/assets/images/site/home-france-depths.png`} alt="France collage panorama" className="home-hero-image" />
              <div className="home-hero-glass">
                <div className="home-glass-heading">{heroText.eyebrow}</div>
                <div className="home-glass-metrics">
                  {metrics.map(([value, label]) => (
                    <div key={value} className="home-glass-metric">
                      <strong>{value}</strong>
                      <span>{label[language]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section id="home-dimensions" className="home-dimensions">
        <div className="mx-auto max-w-[1440px] px-4 py-4 lg:px-8">
          <div className="home-section-head">
            <p className="eyebrow accent">LA FRANCE EN 7 DIMENSIONS</p>
            <h2>七个入口，共同拼出法国的结构。</h2>
          </div>
          <div className="home-pillar-rail">
            {pillars.map(([number, label, copy, Icon], index) => (
              <button
                key={label.en}
                type="button"
                onClick={() => setActivePillar(index)}
                className={`home-pillar ${activePillar === index ? 'is-active' : ''}`}
              >
                <div className="home-pillar-top">
                  <span>{number}</span>
                  <Icon size={20} weight="thin" />
                </div>
                <b>{label[language]}</b>
                <p>{copy[language]}</p>
                <div className="home-pillar-arrow"><ArrowRight size={16} /></div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="home-band">
        <div className="home-band-track">
          {metrics.concat(metrics).map(([value, label], index) => (
            <div key={`${value}-${index}`} className="home-band-item">
              <span>{value}</span>
              <p>{label[language]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-archive-grid">
        <div className="mx-auto grid max-w-[1440px] gap-4 px-4 py-4 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <article id="home-map" className="home-panel home-map-panel">
            <p className="eyebrow accent">WORLD PRESENCE</p>
            <h3>一个帝国式但克制的海洋版图。</h3>
            <p>把海外领地、海岸线和四大洋连接成一个可阅读的全球层次。</p>
            <img src={`${base}/assets/images/site/territories-hero.png`} alt="World map and overseas territories" />
          </article>

          <article className="home-panel home-timeline-panel">
            <p className="eyebrow accent">INTERACTIVE TIMELINE</p>
            <h3>断裂不是噪音，而是国家重构的节点。</h3>
            <div className="home-timeline">
              {timeline.map(([year, copy], index) => (
                <button key={year} type="button" className={`home-timeline-item ${index === 0 ? 'is-active' : ''}`}>
                  <span>{year}</span>
                  <p>{copy[language]}</p>
                </button>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="home-footer-note">
        <div className="mx-auto max-w-[1440px] px-4 py-4 lg:px-8">
          <p>法国不是单点叙述，而是军工、地缘、历史、体育与文化共同构成的系统。</p>
        </div>
      </section>
    </main>
  );
}

function Metrics({ metrics }) {
  return (
    <div className="mx-auto grid max-w-[1440px] border-l border-t border-slate-300 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map(([value, label]) => (
        <div key={value + label} className="min-h-24 border-b border-r border-slate-300 p-5">
          <strong className="block text-3xl font-black text-[var(--accent)]">{value}</strong>
          <span className="mt-2 block text-xs text-slate-500">{label}</span>
        </div>
      ))}
    </div>
  );
}

function FeatureSections({ data }) {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
      <Reveal className="max-w-3xl">
        <p className="eyebrow accent">SYSTEMS, NOT OBJECTS</p>
        <h2 className="section-title">实力来自系统，而不是孤立的符号。</h2>
      </Reveal>
      <div className="mt-10 border-t border-slate-300">
        {data.sections.map((section, index) => {
          const SectionIcon = section.icon;
          return (
            <Reveal key={section.title}>
              <article className="grid gap-6 border-b border-slate-300 py-7 md:grid-cols-[70px_0.8fr_1.2fr] md:items-start">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-[var(--accent)]">0{index + 1}</span>
                  <SectionIcon size={25} weight="thin" className="text-[var(--accent)]" />
                </div>
                <div>
                  <p className="font-mono text-[10px] font-bold tracking-[0.1em] text-[var(--accent)]">{section.subtitle}</p>
                  <h3 className="mt-3 text-3xl font-black tracking-[-0.04em]">{section.title}</h3>
                </div>
                <p className="max-w-2xl text-sm leading-8 text-slate-500">{section.text}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Regions({ data }) {
  const [active, setActive] = useState(0);
  const region = data.regions[active];
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
      <Reveal className="max-w-3xl">
        <p className="eyebrow accent">A COUNTRY IN FOUR OCEANS</p>
        <h2 className="section-title">领土分散，主权相连。</h2>
      </Reveal>
      <div className="mt-10 grid border border-slate-300 bg-white lg:grid-cols-[300px_1fr]">
        <div className="border-b border-slate-300 lg:border-b-0 lg:border-r">
          {data.regions.map((item, index) => (
            <button key={item[0]} onClick={() => setActive(index)} className={`region-button ${active === index ? 'is-active' : ''}`}>{item[0]}</button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={region[0]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid min-h-[360px] content-between p-8 md:p-10">
            <span className="font-mono text-xs font-bold text-[var(--accent)]">0{active + 1} / 04</span>
            <div>
              <h3 className="text-[clamp(2.7rem,5vw,5.5rem)] font-black leading-none tracking-[-0.06em]">{region[0]}</h3>
              <p className="mt-5 text-xl font-bold">{region[1]}</p>
              <p className="mt-4 max-w-xl text-sm leading-8 text-slate-500">{region[2]}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function Timeline({ data }) {
  const [active, setActive] = useState(0);
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
      <Reveal className="max-w-3xl">
        <p className="eyebrow accent">FIVE RUPTURES</p>
        <h2 className="section-title">改变国家方向的五个断裂点。</h2>
      </Reveal>
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="border-t border-slate-300">
          {data.timeline.map((item, index) => (
            <button key={item[0]} onClick={() => setActive(index)} className={`timeline-button ${active === index ? 'is-active' : ''}`}>
              <span>{item[0]}</span><b>{item[1]}</b>
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.article key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="min-h-[360px] bg-[var(--pale)] p-8 md:p-10">
            <span className="font-mono text-xs font-bold text-[var(--accent)]">{data.timeline[active][0]}</span>
            <h3 className="mt-10 text-[clamp(3rem,6vw,6.8rem)] font-black leading-[0.9] tracking-[-0.07em]">{data.timeline[active][1]}</h3>
            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600">{data.timeline[active][2]}</p>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}

function HeritageContinuum({ language }) {
  const sites = [
    ['8th-16th c.', { zh: '修道院与宗教城市', fr: 'Abbayes et villes religieuses', en: 'Abbeys and religious cities' }, { zh: '圣米歇尔山等遗址把信仰、海岸防御与石砌工程叠合。', fr: 'Le Mont-Saint-Michel relie foi, défense côtière et construction en pierre.', en: 'Sites such as Mont-Saint-Michel combine faith, coastal defence and stone engineering.' }],
    ['12th-14th c.', { zh: '城墙与封建秩序', fr: 'Remparts et ordre féodal', en: 'Walls and feudal order' }, { zh: '卡尔卡松等城堡城市保存领主权力、贸易路线与边境战争的空间结构。', fr: 'Carcassonne conserve la géographie du pouvoir, des routes commerciales et des frontières.', en: 'Carcassonne preserves the geography of lordship, trade routes and frontier conflict.' }],
    ['18th c.', { zh: '启蒙时代的生产规划', fr: 'Produire au siècle des Lumières', en: 'Production in the Enlightenment' }, { zh: '阿尔克-塞南皇家盐场把工业生产第一次组织成完整的建筑秩序。', fr: "La saline royale d'Arc-et-Senans transforme la production en ordre architectural.", en: 'The Royal Saltworks at Arc-et-Senans turns production into an architectural system.' }],
    ['19th c.', { zh: '煤、钢铁与铁路', fr: 'Charbon, acier et rail', en: 'Coal, steel and rail' }, { zh: '勒克勒佐与洛林工业区留下高炉、矿井、工人城和铁路基础设施。', fr: 'Le Creusot et la Lorraine conservent hauts-fourneaux, mines, cités ouvrières et voies ferrées.', en: 'Le Creusot and Lorraine retain blast furnaces, mines, worker housing and railway infrastructure.' }]
  ];

  return (
    <section className="heritage-continuum border-t border-slate-300">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
        <Reveal className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <h2 className="text-[clamp(2.8rem,5vw,5.5rem)] font-black leading-[0.95] tracking-[-0.065em]">{({ zh: '石头没有退场，钢铁只是叠了上去。', fr: "La pierre demeure. L'acier s'y superpose.", en: 'Stone remained. Steel was layered on top.' })[language]}</h2>
          <p className="max-w-2xl text-sm leading-8 text-slate-400">{({
            zh: '法国的现代化不是清空旧世界，而是在修道院、城墙、运河和乡镇之间嵌入工厂、矿井与铁路。',
            fr: "La modernisation française insère usines, mines et chemins de fer parmi abbayes, remparts, canaux et bourgs anciens.",
            en: 'French modernisation inserted factories, mines and railways among abbeys, walls, canals and older towns.'
          })[language]}</p>
        </Reveal>
        <Reveal delay={0.08} className="heritage-continuum-frame mt-10">
          <img src={`${base}/assets/images/site/epochs-heritage-industry.png`} alt="法国中世纪修道院、城堡与工业革命铁路和钢铁设施组成的历史遗迹全景" />
        </Reveal>
        <p className="mt-3 text-xs leading-6 text-slate-500">{({ zh: '视觉合成：用于呈现历史层叠关系，不代表同一处真实遗址。', fr: "Composition visuelle montrant la superposition des époques, sans représenter un site unique.", en: 'A visual composite showing layers of history, not a single real site.' })[language]}</p>
        <div className="heritage-site-rail mt-8">
          {sites.map(([date, title, copy]) => (
            <article key={date}>
              <span>{date}</span>
              <h3>{title[language]}</h3>
              <p>{copy[language]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CinemaCuisineFeature({ language }) {
  const lenses = [
    [{ zh: '料理', fr: 'Cuisine', en: 'Cuisine' }, { zh: '普罗旺斯蔬菜、厨房技艺与米其林体系成为叙事核心。', fr: 'Légumes provençaux, gestes culinaires et système Michelin deviennent récit.', en: 'Provençal vegetables, kitchen craft and the Michelin system become narrative material.' }],
    [{ zh: '巴黎', fr: 'Paris', en: 'Paris' }, { zh: '屋顶、巷道、市场与餐厅后厨共同塑造可传播的城市想象。', fr: 'Toits, rues, marchés et cuisines composent un imaginaire urbain exportable.', en: 'Rooftops, streets, markets and kitchens form an exportable image of the city.' }],
    [{ zh: '影响力', fr: 'Influence', en: 'Influence' }, { zh: '一部动画电影把法国料理从专业制度转化为全球观众都能理解的情感语言。', fr: "Un film d'animation transforme la cuisine française en langage émotionnel mondial.", en: 'An animated film turns French cuisine into an emotional language understood worldwide.' }]
  ];

  return (
    <section className="cinema-cuisine-feature border-t border-slate-300">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[1.18fr_0.82fr]">
        <Reveal className="cinema-cuisine-frame">
          <img src={`${base}/assets/images/site/aesthetics-ratatouille-culture.png`} alt="巴黎屋顶厨房中一只小老鼠正在制作法式普罗旺斯炖菜的原创文化插画" />
        </Reveal>
        <Reveal delay={0.08} className="px-5 py-14 md:px-10 md:py-16 lg:px-12">
          <CookingPot size={44} weight="thin" className="text-[var(--accent)]" />
          <h2 className="mt-7 text-[clamp(2.8rem,5vw,5.4rem)] font-black leading-[0.94] tracking-[-0.065em]">{({ zh: '《料理鼠王》把法国端上了全球银幕。', fr: 'Ratatouille met la France à table sur les écrans du monde.', en: 'Ratatouille served France to a global audience.' })[language]}</h2>
          <p className="mt-7 max-w-xl text-sm leading-8 text-slate-400">{({
            zh: '皮克斯 2007 年动画电影把巴黎、厨师制度与普罗旺斯料理压缩成易于理解的文化入口。它不是法国文化本身，却显著放大了全球观众对法国料理的想象。',
            fr: "Le film Pixar de 2007 condense Paris, la brigade de cuisine et la ratatouille en une porte d'entrée culturelle mondiale.",
            en: "Pixar's 2007 animated film condenses Paris, the kitchen brigade and Provençal cooking into a widely understood cultural gateway."
          })[language]}</p>
          <div className="cinema-cuisine-lenses mt-9">
            {lenses.map(([title, copy]) => <div key={title.zh}><b>{title[language]}</b><span>{copy[language]}</span></div>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MilitaryForceStructure() {
  const forces = [
    {
      name: '法兰西海军完全体',
      en: 'The Ultimate Marine Nationale',
      icon: ShieldChevron,
      total: '7 航母战备轮转',
      groups: [
        {
          title: '核心打击力量',
          items: [
            ['PANG France Libre class', '3 艘', '新一代核动力航母，搭载 FCAS 六代机与电磁弹射系统。'],
            ['戴高乐级 R91 / R92', '4 艘', '深度延寿的中型核动力支援航母。'],
            ['布列塔尼级两栖航母', '4 艘', '4.5 万吨航空平台，搭载 14 至 20 架 Rafale-V。'],
            ['西北风级 LHD', '8 艘', '全球投送、无人机蜂群母舰与两栖登陆核心。']
          ]
        },
        {
          title: '远洋防空与舰队基石',
          items: [
            ['万吨级大型驱逐舰', '9 艘', '128 单元 VLS，承担远程反导与舰队区域防空。'],
            ['地平线级驱逐舰', '12 艘', '区域防空指挥核心。'],
            ['FREMM 改进型', '17 艘', '反潜与 MdCN 陆攻主力。'],
            ['FDI 数字化护卫舰', '16 艘', '分布式作战与中近程防御。']
          ]
        },
        {
          title: '水下禁区',
          items: [
            ['梭鱼级攻击核潜艇', '24 艘', '大西洋与地中海水下控制力量。'],
            ['雷霆级 SSGN', '6 艘', '84 枚级巡航或高超音速导弹搭载能力，并支持特战与 UUV。'],
            ['SNLE 3G', '6 艘', '第三代战略核威慑平台。']
          ]
        }
      ]
    },
    {
      name: '法兰西空天军完全体',
      en: 'The Imperial Air & Space Force',
      icon: AirplaneTilt,
      total: '900+ 战机总库存',
      groups: [
        {
          title: '战机编队',
          items: [
            ['FCAS 六代机', '200 架', '维持 4 个隐身突击联队。'],
            ['Rafale F5 / F6', '450 架', '空军与航母航空兵主力。'],
            ['Rafale F4', '150 架', '本土防空与战术核打击备份。'],
            ['LIFT 高级教练机', '200 架', '训练、轻型攻击与飞行员储备。']
          ]
        },
        {
          title: '电子战与天基监测',
          items: [
            ['Archange SIGINT', '15 架', '雷达频率情报与电子战数据库采集。'],
            ['Rafale-E', '40 架', 'SEAD、防空压制与高能干扰。'],
            ['CSO 3G', '3 个集群', '全天候全球军事侦察网络。']
          ]
        },
        {
          title: '战略投送',
          items: [
            ['A330 MRTT', '60 架', '岸基与航母航空兵持续加油支援。'],
            ['A400M', '80 架', '重装部队与远程战区运输。'],
            ['A380-M', '20 架', '特重型战略货运平台。']
          ]
        }
      ]
    },
    {
      name: 'R.I.F. 陆军完全体',
      en: 'The Imperial Land Force',
      icon: Crosshair,
      total: '1,500,000 现役兵力',
      groups: [
        {
          title: '人员与无人体系',
          items: [
            ['职业化现役部队', '150 万人', '数字化外骨骼与神经元链路配置。'],
            ['地面无人战斗单位 UGV', '50 万台', '承担侦察、排雷与高危突击任务。']
          ]
        },
        {
          title: '重装突击力量',
          items: [
            ['Leclerc 2.0', '5,500 辆', '140mm 主炮、360° APS 与车载无人机指挥台。'],
            ['AFV / IFV', '28,000 辆', 'VBCI 2.0、Jaguar 与 VBMR 组成全机械化集群。']
          ]
        },
        {
          title: '火炮、防空与陆航',
          items: [
            ['CAESAR Mk3', '2,500 门', '自动化 155mm 轮式自行火炮。'],
            ['远程火箭炮', '800 门', '150 至 300 公里纵深火力。'],
            ['SAMP/T NG 移动版', '2,000 套', '伴随防空与巡航导弹拦截。'],
            ['Tiger Mk3', '600 架', 'MUM-T 有人和无人协同攻击直升机。'],
            ['NH90 / H225M', '1,200 架', '大规模垂直登陆与极地增援。']
          ]
        }
      ]
    }
  ];

  const [activeForce, setActiveForce] = useState(0);
  const force = forces[activeForce];
  const ForceIcon = force.icon;

  return (
    <section className="military-force-section border-t border-slate-300">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
        <Reveal className="max-w-4xl">
          <p className="eyebrow accent">R.I.F. ALTERNATE FORCE STRUCTURE</p>
          <h2 className="section-title">法兰西共和国帝国军队完全体配置。</h2>
          <p className="mt-7 max-w-3xl text-sm leading-8 text-slate-500">以下内容直接依据 military.txt 整理，属于架空世界观军力方案，并非现实法国武装力量现状。</p>
        </Reveal>

        <div className="mt-10 grid border border-slate-300 bg-white lg:grid-cols-[300px_1fr]">
          <div className="border-b border-slate-300 lg:border-b-0 lg:border-r">
            {forces.map((item, index) => (
              <button key={item.name} type="button" onClick={() => setActiveForce(index)} className={`region-button ${activeForce === index ? 'is-active' : ''}`}>
                {item.name}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={force.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-7 md:p-12">
              <div className="flex flex-wrap items-start justify-between gap-6 border-b border-slate-300 pb-8">
                <div>
                  <div className="flex items-center gap-3 text-[var(--accent)]"><ForceIcon size={28} weight="thin" /><span className="font-mono text-xs">{force.en}</span></div>
                  <h3 className="mt-4 text-4xl font-black tracking-[-0.05em]">{force.name}</h3>
                </div>
                <strong className="text-xl text-[var(--accent)]">{force.total}</strong>
              </div>

              <div className="mt-4">
                {force.groups.map((group, groupIndex) => (
                  <article key={group.title} className="grid gap-5 border-b border-slate-300 py-8 xl:grid-cols-[180px_1fr]">
                    <div>
                      <span className="font-mono text-xs text-[var(--accent)]">0{groupIndex + 1}</span>
                      <h4 className="mt-3 font-black">{group.title}</h4>
                    </div>
                    <div className="grid gap-px bg-slate-300 md:grid-cols-2">
                      {group.items.map(([name, count, copy]) => (
                        <div key={name} className="military-item bg-white p-5">
                          <div className="flex items-start justify-between gap-4">
                            <b>{name}</b>
                            <strong className="shrink-0 text-[var(--accent)]">{count}</strong>
                          </div>
                          <p className="mt-5 text-xs leading-6 text-slate-500">{copy}</p>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function SportPage({ language }) {
  const territories = [
    ['巴黎', '法网、巴黎奥运与法兰西体育场把城市文化和全球赛事连接起来。'],
    ['阿尔卑斯', '环法自行车赛把山地、旅游与耐力竞技变成移动国家舞台。'],
    ['西南部', 'Top 14 与地方俱乐部维持法国最深厚的橄榄球文化。'],
    ['勒芒', '24 小时耐力赛把工程能力转化为全球赛事品牌。']
  ];
  const [active, setActive] = useState(0);

  return (
    <main style={{ '--accent': '#1f55d5', '--pale': '#e6edfb' }} className="topic-page pt-[76px]">
      <section className="bg-white">
        <div className="mx-auto grid min-h-[640px] max-w-[1440px] items-center gap-10 px-5 py-10 lg:grid-cols-[0.72fr_1.28fr] lg:px-10">
          <Reveal>
            <div className="flex items-center gap-4 text-[var(--accent)]"><span className="font-mono text-xs font-bold">04 / 06</span><Basketball size={28} weight="thin" /></div>
            <p className="mt-8 font-mono text-[11px] font-bold tracking-[0.13em] text-[var(--accent)]">SPORT · TERRITOIRE · INFLUENCE</p>
            <h1 className="mt-5 text-[clamp(3.8rem,7vw,7.7rem)] font-black leading-[0.88] tracking-[-0.075em]">
              {language === 'fr' ? 'La France en mouvement' : language === 'en' ? 'France in Motion' : <>法国，<br />在运动中</>}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-500">从国家队、青训学院到世界级赛事，法国用体育连接城市、产业、文化与国际影响力。</p>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <img src={`${base}/assets/images/arena/france-sport-panorama-v2.png`} alt="法国多项目体育全景" className="aspect-[1.22/1] w-full object-cover" />
            <div className="absolute inset-y-0 right-0 w-3 bg-[var(--accent)]" />
          </Reveal>
        </div>
        <Metrics metrics={[['2', '男足世界杯冠军'], ['1903', '首届环法'], ['1 / 4', '主办网球大满贯'], ['2024', '巴黎奥运会']]} />
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
        <Reveal className="max-w-4xl"><p className="eyebrow accent">FIFA WORLD CUP 26</p><h2 className="section-title">第三颗星，是一项国家工程。</h2></Reveal>
        <div className="mt-10 grid border border-slate-300 bg-white lg:grid-cols-[0.62fr_1.38fr]">
          <div className="grid min-h-[460px] place-items-center bg-blue-700 p-10 text-white">
            <div className="text-center"><span className="text-sm tracking-[0.3em]">FRANCE</span><strong className="mt-8 block text-[10rem] leading-none tracking-[-0.13em]">10</strong><b>MBAPPÉ</b></div>
          </div>
          <div className="p-7 md:p-12">
            {[['16 JUN', 'FRANCE / SENEGAL', 'NEW YORK'], ['22 JUN', 'FRANCE / IRAQ', 'PHILADELPHIA'], ['26 JUN', 'NORWAY / FRANCE', 'BOSTON']].map((match, index) => (
              <div key={match[0]} className="grid gap-3 border-b border-slate-200 py-7 md:grid-cols-[90px_1fr_160px] md:items-center">
                <span className="font-mono text-xs text-blue-700">{match[0]}</span><b className="text-2xl tracking-[-0.04em]">{match[1]}</b><small className="text-slate-400 md:text-right">{match[2]}</small>
              </div>
            ))}
            <p className="mt-9 max-w-2xl text-sm leading-8 text-slate-500">阵容深度、速度与中轴控制力决定法国能否把天赋转化为稳定的大赛统治。</p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
          <Reveal className="max-w-3xl"><p className="eyebrow accent">TWO ICONS</p><h2 className="section-title">两个坐标，同一种法国野心。</h2></Reveal>
          <div className="mt-10 grid gap-12">
            {[
              ['Kylian Mbappé', '世界杯冠军、国家队队长与法国足球最具全球辨识度的当代符号。', `${base}/assets/images/arena/mbappe.jpg`, ['2018 世界杯冠军', '2022 世界杯金靴', '法国队 10 号']],
              ['Victor Wembanyama', '改变 NBA 空间尺度的新核心，也是法国篮球人才体系的全球证明。', `${base}/assets/images/arena/wembanyama.jpg`, ['2023 选秀状元', '2024 最佳新秀', '巴黎奥运银牌']]
            ].map((person, index) => (
              <Reveal key={person[0]}>
                <article className={`grid items-center gap-10 lg:grid-cols-2 ${index % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  <img src={person[2]} alt={person[0]} className="h-[480px] w-full object-cover object-top" loading="lazy" />
                  <div>
                    <span className="font-mono text-xs font-bold text-blue-700">{index ? 'BASKETBALL' : 'FOOTBALL'}</span>
                    <h3 className="mt-4 text-[clamp(3.2rem,6vw,6.5rem)] font-black leading-[0.88] tracking-[-0.075em]">{person[0]}</h3>
                    <p className="mt-7 max-w-xl text-base leading-8 text-slate-500">{person[1]}</p>
                    <div className="mt-8 grid border-t border-slate-300 sm:grid-cols-3">{person[3].map(x => <span key={x} className="border-b border-slate-300 py-5 text-xs font-bold sm:border-b-0">{x}</span>)}</div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
        <Reveal className="max-w-3xl"><p className="eyebrow accent">SPORTING GEOGRAPHY</p><h2 className="section-title">法国国土，本身就是竞技场。</h2></Reveal>
        <div className="mt-10 grid border border-slate-300 bg-white lg:grid-cols-[280px_1fr]">
          <div className="border-b border-slate-300 lg:border-b-0 lg:border-r">{territories.map((item, i) => <button key={item[0]} onClick={() => setActive(i)} className={`region-button ${active === i ? 'is-active' : ''}`}>{item[0]}</button>)}</div>
          <div className="grid min-h-[300px] content-center p-8 md:p-10"><span className="font-mono text-xs text-blue-700">0{active + 1}</span><h3 className="mt-6 text-5xl font-black">{territories[active][0]}</h3><p className="mt-5 max-w-xl text-sm leading-8 text-slate-500">{territories[active][1]}</p></div>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('hexagone-language') || 'zh');
  useEffect(() => {
    localStorage.setItem('hexagone-language', language);
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : language;
  }, [language]);

  const content = useMemo(() => {
    if (pageKey === 'home') return <HomeRedesign language={language} />;
    if (pageKey === 'arsenal') return <ArsenalPage language={language} />;
    if (pageKey === 'territories') return <TerritoriesPage language={language} />;
    if (pageKey === 'sport' || pageKey === 'arena') return <SportPage language={language} />;
    return <StandardTopic data={pages[pageKey] || pages.statecraft} language={language} />;
  }, [language]);

  return (
    <>
      {pageKey !== 'home' && <Header language={language} setLanguage={setLanguage} />}
      {content}
      {pageKey !== 'home' && <Footer language={language} />}
    </>
  );
}
