# 产品机会决策标准是什么

## 1. 本点要回答的问题

本项目应该用什么标准判断第一阶段 MVP 机会，而不是凭“概念热度”或“个人偏好”决定做 AI CMO、Marketing Agent、本地商家代运营或外贸 B2B 线索研究？

## 2. 为什么这个点重要

如果没有统一标准，后续决策矩阵会变成主观打分。这个点的作用是先定义“什么叫适合第一阶段”，再用前面逐点调研证据去比较候选方向。

这个点影响：

- 哪些证据能进入决策矩阵。
- 哪些指标是加分项，哪些是淘汰项。
- 是否允许用概念热度替代付费意愿。
- 是否优先选择可交付、可验证、可人审的服务化 MVP。

## 3. 调研方法

| 信源类型 | 本点使用情况 | 偏差说明 |
|---|---|---|
| 产品优先级框架 | RICE、机会评估、产品机会评估 | 框架容易给主观数字制造确定性，需要结合证据 |
| 创业机会判断 | Paul Graham / YC 关于 startup ideas 的公开文章 | 更偏早期创业，但适合判断“疼痛问题”和“有机需求” |
| 社媒 / 社区 | X、Reddit 关于 prioritization / validation 的讨论 | 噪声高，但能看到对框架化打分的反例 |
| Jina Reader | 尝试读取 Intercom、YC、SVPG 页面 | 本轮均失败，作为渠道失败记录 |
| 普通网页检索 | Jina 失败后定位公开网页来源 | 只作为兜底，不替代 agent-reach 命令记录 |

## 4. agent-reach 全网搜索计划

| 需要验证的问题 | 计划搜索词 | 计划渠道 | 预期证据 | 备注 |
|---|---|---|---|---|
| 产品优先级框架如何定义价值、信心、成本 | `RICE prioritization reach impact confidence effort` | Jina Reader / 普通网页 | RICE 维度和局限 | Jina 失败则记录 |
| 创业机会如何判断“真实痛点” | `YC startup ideas organic ideas tarpit ideas pain` | Jina Reader / 普通网页 | 避免 tarpit ideas、从真实问题出发 | Jina 失败则记录 |
| 产品机会评估应该问哪些问题 | `product opportunity assessment Marty Cagan` | Jina Reader / 普通网页 | 目标用户、问题、价值、可行性、Go-to-market | Jina 失败则记录 |
| 社区是否反对纯框架打分 | `product opportunity assessment RICE prioritization startup idea validation painful problem` | Reddit / X OpenCLI | 反例、框架局限、验证闭环 | 作为噪声和反证来源 |

## 5. agent-reach 搜索执行记录

| 渠道 | 命令 / 搜索词 | 结果 | 是否有效 | 备注 |
|---|---|---|---|---|
| agent-reach doctor | `agent-reach doctor --json` | 返回 X、Reddit、B站、小红书、Exa、Web 等状态；LinkedIn off，V2EX warn | 有效 | 本点使用 Jina Reader、X、Reddit |
| Jina Reader | `curl.exe -s "https://r.jina.ai/https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/"` | 无有效正文，退出码 1 | 失败 | RICE 来源改用普通网页定位 |
| Jina Reader | `curl.exe -s "https://r.jina.ai/https://www.ycombinator.com/library/6e-how-to-get-startup-ideas"` | 无有效正文，退出码 1 | 失败 | YC 来源改用普通网页定位 |
| Jina Reader | `curl.exe -s "https://r.jina.ai/https://www.svpg.com/product-opportunity-assessments/"` | 无有效正文，退出码 1 | 失败 | SVPG 来源改用普通网页定位 |
| Reddit / OpenCLI | `opencli reddit search "product opportunity assessment RICE prioritization startup idea validation painful problem" -f yaml` | 返回大量无关帖子，相关性很弱 | 无效 | 作为 Reddit 噪声记录 |
| X / OpenCLI | `opencli twitter search "product opportunity assessment RICE prioritization startup idea validation painful problem" -f yaml` | 返回 RICE 批评、idea validation、pain-point scoring、kill/continue rule 等讨论 | 部分有效 | 能补充“不要让框架替代验证”的反例 |

