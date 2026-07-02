# 推荐 MVP 应该是什么

## 1. 本点要回答的问题

第一阶段最应该交付的 MVP 是什么？它应该卖给谁、交付什么、边界在哪里、用什么方式收费验证？

本点不回答长期愿景，也不把“AI CMO / Marketing Agent 平台”直接当成结论。本点只判断第一阶段是否应该做一个更窄、更可交付、更容易试单验证的 MVP。

## 2. 为什么这个点重要

前面的决策矩阵已经把“人工审核的外贸 B2B 线索研究交付包”排在第一优先，但矩阵还不等于产品定义。本点要把方向压成可执行的 MVP 边界。

它影响：

- 首版客户是谁。
- 首版交付物是什么。
- 哪些能力必须做，哪些暂时不做。
- 是否用 agent 提效，而不是承诺全自动获客。
- 价格验证应该怎么设假设。

## 3. 调研方法

| 信源类型 | 本点使用情况 | 偏差说明 |
|---|---|---|
| X / 社媒 | 查询 productized B2B lead research、qualified leads、tool stitching | 服务商推广很多，只能证明市场供给和痛点表达 |
| Reddit / 社区 | 查询 B2B lead research service、qualified leads pricing | 噪声和营销帖较多，只作为辅助 |
| B站 / 视频平台 | 查询外贸线索研究、客户名单、海关数据、LinkedIn | 中文外贸场景强，但教程/培训/服务商内容多 |
| 小红书 / 内容平台 | 查询外贸客户名单、海关数据、客户背调 | 个人经验和服务推广混杂，适合观察一线语境 |
| Exa / mcporter | 尝试网页搜索 | 实际调用失败，作为失败渠道记录 |
| 前置逐点文档 | 引用外贸 B2B 场景、工具价格、海关数据价格、决策矩阵 | 作为主证据底座 |

## 4. agent-reach 全网搜索计划

| 需要验证的问题 | 计划搜索词 | 计划渠道 | 预期证据 | 备注 |
|---|---|---|---|---|
| B2B 线索研究是否能被包装成服务 | `productized B2B lead research service qualified leads pricing` | X / Reddit / Exa | 服务包、价格、质量痛点 | 重点看“usable data”而不是名单数量 |
| 中文外贸客户是否围绕名单、海关数据、LinkedIn 找客户 | `外贸 线索研究 服务 客户名单 价格 海关数据 LinkedIn` | B站 | 外贸获客任务、海关数据、联系人研究 | 识别交付任务词 |
| 小红书是否有外贸客户背调和海关数据使用语境 | `外贸 客户名单 线索 服务 价格 海关数据` | 小红书 | 背调、客户开发、海关数据争议 | 同时找正反证据 |
| Exa 是否能补足网页信源 | `B2B lead research service qualified leads pricing productized` | Exa / mcporter | 第三方网页、服务页 | 失败则记录 |

## 5. agent-reach 搜索执行记录

| 渠道 | 命令 / 搜索词 | 结果 | 是否有效 | 备注 |
|---|---|---|---|---|
| agent-reach doctor | `agent-reach doctor --json` | 返回 X、Reddit、B站、小红书、Exa、Web 等渠道状态；LinkedIn off | 有效 | 本点实际使用 X、Reddit、B站、小红书、Exa 尝试 |
| X / OpenCLI | `opencli twitter search "productized B2B lead research service qualified leads pricing" -f yaml` | 返回 lead research 服务、工具拼接、数据质量、低价名单等结果 | 有效 | 服务商推广多，但痛点表达清晰 |
| Reddit / OpenCLI | `opencli reddit search "B2B lead research service qualified leads pricing" -f yaml` | 返回内容营销和 B2B leads 相关帖子，也有大量营销噪声 | 部分有效 | 只保留 human verification、CPL、ICP 等概念 |
| B站 / OpenCLI | `opencli bilibili search "外贸 线索研究 服务 客户名单 价格 海关数据 LinkedIn" -f yaml` | 返回外贸 LinkedIn、大客户开发、海关数据、AI 深度调研外贸客户等视频 | 有效 | 中文外贸任务语境强 |
| 小红书 / OpenCLI | `opencli xiaohongshu search "外贸 客户名单 线索 服务 价格 海关数据" -f yaml` | 返回海关数据争议、外贸客户背调、开发海外大客户、产品出口判断等笔记 | 有效 | 既有正向教程，也有反向避坑 |
| Exa / mcporter | `mcporter call 'exa.web_search_exa(query: "B2B lead research service qualified leads pricing productized", numResults: 5)'` | 失败，提示无法加载 tool metadata | 失败 | 不作为本点证据 |

