# Semrush / Surfer 是否证明 SEO-GEO 内容工具值得作为第一阶段主线

## 1. 本点要回答的问题

Semrush 和 Surfer 是否应该作为本项目第一阶段的关键标杆？它们证明的是“AI CMO / Marketing Agent 平台”机会，还是更具体地证明“SEO、AI Search / GEO、内容优化、品牌可见性监测”有成熟付费锚点？这一方向是否比“人工审核的外贸 B2B 线索研究交付包”更适合第一阶段优先验证？

## 2. 为什么这个点重要

Semrush 是传统 SEO / 竞品流量 / 内容营销工具的代表，Surfer 是 SEO 内容优化和 AI 内容工作流的代表。AI Search、GEO、AEO、AI Visibility 正在把 SEO 工具带进新的叙事。如果误读这类工具，项目可能转向“AI SEO / GEO 平台”；如果正确拆解，可以判断它们是主线机会、辅助模块，还是第二阶段能力。

本点影响：

- 是否把 SEO-GEO 内容优化作为第一阶段 MVP。
- 是否把 Semrush / Surfer 作为付费锚点，而不是 Apollo / Clay / Sales Navigator / 海关数据。
- 是否把“内容生产 + AI Search 可见性”纳入外贸 B2B 线索研究包的后续增值模块。
- 是否避免把中文平台上的 GEO 热度误读为可立即产品化的稳定需求。

## 3. 调研方法

| 信源类型 | 本点使用情况 | 偏差说明 |
|---|---|---|
| 官网 / 官方页面 | Semrush 首页、pricing、content marketing tools；Surfer 首页、pricing、AI、Content Editor、AI Tracker | 官网能确认定位和功能边界，但有营销倾向 |
| Jina Reader | 尝试读取 Semrush / Surfer 首页 | 两个页面均失败，不能作为正文证据 |
| Exa / 网页搜索 | 尝试 Exa 搜索 Semrush / Surfer pricing、AI SEO、GEO | mcporter metadata 失败，不能作为证据 |
| Reddit / 社区 | 搜索 AI visibility tracking、Semrush / Surfer、AI SEO 工具替代 | 有长帖和工具对比，也有大量推广型内容 |
| X / 社媒 | 搜索 Semrush、Surfer、AI SEO、GEO、Google AI Search | SEO 服务商广告多，但能观察行业叙事和 Semrush 官方内容 |
| B站 / 中文视频 | 搜索 Semrush、SurferSEO、SEO、AI、GEO | 命中 Semrush 教程、GEO、AI 投毒、AI SEO 自动化等中文语境 |
| 小红书 / 内容平台 | 搜索 Semrush、SurferSEO、SEO、AI、GEO、独立站 | 命中 AI SEO SOP、GEO、独立站 SEO、自动化内容等内容，但教程和风口化明显 |
| GitHub | 搜索 SEO content optimization AI search Semrush Surfer | 无有效输出 | 记录为失败渠道 |

## 4. agent-reach 全网搜索计划

| 需要验证的问题 | 计划搜索词 | 计划渠道 | 预期证据 | 偏差预判 |
|---|---|---|---|---|
| Semrush / Surfer 官方定位 | `Semrush AI Search pricing SEO content marketing` / `Surfer AI Visibility Content Editor pricing` | Jina / 普通 curl | 产品定位、价格、功能结构 | 官网营销包装，动态页面抽取可能不完整 |
| SEO-GEO 是否已形成付费工具类目 | `AI SEO GEO visibility tracking tools Semrush Surfer` | Reddit / X / 官网 | AI visibility、GEO、AI Search、content optimization 工具栈 | 广告和 affiliate 内容多 |
| 中文市场如何理解 SEO/GEO | `Semrush SurferSEO SEO AI 内容优化 GEO` | B站 / 小红书 | 中文教程、独立站、GEO、AI SEO 自动化、反向风险 | 风口、课程、灰度 SEO 内容多 |
| 是否适合第一阶段 MVP | `SurferSEO review content editor pricing alternatives` / `Semrush AI Search Toolkit SEO pricing review` | Reddit / X | 价格、工具边界、工作流、替代品 | 社区样本不稳定，推广比较多 |
| 是否有开源替代或技术实现 | `SEO content optimization AI search Semrush Surfer` | GitHub | 开源 SEO audit、AI search tracking、内容优化工具 | 可能无直接替代 |

