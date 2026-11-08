# V2 逐点 Agent-Reach 全网调研 Goal 提示词

> 用途：复制本文件中的完整提示词开一个新 goal。  
> 目标：重做一版专业产品机会调研。每一个调研点都是一个独立 Markdown；每一个调研点都必须单独开一轮 `agent-reach` 全网搜索；每一个调研点都必须留下命令、结果、失败渠道、证据和置信度。  
> 注意：本文件只是 goal 提示词，不执行调研。

## 一句话原则

```text
一页一个问题。
一个问题一次全网调研。
一次全网调研必须走 agent-reach。
每个点都要有命令、来源、失败、发现、分析、MVP 影响和置信度。
总报告只做综合，不替代逐点调研。
```

## ASCII 执行架构

```text
调研 Goal
|
|-- 00_methodology/                         # 方法论，不写业务结论
|   |-- research_design.md                  # 调研设计：问题拆分、信源分级、证据规则
|   |-- agent_reach_doctor.md               # agent-reach 可用性体检
|   |-- source_grading.md                   # 来源评级规则
|   `-- query_log.md                        # 每个点的 query / command 索引
|
|-- 01_category_definition/                 # 每页只回答一个定义/边界问题
|   `-- *.md                                # 每个文件都必须单独 agent-reach 搜索
|
|-- 02_overseas_benchmarks/                 # 每页只研究一个海外产品/一类竞品
|   `-- *.md                                # 每个产品单独搜，不共享上一页搜索记录
|
|-- 03_china_market_map/                    # 每页只研究一个中国市场板块
|   `-- *.md                                # 每个板块单独搜中文/海外/价格/社区来源
|
|-- 04_customer_scenarios/                  # 每页只研究一个客户场景
|   `-- *.md                                # 每个场景单独验证痛点、付费、替代方案
|
|-- 05_pricing_willingness/                 # 每页只研究一种价格/预算证据
|   `-- *.md                                # 每个价格点单独查公开价格和服务包
|
|-- 06_technical_feasibility/               # 每页只研究一个技术可行性问题
|   `-- *.md                                # 每个技术点单独查工具、限制、失败渠道
|
|-- 07_opportunity_decision/                # 决策层，但必须引用前面逐点证据
|   `-- *.md                                # 不允许凭空打分
|
|-- 08_mvp_plan/                            # MVP 计划，必须由证据推导
|   `-- *.md                                # 不允许先定方案再找理由
|
|-- 09_synthesis/                           # 最后综合
|   |-- executive_summary.md                # 给决策者的一页摘要
|   |-- full_report.md                      # 完整综合报告
|   `-- presentation_outline.md             # 交付汇报大纲
|
`-- evidence/                               # 全局证据台账
    |-- source_log.md                       # 所有来源编号
    |-- command_log.md                      # 所有命令编号
    |-- failed_channels.md                  # 所有失败/噪声/偏差渠道
    |-- source_quality_matrix.md            # 来源质量矩阵
    `-- glossary.md                         # 术语表
```

## 完整 Goal 提示词

````text
当前 VitePress 产品调研站点，生成一套专业的《AI CMO / Marketing Agent 产品机会调研》。

这次不要沿用旧的 00-06 任务合集结构，也不要先写总报告。旧文档只能作为材料库，不能作为结论来源直接复用。新的调研必须逐点推进：

- 每一个调研点都是一个独立 Markdown 文档。
- 每一个调研点只回答一个问题。
- 每一个调研点都必须单独开一轮 agent-reach 全网搜索。
- 每一个调研点都必须记录搜索计划、执行命令、结果摘要、失败渠道、来源、事实发现、分析、MVP 影响、结论和置信度。
- 总报告只能在逐点文档完成后做综合，不能替代逐点调研。

核心决策问题：

判断第一阶段是否应该做“人工审核的外贸 B2B 线索研究交付包”，而不是笼统做 AI CMO、中国版 Okara、内容工具或 Agent 平台。