## 6. 渠道失败 / 偏差记录

| 渠道 | 状态 | 失败或偏差摘要 | 对证据完整性的影响 | 替代处理 |
|---|---|---|---|---|
| Jina Reader | 失败 | Intercom、YC、SVPG 三个页面均无有效正文 | 无法把 Jina 输出作为主证据 | 使用普通网页定位公开来源，并记录 Jina 失败 |
| Reddit | 无效 / 噪声 | 搜索结果跑到大量无关生活、健康、游戏、泛社区帖子 | Reddit 不适合作为本点主证据 | 用 X 讨论和公开产品框架文章替代 |
| X | 部分有效 | 有框架批评和验证闭环讨论，也混入 AI prompt / 创业鸡汤内容 | 只能作为反例和趋势线索 | 以 Intercom、YC、SVPG 等公开来源为主 |
| 框架类来源 | 有偏差 | RICE、ICE、MoSCoW 等框架容易被误用成主观数字游戏 | 决策矩阵不能只凭分数 | 每个评分必须绑定前文证据 |

## 7. 关键来源

| ID | 来源 | URL | 类型 | 日期 | 关键证据 | 可信度 |
|---|---|---|---|---|---|---|
| S0091 | Intercom: RICE prioritization | https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/ | 产品优先级框架 | 2026-07-01 访问 | RICE 用 Reach、Impact、Confidence、Effort 评估项目优先级 | 高 |
| S0092 | YC / Paul Graham: How to Get Startup Ideas | https://www.ycombinator.com/library/6e-how-to-get-startup-ideas | 创业机会判断 | 2026-07-01 访问 | 好创业想法通常来自真实问题、特定人群和创始人能理解的需求，避免表面看起来合理但没人真正要的方向 | 高 |
| S0093 | SVPG: Product Opportunity Assessments | https://www.svpg.com/product-opportunity-assessments/ | 产品机会评估 | 2026-07-01 访问 | 产品机会评估要求回答目标用户、问题、业务价值、成功指标、竞争和进入市场等问题 | 高 |
| S0094 | X：RICE / confidence frameworks criticism | https://x.com/i/status/2071396238524850298 | 社媒 / 框架反例 | 2026-07-01 访问 | 讨论认为 RICE 等信心打分可能系统性偏向小项目，挤掉更大价值但不确定的机会 | 中 |
| S0095 | X：prioritization should close the loop | https://x.com/i/status/2071964475847283139 | 社媒 / 框架反例 | 2026-07-01 访问 | 讨论认为优先级框架必须连接 Ship -> measure -> verdict -> next decision，否则只是会议 | 中 |
| S0096 | X：market gap analysis prompt | https://x.com/i/status/2071360970383876206 | 社媒 / 调研方法 | 2026-07-01 访问 | 提出收集用户不满、聚类痛点、按频率/强度/供给缺口评分，再形成机会判断 | 中 |
| S0097 | X：kill / continue rule | https://x.com/i/status/2070884106297303425 | 社媒 / 验证闭环 | 2026-07-01 访问 | 强调机会判断要写清“必须成立的前提、最便宜测试、所需证据、终止/继续规则” | 中 |

## 8. 关键发现

事实发现：

- RICE 框架把优先级拆成 Reach、Impact、Confidence、Effort，说明“影响面、影响强度、信心和成本”是常见决策维度。
- SVPG 的产品机会评估强调目标用户、要解决的问题、业务价值、成功指标、竞争格局和进入市场路径。
- YC / Paul Graham 对 startup ideas 的判断强调从真实问题、特定人群、创始人理解的场景出发，警惕表面合理但没有真实拉力的方向。
- X 上有对 RICE / confidence 类框架的反例：信心分可能偏向小而确定的项目，弱化大但不确定的机会。
- X 上也有对优先级框架的补充：如果没有交付后的测量和 verdict，框架只是会议工具。
- Reddit 本轮对“产品机会评估”关键词噪声极高，不能作为主证据。