## 5. agent-reach 搜索执行记录

| 渠道 | 命令 / 搜索词 | 结果摘要 | 是否有效 | 备注 |
|---|---|---|---|---|
| agent-reach doctor | `agent-reach doctor --json` | X、Reddit、B站、小红书为 OpenCLI；GitHub 为 gh；LinkedIn off；Exa/Web 显示 ok | 有效 | 实际命令仍需逐个验证 |
| Jina Reader | `curl.exe -s "https://r.jina.ai/https://www.semrush.com/"` | 无有效输出，退出码 1 | 失败 | Semrush 首页 Jina 失败 |
| Jina Reader | `curl.exe -s "https://r.jina.ai/https://surferseo.com/"` | 无有效输出，退出码 1 | 失败 | Surfer 首页 Jina 失败 |
| Exa / mcporter | `mcporter call 'exa.web_search_exa(query: "Semrush SurferSEO pricing review AI SEO content optimization generative engine optimization", numResults: 5)'` | `Unable to load tool metadata` | 失败 | Exa 不作为本点证据 |
| Semrush 官网 / 普通 curl | `curl.exe -L -s "https://www.semrush.com/"; [regex]::Matches(...)` | 读到 Semrush 标题和描述：grow brand visibility across AI search、SEO、PPC、social 等 | 有效 | Jina 失败后的官方兜底 |
| Semrush pricing / 普通 curl | `curl.exe -L -s "https://www.semrush.com/prices/"; [regex]::Matches(...)` | 读到 SEO & AI Search Plans and Pricing、grow organic visibility、track rankings、monitor brand across AI results | 有效 | 抽取价格页定位，具体套餐数字未完整复原 |
| Surfer 官网 / 普通 curl | `curl.exe -L -s "https://surferseo.com/"; [regex]::Matches(...)` | 读到 Surfer - AI Visibility Platform、SEO、AI、Content、Surfer AI 等片段 | 有效 | 官方定位明确转向 AI visibility |
| Surfer pricing / 普通 curl | `curl.exe -L -s "https://surferseo.com/pricing/"; [regex]::Matches(...)` | 读到 pricing、Scale、Enterprise、Content Editor、Auto-Optimize、$120、$240、$444、$720 等片段 | 部分有效 | 动态页抽取不适合完整复原套餐 |
| Reddit / OpenCLI | `opencli reddit search "Semrush SurferSEO pricing review AI SEO content optimization" -f yaml` | 命中 AI brand visibility tracking 长帖，提到 Semrush 已加入 AI visibility / ChatGPT search targeting，也混入大量工具推广 | 有效 | 可用于 AI visibility 类目判断 |
| X / OpenCLI | `opencli twitter search "Semrush SurferSEO AI SEO content optimization GEO pricing" -f yaml` | 返回 Google AI Search Console 报告、AI Search / GEO 服务、Semrush 内容研究、人类内容 vs AI 内容等样本；噪声大 | 部分有效 | 服务广告和泛 AI 内容多 |
| B站 / OpenCLI | `opencli bilibili search "Semrush SurferSEO SEO AI 内容优化 GEO" -f yaml` | 命中 Semrush One 实战指南、Google SEO 2026、GEO、AI 投毒、OpenClaw AI SEO、SEO 自动化等 | 有效 | 中文 SEO/GEO 热度高，同时灰度噪声高 |
| 小红书 / OpenCLI | `opencli xiaohongshu search "Semrush SurferSEO SEO AI 内容优化" -f yaml` | 命中 AI+SEO 博客 SOP、SEO skills、Semrush AI SEO 工具、独立站 SEO、AI 自动化 SEO 等 | 有效 | 内容平台偏教程、风口、工具链 |
| GitHub / gh | `gh search repos "SEO content optimization AI search Semrush Surfer" --sort stars --limit 10` | 无有效输出 | 失败 | GitHub 不作为本点来源 |
| 官网扩展页 / 普通 curl | `curl.exe -L -s ... semrush content tools / surfer ai / content editor / ai tracker` | Semrush content marketing tools 覆盖 create/manage/track/analyze；Surfer 有 AI、Content Editor、AI Tracker、ChatGPT / Perplexity 等页面片段 | 有效 | 部分 Semrush feature URL 返回 lost，但仍有 AI Visibility 片段 |
| Reddit / OpenCLI | `opencli reddit search "SurferSEO review content editor pricing alternatives" -f yaml` | 返回 Surfer、Frase、Clearscope、NeuronWriter、GEO 内容工具等对比内容，但大量 affiliate / 推广 | 部分有效 | 只作为工具栈和替代关系证据 |
| Reddit / OpenCLI | `opencli reddit search "Semrush AI Search Toolkit SEO pricing review" -f yaml` | 命中 LLMRefs / Peec / Semrush AI Visibility Toolkit 对比、AI search visibility agency workflow 等内容 | 部分有效 | 有长帖自述和 referral 偏差 |
| X / OpenCLI | `opencli twitter search "SurferSEO content editor AI SEO workflow review" -f yaml` | 返回 Google AI Search、Semrush 官方内容更新 workflow、AI SEO 工具和开源 SEO skill 等；Surfer 精确度弱 | 部分有效 | 用于行业叙事，不作为 Surfer 口碑主证据 |
| 小红书 / OpenCLI | `opencli xiaohongshu search "GEO AI SEO 独立站 内容优化 Semrush" -f yaml` | 命中 8 分钟读懂 GEO、GEO 是否主线、独立站 SEO/GEO、AI 批量写文章、GEO 内容原则等 | 有效 | 中文 GEO 风口明显，也有“AI 投毒/作弊级工具链”风险语境 |