## 1. 总体硬规则

1. 所有对外交付文档必须使用中文。
2. 一页只回答一个问题。
3. 一个问题必须对应一个独立 Markdown 文件。
4. 一个问题必须单独开一轮 agent-reach 全网搜索，不能把其他问题的搜索结果直接搬来当作本问题的搜索记录。
5. 每篇文档必须先写“本点要回答的问题”和“调研方法”，再写事实发现，最后才写分析和结论。
6. 不能先写结论再找证据；如果证据不足，结论必须降级为“假设 / 推断 / 待验证”。
7. 事实、推断、建议必须分开写。
8. 每个关键结论都必须有来源，或者明确标记为推断。
9. 如果某个渠道失败，不能跳过，必须写入该点文档和全局失败渠道记录。
10. 不展示原始聊天记录。
11. 不出现任何聊天记录中的个人姓名、账号、昵称、路径用户名等人物主体。
12. `chatrecord_*.md`、`docs/context/`、`research/00_context/` 必须继续保持 git ignore。
13. 不自动生成合规条款；除非用户明确要求，否则不要写合规条款章节。

## 2. 什么叫“每一个点”

“点”不是一个大章节，而是一个可以被单独验证的问题。每一个点都必须能独立回答：

- 这个问题是什么？
- 为什么它影响产品决策？
- 我搜了什么？
- 我用了哪些 agent-reach 渠道？
- 哪些渠道有效？
- 哪些渠道失败、噪声大或有偏差？
- 找到了哪些证据？
- 这些证据说明了什么事实？
- 这些事实对 MVP 决策有什么影响？
- 结论置信度是多少？

示例：

- `02_overseas_benchmarks/04_clay.md` 是一个点。
- `03_china_market_map/06_b2b_export_tools.md` 是一个点。
- `04_customer_scenarios/01_b2b_export_lead_research.md` 是一个点。
- `05_pricing_willingness/02_customs_data_pricing.md` 是一个点。

不允许把多个问题塞进一篇，例如：

- 不要在一篇里同时写 Okara、Jasper、Copy.ai、Clay。
- 不要在一篇里同时写外贸获客、本地生活、SEO、Agent 平台。
- 不要用一轮搜索覆盖多个文件。

## 3. agent-reach 全网搜索硬门禁

开始整个 goal 前，先运行：

```bash
agent-reach doctor --json
```

把结果写入：

```text
docs/research/00_methodology/agent_reach_doctor.md
```

每一个调研点开始前，都必须先写本点搜索计划，再执行搜索。搜索计划必须包括：

| 项目 | 必须写清楚 |
|---|---|
| 本点问题 | 这个 Markdown 只回答什么问题 |
| 决策影响 | 它影响是否做、做哪个客户、怎么定价、怎么交付、技术是否可行中的哪一项 |
| 需要验证的假设 | 不能直接当结论写 |
| 计划搜索词 | 中英文关键词都要考虑 |
| 计划渠道 | 官网、网页搜索、社区、社媒、视频、价格页、GitHub 等 |
| 预期证据 | 期望找到什么类型的证据 |
| 偏差预判 | 哪些渠道可能噪声大、广告多、样本偏 |

每一个调研点的最低搜索要求：

1. 至少执行 3 条 agent-reach 搜索 / 读取命令。
2. 重点调研点至少执行 5 条 agent-reach 搜索 / 读取命令。
3. 至少覆盖 3 类信源。
4. 至少 5 个有效来源。
5. 至少 1 个非官网来源。
6. 至少记录 1 条失败、偏差或噪声渠道；如果没有失败，也要写“本点未观察到失败渠道”。
7. 必须更新全局 `source_log.md`、`command_log.md`、`failed_channels.md`、`query_log.md`。

重点调研点的最低搜索要求：