## 6. 渠道失败 / 偏差记录

| 渠道 | 状态 | 失败或偏差摘要 | 对证据完整性的影响 | 替代处理 |
|---|---|---|---|---|
| Exa / mcporter | 失败 | `Unable to load tool metadata; name positional arguments explicitly` | 缺少 Exa 网页搜索补充 | 用 X、Reddit、B站、小红书和前置官方价格页兜底 |
| X / OpenCLI | 有效但偏推广 | 结果里 lead gen 服务、自动化工具、低价名单广告较多 | 不能把服务宣传当成效果证明 | 只抽取痛点、包装方式和反向风险 |
| Reddit / OpenCLI | 部分有效 / 噪声 | 结果包含营销帖和内容营销推广 | 不能作为价格主证据 | 只作为社区弱证据 |
| B站 / 小红书 | 有效但教程化 | 外贸获客、海关数据、LinkedIn 内容常带课程或服务销售 | 可证明需求语境，不能证明成交率 | 结合前置价格页和工具订阅证据 |

## 7. 关键来源

| ID | 来源 | URL | 类型 | 日期 | 关键证据 | 可信度 |
|---|---|---|---|---|---|---|
| S0110 | X：usable B2B data / lead research service | https://x.com/i/status/2072178805486297105 | 社媒 / 服务推广 | 2026-07-01 访问 | 讨论错误邮箱、过期联系人、无关 leads 会破坏 outreach，销售团队需要可用数据而不是更多数据 | 中 |
| S0111 | X：Apollo / Hunter / Instantly workflow stitching | https://x.com/i/status/2072265113911128167 | 社媒 / 工具栈 | 2026-07-01 访问 | 讨论 Apollo、Hunter、Instantly 仍需要拼接 email finding、verification、enrichment、outreach | 中 |
| S0112 | X：offer selection and Sales Navigator prospecting | https://x.com/i/status/2072327310381113847 | 社媒 / 服务方法论 | 2026-07-01 访问 | 提到市场增长、需求紧迫、ROI 清晰、可触达决策人、Sales Navigator 搜索 1000+ prospects | 中 |
| S0113 | X：B2B appointment and distribution engine promotion | https://x.com/i/status/2072027824979132544 | 社媒 / 服务推广 | 2026-07-01 访问 | 将 outbound、research、fulfilment、support、ops 包装为获客交付链条 | 低 |
| S0114 | X：cheap Google Maps lead lists | https://x.com/i/status/2071659847662416104 | 社媒 / 低价名单 | 2026-07-01 访问 | 出现极低价 leads 抓取价格，提示普通名单容易商品化 | 中 |
| S0115 | Reddit：human-verified B2B leads / CPL discussion | https://www.reddit.com/r/ContentSyndication/comments/1udpoyk/best_content_syndication_platforms_for_b2b_tech/ | 社区 / 推广帖 | 2026-07-01 访问 | 提到 human verification、ICP targeting、qualified leads 和不同 CPL 区间 | 低 |
| S0116 | B站：B2B 营销别再烧钱买垃圾线索了 | https://www.bilibili.com/video/BV1r9XmBKEFd | 视频平台 / 中文 B2B | 2026-07-01 访问 | 标题直接指向“垃圾线索”问题，支持线索质量痛点 | 中 |
| S0117 | B站：外贸 LinkedIn 大客户开发实战总结 | https://www.bilibili.com/video/BV1VALr6jE1h | 视频平台 / 外贸 LinkedIn | 2026-07-01 访问 | LinkedIn 被用于外贸大客户开发和实战复盘 | 中 |
| S0118 | B站：中国出口 Top20 行业客户 AI 获取全流程 | https://www.bilibili.com/video/BV1nK5p6BEUH | 视频平台 / AI 外贸获客 | 2026-07-01 访问 | 中文平台出现用 AI 做出口行业客户获取流程的内容 | 中 |
| S0119 | B站：海关数据到底有没有用？怎么去用 | https://www.bilibili.com/video/BV1Db421n7ku | 视频平台 / 海关数据 | 2026-07-01 访问 | 海关数据被讨论为外贸客户开发材料，但需要正确使用 | 中 |
| S0120 | B站：通过海关数据查询采购商客户及联系方式 | https://www.bilibili.com/video/BV1Za411G7yY | 视频平台 / 海关数据 | 2026-07-01 访问 | 海关数据被用于采购商和联系方式查询 | 中 |
| S0121 | B站：AI 深度调研外贸客户 | https://www.bilibili.com/video/BV1WgLW6mEdm | 视频平台 / AI 客户调研 | 2026-07-01 访问 | 将海关数据、关键联系人、组织架构纳入外贸客户深度调研 | 中 |
| S0122 | 小红书：做外贸，千万别拿海关数据，能救一个是一个 | https://www.xiaohongshu.com/search_result/6a226f6f000000002103e42c | 内容平台 / 反向证据 | 2026-07-01 访问 | 反向提醒海关数据容易被误用或过度承诺 | 中 |
| S0123 | 小红书：海关数据开发海外大客户，实操经验分享 | https://www.xiaohongshu.com/search_result/68c14772000000001d0162c9 | 内容平台 / 外贸经验 | 2026-07-01 访问 | 海关数据被用于开发海外大客户 | 中 |
| S0124 | 小红书：6 年外贸人用海关数据背调和开发客户 | https://www.xiaohongshu.com/search_result/68a44b12000000001d0285d5 | 内容平台 / 客户背调 | 2026-07-01 访问 | 海关数据用于客户背调，而不是简单名单 | 中 |
| S0125 | 小红书：外贸跟单小白第一次做客户背调 | https://www.xiaohongshu.com/search_result/69e74de9000000001d01b3eb | 内容平台 / 客户背调 | 2026-07-01 访问 | 客户背调是外贸新人也需要学习的任务 | 中 |
| S0126 | 小红书：如何用海关数据查询产品适合出口吗 | https://www.xiaohongshu.com/search_result/67e5413d000000001b02583a | 内容平台 / 市场判断 | 2026-07-01 访问 | 海关数据可作为出口品类和市场判断材料 | 中 |