## 9. 分析和解释

本项目不适合直接套一个 RICE 分数，因为候选方向并不是同一产品里的功能列表，而是不同商业入口：

- AI CMO / Marketing Agent 平台。
- 外贸 B2B 线索研究交付包。
- 本地商家内容运营服务。
- GEO / SEO / 内容工具。
- 通用 Agent workflow 平台。

这些方向差异在于客户、交付物、收费方式、技术约束和验证周期。单纯打 RICE 会掩盖关键问题：第一阶段最需要的是“能不能低成本卖出一个可信交付”，不是“概念上哪个更大”。

因此，本项目的决策标准应该是：

| 标准 | 要回答的问题 | 为什么重要 |
|---|---|---|
| 痛点强度 | 客户是否已经为类似问题花钱或花大量时间？ | 避免做 nice-to-have |
| 付费证据 | 是否有公开价格、服务包、采购行为或预算锚点？ | 第一阶段要尽快验证收入 |
| 交付物清晰度 | 客户拿到什么，怎么判断质量？ | 决定能否先服务化交付 |
| 验证周期 | 14 天内能否做样例并拿到反馈？ | 决定 MVP 是否可快速迭代 |
| Agent 提效空间 | Agent 是否能显著减少搜索、整理、比对、起草成本？ | 决定技术杠杆是否真实 |
| 人工审核必要性 | 人审是否能明显提高可信度，而不是拖慢交付？ | 决定 human-reviewed 是否有差异化 |
| 平台和数据约束 | 是否强依赖登录态、抓取、自动化、平台规则？ | 决定交付风险 |
| 竞争替代 | 是否已经被成熟 SaaS 完全覆盖？ | 决定是否只能做廉价复制 |
| 销售表达清晰度 | 一句话能否说清卖给谁、解决什么、怎么收费？ | 决定冷启动销售可行性 |
| 结果归因清晰度 | 交付效果能否被分阶段验证？ | 避免被要求承诺无法控制的结果 |

## 10. 对 MVP 决策的影响

支持的方向：

- 支持用“痛点强度 + 付费证据 + 交付物清晰 + 验证周期 + 技术可行”作为核心标准。
- 支持把“人工审核的外贸 B2B 线索研究交付包”放入优先候选，因为它更容易形成可核验交付物。
- 支持把本地商家内容运营保留，但用“持续运营复杂度”和“结果归因”降低第一阶段优先级。

反对的方向：

- 反对只因为 AI CMO / agentic marketing 叙事热，就把它放在第一阶段。
- 反对只用主观 1-5 分打分，不写证据来源。
- 反对把不可控结果当成 MVP 承诺，例如保证成交、保证涨粉、保证自动获客。

增加的风险：

- 即使有决策标准，评分仍可能受主观判断影响。
- 部分信源来自社媒和内容平台，只能作为弱证据。
- 如果没有真实客户访谈，最终仍需要用付费试单验证。

还缺的证据：

- 需要对决策矩阵中的每个评分绑定前文来源。
- 需要后续用真实样例交付检验“交付物清晰度”和“验证周期”。

## 11. 结论

- 本项目第一阶段决策标准不应是“市场概念最大”，而应是“最容易卖出可信交付并快速验证”。
- RICE、SVPG、YC 等框架都支持一个共同点：机会判断必须连接客户问题、业务价值、成本、信心和验证。
- 本项目的核心标准应是：痛点强度、付费证据、交付物清晰度、验证周期、Agent 提效空间、人审价值、平台约束、竞争替代、销售表达和结果归因。
- 后续决策矩阵必须逐项引用已完成调研点，不能凭主观喜好打分。

## 12. 置信度

中高。

原因：

- 本点使用了产品框架、创业机会判断和社媒反例交叉验证。
- Jina Reader 对关键网页读取失败，降低了 agent-reach 网页正文证据强度。
- 但 Intercom、YC、SVPG 公开来源本身可信度较高，X 反例也与“不要让框架替代验证”的原则一致。
