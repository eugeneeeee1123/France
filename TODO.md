# TODO.md — Project Hexagone / France Absolue 开发步骤清单

> 状态标记：`[ ]` 未开始 · `[~]` 进行中 · `[x]` 已完成。每完成一项，把方框内容改掉（不要只在旁边写字说"完成了"却不改方框，Agent 和人都要靠这个符号判断真实进度）。
> 详细技术规格见 `hexagone-content-plan-v2.md` 的"技术实现 BRIEF"一节；行为规范见 `AGENTS.md`。

---

## Day 1–2：地基 — modules.ts + 共享组件

- [ ] 创建 `lib/content/modules.ts`，写入 `Module` interface
- [ ] 补全 11 个模块的 why/how/what/links/era 数据（对照"00·全站叙事框架"Why→How→What 总览表）
- [ ] 实现 `getModule(id)` 工具函数
- [ ] 实现 `getRelatedModules(id)` 工具函数
- [ ] 创建 `components/shared/WhyHowWhat.tsx`
- [ ] 创建 `components/shared/RelatedCapabilities.tsx`
- [ ] 在 INDEX 页面顶部/底部接入 WhyHowWhat / RelatedCapabilities
- [ ] 在 ARSENAL 页面接入
- [ ] 在 STATECRAFT 页面接入
- [ ] 在 TERRITORIES 页面接入
- [ ] 在 SPORT 页面接入
- [ ] 在 EPOCHS 页面接入
- [ ] 在 AESTHETICS 页面接入
- [ ] 在 SCIENCE 页面接入
- [ ] 在 ECONOMY 页面接入
- [ ] 在 FRANCOPHONIE 页面接入
- [ ] 确认接入后不改动任何页面正文内容，只加头尾组件

---

## Day 3–5：INDUSTRY.HTML 新页面

- [ ] 创建 `app/[locale]/industry/page.tsx`
- [ ] 创建 `lib/content/industry-network.ts`（六大产业集群 + 二级企业节点数据）
- [ ] 创建 `components/industry/IndustryNetworkGraph.tsx`（react-force-graph-2d）
- [ ] 中心节点 FRANCE 固定坐标（`fx: 0, fy: 0`）
- [ ] 点击二级节点滑入详情卡 + 连线高亮
- [ ] 右下角图例（military / aerospace / softpower 三色）
- [ ] Dassault 节点"查看 Rafale →"跳转按钮，ARSENAL 页面 Rafale 段落加 `id="rafale"` 锚点
- [ ] 脆弱性 vs 韧性表格实装
- [ ] Vautour / Corbeau 等最新增补机型数据同步进 industry-network.ts（如涉及军工集群）

---

## Day 6–7：全站 Timeline

- [ ] 创建 `lib/content/timeline-eras.ts`
- [ ] 补全历史节点数据（对照技术 BRIEF 第 4 节示例 + EPOCHS 页面内容）
- [ ] 创建 `components/shared/Timeline.tsx`（overlay 组件）
- [ ] 创建 `lib/store/useUIStore.ts`（Zustand，管 `isTimelineOpen`）
- [ ] 导航栏接入 Timeline 图标
- [ ] overlay 关闭后恢复原滚动位置（`useRef` 记录 scrollY）
- [ ] 节点点击跳转到关联模块并关闭 overlay

---

## Day 8–10：Interactive Globe

- [ ] 安装确认 `react-globe.gl`
- [ ] 创建 `components/globe/InteractiveGlobe.tsx`
- [ ] `dynamic(() => import('react-globe.gl'), { ssr: false })` 包裹（硬性要求，遗漏会导致 build 失败）
- [ ] 海外领土 GlobePoint 数据（圭亚那/留尼汪/新喀里多尼亚/波利尼西亚等）
- [ ] 巴黎→海外领土 GlobeArc 投射弧线
- [ ] 点击 point 触发镜头飞行 + 侧边信息面板
- [ ] EEZ 简化多边形（3–4 个关键海域）
- [ ] TERRITORIES 页面接入主交互版本
- [ ] INDEX 首页接入低交互装饰版本（可选，`enablePointerInteraction={false}`）

---

## 3D 模型资产库（可与上方任务并行）

- [ ] Sketchfab 下载：戴高乐号航母（.glb, 4k 贴图）
- [ ] Sketchfab 下载：凯旋门（.glb）
- [ ] Sketchfab 下载：Rafale 战机（.glb, 4k 贴图，23MB 版本）
- [ ] 埃菲尔铁塔：BlenderMCP 程序化生成（规格见文档"埃菲尔铁塔 BlenderMCP 程序化建模详细规格"）
- [ ] 安装 `@react-three/fiber` + `@react-three/drei`
- [ ] 四个模型统一材质校验（`<Environment preset="city">` 或 `"studio"`，检查金属高光是否正常）
- [ ] 日夜模式 `lightingPresets` 实装
- [ ] 移动端降级版本（1k 贴图）就位
- [ ] 4 个模型分配到对应页面（铁塔→INDEX/AESTHETICS，凯旋门→EPOCHS/STATECRAFT，Rafale→ARSENAL，航母→ARSENAL/TERRITORIES）
- [ ] `React.lazy` + `Suspense` 按需加载确认，不在首屏预加载全部模型

---

## 全站色彩系统 / 品牌视觉（可与上方任务并行）

- [ ] `:root` CSS 变量写入（`--color-navy` `#001B39` / `--color-gold` `#EFB44B` / `--color-red` `#E3051C` / `--color-white` `#F8F6F2` / `--color-ink` `#000D1F`）
- [ ] 全站字体接入（Playfair Display / 思源宋体 / Neue Haas Grotesk）
- [ ] Logo 原创设计落地（高卢公鸡，见文档 Logo 章节 prompt）
- [ ] Favicon 版本导出
- [ ] INDEX 首页 GRANDEUR 大字排版实装

---

## Day 11+：动效与质量打磨

- [ ] 组件入场弹性动画（spring 参数 `stiffness: 120, damping: 14` 起调）
- [ ] Stagger 间隔统一 50–100ms
- [ ] `viewport={{ once: true }}` 全站排查（禁止重复触发）
- [ ] 硬件加速排查（禁止 width/height/top/left 动画）
- [ ] Emil Design Eng Skill 审查全部新组件
- [ ] Hero 背景效果实装（方案 A Shader 或方案 B Ken Burns，二选一先跑通）
- [ ] 页面切换转场（View Transitions API）
- [ ] Lenis 平滑滚动（可选，锦上添花）
- [ ] Vitest 单元测试（可选，测 `getRelatedModules` 等纯函数）

---

## 收尾检查

- [ ] 三语言（中/法/英）全站文案检查，无硬编码文字残留
- [ ] 移动端全页面走查（3D 资源降级、Globe 交互降级）
- [ ] `hexagone-content-plan-v2.md` 与实际代码字段命名逐一核对（尤其 modules.ts）
- [ ] 军事内容数字与 R.I.F. 设定值核对（约700枚核弹头、8艘SNLE、8航母集群等，不得混入现实法国数字）
- [ ] 全站 GDN-2040 世界观提示语（仅需页面顶部一处，不需每段重复）
