# AI CMO / Marketing Agent 产品调研任务提示词

> 使用方式：每次开一个 goal 时，复制对应编号的提示词。每个任务独立完成，产物写入对应 `research/*` 目录。  
> 默认语言：中文。  
> 默认要求：先调研事实，再给判断；所有外部结论必须带来源链接；不自动写合规条款。

## 任务索引

| 编号 | 任务 | 主要产物 | 建议顺序 |
|---:|---|---|---:|
| 00 | 总控：从本地背景素材生成调研路线 | `research/00_context/*` | 1 |
| 01 | Okara 产品拆解 | `research/01_okara_teardown/*` | 2 |
| 02 | 中国竞品与替代方案矩阵 | `research/02_china_competitor_matrix/*` | 3 |
| 03 | 客户场景验证：外贸 B2B vs 本地商家内容运营 | `research/03_customer_scenarios/*` | 4 |
| 04 | 技术可行性与平台能力地图 | `research/04_technical_feasibility/*` | 5 |
| 05 | MVP 路线选择 | `research/05_mvp_route/*` | 6 |
| 06 | 最终整合报告 | `research/final_report.md` | 7 |

## 通用执行协议

每个 goal 默认遵守：

- 先读本地背景素材和本任务对应的 `research/*/README.md`。
- 外部调研必须记录来源，优先写入对应目录的 `sources.md`。
- 事实、推断、建议分开写。
- 不自动生成合规条款。
- 如果需要人类判断，直接写“需要 发起方 判断：...”。
- 收尾给出小状态机：`done / next / blocked`。
- 如果本任务依赖前置调研文件但文件不存在，先明确缺失，再用现有信息继续推进，不要假装已经读过。

## 产物目录总览

```text
research/
|-- 00_context/
|   |-- discussion_brief.md
|   `-- research_route.md
|-- 01_okara_teardown/
|   |-- sources.md
|   |-- notes.md
|   `-- findings.md
|-- 02_china_competitor_matrix/
|   |-- sources.md
|   |-- competitor_matrix.md
|   `-- findings.md
|-- 03_customer_scenarios/
|   |-- sources.md
|   |-- b2b_lead_agent.md
|   |-- local_content_agent.md
|   `-- comparison.md
|-- 04_technical_feasibility/
|   |-- sources.md
|   |-- platform_capability_map.md
|   `-- workflow_architecture.md
|-- 05_mvp_route/
|   |-- decision_matrix.md
|   |-- mvp_spec.md
|   `-- next_14_days.md
`-- final_report.md
```

## 00. 总控任务：从本地背景素材生成调研路线

```text
请基于本 repo 根目录的本地背景素材，整理这次产品方向讨论的完整调研路线。

目标：
1. 提炼我们真正要验证的产品方向，不要停留在“做一个中国版 Okara”。
2. 把方向拆成可执行的调研任务包。
3. 明确每个任务包要回答的问题、需要看的信源、最终输出物。
4. 给出建议执行顺序和每一步的决策门槛。

约束：
- 只基于本地背景素材和必要的公开资料做判断。
- 不写泛泛的市场空话。
- 不自动生成合规条款。
- 如果某个判断需要人类拍板，直接标记为“需要 发起方 判断”。

产出文件：
- research/00_context/discussion_brief.md
- research/00_context/research_route.md

验收标准：
- 能让一个新 agent 不读原始背景素材也知道我们在讨论什么。
- 每个后续调研任务都有清晰边界。
- 明确指出当前最大不确定性和最优先验证的问题。
```

## 01. Okara 产品拆解任务

```text
请对 https://okara.ai/ 做一次产品拆解调研，并把它作为 AI CMO / Marketing Agent 的标杆样本分析。

核心问题：
1. Okara 的一句话定位是什么？它更像 AI CMO、SEO/GEO 工具、内容运营工具，还是营销工作流平台？
2. 它的核心入口是什么：URL、品牌名、关键词、产品描述、竞品，还是其他？
3. 它承诺解决哪些任务：SEO、GEO、图文写作、生图、社媒监测、竞品分析、内容排期、发布、复盘？
4. 它的实际用户路径是什么：首次进入、创建项目、输入资料、生成策略、生成内容、监测反馈。
5. 它面向哪些客户：indie hacker、SaaS、小企业、agency、企业市场部？
6. 它的定价、套餐、限制、免费试用策略是什么？
7. 它的产品包装里哪些是实功能，哪些可能只是营销叙事？
8. 哪些部分值得我们学习，哪些部分不适合中国市场直接复刻？