## 6. 渠道失败 / 偏差记录

| 渠道 | 状态 | 失败或偏差摘要 | 对证据完整性的影响 | 替代处理 |
|---|---|---|---|---|
| Jina Reader | 失败 | Semrush 首页和 Surfer 首页均无有效输出，退出码 1 | 不能用 Jina 正文作为官方证据 | 普通 curl + 正则抽取官方 HTML |
| Exa / mcporter | 失败 | 无法加载 tool metadata | 缺少 Exa 语义搜索 | 官网、Reddit、X、B站、小红书兜底 |
| Semrush feature URL | 部分有效 | 部分 `/features/...` 页面返回 lost 标题，但仍抽到 AI Visibility / SEO 片段 | 不能当作完整页面正文 | 只采用明确的首页、pricing、content tools 页面作为主证据 |
| Surfer pricing 页面 | 部分有效 | 可抽取 Scale、Enterprise、Content Editor、Auto-Optimize 和金额片段，但套餐结构不完整 | 价格只能作为锚点，不能复原完整计费 | 降低具体价格结论强度 |
| Reddit | 部分有效 | 有 AI visibility 和工具对比长帖，但 affiliate、referral、自述和广告内容很多 | 不能当作统计结论 | 只抽取类目、工作流和替代关系 |
| X / OpenCLI | 部分有效 | SEO/GEO 服务商推广、课程、工具广告多；个别无关 AI 内容跑偏 | 不能证明真实 ROI | 只用作行业叙事和风险信号 |
| B站 / 小红书 | 有效但偏风口 | GEO、AI SEO、AI 投毒、自动化 SEO、批量写文章内容混杂 | 可证明中文热度，不证明成熟付费和长期留存 | 与官网价格和海外社区交叉验证 |
| GitHub / gh | 失败 | `gh search repos "SEO content optimization AI search Semrush Surfer"` 无有效输出 | 无法用开源 repo 证明替代实现 | 用 B站 OpenClaw / X 开源 SEO skill 作为弱信号 |

## 7. 关键来源

