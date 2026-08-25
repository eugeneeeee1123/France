# Project Hexagone — Review & Roadmap

## 现有页面结构

| 页面 | 主题 |
|------|------|
| `index.html` | 首页 |
| `arsenal.html` | 军事 / 武装力量 |
| `statecraft.html` | 国家治理 / 外交 |
| `territories.html` | 领土（含海外省、水下地形）|
| `arena.html` + `sport.html` | 体育竞技 |
| `epochs.html` | 历史纪元 |
| `aesthetics.html` | 文化美学 |

---

## 一、内容补充清单

### 缺失的独立页面（建议新增）

| 页面 | 内容方向 |
|------|---------|
| `/pages/science.html` | 航天、核能、数学 |
| `/pages/francophonie.html` | 法语圈、文化输出 |
| `/pages/economy.html` | 产业、奢侈品、农业 |

---

### Arsenal（军事）

- 核三位一体详细拆解（M51导弹诸元、SSBN巡逻模式、空基ASMP-A）
- OPEX历史：马里、利比亚、中非、黎巴嫩 — 每次有背景+结果
- 对比表：法军 vs 北约其他成员的独立性程度
- 达索、MBDA、Naval Group、Thales 四大军工集团各自 profile
- 法国外籍军团（Légion étrangère）专题
- 核威慑哲学：tous azimuts 理论（戴高乐全方位威慑）

---

### Statecraft（治理 / 外交）

- 第五共和国宪法架构（半总统制的具体运作）
- 戴高乐主义 vs 马克龙主义对比
- 法国在联合国安理会否决权使用历史
- 非洲法语区（Françafrique）地缘关系
- 法德轴心的历史演变
- 欧盟内部法国的角色与影响力

---

### Epochs（历史）内容量最大，建议分子模块

- 高卢-罗马时期
- 法兰克王国 / 加洛林王朝
- 百年战争
- 太阳王路易十四 / 凡尔赛时代
- 大革命 + 拿破仑帝国（可单独拆子模块）
- 第三共和国 + 殖民帝国巅峰
- 两次世界大战 + 维希政府
- 戴高乐第五共和国
- 当代法国

每个断裂点（1789、1815、1848、1870、1940、1958）配"之前/之后"对比展示，比线性时间轴更有冲击力。

---

### Aesthetics（美学文化）

- **电影**：新浪潮运动（戈达尔、特吕弗）、戛纳体系
- **文学**：雨果、福楼拜、普鲁斯特、加缪、萨特
- **艺术**：印象派完整谱系、罗丹、当代艺术
- **时尚**：高定（Haute Couture）体系运作机制
- **美食**：米其林体系、AOC原产地命名、法餐 UNESCO 遗产地位
- **哲学**：启蒙 → 存在主义 → 后现代完整脉络（伏尔泰、卢梭、萨特、福柯、德里达）
- **建筑**：哥特式起源、奥斯曼巴黎改造、现代大工程（卢浮宫金字塔、蓬皮杜）

---

### Territories（领土）

- 每个海外省/领地独立 profile：马提尼克、瓜德罗普、留尼汪、法属圭亚那、新喀里多尼亚、法属波利尼西亚
- EEZ 可视化（全球第二，约 11M km²）
- 库鲁航天中心（Kourou）专题
- 雅克·库斯托（Jacques Cousteau）— 水肺潜水发明者，法国人
- Ifremer（法国海洋开发研究院）深海探测
- 法国本土地理分区：阿尔卑斯、比利牛斯、中央高原、莱茵河谷

---

### Arena / Sport（体育）

- 法国足球史：1998、2018 两届世界杯详述
- Tour de France 单独专区
- Roland Garros 红土文化
- 法国篮球：文班亚马、帕克时代
- 法国在奥运会的历史成绩

---

### 新增页面内容

**Science（科学与太空）**
- Ariane 火箭 / ESA 中法国的主导角色
- 库鲁航天中心（与 Territories 联动）
- CEA（原子能委员会）+ 核工业链
- CNRS 科研体系
- 菲尔兹奖得主数量（全球第二）

**Economy（经济与工业）**
- CAC 40 + 法国跨国企业（LVMH、道达尔、空客、雷诺、赛诺菲）
- 法国农业：全球最大农业出口国之一，AOC 体系
- 奢侈品工业的全球垄断地位
- TGV 高铁网络（首创国家）
- 核电（全球占比最高，约 70%）