1. 至少 8 个有效来源。
2. 至少 5 条 agent-reach 搜索 / 读取命令记录。
3. 至少覆盖 4 类信源。
4. 至少包含 1 条社区 / 社媒 / 视频平台证据。
5. 必须明确写“证据不足之处”。

## 4. “全网搜索”的定义

本 goal 中的“全网搜索”不是简单搜一个关键词，也不是只读官网。

有效的全网搜索必须满足：

1. 围绕同一个问题，至少交叉验证 3 类信源。
2. 优先覆盖这些信源类型：
   - 官网 / 官方文档
   - 价格页 / 套餐页 / 服务包页面
   - 第三方评测 / 媒体文章
   - Reddit / X / 社区讨论
   - B站 / 小红书 / 中文视频或内容平台
   - GitHub / 开源项目 / 技术文档
3. 必须记录 agent-reach 命令和结果摘要。
4. 必须记录失败、噪声、登录限制、渠道偏差和证据缺口。
5. 不能把搜索结果标题直接复制成结论。
6. 不能只引用上一页已经搜过的材料。
7. 如果只能拿到官网材料，结论置信度不能写高。

## 5. 推荐 agent-reach 命令组合

实际命令要根据 `agent-reach doctor --json` 的可用后端调整。以下是优先使用的命令形态：

```bash
# 1. 渠道体检
agent-reach doctor --json

# 2. 网页搜索，优先使用 agent-reach / Exa；如果 mcporter 配置失败，记录失败并用普通网页搜索兜底
mcporter call 'exa.web_search_exa(query: "关键词", numResults: 8)'

# 3. 网页读取，优先使用 Jina Reader；如果失败，记录失败并用普通网页抓取/浏览器读取兜底
curl -s "https://r.jina.ai/https://example.com"

# 4. B站搜索
opencli bilibili search "关键词" -f yaml

# 5. 小红书搜索
opencli xiaohongshu search "关键词" -f yaml

# 6. Reddit 搜索
opencli reddit search "关键词" -f yaml

# 7. X/Twitter 搜索
opencli twitter search "关键词" -f yaml

# 8. GitHub 搜索
gh search repos "关键词" --sort stars --limit 20
```

如果某个命令不可用，不要假装完成。必须在该点文档中记录：

| 字段 | 写法 |
|---|---|
| 渠道 | 例如 Exa / Jina / Reddit / X / B站 / 小红书 |
| 命令 | 实际执行的命令 |
| 状态 | 成功 / 失败 / 部分有效 / 噪声大 |
| 错误摘要 | 不要贴超长日志，写关键错误 |
| 影响 | 这个失败对本点证据完整性有什么影响 |
| 替代处理 | 用了什么替代信源或是否降低置信度 |

## 6. 每个调研点的标准 Markdown 模板

每一个点的 Markdown 必须使用同一结构：

```markdown
# 调研点标题

## 1. 本点要回答的问题

明确写出这个点只回答哪一个业务问题。

## 2. 为什么这个点重要

说明它影响哪个决策：是否做、做哪个客户、怎么定价、怎么交付、技术是否可行。

## 3. 调研方法

写清楚本点用了哪些信源类型、为什么选这些信源，以及各信源的偏差。

## 4. agent-reach 全网搜索计划

| 需要验证的问题 | 计划搜索词 | 计划渠道 | 预期证据 | 偏差预判 |
|---|---|---|---|---|

## 5. agent-reach 搜索执行记录

| 渠道 | 命令 / 搜索词 | 结果摘要 | 是否有效 | 备注 |
|---|---|---|---|---|

## 6. 渠道失败 / 偏差记录

每篇都必须有本节。没有失败时也要写“本点未观察到失败渠道”。

| 渠道 | 状态 | 失败或偏差摘要 | 对证据完整性的影响 | 替代处理 |
|---|---|---|---|---|

## 7. 关键来源

| ID | 来源 | URL | 类型 | 日期 | 关键证据 | 可信度 |
|---|---|---|---|---|---|---|

## 8. 关键发现

只写事实发现，不写建议。

## 9. 分析和解释

解释这些事实对产品机会意味着什么。这里可以写推断，但必须标明推断依据。

## 10. 对 MVP 决策的影响

明确写：

- 支持哪个方向
- 反对哪个方向
- 增加了什么风险
- 还缺什么证据

## 11. 结论

用 3-5 条 bullet 总结。

## 12. 置信度

高 / 中 / 低，并解释原因。
```