## 8. 关键发现

事实发现：

- X 的 B2B lead research 结果反复出现“数据可用性”问题：错误邮箱、过期联系人、无关 leads 比名单数量更影响销售跟进。
- X 上也出现“工具拼接”问题：Apollo、Hunter、Instantly 等工具分别解决找邮箱、验证、富集、触达，但用户仍需要组织工作流。
- 低价 leads 抓取广告说明普通名单很容易商品化，单纯卖名单没有足够差异化。
- Reddit 样本有 human verification、ICP targeting、qualified leads 等服务化概念，但样本推广性强，不能作为强价格证据。
- B站外贸结果集中在 LinkedIn 大客户开发、海关数据、AI 获取客户、采购商联系方式、客户深度调研。
- 小红书同时出现海关数据正向经验和反向避坑，说明海关数据不是“万能客户名单”，更适合作为研究材料。
- 前置价格调研已经显示 Sales Navigator、Apollo、Hunter、Clay、ImportGenius 等工具存在明确付费锚点；本点补充说明工具之外仍有筛选、交叉验证和人审空间。

## 9. 分析和解释

推荐的 MVP 不应是“AI 自动获客系统”，而应是：

```text
人工审核的外贸 B2B 线索研究交付包
```

原因是，当前证据同时指向三个事实：

