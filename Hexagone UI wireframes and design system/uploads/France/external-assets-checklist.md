# 外部准备清单 — France en Profondeur

## About this page（本文档说明）

> 这份文档跟 `hexagone-content-plan-v2.md` 是分工关系——那份管"代码里要写什么"，这份管**"代码之外，你需要自己去下载/申请/安装/购买的东西"**。8月开工前，建议先把这份清单过一遍，能提前准备的提前准备好，不要等 Claude Code 写到某个组件卡住了才发现"哦这个模型我还没下载"。

按"必须准备"和"可选/后续再说"分类，每项都标了具体动作、去哪里搞到、以及在内容文档里对应哪个章节。

---

## 一、3D 模型资产（必须准备）

| 资产 | 获取方式 | 具体动作 | 对应文档章节 |
|------|---------|---------|------|
| 埃菲尔铁塔 | BlenderMCP 程序化生成 | 见下方"工具安装"部分，装好后照文档"埃菲尔铁塔 BlenderMCP 程序化建模详细规格"里的六步分解指令跑一遍 | 3D 模型资产库 |
| Rafale 战机 | Sketchfab 下载 | 搜索 "Rafale jet"，筛选 CC0/CC Attribution 授权，下载 `.glb` 格式，4k贴图版本（约23MB）+ 1k版本（约5MB）都下 | 3D 模型资产库 |
| 航母 | Sketchfab 下载（型号待定） | **需要你先做决定**：戴高乐号（现成模型多，难度低）还是 PANG级架空新航母（Sketchfab无现成模型，需二次改造）。搜索 "Charles de Gaulle aircraft carrier" 先跑通流程 | 3D 模型资产库（"待确认事项"） |
| 凯旋门 | Sketchfab 下载 | 搜索 "Arc de Triomphe"，同样下载4k+1k两个版本 | 3D 模型资产库 |
| （可选）卢浮宫 | Sketchfab 下载 | 时间富余再做，非必需 | 3D 模型资产库 |
| HDRI 环境贴图（日夜模式用） | Poly Haven 下载 | 搜索 "city"/"night city"/"studio" 关键词，配合 `<Environment preset>` 使用 | Hero背景动态效果 / 日夜模式 |

**授权注意**：CC Attribution 协议的模型下载后，记得把作者署名信息记下来（模型页面会显示），最终要放进网站 footer 或"关于本项目"页面里，不署名会违反授权条款。建议现在下载的时候就顺手建一个 `CREDITS.md` 或者在这份文档里累加记录，不要下载完就忘了出处。

---

## 二、字体文件（必须准备）

| 字体 | 用途 | 获取方式 |
|------|------|---------|
| Playfair Display | 英/法文大标题（含首页 GRANDEUR） | Google Fonts 免费下载，或用 `next/font/google` 直接在代码里引入，不需要手动下载文件 |
| 思源宋体 / Noto Serif SC | 中文标题 | Google Fonts（Noto Serif SC）同样可以用 `next/font/google` |
| Neue Haas Grotesk | UI元素/数据标签/按钮 | **付费商用字体**，官方渠道是 Monotype/Linotype，价格视授权范围而定；如果预算有限，Inter（Google Fonts 免费）是文档里写的平替选项，视觉效果接近 |
| Didot / Bodoni（备选大标题） | 如果不用 Playfair Display | 系统字体或者需要单独购买授权的商业字体，视清晰度需求决定 |

**建议**：先用 Google Fonts 的免费组合（Playfair Display + Noto Serif SC + Inter）跑通全站，如果后期觉得 Neue Haas Grotesk 的质感值得投入预算，再单独购买替换，不影响开发进度。

---

## 三、图片/视频素材（Hero背景用，必须准备至少一种）

| 用途 | 素材来源 | 具体搜索方向 |
|------|---------|------|
| Ken Burns静态图方案（首选，先跑通） | Unsplash / Pexels | "Eiffel Tower"、"aircraft carrier"、"Rafale jet"、"Paris aerial" |
| Shader程序化背景参考代码 | Shadertoy | 搜 "clouds"、"ocean"、"nebula"、"particles" 找开源GLSL模板 |
| 真实视频素材（如果不走Shader路线） | Pexels Videos / Coverr / Mixkit | "ocean aerial"、"clouds timelapse"、"jet flyby" |

---

## 四、工具安装与账号（必须准备）

- [ ] **Claude Max 5x 订阅**——8月开工前购买
- [ ] **Blender**（3.0以上版本）——BlenderMCP 需要
- [ ] **uv 包管理器**——`brew install uv`（Mac）或 PowerShell 命令（Windows），BlenderMCP 的 MCP server 依赖它
- [ ] **ahujasid/blender-mcp 插件**——GitHub Releases 页面下载 `addon.py`，装进 Blender 插件目录
- [ ] **Node.js + npm**——项目基础运行环境（如果还没装）
- [ ] **gltf-transform CLI**——`npm install -g @gltf-transform/cli`，用于模型压缩（Draco+KTX2）
- [ ] **shadcn/ui 初始化**——`npx shadcn@latest init`，如果决定用它做基础UI组件
- [ ] **Sketchfab 账号**——免费账号即可下载 CC 授权模型，不需要付费

## 五、可选 / 后续再考虑

- [ ] **CesiumJS + Cesium Ion 账号**——只有走"真实3D城市街景"这条路才需要，当前建议优先做视差滚动方案，这个先不用申请
- [ ] **Neue Haas Grotesk 商业字体授权**——预算充足再买
- [ ] **Vitest 测试框架**——`npm install -D vitest @testing-library/react`，时间充裕再装
- [ ] **域名与部署平台**——项目做到能展示的阶段再考虑（Vercel 对 Next.js 项目是最省心的部署选择，免费额度通常够个人项目用）

---

## 结尾 / Closing

这份清单不需要一次性全部完成——**「三、四」两节是硬性前置条件**（没有字体和3D模型，很多组件写出来也是空的），建议开工第一周内搞定；**「五」是可以边开发边补**的东西，不卡进度。

如果发现清单里有漏掉的外部依赖（比如 Claude Code 写到某个功能时提示"还需要XX账号/XX文件"），随手把它加进这份文档，保持它跟`hexagone-content-plan-v2.md`一样，是一份会随开发进度持续更新的活文档，不是写完就存档不管的东西。

外部资产准备好之后，正式开发顺序参照 `TODO.md`，从 Day 1-2 开始。