## 7. 全局证据台账要求

每完成一个点，立即更新以下文件，不能等最后再补：

```text
docs/research/00_methodology/query_log.md
docs/research/evidence/source_log.md
docs/research/evidence/command_log.md
docs/research/evidence/failed_channels.md
docs/research/evidence/source_quality_matrix.md
```

编号规则：

```text
Q0001...      搜索问题 / query
CMD0001...    实际执行命令
S0001...      来源
F0001...      失败、噪声、偏差渠道
```

每篇点文档里的来源 ID、命令 ID、失败 ID 必须能在全局台账里找到。

## 8. 目录结构要求

```text
docs/research/
|
|-- README.md
|-- 00_methodology/
|   |-- research_design.md
|   |-- agent_reach_doctor.md
|   |-- source_grading.md
|   `-- query_log.md
|
|-- 01_category_definition/
|   |-- 01_ai_cmo_definition.md
|   |-- 02_marketing_agent_definition.md
|   |-- 03_geo_seo_content_social_b2b_boundaries.md
|   `-- 04_category_conclusion.md
|
|-- 02_overseas_benchmarks/
|   |-- 01_okara.md
|   |-- 02_jasper.md
|   |-- 03_copy_ai.md
|   |-- 04_clay.md
|   |-- 05_apollo.md
|   |-- 06_semrush_surfer.md
|   `-- 07_benchmark_conclusion.md
|
|-- 03_china_market_map/
|   |-- 01_enterprise_martech.md
|   |-- 02_seo_content_tools.md
|   |-- 03_social_data_tools.md
|   |-- 04_local_merchant_saas.md
|   |-- 05_agent_workflow_platforms.md
|   |-- 06_b2b_export_tools.md
|   `-- 07_china_market_gap.md
|
|-- 04_customer_scenarios/
|   |-- 01_b2b_export_lead_research.md
|   |-- 02_local_merchant_content_operation.md
|   |-- 03_independent_site_seo_geo.md
|   |-- 04_generic_agent_workflow_platform.md
|   `-- 05_scenario_comparison.md
|
|-- 05_pricing_willingness/
|   |-- 01_b2b_tools_pricing.md
|   |-- 02_customs_data_pricing.md
|   |-- 03_local_operation_pricing.md
|   |-- 04_agency_service_pricing.md
|   `-- 05_pricing_conclusion.md
|
|-- 06_technical_feasibility/
|   |-- 01_agent_reach_channel_reliability.md
|   |-- 02_browser_cdp_opencli.md
|   |-- 03_linkedin_data_constraints.md
|   |-- 04_xhs_douyin_bilibili_constraints.md
|   |-- 05_automation_boundary.md
|   `-- 06_technical_conclusion.md
|
|-- 07_opportunity_decision/
|   |-- 01_decision_criteria.md
|   |-- 02_decision_matrix.md
|   |-- 03_recommended_mvp.md
|   |-- 04_risks_and_unknowns.md
|   `-- 05_decision_conclusion.md
|
|-- 08_mvp_plan/
|   |-- 01_mvp_spec.md
|   |-- 02_first_demo_scope.md
|   |-- 03_first_paid_delivery.md
|   |-- 04_14_day_validation_plan.md
|   `-- 05_pivot_criteria.md
|
|-- 09_synthesis/
|   |-- executive_summary.md
|   |-- full_report.md
|   `-- presentation_outline.md
|
`-- evidence/
    |-- source_log.md
    |-- command_log.md
    |-- failed_channels.md
    |-- source_quality_matrix.md
    `-- glossary.md
```