检索范围：
- Okara 官网与公开页面。
- 官方文档、博客、更新日志、案例页。
- Product Hunt、X/Twitter、LinkedIn、Reddit、YouTube 等公开讨论。
- 创始人或团队公开信息。

产出文件：
- research/01_okara_teardown/sources.md
- research/01_okara_teardown/notes.md
- research/01_okara_teardown/findings.md

输出格式：
1. 产品定位
2. 功能地图
3. 用户路径
4. 定价与商业模式
5. 目标客户假设
6. 公开评价与真实使用反馈
7. 可借鉴点
8. 不可直接复刻点
9. 对我们产品方向的启发

验收标准：
- 至少 12 个有效来源。
- 至少 3 个非官方来源。
- 有明确截图/页面证据或链接证据。
- 不把官网宣传语直接当结论。
```

## 02. 中国竞品与替代方案矩阵任务

```text
请调研中国市场中与 AI CMO / 营销 Agent / 内容运营自动化 / SEO-GEO / 社媒运营 / MarTech 相关的竞品和替代方案，验证“中国类似物存在但碎片化”的判断。

核心问题：
1. 中国是否存在接近 Okara 的“一站式 AI CMO”产品？
2. 如果没有，现有能力分别散落在哪些产品类型里？
3. 哪些产品偏内容生产，哪些偏 SEO/GEO，哪些偏社媒运营，哪些偏企业 MarTech，哪些偏 Agent 工作流？
4. 百度、小红书、抖音、公众号、视频号、知乎、B站这些中文平台的适配情况如何？
5. 这些工具面向 solo/小团队，还是面向企业市场部？
6. 它们的付费模式是什么：订阅、按量、项目制、企业报价、代运营服务？
7. 市场空白在哪里：中文优先、全球 Agent、独立站一键部署、本地平台内容闭环、B2B 线索调研？

建议覆盖类别：
- AI 内容生产工具
- SEO/GEO/关键词工具
- 小红书/抖音/公众号运营工具
- 数字人/短视频自动化工具
- 企业级 MarTech/CRM/CDP
- Agent 工作流平台
- 外贸/独立站增长工具

产出文件：
- research/02_china_competitor_matrix/sources.md
- research/02_china_competitor_matrix/competitor_matrix.md
- research/02_china_competitor_matrix/findings.md

输出格式：
1. 竞品总览
2. 竞品矩阵表
3. 按类别分析
4. 按客户类型分析
5. 按功能模块分析
6. 空白机会
7. 对我们 MVP 的影响

矩阵字段：
- 产品/公司
- 官网
- 一句话定位
- 目标客户
- 核心功能
- 支持平台
- Agent 化程度
- 内容生产能力
- 调研/监测能力
- 发布/执行能力
- 定价方式
- 与 Okara 的相似度
- 对我们的威胁等级
- 可学习点

验收标准：
- 至少 20 个相关产品或替代方案。
- 每个关键判断都有来源。
- 必须区分“直接竞品”和“替代方案”。
- 最后给出 3 个最值得避开或正面竞争的对象。
```

## 03. 客户场景验证任务：外贸 B2B 线索 vs 本地商家内容运营

```text
请调研并比较两个早期 MVP 客户场景：A. 外贸 B2B 线索调研 Agent；B. 本地商家/品牌的小红书抖音内容运营 Agent。

目标：
判断哪一个更适合两个人小团队先做，哪一个更容易在 1-2 周内卖出第一单或做出可验证 demo。

场景 A：外贸 B2B 线索调研 Agent
要回答：
1. 外贸/制造业客户现在怎么找海外客户和采购联系人？
2. 他们已经为哪些工具或服务付费？
3. 海关数据、LinkedIn、Google、行业目录、展会名单、企业官网分别解决什么问题？
4. Agent 能否提高线索发现、联系人识别、可信度判断、触达话术生成的效率？
5. 结果如何衡量：有效公司数、有效联系人数、邮箱/LinkedIn 命中率、询盘率？
6. 适合按项目收费、订阅收费，还是线索包收费？

场景 B：本地商家/品牌内容运营 Agent
要回答：
1. 酒吧、餐饮、门店、本地生活品牌现在怎么做小红书/抖音/视频号？
2. 他们花钱买代运营、探店、剪辑、脚本、投流还是工具？
3. Agent 能否解决选题、爆款拆解、图文写作、视频脚本、发布日历、复盘？
4. 内容质量和平台风控的主要风险是什么？
5. 结果如何衡量：曝光、点击、收藏、到店、团购、咨询？
6. 适合卖工具，还是卖“Agent + 人工审核”的服务？

产出文件：
- research/03_customer_scenarios/sources.md
- research/03_customer_scenarios/b2b_lead_agent.md
- research/03_customer_scenarios/local_content_agent.md
- research/03_customer_scenarios/comparison.md