**Francophonie（法语圈）**
- 法语：全球第5大语言，57国官方语言
- Organisation internationale de la Francophonie
- 法语在非洲的扩张预测（2050年法语人口预计超中文）

---

## 二、设计改进建议

### 现有问题

每个页面用独立色彩系统：
- `arena` — 蓝白（`--arena-blue`, `--arena-navy`）
- `territories` — 深海蓝（`#20a9ca`, `#06111b`）
- `epochs` — 暗红棕
- `aesthetics` — 紫粉

跨页一致性弱，跳页像在看不同网站。

---

### 具体建议

**1. 建立跨页设计 token**
在 `core.css` 里锁定全局字体比例、间距节奏、`--font-mono` 使用规则。各页只改 accent color，不要各自重复定义 `--arena-ink`、`--territory-xxx` 这种同义变量。

**2. 导航栏加页面标识符**
当前页的 module 用 accent color 高亮，让用户随时知道身在何处。

**3. 首页重设计**
用竖向分栏展示全部模块的视觉预览，每块用各自的 accent color。一屏传达整个网站的规模感。进阶方案：做一个**垂直深度轴**，太空在最上，海底在最下，六个模块按"高度"分布，用户往下滚就是在往深处走。

**4. Typography hierarchy 统一**
现在各页 `clamp()` 参数不一致，建议统一三档：
- Display：`clamp(5rem, 8vw, 8.5rem)`
- Section h2：`clamp(3rem, 5.6vw, 6.2rem)`
- Card h3：`1.1rem`

**5. 页面切换动画**
用 View Transitions API 做极简过渡（现代浏览器原生支持，零依赖）。

**6. 移动端 local-nav 优化**
`overflow-x: auto` 在小屏上 tab 被截断且无视觉提示。建议加左右 fade 遮罩，或改成 dropdown。

**7. 全局搜索**
内容量增大后导航会困难，至少做好锚点体系（`id` 统一命名规范），方便 `Ctrl+F`。

---

### 技术架构建议

**混合架构问题**
目前 Vite + React（`TerritoryInteractiveMap.jsx`）混合纯 HTML 页面，build 产物不一致。
- 方案A：把地图组件改成纯 vanilla JS（Leaflet CDN 直接引入）
- 方案B：整个项目迁移到 React 路由架构

**数据层**
把所有内容结构化成 JSON 放 `assets/data/`：
```
/assets/data/
  arsenal.json
  epochs.json
  territories.json
  aesthetics.json
  science.json
  economy.json
```
内容更新不需要动 HTML，组件从 JSON 读取渲染。

**`military.txt` 处理**
结构化成 JSON 放入 `assets/data/arsenal.json`，以后做动态渲染更方便。

**CSS 变量统一**
`agents.md` 要求 CSS 隔离，但目前部分页面有硬编码颜色（如 `#20a9ca`）。建议在 `core.css` 集中定义所有模块 accent colors 作为全局变量，agent 修改时有统一入口。

**i18n 早规划**
三语言目标（中/英/法）需要早期规划架构，后期改造成本极高。建议用 JSON 语言包 + data-attribute 切换方案。

---

## 三、Sport 页面 Banner 设计

### 设计决定

- 左右分屏对立：篮球（Wembanyama）vs 足球（Mbappé）
- 跟随 arena-v2 蓝白配色系统（`#071638`, `#1f4ed8`, `#5b8fff`）
- 背景大字为各自球衣号码（`1` / `10`）作装饰水印
- 三色旗用纯 CSS 三块色块拼合，无图片依赖
- 底部 3px accent bar 与 `--arena-blue` 保持一致
- 图片预留：过后在每个 panel 加 `position: absolute` 的 `<img>` + `object-fit: cover`，文字层用 `z-index` 盖上

### Stats 数据参考

| | Wembanyama（Rookie season） | Mbappé |
|--|--|--|
| 主数据 | 21.4 PPG | 48 国际进球 |
| 次数据 | 10.6 RPG | 2018 世界杯冠军 |
| 第三数据 | 3.6 BPG | 37 LaLiga 进球 |
