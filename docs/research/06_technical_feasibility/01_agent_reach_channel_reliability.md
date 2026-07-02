# agent-reach 渠道可靠性和自动化边界

## 1. 本点要回答的问题

当前机器上的 agent-reach 渠道到底哪些可靠，哪些不可靠？在外贸 B2B 线索研究交付包中，哪些环节可以自动化，哪些必须人工审核，为什么不能对客户承诺“全自动获客”？

## 2. 为什么这个点重要

外贸 B2B 线索研究需要跨网页、B站、小红书、Reddit、X、LinkedIn、海关数据和工具价格页取证。如果渠道不稳定或受登录态、平台规则、API、风控限制影响，MVP 就必须设计成人工审核交付，而不是无人值守自动化系统。

这个点影响：

- 是否能承诺自动化。
- 哪些数据源能作为主证据。
- 交付流程中人审的位置。
- 技术 demo 应该展示什么，不应该展示什么。

## 3. 调研方法

| 信源类型 | 本点使用情况 |
|---|---|
| agent-reach doctor | 本机渠道体检 |
| 实际命令测试 | Exa、Jina、X |
| 平台规则 | LinkedIn、X、Reddit |
| 工具文档 | Agent Reach、Jina Reader |
| 社媒实践讨论 | X 上关于 Agent Reach 和 LinkedIn 自动化的讨论 |

## 4. agent-reach 搜索记录

| 渠道 | 命令 / 搜索词 | 结果 | 是否有效 | 备注 |
|---|---|---|---|---|
| agent-reach doctor | `agent-reach doctor --json` | 成功返回渠道状态：GitHub/X/YouTube/Reddit/B站/小红书/RSS/Exa/Web ok；LinkedIn off；V2EX warn | 有效 | doctor 显示可用不等于实际单命令必然可用 |
| Exa / mcporter | `mcporter call exa.web_search_exa query="agent reach reliability browser automation OpenCLI social platform automation" numResults=5` | 失败，`Unknown MCP server 'exa'` | 无效 | doctor 与实际调用不一致 |
| Jina Reader | `curl.exe -s "https://r.jina.ai/https://okara.ai/docs/introduction"` | 失败，无有效正文，退出码 1 | 无效 | Jina doctor 可用但实际读取不稳定 |
| X / OpenCLI | `opencli twitter search "agent automation browser LinkedIn x.com AUTH_REQUIRED" -f yaml` | 成功返回浏览器自动化、Agent Reach、LinkedIn automation 边界等讨论 | 有效 | 依赖登录态，不能视为零配置稳定通道 |

渠道失败或偏差记录：

| 渠道 | 情况 | 对证据完整性的影响 | 替代信源 |
|---|---|---|---|
| Exa | doctor 显示 ok，但实际 `mcporter call exa.web_search_exa` 报 `Unknown MCP server 'exa'` | 不能把 Exa 作为当前稳定调研依赖 | Web 搜索、OpenCLI、官方页面和手动网页搜索兜底 |
| Jina Reader | doctor 显示 Web ok，但实际读取 Okara docs 无正文 | 不能承诺任意网页都能稳定转 Markdown | 浏览器搜索、网页摘要、官方页面直接访问兜底 |
| LinkedIn MCP | doctor 显示 off，未配置 LinkedIn MCP | 不能直接承诺自动读取 LinkedIn 完整资料或批量抓取 | 公开网页、客户提供数据、Sales Navigator 人工检索、人审兜底 |
| X | 本次可用，但前序调研曾出现 `AUTH_REQUIRED` | X 依赖登录态和浏览器 cookie，不能视为持久稳定通道 | Reddit、B站、小红书、网页搜索兜底 |
| Reddit / B站 / 小红书 | 多次可用，但搜索词会显著影响噪音和跑偏 | 需要人工判断结果有效性 | 多关键词重试、交叉信源和人工筛选 |

## 5. 关键来源

| ID | 来源 | URL | 类型 | 日期 | 关键证据 | 可信度 |
|---|---|---|---|---|---|---|
| S0070 | Agent Reach GitHub / documentation | https://github.com/Panniantong/Agent-Reach | 工具文档 | 2026-07-01 访问 | Agent Reach 是多平台互联网能力路由器，本机通过 doctor 检测渠道状态 | 高 |
| S0071 | LinkedIn Help: Prohibited software and extensions | https://www.linkedin.com/help/linkedin/answer/a1341387 | 平台规则 | 2026-07-01 访问 | LinkedIn 不允许 crawlers、bots、browser plug-ins 或 extensions 抓取、修改或自动化活动 | 高 |
| S0072 | X Help: Automation development rules | https://help.x.com/en/rules-and-policies/x-automation | 平台规则 | 2026-07-01 访问 | X 要求自动化活动不误导用户，并在不确定时获取用户许可 | 高 |
| S0073 | Reddit Data API Terms | https://redditinc.com/policies/data-api-terms | 平台规则 | 2026-07-01 访问 | Reddit Data API 有专门条款，数据访问需要遵守授权和使用限制 | 高 |
| S0074 | Reddit developer discussion: Responsible Builder Policy and new approval flow | https://www.reddit.com/r/redditdev/comments/1oug31u/introducing_the_responsible_builder_policy_new/ | 社区 / 平台政策讨论 | 2026-07-01 访问 | Reddit 新 OAuth token 需要审批，说明 API 访问正在收紧 | 中 |
| S0075 | Jina AI Reader API | https://jina.ai/reader/ | 工具文档 | 2026-07-01 访问 | Jina Reader 可将网页转换为 Markdown，但实际读取仍受网页结构、网络和访问限制影响 | 高 |
| S0076 | X：Agent Reach capability discussion | https://x.com/i/status/2072286491879833614 | 社媒 / 工具讨论 | 2026-07-01 访问 | X 讨论列出 Agent Reach 的零配置渠道和需要登录态的渠道 | 中 |
| S0077 | X：LinkedIn automation browser-use discussion | https://x.com/i/status/2072201536176791960 | 社媒 / 自动化讨论 | 2026-07-01 访问 | 讨论认为 LinkedIn 自动化应只自动化人手动会做的低频动作 | 中 |
| S0078 | X：LinkedIn blocks automation discussion | https://x.com/i/status/2071665646866203003 | 社媒 / 自动化讨论 | 2026-07-01 访问 | 讨论指出 LinkedIn 会拦截大量自动化工具，官方 API 和真实浏览器边界重要 | 中 |