| ID | 来源 | URL | 类型 | 日期 | 关键证据 | 可信度 |
|---|---|---|---|---|---|---|
| S0195 | Semrush 官网首页 | https://www.semrush.com/ | 官网 / 产品定位 | 2026-07-02 访问 | Semrush 将自己描述为增长和衡量品牌在 AI search、SEO、PPC、social 等渠道可见性的 leading platform | 高 |
| S0196 | Semrush pricing | https://www.semrush.com/prices/ | 官网 / 价格页 | 2026-07-02 访问 | pricing 标题为 SEO & AI Search Plans and Pricing，强调 organic visibility、rank tracking、AI results brand monitoring | 高 |
| S0197 | Semrush content marketing tools | https://www.semrush.com/features/content-marketing-tools/ | 官网 / 内容营销工具 | 2026-07-02 访问 | Semrush Content Marketing Platform 覆盖 create、manage、track、analyze content performance | 高 |
| S0198 | Surfer 官网首页 | https://surferseo.com/ | 官网 / 产品定位 | 2026-07-02 访问 | Surfer 将自己定位为 AI Visibility Platform，用于 organic growth、SEO、AI、content | 高 |
| S0199 | Surfer pricing | https://surferseo.com/pricing/ | 官网 / 价格页 | 2026-07-02 访问 | pricing 页面出现 Scale、Enterprise、Content Editor、Auto-Optimize、$120、$240、$444、$720 等片段 | 中 |
| S0200 | Surfer Content Editor | https://surferseo.com/features/content-editor/ | 官网 / 功能页 | 2026-07-02 访问 | Content Editor 是 Surfer 的核心内容优化工作区 | 高 |
| S0201 | Surfer AI Tracker | https://surferseo.com/ai-tracker/ | 官网 / AI 可见性 | 2026-07-02 访问 | AI Tracker 页面出现 ChatGPT、Perplexity 等 AI search 跟踪语境 | 高 |
| S0202 | Reddit：AI brand visibility tracking tools guide | https://www.reddit.com/r/AISearchLab/comments/1ler7ui/the_complete_guide_to_ai_brand_visibility/ | 社区 / AI visibility 类目 | 2026-07-02 访问 | 长帖认为传统 SEO 平台也在加入 AI visibility，提到 Semrush、Ahrefs、SE Ranking 等正在扩展 AI search tracking | 中 |
| S0203 | Reddit：LLMRefs / Semrush AI Visibility Toolkit agency workflow | https://www.reddit.com/r/HonestBuyerReviews/comments/1t7g7ds/llmrefs_review_after_6_months_and_15_client/ | 社区 / 工具对比 | 2026-07-02 访问 | 自述将 Semrush AI Visibility Toolkit 放在 AI search tracking 工具栈里，但认为 Semrush seat / 多域名 agency math 较贵 | 中 |
| S0204 | Reddit：Writesonic alternatives / Surfer SEO | https://www.reddit.com/r/geotoolsreview/comments/1tifs97/10_writesonic_alternatives_to_boost_geo_content/ | 社区 / 工具对比 | 2026-07-02 访问 | 将 Surfer SEO 定位为 data-driven on-page SEO / Google SERP、NLP scoring、keyword clusters，起价信息带推广偏差 | 低 |
| S0205 | X：Google AI Search Console / AI visibility measurement | https://x.com/i/status/2069805259556544611 | 社媒 / AI Search 监测 | 2026-07-02 访问 | 讨论 Google generative AI performance report、AI Search visibility measurement、AI impressions vs clicks | 中 |
| S0206 | X：Semrush content update workflow | https://x.com/i/status/2071985420208914694 | 社媒 / Semrush 官方内容 | 2026-07-02 访问 | Semrush 官方账号讨论内容更新流程拆成九个 skills，从识别更新、改写、结构化到质量控制 | 中 |
| S0207 | X：Semrush human vs AI content research | https://x.com/semrush/status/2071912655141355919 | 社媒 / Semrush 研究 | 2026-07-02 访问 | Semrush 官方内容讨论 human-written、AI-generated、mixed content 在排名中的差异，提示内容质量不是简单自动生成 | 中 |
| S0208 | B站：Semrush One 实战指南 | https://www.bilibili.com/video/BV1UPdLBcEvf | 视频平台 / 中文 Semrush 教程 | 2026-07-02 访问 | 中文平台出现 Semrush One、AI 时代 SEO 与内容优化教程 | 中 |
| S0209 | B站：Google SEO 2026 / GEO / GSC | https://www.bilibili.com/video/BV1n1UUBoE3f | 视频平台 / SEO-GEO 教程 | 2026-07-02 访问 | 中文视频把关键词、IA、内容策略、GEO、GSC 放进 Google SEO 2026 体系 | 中 |
| S0210 | B站：AI 投毒 / GEO 反向风险 | https://www.bilibili.com/video/BV1fxwCz3EsP | 视频平台 / 反向证据 | 2026-07-02 访问 | 中文平台有高播放 AI 投毒 / SEO 骗子带着 GEO 回来 的反向讨论 | 中 |
| S0211 | B站：GEO 底层逻辑与系统原理 | https://www.bilibili.com/video/BV1jMVd6nEqS | 视频平台 / GEO 解释 | 2026-07-02 访问 | 中文平台开始系统化解释 GEO 底层逻辑 | 中 |
| S0212 | B站：OpenClaw AI SEO | https://www.bilibili.com/video/BV1bUFgz8EWn | 视频平台 / AI SEO 自动化 | 2026-07-02 访问 | 中文平台出现 OpenClaw AI SEO 从 0 到流量的内容，说明 AI SEO 自动化工具认知在扩散 | 中 |
| S0213 | 小红书：8 分钟读懂 GEO | https://www.xiaohongshu.com/search_result/69b8237500000000210390d3 | 内容平台 / GEO 教程 | 2026-07-02 访问 | 小红书上 GEO 被解释为让内容对 AI 可见 | 中 |
| S0214 | 小红书：AI + SEO 博客 SOP | https://www.xiaohongshu.com/search_result/6964ee0c000000001a033792 | 内容平台 / SEO SOP | 2026-07-02 访问 | 中文内容把 AI + SEO 博客做成 SOP，说明任务可流程化 | 中 |
| S0215 | 小红书：用 AI 把 SEO 从选词到发布自动化 | https://www.xiaohongshu.com/search_result/6a1d536f00000000350222cc | 内容平台 / 自动化 SEO | 2026-07-02 访问 | 中文平台讨论选词、写文章、发布全流程自动化 | 中 |
| S0216 | 小红书：Semrush 推荐的 AI SEO 工具 | https://www.xiaohongshu.com/search_result/6885adf40000000024008c94 | 内容平台 / 工具清单 | 2026-07-02 访问 | 中文平台出现 Semrush 推荐 AI SEO 工具内容，说明 Semrush 与 AI SEO 工具认知有关联 | 中 |