## 9. 重点调研点要求

### 9.1 `02_overseas_benchmarks/01_okara.md`

必须覆盖：

- Okara 官网
- Okara docs
- Okara pricing
- Reddit 或 X
- 第三方评测

必须回答：

- Okara 是真实工作流产品，还是包装叙事强于能力？
- 它的价值在 GEO、内容自动化、SEO，还是 agent workflow？
- 它是否值得作为第一阶段 MVP 对标？

### 9.2 `02_overseas_benchmarks/04_clay.md`

必须覆盖：

- Clay 官网 / pricing / templates
- Clay 社区或 Reddit/X 讨论
- B2B lead enrichment / GTM workflow 相关资料
- Apollo、Hunter、ZoomInfo 等替代工具对比

必须回答：

- Clay 的价值到底是数据库、工作流，还是 enrichment + automation？
- 它证明了外贸 B2B 线索研究方向的哪些付费意愿？
- 它有哪些能力不适合第一阶段复刻？

### 9.3 `03_china_market_map/07_china_market_gap.md`

必须基于前面各类中国竞品文档综合判断。

必须回答：

- 中国市场到底缺什么？
- 中国市场不缺什么？
- 哪些是伪空白？
- 哪些空白和第一阶段 MVP 真相关？

### 9.4 `04_customer_scenarios/01_b2b_export_lead_research.md`

必须覆盖：

- B站外贸获客搜索
- LinkedIn / Apollo / Hunter / 海关数据工具
- 公开价格
- 外贸获客服务或代运营服务包

必须回答：

- 外贸 B2B 线索研究是否是刚需？
- 客户已经在为什么付费？
- 现有工具解决了什么，没解决什么？
- 为什么“人工审核的研究交付包”可能比纯 SaaS 更适合第一阶段？

### 9.5 `04_customer_scenarios/02_local_merchant_content_operation.md`

必须覆盖：

- 小红书
- B站
- 本地生活公开服务
- 代运营价格

必须回答：

- 它为什么不是第一阶段最优先？
- 它为什么仍然值得保留为备选方向？
- 它的获客、交付和价格问题在哪里？

### 9.6 `06_technical_feasibility/01_agent_reach_channel_reliability.md`

必须完整记录 `agent-reach doctor --json`。

必须逐个写：

- B站
- 小红书
- Reddit
- X/Twitter
- Exa
- Jina
- LinkedIn
- GitHub

必须回答：

- 哪些渠道适合自动化？
- 哪些渠道只能辅助人工？
- 为什么不能承诺全自动？
- 哪些失败会直接影响产品交付？

### 9.7 `07_opportunity_decision/02_decision_matrix.md`

必须引用前面各点证据。

不允许只凭主观打分。

每个评分必须写：

- 来源文档
- 关键证据
- 打分理由
- 置信度

### 9.8 `09_synthesis/full_report.md`

只能在所有前置点完成后生成。

必须引用各点文档，而不是重新凭空写。

必须回答：

- 先做什么
- 为什么
- 证据是什么
- 怎么验证
- 怎么收费
- 什么情况下 pivot

## 10. VitePress 交付要求

VitePress 可读目录：

