# 生图 prompt：埃菲尔铁塔建模参考图（模型 A 公园版 / 模型 B 纯塔内构版）

> 2026-10-17 · 配套 `REFERENCE-PLAN.md`。真图纸已在 `refs/`，这份是"让生图模型出参考图"用的 prompt。
> prompt 用英文（生图模型对英文最稳），标题和说明用中文。

## 0. 先读这个

- **AI 图只定"样子和气氛"，不能当尺寸依据。** 生图模型会数错塔腿、编桁架、把镂空画成实心板。尺寸一律以 `refs/` 里的真图纸为准：外形看 `R03b`，对角剖面看 `R03h`，路灯看 `R14` / `R15`，原版楼梯看 `R12b`。
- **出图顺序**：先出 A2（模型 A 正立面）和 B1（模型 B 正立面），挑一张最像图纸的。之后每一张都把这张当参考图附上，并在 prompt 末尾加一句 `Same tower, same proportions and same colours as the attached reference image.`，一致性会好很多。
- **用真图纸当输入更准**：B3、B4、B5、B7 这几张内部剖面，凭空生成基本不可靠。支持图生图的工具里，附上标注的真图纸，再加一句 `Redraw the attached engraving as a clean colour technical section, keeping its structure and layout exactly.`。
- **每条 prompt 一次出 4 张候选**，长边 ≥ 2048 px，按下面的比例出图。
- 出完的图放进 `blender_eiffel/ai-refs/`，文件名用编号（`A2_front.png`），我用 Blender MCP 的视口截图和它们叠着对。

| 编号 | 内容 | 视角 | 比例 | 附参考图（可选） |
|------|------|------|------|------------------|
| A1 | 公园平面 | 正俯视，正交 | 1:1 | 无 |
| A2 | 塔 + 公园，正立面 | 正交 | 9:16 | `R03b` |
| A3 | 塔 + 公园，对角立面 | 正交 | 4:5 | A2 |
| A4 | 路灯三视图 | 正交 | 3:2 | `R14`、`R15` |
| A5 | 塔脚 + 墩座 + 公园一角 | 近景，轻微透视 | 4:3 | A2 |
| A6 | 英雄区风格靶图 | 透视（唯一允许之一） | 4:5 | A2 |
| B1 | 纯塔，正立面 | 正交 | 9:16 | `R03b` |
| B2 | 纯塔，对角立面 | 正交 | 9:16 | B1 |
| B3 | 塔腿内部剖面（地下 → 二层） | 正交剖面 | 4:5 | `R03h` |
| B4 | 上部塔身内部剖面（二层 → 三层） | 正交剖面 | 9:16 | `R03h`（左半） |
| B5 | 一层平台平面剖切 | 正俯视，正交 | 1:1 | `R03g` |
| B6 | 原版螺旋梯 + 塔腿内部仰视 | 透视（第二个允许） | 4:5 | `R12b` |
| B7 | 塔顶剖面（三层 → 天线） | 正交剖面 | 4:5 | `R09` |

## 1. 公共块（三段，每条 prompt 按标注拼上）

### S · 风格锁（所有正交图都加在最前面）

```
Orthographic technical reference render, flat even studio lighting with no cast shadows, absolutely no perspective distortion, camera exactly level and square-on, subject perfectly centred with a generous empty margin on all sides. Flat solid deep-navy background, exact colour #001B39, no sky, no clouds, no gradient, no vignette. Riveted wrought-iron in warm bronze-gold (#B8863A) with soft highlights (#EFB44B). Stone parts in muted warm off-white (#F3EFE4). Crisp clean edges, every structural member legible. No text, no labels, no dimension lines, no watermark, no people, no vehicles.
```

### T · 塔的解剖（所有画整座塔的 prompt 都加上，防止生图模型画错结构）

```
Anatomy, must be followed exactly: four splayed lattice legs standing on a square footprint; the legs curve inward and upward along a concave parabolic profile; a large semicircular decorative arch spans between each pair of adjacent legs below the first platform; a wide square first platform at about 17 percent of total height with an ornamental balustrade belt; above it the four legs keep converging; a smaller second platform at about 35 percent of height where the legs merge into one slender square shaft; the shaft keeps tapering to a small third platform at about 84 percent of height, topped by a small lantern dome and a thin antenna spire. Total height to base width ratio about 2.6 to 1. Built from riveted wrought-iron lattice with X-shaped Saint-Andrew cross bracing between the posts, never solid plates.
```

### N · 反向提示词（支持 negative prompt 的工具填这里；不支持的，把它们改写成 "Avoid: ..." 接在末尾）

```
perspective, fisheye, wide-angle distortion, tilted camera, dramatic angle, sky, clouds, sunset, night lights, fireworks, bokeh, motion blur, people, tourists, cars, trees, text, captions, dimension arrows, logo, watermark, solid walls between the legs, filled-in panels, extra legs, three legs, five legs, blurry or melted lattice
```

## 2. 模型 A · 公园版（铁塔 + 正方形小公园 + 路灯）