## 8. 关键发现

事实发现：

- Semrush 官网已经把 AI Search 与传统 SEO、PPC、social 放在同一个品牌可见性平台语境里。
- Semrush pricing 明确出现 SEO & AI Search Plans and Pricing，说明 AI Search 已被纳入可计费的 SEO 工具套餐叙事。
- Semrush content marketing tools 覆盖内容创建、管理、追踪、分析，证明其不是单点写作工具，而是内容营销工作流工具。
- Surfer 官网将自己定位为 AI Visibility Platform，并保留 SEO、AI、Content、Surfer AI 等关键词。
- Surfer 的 Content Editor 和 AI Tracker 显示它同时服务“内容优化”和“AI search visibility tracking”。
- Surfer pricing 页面能抽取到 Scale、Enterprise、Content Editor、Auto-Optimize 和多个金额片段，证明有较清晰付费锚点，但动态页面不适合复原完整套餐。
- Reddit AI visibility 长帖显示 AI brand visibility / GEO tracking 已经形成工具类目，传统 SEO 工具和新兴 AI visibility 工具并存。
- Reddit 工具对比显示 Semrush AI Visibility Toolkit 被纳入 agency workflow，但也被评价为 seat / 多域名成本较高。
- Reddit 中 Surfer 被放在 SERP-driven on-page SEO、NLP scoring、keyword cluster 的工具定位，而不是线索研究或销售智能工具。
- X 上 AI Search / GEO 讨论高度活跃，但服务商广告和课程推广多，不能直接证明 ROI。
- Semrush 官方 X 内容强调内容更新 workflow、human-written vs AI-generated content 等，说明内容质量、人审和结构化流程仍然重要。
- B站和小红书中文平台已经有 Semrush 教程、GEO、AI SEO 自动化、独立站内容优化等内容，说明中文市场有学习和工具需求。
- 中文平台同时出现“AI 投毒”“SEO 骗子带着 GEO 回来”“作弊级工具链”等反向内容，提示 GEO 方向容易滑向灰度和过度承诺。

## 9. 分析和解释

Semrush / Surfer 对本项目的启发是：SEO-GEO 内容工具链有成熟付费锚点，而且 AI Search 正在把传统 SEO 工具重新包装成“AI visibility / GEO”工具。但这不等于第一阶段应该从外贸 B2B 线索研究切换到 AI SEO 平台。

可以拆成两条价值链：

```text
SEO-GEO 内容工具链：
关键词 / SERP / 竞品内容
  -> 内容 brief / Content Editor
  -> AI 生成或辅助改写
  -> 人审 / 结构化 / E-E-A-T
  -> 发布 / 更新
  -> 排名 / AI visibility / citation tracking

外贸 B2B 线索研究链：
目标市场 / ICP
  -> 公司和联系人研究
  -> 多源验证
  -> 证据链和优先级
  -> 跟进理由
  -> 人审交付包
```

