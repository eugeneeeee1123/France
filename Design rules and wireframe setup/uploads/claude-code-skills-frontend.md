# Claude Code / GitHub 技能清单 — React + 前端设计 + 动画

> 除了 Taste Skill 和 UI/UX Pro Max 之外，整理的其他值得装的技能，按 React工程 / 前端设计 / 动画 三类分开。全部是2026年查证过真实存在的项目，附安装方式和适用场景。

---

## 一、React / 前端工程类

### Vercel React Best Practices（官方一线出品）
- **来源**：`vercel-labs/agent-skills`
- **star数**：约2.8万（整个仓库）
- **用途**：React性能优化专项，8条规则覆盖列表渲染最佳实践——用 FlashList 代替 FlatList、列表项做 memo、稳定 callback 引用、避免内联样式对象、把函数提取到 render 外部、列表图片优化、把耗时操作移出列表项、异构列表用 item type 区分
- **适合场景**：你的产业网络图、力导向图、Timeline 节点这类"大量重复渲染的列表/节点"场景，直接命中这条技能的覆盖范围
- **搭配建议**：跟 Anthropic 官方的 frontend-design 技能是互补关系，一个管"好不好看"，一个管"跑得快不快"

### Frontend Design Toolkit 里的 React Expert
- **来源**：`wilwaldon/Claude-Code-Frontend-Design-Toolkit`（技能合集仓库）
- **用途**：专精 React Server Components、hooks 使用规范，自动激活并加载相关参考文档，同一个仓库里还有 Tailwind CSS Expert、Accessibility Specialist、Responsive Design Specialist 等配套技能
- **适合场景**：Next.js 14 App Router 项目的组件规范审查

### shadcn/ui 官方技能
- **来源**：shadcn/ui 官方仓库
- **用途**：如果你按之前定的技术栈用了 Shadcn/ui 做基础组件，这个技能能让 Claude 更准确地按 shadcn 的组件模式生成代码，不会生成不兼容的写法
- **适合场景**：按钮/弹窗/下拉菜单这类基础UI组件的生成与调整

---

## 二、前端视觉设计类（Taste / UI-UX Pro Max 之外）

### Anthropic 官方 frontend-design
- **来源**：`anthropics/claude-code`（136.6k star）/ `anthropics/skills`
- **安装**：`claude plugin add anthropic/frontend-design`
- **风格取向**：精致极简主义、期刊排版感——**这个风格方向跟你 France Absolue 定的"期刊+博物馆"美学高度吻合**，是三个设计技能里最值得优先装的一个
- **核心理念**：只在真正有效果的地方做动效，渐变/纹理/图案要"有目的"地用，不是随手加

### Vercel Web Design Guidelines
- **来源**：`vercel-labs/agent-skills`
- **用途**：审计可访问性（accessibility）与 UX 规范，跟前面的 React Best Practices 是同一仓库的姊妹技能，一个管审美，一个管合规
- **适合场景**：全站三语言切换、深色背景大段正文这类场景的可读性/对比度审查，跟你 AGENTS.md 里已经写的"米白而非纯白"那条设计考量是同一层次的问题

### AccessLint
- **用途**：专职无障碍访问合规检查（WCAG标准）
- **适合场景**：如果 FYP/作品集有可访问性评分要求，或者单纯想让网站对屏幕阅读器更友好，装这个

---

## 三、动画专项类

### Vercel Motion Skill（Framer Motion 专精）
- **来源**：`vercel-labs/agent-skills`
- **测试环境**：React 19 + Next.js 16 + Vite 7 + Tailwind v4（跟你的技术栈版本对得上）
- **覆盖范围**：声明式动画、手势交互（拖拽/悬停/点击）、滚动效果、弹簧物理、布局动画、SVG操作
- **额外亮点**：内置 bundle 优化方案——`LazyMotion` 精简到 4.6KB，`useAnimate` 精简到 2.3KB，比默认引入 Framer Motion 全量包体积小很多
- **适合场景**：你之前定的"组件入场弹性动画"（spring参数那套）可以直接用这个技能来生成/校验，比手写更容易一次对

### Motion Design Audit Skill（动效审查，非生成）
- **训练来源**：基于 Emil Kowalski、Jakub Krehel、Jhey Tompkins 三位设计工程师的公开方法论训练——**Emil Kowalski 正是你 AGENTS.md 里"动效哲学"那一节直接引用的那个人**，这个技能可以说是把你已经手动搬进文档的那套原则自动化了
- **核心功能**：不是生成新动画，是**审查已有代码**——找出"应该有动效但没做"的地方（比如条件渲染没用 AnimatePresence 包裹、动态样式变化没有 transition），给出按不同设计师流派分类、按严重程度分级的修改建议
- **适合场景**：Claude Code 按你的技术BRIEF把组件都写完之后，用这个技能扫一遍，能自动抓出没做过渡效果的地方，比人工逐个检查快很多

---

## 装哪些、按什么顺序

给你一个实际建议，不是全装：

1. **必装**：`anthropic/frontend-design`（跟你的期刊美学最贴）+ Vercel Motion Skill（Framer Motion专精，跟你的技术栈版本吻合）
2. **强烈建议装**：Vercel React Best Practices（列表渲染优化，你项目里节点/卡片类组件多）
3. **写完代码后再装**：Motion Design Audit Skill（用来"验收"而不是"生成"，等组件都搭得差不多了再拉来扫一遍）
4. **看情况装**：Vercel Web Design Guidelines / AccessLint（如果关心可访问性合规）、shadcn/ui官方技能（如果确定要用shadcn做基础组件）

## 安装方式速查
```bash
# Anthropic 官方 frontend-design
claude plugin add anthropic/frontend-design

# Vercel 系列技能（React Best Practices / Motion / Web Design Guidelines 都在这个仓库）
# 具体子技能安装方式以 vercel-labs/agent-skills 仓库当前 README 为准，仓库更新较快
```

> 提醒：装第三方技能前留意一下来源和权限——2026年有安全研究指出部分社区技能存在提示词注入风险，装之前扫一眼 SKILL.md 内容以及技能是否会执行外部脚本，Anthropic官方和Vercel官方这几个来源相对可信，来源不明的小众技能装之前多一个心眼。
