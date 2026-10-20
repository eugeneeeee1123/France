// Hexagone prototype data (ES module). Modules + eras copied from ui_kits/website/data.js.
const mk = (n, key, name, hue, bullets, extra) => Object.assign({ n, key, name, hue, bullets }, extra || {});
  const T = '../../assets/images/';
  const MODULES = [
    mk('01', 'arsenal', 'ARSENAL', 236, ['Arme nucléaire', 'Forces armées', 'Industrie de défense', 'OPEX & Légion étrangère'], {
      thumb: T + 'thumb-arsenal.jpg', subtitle: 'Puissance militaire', scenario: true,
      intro: "Depuis la force de frappe gaullienne jusqu'aux appareils de nouvelle génération, l'Arsenal français conjugue dissuasion nucléaire, industrie souveraine et projection de force.",
      why: "Parce que la dissuasion nucléaire et une armée expéditionnaire restent, pour la France, la garantie ultime de sa liberté d'action.",
      how: 'Une dissuasion océanique et aéroportée, une industrie de défense souveraine, des forces projetables sur tous les théâtres.',
      what: 'Un scénario prospectif 2035-2040 : sous-marins de nouvelle génération, Rafale F5, un second porte-avions.',
      textLang: 'fr', links: ['statecraft', 'economy', 'francophonie'],
      heroPlaceholder: 'Concept art requis — Rafale F5, vue trois quarts (matériel spéculatif, §7)',
      stats: [{ value: '290', label: 'têtes nucléaires (scénario)' }, { value: '4', label: 'SNLE nouvelle génération' }, { value: '225', label: 'Rafale F5 (scénario 2035)' }, { value: '2', label: 'groupes aéronavals' }],
      body: "Le scénario prospectif présenté ici prolonge les programmes déjà engagés (Rafale F5, sous-marins Suffren, futur porte-avions) jusqu'à un horizon 2035-2040, pour explorer ce que pourrait être la puissance française si ces trajectoires se confirment.",
    }),
    mk('02', 'statecraft', 'STATECRAFT', 272, ['Ve République', 'Politique étrangère', 'Union européenne', 'Francophonie & influence'], {
      thumb: T + 'thumb-statecraft.jpg', subtitle: 'Gouvernance & institutions', textLang: 'zh', links: ['arsenal', 'francophonie'],
      why: '决策自主不受制于联盟多数意见', how: '第五共和国总统制 + 戴高乐主义独立外交路线', what: '退出北约指挥体系、欧洲干预倡议' }),
    mk('03', 'epochs', 'EPOCHS', 56, ["Des Gaulois à aujourd'hui", 'Révolutions & Empires', 'Deux guerres mondiales', 'La France contemporaine'], {
      thumb: T + 'thumb-epochs.jpg', subtitle: 'Notre histoire', textLang: 'zh', links: [],
      why: '今天的能力都是历史断裂重构出来的', how: '中央集权→大革命→拿破仑法典→戴高乐主义', what: '全站 Timeline 组件的数据源' }),
    mk('04', 'territories', 'TERRITORIES', 200, ['Hexagone & régions', 'Outre-mer & territoires', 'ZEE & espaces maritimes', 'Exploration & recherche'], {
      thumb: T + 'thumb-territories.jpg', subtitle: 'Géographie & outre-mer', textLang: 'zh', links: ['industry', 'arsenal'],
      why: '领土纵深决定全球到达能力', how: '海外省 + 1100万 km² EEZ + 军事支点（FAZSOI 等）', what: '六大洲存在、全球第二大 EEZ' }),
    mk('05', 'arena', 'ARENA', 20, ['Football & Coupe du monde', 'Tour de France', 'Roland Garros & tennis', 'JO & champions français'], {
      thumb: T + 'thumb-arena.jpg', subtitle: 'Sport & compétition', heroImage: '../../assets/editorial/fff-crest.png', heroCredit: 'Écusson de la Fédération Française de Football — usage éditorial / archive uniquement', textLang: 'zh', links: ['statecraft'],
      why: '体育是国家认同与融合叙事的展示窗', how: '移民融合模式 + 国家体育投入', what: '世界杯冠军、姆巴佩融合叙事' }),
    mk('06', 'aesthetics', 'AESTHETICS', 344, ['Art & architecture', 'Cinéma & littérature', 'Mode & luxe', 'Gastronomie française'], {
      thumb: T + 'thumb-aesthetics.jpg', subtitle: 'Culture & art de vivre', textLang: 'zh', links: ['francophonie'],
      why: '文化输出转化为全球话语权', how: '文化例外原则 + 电影/时尚/艺术产业保护', what: '戛纳、卢浮宫、Paris+ 艺博会' }),
    mk('07', 'science', 'SCIENCE', 164, ['Ariane & espace', 'Nucléaire & énergie', 'Mathématiques', 'Recherche & CNRS'], {
      textLang: 'zh', links: ['industry', 'economy'],
      why: '科研自主是长期国力的地基', how: 'CNRS/CNES/ESA最大出资国 + 量子/AI战略', what: 'Ariane 6、Mistral AI、菲尔兹奖 13 人' }),
    mk('08', 'economy', 'ECONOMY', 308, ['CAC 40 & multinationales', 'Luxe & savoir-faire', 'Agriculture & vin', 'Transports & infrastructures'], {
      textLang: 'zh', links: ['industry', 'francophonie'],
      why: '经济体量支撑军费与外交筹码', how: 'CAC 40 跨国企业 + 农业自主 + 奢侈品资本', what: '全球第七大 GDP、LVMH 全球第一' }),
    mk('09', 'francophonie', 'FRANCOPHONIE', 128, ['Langue française', '57 pays membres', 'Influence culturelle', 'Avenir & perspectives'], {
      textLang: 'zh', links: ['aesthetics', 'statecraft'],
      why: '语言与文化是软实力的长期投资', how: 'OIF 88 国网络 + 文化院/法语联盟全球布点', what: '3.2亿母语者、2050 预测 7–8 亿使用者' }),
    mk('10', 'industry', 'INDUSTRY', 92, ['Défense & aéronautique', 'Énergie & nucléaire civil', 'Souveraineté technologique', 'Réindustrialisation'], {
      textLang: 'zh', scenario: true, links: ['arsenal', 'territories', 'economy'],
      why: '军事与外交自主的前提，是工业链不被"卡脖子"', how: '能源→军工→电子→交通→奢侈品资本化的全产业链', what: 'Rafale 全产业链自研、EPR2 核电扩张、Ariane 6 发射能力' }),
  ];

  