两条链都需要 research、内容、AI 和人审，但客户、付费逻辑、交付物不同。

推断：

- Semrush / Surfer 更适合证明“AI SEO / GEO / 内容优化”是成熟工具市场，而不是证明“AI CMO 平台”应该优先。
- SEO-GEO 的首版交付更像内容策略、站点诊断、AI Search visibility audit、内容更新包；它与外贸 B2B 线索研究可以组合，但不是同一个 MVP。
- 中文平台的 GEO 热度说明市场教育正在发生，但也说明噪声和灰度风险高。如果第一阶段做 GEO，很容易被要求承诺“霸屏 AI”“快速收录”“AI 推荐你”，这类承诺不可控。
- 与 Apollo / Clay 相比，Semrush / Surfer 的付费锚点更偏营销和内容团队，交付周期更长、效果归因更慢；外贸 B2B 线索研究更容易用 30-50 条样例包快速验证。

因此，Semrush / Surfer 应该作为“第二阶段内容/SEO/GEO 增值模块”的标杆，而不是替代当前推荐 MVP。

## 10. 对 MVP 决策的影响

支持的方向：

- 支持把 SEO-GEO / AI visibility 作为后续可扩展方向。
- 支持在外贸 B2B 线索研究包中增加“目标客户官网 / 内容 / AI 可见性观察”作为增值洞察。
- 支持后续开发“独立站 SEO-GEO audit / 内容机会包”作为第二条产品线。
- 支持把人审写进内容和 GEO 工作流，避免低质量 AI 批量内容。

反对的方向：

- 反对第一阶段直接做 Semrush / Surfer 式 SEO 平台。
- 反对把“GEO 风口”作为立刻转向的理由。
- 反对承诺 AI 搜索霸屏、自动收录、自动获得 AI 推荐。
- 反对把内容生成量作为核心卖点，因为中文平台已经有大量 AI 批量写作和自动发布噪声。

增加的风险：

- SEO/GEO 结果周期较长，首单验证比线索研究包慢。
- AI Search / GEO 指标仍在变化，第三方工具和 Google 自有报告会持续演进。
- 中文市场存在灰度 SEO、AI 投毒、作弊级工具链等负面认知，定位必须谨慎。
- 如果做 SEO-GEO 服务，必须明确“诊断和内容建议”与“排名/推荐结果承诺”的边界。

还缺的证据：

- 中国独立站或外贸企业实际购买 Semrush / Surfer / Ahrefs / GEO 工具的预算分层。
- 中文客户是否愿意为 AI Search visibility audit 单独付费。
- GEO 服务包的成交价格、复购周期和交付模板。
- Semrush / Surfer 与外贸 B2B 获客之间的直接转化证据。

## 11. 结论

- Semrush / Surfer 是 SEO-GEO / AI visibility / 内容优化方向的重要付费锚点，但不是第一阶段最优主线。
- 它们证明 AI Search 正在进入传统 SEO 工具和内容工作流，而不是证明应先做大而全 AI CMO 平台。
- 第一阶段仍应优先验证“人工审核的外贸 B2B 线索研究交付包”，因为交付物更清晰、验证周期更短、付费锚点更贴近外贸客户开发。
- SEO-GEO 可以作为第二阶段增值模块：独立站 AI 可见性诊断、内容机会包、客户官网研究、竞品内容差距分析。
- GEO 方向要保留，但必须避开“霸屏 AI / 投毒 / 批量垃圾内容”的风险叙事。

## 12. 置信度

中高。

原因：

- 本点覆盖 Semrush / Surfer 官网、价格页、功能页、Reddit、X、B站、小红书和 GitHub 尝试，信源类型足够。
- 官网证据清楚显示 AI Search / AI Visibility 已经进入 SEO 工具的产品和定价语境。
- 社区和中文平台都能证明 GEO / AI SEO 热度，但噪声和广告偏差也很强。
- Jina 和 Exa 实际失败，降低了网页语义搜索完整性。
- Surfer pricing 和部分 Semrush feature 页面为动态页面或返回 lost 标题，因此具体价格和功能细节不能过度展开。