## 6. 关键发现

事实发现：

- 本机 `agent-reach doctor --json` 显示 GitHub、X、YouTube、Reddit、B站、小红书、RSS、Exa、Web 可用，LinkedIn off，V2EX warn。
- 实际测试中，Exa 通过 `mcporter call exa.web_search_exa ...` 报 `Unknown MCP server 'exa'`，说明 doctor 状态和实际调用之间存在不一致。
- 实际测试中，Jina Reader 读取 Okara docs 没有返回有效正文，说明 Web/Jina 不能作为所有网页的稳定读取承诺。
- X 本次 OpenCLI 搜索成功，但前序调研中 X 曾因未登录 x.com 报 `AUTH_REQUIRED`，说明 X 依赖浏览器登录态。
- B站和小红书多次搜索成功，适合获取中文市场语境，但结果常包含教程、搬运、服务推广和标题党，需要人工筛选。
- Reddit 多次搜索成功，但关键词容易跑偏，尤其在 customs data、pricing 等主题中噪音较高。
- LinkedIn MCP 当前未配置；同时 LinkedIn 官方帮助文档明确反对 crawler、bot、browser plug-in 或 extension 抓取、修改或自动化活动。
- X 和 Reddit 都有明确自动化 / API 使用规则，不能把平台自动化当成无边界能力。

## 7. 分析和解释

当前渠道可分为四类：

| 类型 | 渠道 | 当前判断 | 用法 |
|---|---|---|---|
| 相对稳定公开渠道 | GitHub、B站、小红书、YouTube、RSS | 可用于调研和证据收集 | 仍需人工筛选 |
| 可用但依赖登录态 | X、Reddit、小红书 OpenCLI、B站 OpenCLI | 可作为补充信号 | 不能承诺长期无人值守 |
| doctor 可用但实际不稳 | Exa、Jina Reader | 需要记录失败并兜底 | 不作为唯一证据 |
| 当前不可用 / 高约束 | LinkedIn MCP、V2EX API | 不作为自动化主链路 | 人工或公开网页兜底 |

这意味着外贸 B2B 线索研究的技术实现应采用“半自动研究系统”：

```text
Agent 搜索和整理
|
+-- 多渠道搜索
+-- 候选公司提取
+-- 联系人候选
+-- 证据链接整理
+-- 初版触达理由
|
`-- 人工审核
    +-- 排除错配公司
    +-- 判断联系人相关性
    +-- 检查邮箱和来源
    +-- 修正触达理由
    `-- 形成可交付报告
```

## 8. 对 MVP 决策的影响

支持的方向：

- 支持做“人工审核的外贸 B2B 线索研究交付包”。
- 支持把 agent-reach 用作内部调研和证据收集引擎。
- 支持在交付物里保留来源链接、命令记录和人工审核状态，增强可信度。

反对的方向：

- 反对对外承诺全自动获客。
- 反对自动化 LinkedIn 批量抓取或批量触达作为 MVP 核心能力。
- 反对依赖单一渠道，例如只靠 Exa、Jina、LinkedIn 或 Reddit。
- 反对没有人工审核就交付名单。

增加的风险：

- 登录态失效会导致 X、Reddit、小红书等渠道中断。
- 平台规则变化会影响自动化能力。
- 搜索结果噪音会放大错误，如果没有人审会交付低质量线索。
- LinkedIn 和联系人信息是最有价值也是最受限制的数据，必须谨慎处理。

还缺的证据：

- 需要后续做一个真实样例项目，记录每个渠道的成功率、耗时和人工修正比例。
- 需要明确哪些数据来自客户授权工具账号，哪些来自公开网页。
- 需要为交付流程建立质量检查清单。

## 9. 结论

- agent-reach 足以支撑“研究型工作流”，但不足以支撑“无人值守全自动获客承诺”。
- B站、小红书、Reddit、X 能提供有价值信号，但都需要人工筛选和交叉验证。
- Exa、Jina、LinkedIn 在当前环境存在可用性或配置限制，不能作为唯一依赖。
- 第一阶段最稳妥的技术产品形态是“agent-assisted research + human-reviewed delivery”。
- 技术 demo 应展示证据链、命令记录、候选线索和审核状态，而不是展示自动群发或自动抓取。

## 10. 置信度

高。

原因：

- 本点直接基于本机 `agent-reach doctor`、实际命令测试和多平台规则来源。
- 已观察到成功、失败、跑偏和配置缺失等多种真实状态。
- 渠道状态会随登录态、网络和平台规则变化，因此结论应定期复测，但“不能承诺全自动”的判断非常稳。