- 客户已有付费工具预算或至少知道这些工具：Sales Navigator、Apollo、Hunter、海关数据等。
- 现有工具解决数据入口，但不自动解决“这家公司是否相关、这个联系人是否该找、为什么现在值得跟进”。
- 社媒和中文平台反复出现低质名单、工具拼接、海关数据误用、客户背调等问题，人审可以成为质量差异化。

首版客户应该是：

- 有明确出口品类的外贸工厂、外贸公司、出海 B2B 服务商。
- 已经尝试过海关数据、LinkedIn、Google、展会名单、Apollo / Hunter 等工具，但缺少筛选和背调能力。
- 能把线索交给业务员跟进，并愿意为“可核验、可分配、可解释”的线索包付费。

首版交付物应该是：

| 交付项 | 内容 | 为什么需要 |
|---|---|---|
| 目标市场假设 | 国家 / 地区 / 行业 / 产品关键词 | 避免泛泛找客户 |
| 目标公司列表 | 公司名、官网、国家、行业、规模线索 | 形成可跟进对象 |
| 相关性证据 | 采购、产品、官网、海关、新闻、招聘、社媒信号 | 说明为什么它是线索 |
| 联系人线索 | 决策人、采购、业务、运营或相关部门 | 让销售知道找谁 |
| 来源链接 | 官网、LinkedIn、海关数据、搜索结果、内容证据 | 支撑可核验 |
| 跟进理由 | 为什么现在值得跟进 | 提升销售动作质量 |
| Opening draft | 邮件或 LinkedIn 开场草稿 | 把研究转成行动 |
| 质量标记 | A / B / C、证据强度、风险说明 | 避免把所有 leads 当同质名单 |

首版不应该做：

- 不做全自动 LinkedIn 批量访问 / 批量私信。
- 不做自动冷邮件群发工具。
- 不做“保证成交 / 保证询盘 / 保证回复率”承诺。
- 不做宽泛 AI CMO 平台。
- 不做普通低价名单贩卖。

## 10. 对 MVP 决策的影响

支持的方向：

- 支持把第一阶段定义为服务化交付，而不是 SaaS 平台。
- 支持以 agent-reach / agent workflow 提升搜索、整理、交叉验证、草稿生成效率。
- 支持把人工审核写进价值主张：不是“人工兜底”，而是质量控制。

反对的方向：

- 反对首版做“替代营销团队”的 AI CMO。
- 反对首版做通用 Marketing Agent 平台。
- 反对把海关数据、LinkedIn、Apollo 任一单点工具包装成完整解决方案。

增加的风险：

- 如果交付标准不严格，很容易变成低价名单服务。
- 如果人审过重，毛利和交付速度会不稳定。
- 如果客户行业过散，每单研究成本会过高。

还缺的证据：

- 真实客户是否愿意为 30-50 条人审线索包付费。
- 单个线索从搜索到审核的平均耗时。
- 线索质量分级是否被销售团队认可。
- 不同行业的线索研究难度差异。

## 11. 结论

- 推荐 MVP 是“人工审核的外贸 B2B 线索研究交付包”。
- 首版核心价值不是“更多名单”，而是“可核验、可解释、可分配给销售跟进的线索”。
- Agent 的作用是提效研究和整理，不是替代所有判断，也不是自动化触达。
- 建议把收费写成验证假设：例如人民币 1,500-5,000 元 / 样例包，或按 30-50 条线索打包试单；该价格不是最终定价，必须用真实试单验证。
- 首版成功标准应该是客户愿意评价样例、要求补充行业、愿意为下一包付费，而不是立即证明成交。

## 12. 置信度

中高。

原因：

- 本点覆盖 X、Reddit、B站、小红书和 Exa 失败记录，符合逐点全网调研要求。
- 结论与前置外贸 B2B 场景、工具价格、海关数据价格、决策矩阵一致。
- 主要不确定性不在需求是否存在，而在试单价格、交付耗时和客户对线索质量的判断标准。
