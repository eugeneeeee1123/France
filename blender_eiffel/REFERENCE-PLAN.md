# 艾菲尔铁塔 3D 模型参考图规划（Blender MCP）

> 2026-10-17 · 依据：`hexagone-content-plan-v2.md` §埃菲尔铁塔 BlenderMCP 程序化建模详细规格、`hexagone/docs/ARCHITECTURE-INDEX.md` 英雄区 3D 层规格、`Hexagone Design System/readme.md` 色板、`blender_eiffel/` 已有成果。
> 这份文档规划"建模时看什么图、从哪拿、怎么摆进 Blender"。2026-10-17 已把公有领域 / CC 的参考图下载到 `blender_eiffel/refs/`，登记见 §3。

---

## 0. 要做的两个模型

| 代号 | 内容 | 预期用途 | 预算 | 待确认 |
|------|------|---------|------|-------|
| **模型 A · 公园版** | 铁塔 + 一块正方形小公园底座（草坪、步道、路灯、四个石砌墩座） | INDEX 英雄区右栏 3D 层（`EiffelScene`） | 压缩后 GLB ≤ 1 MB，5 万–15 万三角面 | 公园边长（建议 180 m，见 §4） |
| **模型 B · 纯塔内构版** | 只有塔，但把电梯井、液压机、楼梯、三层平台内部做出来 | 未定：按预算放不进英雄区，更像 AESTHETICS 页的近景/剖切展示 | 现有 `eiffel_tower_internal_v2.glb` 已 10 MB，内构版不可能压到 1 MB | 用在哪个页面、要不要做剖切动画 |

两个模型共用同一套外形参考（§1A、§1B），只在 §1C（内部）和 §1D（公园）上分开。

已经在手的尺寸（内容计划已交叉核实，直接当真值用）：底座 125 m 正方形；一层 57 m；二层 115 m；三层 276 m；塔尖 330 m；一层以下四足恒定倾角 65°48′49″，每面宽 15 m；外轮廓按抛物线拟合而非直线收分。

---

## 1. 参考图清单

状态列：`本地` = 已在 `blender_eiffel/`；`已下载` = 在 `blender_eiffel/refs/`，文件名以编号开头；`待下载` = 规划中。授权列只影响"能不能登记来源"，参考图本身不上线。

### 1A · 尺寸与轮廓（两个模型共用，最重要的一组）