```text
docs/docs/research/
|
|-- index.md
|-- methodology/
|-- category/
|-- benchmarks/
|-- china-market/
|-- scenarios/
|-- pricing/
|-- technical/
|-- decision/
|-- mvp/
|-- synthesis/
`-- evidence/
```

VitePress 首页必须做到：

- 默认推荐阅读
- 旧报告放入 archive 或 legacy，不作为主入口。
- 侧边栏按 调研点组织。
- 首页要有 ASCII 架构图，让读者一眼知道每组文档写什么。

## 11. 验收标准

内容结构：

- 每一个调研点都是独立 Markdown。
- 每一个调研点都有 agent-reach 搜索记录。
- 每一个调研点都有来源表、发现、分析、MVP 影响和置信度。
- 最终总报告只作为综合，不替代逐点调研。

调研深度：

- 总来源不少于 50 个。
- 非官网来源不少于 15 个。
- agent-reach 命令记录不少于 25 条。
- 失败/偏差渠道记录不少于 5 条。
- 至少覆盖 5 类信源：官网/文档、第三方评价、社媒/社区、视频平台、价格/服务包页面。

技术验证：

- `npm run docs:build` 必须通过。
- 可提交范围内敏感人物主体扫描无命中；扫描词由当前项目维护者根据原始上下文私下指定，不写入交付文档。
- `chatrecord_*.md`、`docs/context/`、`research/00_context/` 仍在 `.gitignore`。

## 12. 执行节奏

按以下顺序执行，不要跳步：

1. 先检查现有目录、VitePress 配置和 `.gitignore`。
2. 创建或修正 `docs/research/` 目录和 `docs/docs/research/` 展示目录。
3. 创建或修正 `README.md` / `research_design.md` / `source_grading.md`。
4. 跑 `agent-reach doctor --json`，写入 `00_methodology/agent_reach_doctor.md`。
5. 对每一个调研点，先写该点的搜索计划。
6. 对每一个调研点，单独执行 agent-reach 全网搜索。
7. 对每一个调研点，记录命令、来源、失败、偏差和证据缺口。
8. 每完成一个点，立即更新 `source_log.md`、`command_log.md`、`failed_channels.md`、`query_log.md`。
9. 再写该点 Markdown 的发现、分析、MVP 影响、结论和置信度。
10. 完成足够多逐点文档后，才生成 `09_synthesis/full_report.md`。
11. 同步 `docs/research/` 到 `docs/docs/research/`。
12. 运行 `npm run docs:build`。
13. 运行敏感人物主体扫描。
14. 最后汇报完成了哪些点、哪些点还没做、哪些渠道失败。

## 13. 明确无效的交付

以下情况视为无效交付，必须返工：

- 一个 Markdown 同时回答多个大问题。
- 一轮 agent-reach 搜索支撑多个调研点。
- 只写结论，没有命令记录。
- 只引用官网，没有非官网来源，也没有降低置信度。
- 渠道失败但没有记录。
- 社区/社媒搜索噪声大但当作强证据。
- 先写推荐 MVP，再反向找证据。
- 总报告里出现了逐点文档没有出现过的新结论。
- 来源 ID、命令 ID、失败 ID 在全局台账中找不到。
- 文档中出现敏感人物主体或原始聊天记录。
````

## 快速版 Goal 提示词

```text
要求：每一个调研点都是独立 Markdown；每一个调研点只回答一个问题；每一个调研点都必须单独执行 agent-reach 全网搜索；不能用一轮搜索支撑多个点；不能先写结论再找证据。

每个点必须包含：问题、重要性、调研方法、agent-reach 搜索计划、agent-reach 命令执行记录、失败/偏差渠道、关键来源、关键发现、分析、MVP 影响、结论、置信度。

每个点最低要求：至少 3 条 agent-reach 命令，至少 3 类信源，至少 5 个有效来源，至少 1 个非官网来源，至少 1 条失败/偏差渠道记录。重点点至少 5 条命令、4 类信源、8 个有效来源。

每完成一个点，立即更新 query_log.md、source_log.md、command_log.md、failed_channels.md、source_quality_matrix.md。总报告只能在逐点文档完成后综合，不允许替代逐点调研。

最终判断：第一阶段是否应该做“人工审核的外贸 B2B 线索研究交付包”，而不是笼统做 AI CMO、中国版 Okara、内容工具或 Agent 平台。
```