输出格式：
1. 两个场景的客户画像
2. 当前替代方案
3. 付费意愿判断
4. 可自动化工作流
5. 难点和风险
6. 1-2 周 MVP 方案
7. 推荐优先级

验收标准：
- 每个场景至少 8 个有效来源。
- 至少包含工具/服务价格或报价线索。
- 必须给出明确推荐，不允许只说“都可以”。
- 必须列出需要 发起方 人工判断的问题。
```

## 04. 技术可行性与平台能力地图任务

```text
请调研 AI CMO / Marketing Agent 方向需要的技术能力，并形成平台能力地图。

核心问题：
1. 从信息入口看，搜索引擎、官网、LinkedIn、小红书、抖音、公众号、视频号、知乎、B站、Reddit、X/Twitter、YouTube 分别适合采集什么？
2. 哪些平台适合公开资料调研，哪些平台适合深度采集，哪些平台只适合人工辅助？
3. CDP、browser automation、opencli、agent-reach、Jina Reader、Exa、GitHub CLI 等工具分别适合解决什么问题？
4. 哪些环节应该用脚本，哪些环节应该用 Agent 判断，哪些环节必须人类确认？
5. 如果做外贸 B2B 线索 Agent，最小技术链路是什么？
6. 如果做本地商家内容运营 Agent，最小技术链路是什么？
7. 哪些能力容易不稳定：登录态、平台反爬、发布动作、评论区采集、多媒体生成？

产出文件：
- research/04_technical_feasibility/sources.md
- research/04_technical_feasibility/platform_capability_map.md
- research/04_technical_feasibility/workflow_architecture.md

输出格式：
1. 总体架构图
2. 平台能力地图
3. 工具能力地图
4. 脚本 / Agent / 人工确认分工
5. 外贸 B2B MVP 技术链路
6. 本地内容运营 MVP 技术链路
7. 风险与降级方案

验收标准：
- 不写空泛“可以接入 API”，必须说明可行路径和限制。
- 明确哪些动作只能做调研，哪些动作可半自动执行。
- 不自动生成合规条款；只列技术风险和需要人工确认的边界。
```

## 05. MVP 路线选择任务

```text
请综合前面调研结果，为两个人小团队选择 AI CMO / Marketing Agent 的第一阶段 MVP 路线。

候选路线：
A. 外贸 B2B 线索调研 Agent
B. 本地商家/品牌的小红书抖音内容运营 Agent
C. 独立站 SEO/GEO + 多平台内容 Agent
D. Agent 工作流工具箱/平台

判断维度：
1. 第一单难度
2. 1-2 周 demo 可行性
3. 两个人团队实现难度
4. 已有工作流复用程度
5. 客户痛点强度
6. 付费意愿
7. 结果可衡量性
8. 平台依赖风险
9. 后续产品化空间
10. 是否能反哺我们自己的 marketing

产出文件：
- research/05_mvp_route/decision_matrix.md
- research/05_mvp_route/mvp_spec.md
- research/05_mvp_route/next_14_days.md

输出格式：
1. 结论先行：推荐路线
2. 决策矩阵
3. 推荐 MVP 的用户画像
4. 推荐 MVP 的输入/处理/输出
5. 第一个可演示 demo
6. 第一个可收费交付
7. 14 天执行计划
8. 暂缓路线与原因
9. 需要 发起方和工程协作者 拍板的问题

验收标准：
- 必须给出单一主推荐路线。
- 必须给出 14 天内能完成的 demo 范围。
- 必须说明如何从服务交付过渡到产品。
- 不要写“长期愿景”替代短期执行方案。
```

## 06. 最终整合报告任务

```text
请整合 research/01 到 research/05 的所有调研结果，生成一份可供 发起方和工程协作者 决策的最终产品调研报告。

产出文件：
- research/final_report.md

报告结构：
1. 执行摘要
2. 我们真正要解决的问题
3. Okara 给出的标杆启发
4. 中国市场竞品与空白
5. 两个早期客户场景比较
6. 技术可行性与平台能力边界
7. MVP 推荐路线
8. 14 天执行计划
9. 风险、未知数、需要人工判断的问题
10. 附录：来源与竞品列表

要求：
- 结论明确，不要写成资料堆砌。
- 引用前面调研文件中的证据。
- 标出哪些是事实、哪些是推断、哪些是建议。
- 不自动生成合规条款。

验收标准：
- 发起方 可以直接拿这份报告和 工程协作者 讨论路线。
- 报告必须能回答：先做什么、为什么、怎么验证、怎么收费。
```