| 编号 | 图 | 用途 | 来源 | 授权 | 像素 | 状态 |
|------|----|------|------|------|------|------|
| R1 | `Dimensions Eiffel Tower.svg` | 正立面标注图：校准 57 / 115 / 276 / 330 m 四个高度和 125 m 底边；作为前视图底图 | [Commons](https://commons.wikimedia.org/wiki/File:Dimensions_Eiffel_Tower.svg) | CC BY-SA（衍生作品） | SVG 898×998，栅格化到高 4000 px | 已下载 `R01_dimensions.svg` + 栅格 `R01_dimensions_raster.png`（3840×4268） |
| R2 | `Eiffel plan.jpg` + `Eiffel sizes.png` | 带尺寸的立面/平面，和 R1 互相校对 | [Category: Architectural drawings of the Eiffel Tower](https://commons.wikimedia.org/wiki/Category:Architectural_drawings_of_the_Eiffel_Tower) | 见文件页 | 1257×2637 / 1396×1750 | 已下载 `R02a`（立面）、`R02b`（尺寸）、`R02c`（德文技术数据图，补充） |
| R3 | 1900 年 Eiffel 原版图册《La Tour de trois cents mètres》图版：I 最终立面、V 墩座与基础、VII 金属结构、XI 一层拱、XV 上部、XVIII 地面与一层平面、XX 对角垂直剖面、XXIX 一层餐厅；另加 Paris Musées 的 1889 年 300 m 塔总立面大图 | 四足抛物线真实曲率、桁架分段节奏、一层拱与平台的真实比例；XX 剖面是模型 B 内部总图。权威源 | [Commons: Category:Eiffel Tower plans](https://commons.wikimedia.org/wiki/Category:Eiffel_Tower_plans)（e-rara 有浏览器验证，改用 Commons 的同一图册扫描） | 公有领域 / R03a 为 CC0 | 图版约 4600×3200；R03a 4464×9136 | 已下载 `R03a`–`R03i` 9 张 |
| R4 | `Entwurf Eiffelturm - Stephan Sauvestre (1887).jpg` | Sauvestre 的装饰方案：一层大拱、拱顶花饰、一层亭子的轮廓 | 同 R2 分类 | 公有领域 | 1200×2368 | 已下载 `R04_sauvestre_1887.jpg` |

> R1 注意：2022 年那次修订把新天线的 6 m 直接画上去、"没按比例"。只用它的楼层高度数字，塔尖长度以文字 330 m 为准。
> 塔是四重对称的，一张正立面 + 一张平面就够，不需要侧视图；但要再找一张 **45° 对角方向**的实拍来核对四足在对角面上的张开度（内容计划给的对角倾角 54°35′26″）。

### 1B · 桁架与外部细节（两个模型共用）

| 编号 | 图 | 用途 | 来源 | 授权 | 像素 | 状态 |
|------|----|------|------|------|------|------|
| R5 | `EiffelCATIALeg.jpg` | 一条塔腿的 CAD 渲染：桁架单元的拓扑（主弦杆 + X 斜撑 + 横撑），是程序化循环要复刻的"一个单元长什么样" | 同 R2 分类 | 见文件页 | — | 已下载 `R05_catia_leg.jpg`（仅 746×855，低清，只看拓扑） |
| R6 | 塔腿仰拍实拍 1 张、一层大拱 + 名人饰带 1 张、二层平台外侧 1 张 | 构件粗细比例、平台栏杆高度、拱与腿的衔接 | [Category: Elements of the Eiffel Tower](https://commons.wikimedia.org/wiki/Category:Eiffel_Tower)（16 个子分类） | 多为 CC BY-SA | 每张 ≥ 1500 px | 已下载 `R06a`–`R06e` 5 张；45° 对角实拍仍缺 |
| R7 | `eiffel_top_sommet_closeup.png` | 塔顶：三层平台、灯笼、天线分段 | 本地 `blender_eiffel/` | 自制 | 1080×1350 | 本地 |

### 1C · 内部结构（只给模型 B）

| 编号 | 图 | 用途 | 来源 | 授权 | 像素 | 状态 |
|------|----|------|------|------|------|------|
| R8 | `Détails de la construction et du fonctionnement des ascenseurs Otis.jpg` | 1889 年 Otis 电梯穿过一条塔腿的剖面：液压缸、动滑轮组、定滑轮组、斜向轿厢轨道、上下站台。这是模型 B 塔腿内部的直接蓝本 | 同 R2 分类 | 公有领域（1889） | 4333×3002 | 已下载 `R08_otis_section_1889.jpg` + 图版 `R08b` |
| R9 | `Le sommet de la Tour Eiffel. Coupe dessinée par M. Rouillard.jpg` | 塔顶剖面：三层平台、Eiffel 的房间、灯笼楼梯 | 同 R2 分类 | 公有领域 | 2310×3535 | 已下载 `R09_sommet_coupe_rouillard.jpg` |
| R10 | Edoux 二层→三层液压电梯：Poyet 1889 小图、BnF 的换乘平台版画、电梯路径图、图版 XXIII-ter；另加图版 XXXV Fives-Lille 电梯（东西墩现用系统） | 两根 81 m 液压柱 + 中途换乘平台的布置，决定二层以上塔身内部怎么分配；Fives-Lille 决定东西墩内部 | Commons（见登记表） | 公有领域 | 600×425 至 7175×5969 | 已下载 `R10a`–`R10e` |
| R11 | 电梯井、绳轮、"Stairs and elevators of the Eiffel Tower.jpg" 等实拍 3–4 张 | 现代电梯井的占位体积、楼梯与电梯并列的方式 | [Category: Elevators of the Eiffel Tower](https://commons.wikimedia.org/wiki/Category:Elevators_of_the_Eiffel_Tower) 及子分类 Mechanisms (Edoux) | CC BY-SA | ≥ 1500 px | 已下载 `R11a`–`R11d`（井、绳轮、楼梯并列、1889 轿厢版画） |
| R12 | 《二层以上的楼梯》1889 版画（原版螺旋梯）、《徒步登塔》版画、图版 XXVIII 地面→一层楼梯、楼梯实拍 1 张 | 螺旋梯的踏步数、内径、栏杆样式（现有 internal_v2 的黄色栏杆要改成金色 `#EFB44B`） | Commons: Category:Staircases of the Eiffel Tower + Eiffel Tower plans | 公有领域 / R12d CC0 | 2400×3200 至 4607×3222 | 已下载 `R12a`–`R12d`；Al Jazeera 新闻图不下（非 PD/CC） |
| R13 | `eiffel_tower_internal_v2_detail.png`、`_rivets.png`、`_hero.png` | 已有内构版的样式延续：旋梯、铆钉板、液压管位置 | 本地 | 自制 | 1080×760 等 | 本地 |

事实备忘（来自官网/维基，建模时的数量依据）：地面→一层 328 级、一层→二层 346 级，共 674 级；地面→二层电梯 5 部；二层→顶 2 组双层电梯；原 Edoux 液压柱 80 m，1983 年拆除。

### 1D · 公园与路灯（只给模型 A）

| 编号 | 图 | 用途 | 来源 | 授权 | 像素 | 状态 |
|------|----|------|------|------|------|------|
| R14 | `Lampadaire Champ-de-Mars.jpg` | 战神广场现用的路灯整体：杆高、灯头比例 | [Category: Lamp posts in Paris](https://commons.wikimedia.org/wiki/Category:Lamp_posts_in_Paris) | CC0 | 2002×3008 | 已下载 `R14_lampadaire_champ_de_mars.jpg` |
| R15 | `Lanterne Lyre Fontes de Paris Champ-de-Mars.jpg` | "竖琴灯"灯头特写：这就是巴黎公园路灯的标志性造型 | 同上 | CC BY 2.0 | 1696×2544 | 已下载 `R15_lanterne_lyre.jpg` |
| R16 | Poly Haven `street_lamp_01` | CC0 路灯模型，可以通过 Blender MCP 的 Poly Haven 工具直接拉进场景。3.9 m 高、31K 三角面，**不能直接用**：要么减面到 300–500 面，要么只当比例参考重建低模 | [polyhaven.com/a/street_lamp_01](https://polyhaven.com/a/street_lamp_01) | CC0（可上线） | 8K 贴图 | 待拉取 |
| R17 | 2018 年新广场布局实拍 1 张；1889 年塔基与大拱老照片见 R06c | 四个石砌墩座的占地（约 25 m 见方）和广场铺装分区 | Commons: Esplanade des Ouvriers-de-la-Tour-Eiffel；官网图不下（非 PD/CC） | CC BY-SA 2.0 | 4272×2848 | 已下载 `R17a_parvis_nouvel_amenagement.jpg` |
| R18 | （可选）巴黎公园长椅 banc Davioud、战神广场修剪成方的行道树 | 公园里除路灯外的点缀，只在面数有余量时加 | Commons | CC BY-SA | — | 可选 |

### 1E · 风格参考（决定材质和配色，两个模型共用）

| 编号 | 图 | 用途 | 状态 |
|------|----|------|------|
| R19 | `scott_marshall_eiffel_render.png` | 你放进来的目标观感：深蓝底、浅色塔身、米白石墩、四个墩座分立成方块。和设计系统的 ink 底色天然契合 | 本地 |
| R20 | 设计系统色板 | 塔身暖金属贴近 gold-700 `#B8863A`；灯光/高光 `#EFB44B`；石墩取 paper `#F3EFE4` 压暗；公园地面 ink-800 `#04264B`；路径用 gold-700 细线；背景透明露出页面 ink | `Hexagone Design System/readme.md` |
| R21 | `eiffel_tower_daylight_pure_v5.png` | **反面参考**：这是你说不用的日光版，米色塔 + 灰广场 + 绿草坪。模型 A 的公园不要再走这个写实配色 | 本地 |

> 两份文档对材质说法不一致：内容计划说"熟铁棕底色 + 金色高光"，架构文档（更晚、针对英雄区）说"统一成 gold-700 暖金属"。英雄区按架构文档；棕色写实版如果要，留给模型 B。

---

## 2. 在 Blender 里怎么用这些图（MCP 操作流程）

1. **单位与比例**：场景单位 m，1 BU = 1 m，塔按真实尺寸建（330 m），导出 GLB 时再整体缩放。现有 `eiffel_tower_paris_mcp.blend` 已是真实比例，可以沿用。
2. **参考图当 Image Empty 摆进去**（不用 Blender 旧的 Background Images）：
   - R1（或 R3 总立面）→ 前视图（−Y 面），缩放到塔尖对齐 Z = 330，底边对齐 X = ±62.5，不透明度 0.35；
   - R3 墩座平面 → 顶视图（Z = 0），四角对齐 125 m 正方形；
   - R8 Otis 剖面 → 放在一条塔腿的斜向中心面上，只在建模型 B 的腿内构时显示；
   - R9 塔顶剖面 → XZ 面过塔心，Z 对齐 276 m 平台；
   - 所有参考图放进单独的 `REF` 集合，导出前整集合隐藏并排除。
3. **先轮廓后细节**：先用 R1/R3 核对现有 `tower_half_width(z)` 曲线（`generate_eiffel_tower.py`）是否贴合抛物线，不贴合就先改函数，再谈桁架。
4. **每做完一段就截视口对照**：用 MCP 的视口截图，前视正交 + 45° 透视各一张，和 R1、R3 叠看。
5. **路灯**：先用 Poly Haven 工具拉 `street_lamp_01` 进场景量比例，再按 R15 重建一个 300 面左右的低模（杆 + 竖琴灯头 + 底座三段），复制到公园四边。
6. **导出**：A、B 分别导出；A 走 `@gltf-transform/cli optimize`（Draco + 量化）压到 ≤ 1 MB，放 `hexagone/public/models/eiffel.glb`；B 的体积另议。

---

## 3. 下载规格与登记

- 目录：`blender_eiffel/refs/`，文件名用编号前缀：`R01_dimensions.png`、`R08_otis_section.jpg`……
- 分辨率：立面/剖面 ≥ 2000 px 高；细节实拍 ≥ 1500 px；SVG 栅格化到 4000 px 高。
- 每下载一张，在下面这张表补一行（格式照 `hexagone/public/images/CREDITS.md`）：

| 文件 | 来源 URL | 授权 | 实际像素 | 用途 |
|------|---------|------|---------|------|
| `R01_dimensions.svg` | https://commons.wikimedia.org/wiki/File:Dimensions_Eiffel_Tower.svg | CC BY-SA 3.0 | SVG 898×998 | 前视图底图，楼层高度校准（矢量） |
| `R01_dimensions_raster.png` | https://commons.wikimedia.org/wiki/File:Dimensions_Eiffel_Tower.svg | CC BY-SA 3.0（Commons 渲染器栅格化，width=3600） | 3840×4268 | 同上，栅格版，直接当 Image Empty |
| `R02a_eiffel_plan.jpg` | https://commons.wikimedia.org/wiki/File:Eiffel_plan.jpg | Public domain | 1257×2637 | 带尺寸立面，与 R1 互校 |
| `R02b_eiffel_sizes.png` | https://commons.wikimedia.org/wiki/File:Eiffel_sizes.png | CC BY-SA 3.0 | 1396×1750 | 带尺寸立面/数据图 |
| `R02c_skizze_technische_daten.png` | https://commons.wikimedia.org/wiki/File:Skizze_Eiffelturm_-_technische_Daten.png | CC BY-SA 3.0 | 1386×1948 | 德文技术数据注记图 |
| `R03a_elevation_300m_paris_musees.jpg` | https://commons.wikimedia.org/wiki/File:Exposition_universelle_de_1889_La_tour_de_300_m%C3%A8tres,_Paris_Mus%C3%A9es_20230615192143.jpg | CC0 | 4464×9136 | 1889 年 300 m 塔总立面大图（Paris Musées，CC0） |
| `R03b_plate01_general_elevation.jpg` | https://commons.wikimedia.org/wiki/File:Eiffel_Tower_plans_01.jpg | Public domain | 4580×3194 | 图版 I 最终立面（1900 图册） |
| `R03c_plate05_pedestal_walls_foundations.jpg` | https://commons.wikimedia.org/wiki/File:Eiffel_Tower_plans_05.jpg | Public domain | 4580×3215 | 图版 V 墩座围墙与基础 |
| `R03d_plate07_metal_structure.jpg` | https://commons.wikimedia.org/wiki/File:Eiffel_Tower_plans_07.jpg | Public domain | 4593×3215 | 图版 VII 金属结构 |
| `R03e_plate11_first_platform_arches.jpg` | https://commons.wikimedia.org/wiki/File:Eiffel_Tower_plans_11.jpg | Public domain | 4602×3215 | 图版 XI 一层平台与装饰拱 |
| `R03f_plate15_upper_part.jpg` | https://commons.wikimedia.org/wiki/File:Eiffel_Tower_plans_17.jpg | Public domain | 4602×3199 | 图版 XV 上部总图与细节 |
| `R03g_plate18_ground_and_first_platform_plan.jpg` | https://commons.wikimedia.org/wiki/File:Eiffel_Tower_plans_20.jpg | Public domain | 4590×3239 | 图版 XVIII 地面层与一层平面 |
| `R03h_plate20_diagonal_vertical_section.jpg` | https://commons.wikimedia.org/wiki/File:Eiffel_Tower_plans_22.jpg | Public domain | 4559×3260 | 图版 XX 沿对角线（1→3 号墩）垂直剖面，模型 B 内部总图 |
| `R03i_plate29_first_platform_restaurants.jpg` | https://commons.wikimedia.org/wiki/File:Eiffel_Tower_plans_35.jpg | Public domain | 4607×3199 | 图版 XXIX 一层餐厅（模型 B 一层内部） |
| `R04_sauvestre_1887.jpg` | https://commons.wikimedia.org/wiki/File:Entwurf_Eiffelturm_-_Stephan_Sauvestre_(1887).jpg | Public domain | 1200×2368 | Sauvestre 1887 装饰方案 |
| `R05_catia_leg.jpg` | https://commons.wikimedia.org/wiki/File:EiffelCATIALeg.jpg | Public domain | 746×855 | 塔腿 CAD 渲染，桁架拓扑（低清） |
| `R06a_leg_lattice_from_below.jpg` | https://commons.wikimedia.org/wiki/File:Eiffel_tower_support_detail_(27264705599).jpg | CC BY 2.0 | 5184×3456 | 塔腿仰拍桁架 |
| `R06b_lattice_structure_detail.jpg` | https://commons.wikimedia.org/wiki/File:Armazon.001_-_Torre_Eiffel.jpg | CC BY-SA 4.0 | 3864×5152 | 桁架结构细部 |
| `R06c_base_and_arch_1889.jpg` | https://commons.wikimedia.org/wiki/File:Adolphe_Block,_Paris_-_Base_de_la_Tour_Eiffel_et_le_Trocad%C3%A9ro,_about_1889.jpg | Public domain | 5518×4344 | 1889 年塔基与大拱（Adolphe Block） |
| `R06d_arch_from_champ_de_mars.jpg` | https://commons.wikimedia.org/wiki/File:Paris_75007_Champ-de-Mars_lawn_20170526_Eiffel_Tower_(6).jpg | CC BY 2.0 | 6016×4016 | 从战神广场看大拱与饰带 |
| `R06e_second_floor_platform.jpg` | https://commons.wikimedia.org/wiki/File:Tour_Eiffel_2nd_Floor,_Paris,_France_(53172594307).jpg | CC BY-SA 2.0 | 6000×4000 | 二层平台 |
| `R08_otis_section_1889.jpg` | https://commons.wikimedia.org/wiki/File:La_Tour_Eiffel._D%C3%A9tails_de_la_construction_et_du_fonctionnement_des_ascenseurs_Otis.jpg | Public domain | 4333×3002 | 1889 Otis 电梯塔腿剖面 |
| `R08b_plate22-3_otis_track_and_cabin.jpg` | https://commons.wikimedia.org/wiki/File:Eiffel_Tower_plans_26.jpg | Public domain | 4607×3222 | 图版 XXII-3 Otis 轨道与轿厢 |
| `R09_sommet_coupe_rouillard.jpg` | https://commons.wikimedia.org/wiki/File:Le_sommet_de_la_Tour_Eiffel._Coupe_dessin%C3%A9ee_par_M._Rouillard.jpg | Public domain | 2310×3535 | 塔顶剖面（Rouillard） |
| `R10a_edoux_poyet_small.jpg` | https://commons.wikimedia.org/wiki/File:Eiffel-Edoux_lift-poyet.jpg | Public domain | 600×425 | Poyet 1889 Edoux 电梯（小图） |
| `R10b_edoux_transbordement_bnf.jpg` | https://commons.wikimedia.org/wiki/File:Exposition_Universelle_Paris_1889._Tour_Eiffel._Transbordement_des_Passagers_de_l%27Ascenseur_Edoux_-_btv1b11600072b.jpg | Public domain | 7175×5969 | 1889 Edoux 电梯换乘平台（BnF 扫描） |
| `R10c_chemin_des_ascenseurs.jpg` | https://commons.wikimedia.org/wiki/File:Le_chemin_des_ascenseurs_de_la_Tour_Eiffel.jpg | Public domain | 2662×3477 | 电梯路径图 |
| `R10d_plate23ter_edoux_lift.jpg` | https://commons.wikimedia.org/wiki/File:Eiffel_Tower_plans_30.jpg | Public domain | 4607×3222 | 图版 XXIII-ter Edoux 电梯 |
| `R10e_plate35_fives_lille_lift.jpg` | https://commons.wikimedia.org/wiki/File:Eiffel_Tower_plans_41.jpg | Public domain | 4572×3192 | 图版 XXXV Fives-Lille 电梯总图 |
| `R11a_elevator_shaft.jpg` | https://commons.wikimedia.org/wiki/File:Paris_Eiffel_Tower_elevator_shaft_01a.jpg | CC BY-SA 3.0 | 2816×2112 | 现代电梯井 |
| `R11b_elevator_wheel.jpg` | https://commons.wikimedia.org/wiki/File:Paris_Eiffel_Tower_elevator_wheel_01a.jpg | CC BY-SA 3.0 | 2816×2112 | 电梯绳轮 |
| `R11c_stairs_and_elevators.jpg` | https://commons.wikimedia.org/wiki/File:Stairs_and_elevators_of_the_Eiffel_Tower.jpg | CC BY-SA 4.0 | 2800×2100 | 塔腿内楼梯与电梯并列 |
| `R11d_cabin_engraving_1889.png` | https://commons.wikimedia.org/wiki/File:T6-_d621_-_Fig._462._%E2%80%94_Une_cabine_de_l%E2%80%99ascenseur_de_la_tour_Eiffel.png | Public domain | 1657×2216 | 1889 电梯轿厢版画 |
| `R12a_plate28_stairs_ground_to_first.jpg` | https://commons.wikimedia.org/wiki/File:Eiffel_Tower_plans_34.jpg | Public domain | 4607×3222 | 图版 XXVIII 地面→一层楼梯 |
| `R12b_stairs_above_second_platform_print.jpg` | https://commons.wikimedia.org/wiki/File:Les_escaliers_de_la_Tour_Eiffel,_au-dessus_de_la_deuxi%C3%A8me_plate-forme.jpg | Public domain | 2719×3749 | 二层以上楼梯版画（原版螺旋梯） |
| `R12c_ascension_par_les_escaliers_print.jpg` | https://commons.wikimedia.org/wiki/File:Ascension_de_la_tour_Eiffel_par_les_escaliers.jpg | Public domain | 2810×4012 | 1889 徒步登塔版画 |
| `R12d_staircase_photo.jpg` | https://commons.wikimedia.org/wiki/File:Staircase_in_the_Eiffel_Tower.jpg | CC0 | 2400×3200 | 楼梯实拍（CC0） |
| `R14_lampadaire_champ_de_mars.jpg` | https://commons.wikimedia.org/wiki/File:Lampadaire_Champ-de-Mars.jpg | CC0 | 2002×3008 | 战神广场路灯整体 |
| `R15_lanterne_lyre.jpg` | https://commons.wikimedia.org/wiki/File:Lanterne_Lyre_Fontes_de_Paris_Champ-de-Mars.jpg | CC BY 2.0 | 1696×2544 | 竖琴灯灯头特写 |
| `R17a_parvis_nouvel_amenagement.jpg` | https://commons.wikimedia.org/wiki/File:Nouvel_am%C3%A9nagement_Tour_Eiffel_(30802597738).jpg | CC BY-SA 2.0 | 4272×2848 | 2018 年新广场布局 |

已下载 40 个文件，共约 249 MB（2026-10-17）。未下载：R12 的 Al Jazeera 新闻图（非 PD/CC）、R17 的官网图（非 PD/CC）、R16 Poly Haven 模型（建模时经 MCP 拉取）。`refs/` 不应进仓库，建议加入 `.gitignore`。

---

## 4. 需要你定的 4 件事

1. **公园边长**：真实战神广场是 780 × 220 m 的长方形，不是正方形。建议公园做 **180 × 180 m**（塔基 125 m 四周各留约 27 m），像一个托盘底座；要更"小"就 150 m，但四个墩座会贴边。
2. **路灯比例**：真实路灯 3.9 m，是塔高的 1.2%。英雄区塔约 600 px 高时路灯只有 7 px，基本看不见。两个选项：按真实比例（诚实但不可见）或放大到 2.5–3 倍（可见但失真）。
3. **模型 B 用在哪**：内构版放不进英雄区预算，要先定它是 AESTHETICS 页的近景、还是一个剖切交互，才能定做到什么精度。
4. **材质路线**：英雄区按架构文档的 gold-700 暖金属；模型 B 要不要保留内容计划里的熟铁棕写实版。