export { MODULES };
export const HOME_STATS = [
  { value: '551,695', label: { fr: 'km² hexagone', en: 'km² mainland', zh: '本土面积 km²' } },
  { value: '11,000,000', label: { fr: 'km² ZEE', en: 'km² EEZ', zh: '专属经济区 km²' } },
  { value: '67M+', label: { fr: 'population', en: 'population', zh: '人口' } },
  { value: '57', label: { fr: 'pays francophones', en: 'francophone countries', zh: '法语国家' } },
  { value: '2e', label: { fr: 'puissance maritime', en: 'maritime power', zh: '海洋强国' } },
  { value: 'P5', label: { fr: 'membre ONU', en: 'UN Security Council', zh: '安理会常任理事国' } },
];
export const ERAS = [
    { year: '-52', caption: "Victoire d'Alésia" }, { year: '1789', caption: 'Révolution française' }, { year: '1815', caption: 'Congrès de Vienne' },
    { year: '1870', caption: 'IIIe République' }, { year: '1940', caption: 'Seconde Guerre mondiale' }, { year: '1958', caption: 'Ve République' },
    { year: "Aujourd'hui", caption: 'Une France mondiale' },
  ];

  
export const DICT = {
  fr: { home: 'HOME', clock: 'Heure à Paris', eyebrowHero: 'La France sous tous les angles', cta: "Commencer l'exploration", bodyHero: "De la Gaule à l'espace, des profondeurs océaniques aux sommets de la pensée : explorez toutes les dimensions de la France et de son influence dans le monde.", statementEyebrow: 'Une seule question', statement: "Pourquoi la France est-elle, aujourd'hui encore, un acteur à l'échelle mondiale ? Dix modules répondent à une seule question.", statsEyebrow: 'La France en chiffres', eyebrowGrid: 'Explorez la France dans toutes ses dimensions', hexQuote: 'Un territoire présent sur toutes les mers du globe, de la Guyane à la Polynésie.', hexAttr: 'La France, puissance maritime', timelineEyebrow: "De la Gaule à aujourd'hui", explore: 'Explorer', related: 'Modules liés', breadcrumb: 'Home', next: 'Module suivant', footerNav: ['À propos', 'Sources', 'Contact', 'Mentions légales'], scenario: 'Scénario prospectif 2035-2040. Ces chiffres décrivent un scénario, pas la situation actuelle.', sourceNote: 'Texte source : plan de contenu v2 (中文). Traduction à venir.' },
  en: { home: 'HOME', clock: 'Heure à Paris', eyebrowHero: 'France from every angle', cta: 'Start exploring', bodyHero: 'From Gaul to space, from ocean trenches to the summits of thought: explore every dimension of France and its influence in the world.', statementEyebrow: 'One question', statement: 'Why is France still a global-scale player today? Ten modules answer a single question.', statsEyebrow: 'France in figures', eyebrowGrid: 'Explore every dimension of France', hexQuote: 'A territory present on every sea of the globe, from French Guiana to Polynesia.', hexAttr: 'France, a maritime power', timelineEyebrow: 'From Gaul to today', explore: 'Explore', related: 'Related modules', breadcrumb: 'Home', next: 'Next module', footerNav: ['About', 'Sources', 'Contact', 'Legal'], scenario: 'Speculative scenario 2035-2040. These figures describe a scenario, not current reality.', sourceNote: 'Source text: content plan v2 (中文). Translation pending.' },
  zh: { home: '首页', clock: 'Heure à Paris', eyebrowHero: '全方位解读法国', cta: '开始探索', bodyHero: '从高卢到太空，从深海到思想的顶峰，探索法国及其世界影响力的方方面面。', statementEyebrow: '一个问题', statement: '为什么法国至今仍是全球玩家？十个模块，从十个角度回答同一个问题。', statsEyebrow: '数字里的法国', eyebrowGrid: '探索法国的方方面面', hexQuote: '法国的领土遍布全球各大洋，从圭亚那到波利尼西亚。', hexAttr: '法国，海洋强国', timelineEyebrow: '从高卢到今天', explore: '探索', related: '相关板块', breadcrumb: '首页', next: '下一个模块', footerNav: ['关于', '资料来源', '联系我们', '法律声明'], scenario: '前瞻情景 2035-2040。以下数字描述的是一种情景，并非当前现实。', sourceNote: '来源：内容规划 v2。' },
};