> 默认假设（对应 `REFERENCE-PLAN.md` §4 第 1、2 项，你改了我再改）：公园 180 m 见方；路灯在整塔视图里放大约 2.5 倍，否则在英雄区里只有几个像素；A4 的路灯三视图按真实造型，不放大。

### A1 · 公园平面（`S` + 下文，1:1）

```
Strictly top-down plan view, camera pointing straight down. A small square park, exactly 180 m per side, with a thin raised stone kerb around it, and the Eiffel Tower standing at its exact centre seen from above: a 125 m square footprint with four large square stone pedestals at its corners, each carrying one lattice leg; the legs converge toward the centre, drawn as four lattice squares joined by the square outline of the first platform, then the shaft, ending in a tiny square summit at the centre. Perfect four-fold symmetry. Park layout: an 8 m wide perimeter walkway just inside the kerb; four straight diagonal paths running from the park corners to the four pedestals; a ring path around the tower base. Paths in warm off-white (#F3EFE4) at 60 percent brightness, lawns in muted dark slate-blue (#04264B), kerb in off-white. Park lamp posts shown as small gold dots (#EFB44B), evenly spaced along the perimeter walkway and one at each diagonal path entrance. No trees, no benches, no people.
```

### A2 · 塔 + 公园，正立面（`S` + `T` + 下文，9:16）

```
Straight-on front elevation, portrait. The full tower from its feet to the antenna tip stands on a low square park platform, 180 m wide and only a few metres thick, seen edge-on as a thin horizontal slab with a stone kerb and a lawn-coloured top (#04264B). Four stone pedestals under the four legs. Slim park lamp posts evenly spaced along the front edge of the slab, drawn about 2.5 times their real size so they stay readable, each with a small warm-gold lantern. Nothing else on the platform.
```

### A3 · 塔 + 公园，对角立面（`S` + `T` + 下文，4:5）

```
Straight-on elevation viewed exactly along the diagonal of the square footprint, so the near leg hides the far leg and the other two legs frame it on the left and right. The square park platform is seen corner-on, so its thin slab looks about 1.4 times wider than in the front view. Same tower, pedestals and lamp posts as the front elevation; lamp posts follow the two visible slab edges.
```

### A4 · 路灯三视图（`S` + 下文，3:2；附 `R14`、`R15`）

```
Turnaround sheet of one Parisian park lamp post of the Champ de Mars type, three views side by side on one sheet at the same scale on a shared baseline: front elevation, side elevation, and a top-down plan of the lantern. The post: a very tall slender cast-iron column with a thin fluted shaft, an ornate flared stepped base with relief ornament, and a decorative collar just below the lantern. The lantern: a frosted glass globe shaped like a rounded bulb, hung below a wide flat dish-shaped cap, carried by two curling scroll-work brackets that rise from the collar; above the cap a small domed cover with a short stacked finial. Post height about ten times the lantern width. Iron in bronze-gold (#B8863A), glass in warm off-white (#F3EFE4), a warm gold glow inside the globe (#EFB44B).
```

> 真路灯是深绿色。这里统一成塔的青铜金，场景才不跳色；要保留真实绿色，把 `#B8863A` 换成 `deep bottle green`。

### A5 · 塔脚 + 墩座 + 公园一角（`S` 去掉 "orthographic" 和 "no perspective distortion" + 下文，4:3）

```
Three-quarter close-up with only mild perspective of one corner of the tower base: a massive square stone pedestal (#F3EFE4 darkened 30 percent) carrying the foot of one riveted iron lattice leg, with its base shoe plate and rivets visible; in the foreground the park's stone kerb, the corner of the 8 m wide walkway, the edge of the lawn (#04264B), and one park lamp post at 2.5 times scale. The lower part of the large decorative arch rises behind. Flat solid navy background (#001B39).
```

### A6 · 英雄区风格靶图（透视，只用来定材质和气氛，4:5）

```
Hero style target, perspective allowed for this image only. The Eiffel Tower standing on its small square park platform, shown as a floating diorama base in an empty flat navy field (#001B39). Three-quarter view from a low camera just above the platform edge, tower rising to the top of the frame. Matte warm bronze-gold riveted iron (#B8863A) with a soft warm rim light from the upper left only (#EFB44B), stone pedestals in muted off-white, lawns in dark slate-blue (#04264B), tiny warm-gold lamp posts along the paths. No sky, no glow, no lens flare, no sparkle, no clouds, no people. Calm, museum-grade, understated.
```

## 3. 模型 B · 纯塔内构版（只有塔，内部也要做）

> 材质默认同模型 A（青铜金）。要做写实"埃菲尔铁塔棕"，把 `S` 里的 `#B8863A` 换成 `dark warm brown`，`#EFB44B` 保留作灯光和剖面高亮。

### B1 · 纯塔，正立面（`S` + `T` + 下文，9:16）

```
Straight-on front elevation, portrait. The tower only, from the four stone pedestals up to the antenna tip. No park platform and no ground: the pedestals simply stand on one thin flat baseline.
```

### B2 · 纯塔，对角立面（`S` + `T` + 下文，9:16）

```
Straight-on elevation viewed exactly along the diagonal of the square footprint, so the near leg hides the far leg and the other two legs frame it on the left and right. The tower only, no park platform, pedestals on one thin flat baseline.
```

### B3 · 塔腿内部剖面（`S` + 下文，4:5；附 `R03h`）

```
Technical vertical cutaway, orthographic. Section cut along the diagonal of the tower through one leg and the large arch beside it, from a machinery pit under the ground up to the second platform at about 35 percent of tower height. Show the inside: the leg is a hollow box of riveted lattice; inside it an inclined lift track running parallel to the leg's inner face with a boxy passenger cabin on it, a hydraulic cylinder with moving pulley blocks and cable runs, an underground machinery pit with pump and reservoir shapes, a straight stair flight beside the track, and repeating X-braced frames. The first-platform deck cuts across the leg at about 17 percent of total height. Cut surfaces bright gold (#EFB44B), uncut parts bronze (#B8863A), depth shown by darker bronze, never black. Clean engineering-section look.
```

### B4 · 上部塔身内部剖面（`S` + 下文，9:16；附 `R03h` 左半）

```
Technical vertical cutaway, orthographic, tall. Section through the centre of the single upper shaft from the second platform (about 35 percent of height) up to the third platform (about 84 percent): the shaft narrows as it rises. Inside: two vertical lift shafts side by side with a car in each at different heights, a transfer platform about two thirds of the way up where passengers change cars, hydraulic ram cylinders, guide rails, cable lines, and a narrow spiral stair winding around a central core, all inside riveted X-braced lattice. Cut surfaces bright gold (#EFB44B), uncut parts bronze (#B8863A).
```

### B5 · 一层平台平面剖切（`S` + 下文，1:1；附 `R03g`）

```
Top-down orthographic plan cutaway at the level of the first platform (about 17 percent of tower height). A wide square gallery about 65 m across with a continuous balustrade; the four leg tops at the corners drawn as hollow box lattices, each containing a lift shaft and a stair; heavy horizontal girders crossing from leg to leg; a large open central void through which the lattice below is visible. Floor deck in warm off-white (#F3EFE4) darkened 40 percent, girders and legs in bronze (#B8863A), cut edges in gold (#EFB44B).
```

> 平台中央是否整块镂空、梁怎么布，以 `R03g` 为准；AI 版本只用来定色彩和表现方式。

### B6 · 原版螺旋梯 + 塔腿内部仰视（透视，氛围图，4:5；附 `R12b`）

```
Perspective allowed for this image only. Looking slightly upward inside the tower's iron structure at the original narrow spiral staircase: wedge-shaped flat treads cantilevered from a central iron core column, winding upward in a tight helix, a continuous outer handrail in bright gold (#EFB44B), enclosed by riveted X-braced lattice posts and diagonal girders that recede toward the top of the frame. Bronze iron (#B8863A), treads slightly lighter, flat solid navy beyond the lattice (#001B39), warm gold light only on the handrail and tread edges. No people, no text.
```

### B7 · 塔顶剖面（`S` + 下文，4:5；附 `R09`）

```
Technical vertical cutaway, orthographic. The summit, from the third platform (about 84 percent of height) to the antenna tip: an enclosed glass lounge on the platform level with a railed gallery around it, a short lattice drum above, a small lantern dome with a lantern room, a narrow spiral stair rising to the lantern, then a slender antenna mast ending in a small beacon. Cut surfaces bright gold (#EFB44B), uncut parts bronze (#B8863A), glass in pale off-white (#F3EFE4) at 40 percent opacity.
```

## 4. 出图后的验收清单（逐条对，没过就重抽）

1. 正好 **4 条腿**；侧面看不到第 5 条。
2. 一层平台下面，相邻两腿之间各有一道**大半圆拱**。
3. 腿在二层平台处**汇成单柱**，之后继续收窄。
4. 三层平台、小圆顶和天线都在。
5. 桁架是 **X 形斜撑**，不是实心面板，能透过去看到背景。
6. 比例：塔高 / 底宽约 2.6；一层平台约在 17% 高度，二层约 35%，三层约 84%。
7. 背景是纯 `#001B39` 平色，没有天空、渐变、光晕。
8. A 系列：公园是正方形，塔脚有 4 个石墩，路灯整齐排布。
9. B 系列剖面：切面是亮金色，未切部分是青铜色，内部不是一团黑。

## 5. 常见翻车与对策

- **腿数不对 / 结构画成实心**：把 `T` 块整段放在 prompt 最前面，并在末尾再重复 `exactly four legs, open lattice, you can see through it`。
- **画成透视图**：把 `orthographic` 改成 `flat 2D engineering elevation drawing`，比例相同；仍不行就把图当草图，量尺寸看 `R03b`。
- **背景带渐变或天空**：在末尾加 `plain flat background, the exact same colour everywhere`。
- **一致性差**：永远附 A2 或 B1 当参考图，一次只改一个变量。
