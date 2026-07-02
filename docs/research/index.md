# 逐点全网调研总览

本页是最终 VitePress 交付站的研究主入口。当前站点只展示研究报告的调研过程、证据台账、逐点报告和阶段性结论。

## 交付口径

```text
交付物不是一篇静态结论报告。
交付物是一套可审计的 VitePress 调研站：

1. 看过程：每个点如何搜索、用了哪些 agent-reach 命令、哪些渠道失败。
2. 看证据：每条来源、命令、失败渠道都有全局编号。
3. 看结论：推荐 MVP 只从逐点证据综合出来，不替代逐点调研。
```

## 当前结论

```text
不要先做大而全的 AI CMO / 中国版 Okara / 通用 Marketing Agent 平台。

第一阶段优先验证：
人工审核的外贸 B2B 线索研究交付包。

原因：
- 付费锚点更清晰：Sales Navigator、Apollo、Hunter、Clay、海关数据工具。
- 交付物更清晰：公司、联系人、证据链、优先级、跟进理由。
- agent 能明显提效：搜索、整理、比对、草稿生成。
- 人审有价值：避免低质名单、错误邮箱、海关数据误用。
- 验证周期更短：可以用 30-50 条线索样例包试单。
```

## ASCII 站点架构

```text
docs/
|
|-- index.md
|   `-- 最终交付首页
|
`-- research/
    |
    |-- index.md
    |   `-- 总览：调研过程、当前结论、阅读路径、完成度
    |
    |-- 00_methodology/
    |   |-- research_design.md
    |   |   `-- 调研原则：逐点调研、先证据后结论、事实/推断/建议分离
    |   |-- agent_reach_doctor.md
    |   |   `-- agent-reach 渠道体检：哪些渠道可用、哪些 off 或不稳定
    |   |-- source_grading.md
    |   |   `-- 信源分级：官网、价格页、社区、视频、内容平台如何加权
    |   `-- query_log.md
    |       `-- 全局查询日志：每个问题页对应哪些 agent-reach 命令
    |
    |-- 01_category_definition/
    |   |-- 01_ai_cmo_definition.md
    |   |   `-- AI CMO 是不是成熟类目；结论：更像上层叙事和能力打包
    |   |-- 02_marketing_agent_definition.md
    |   |   `-- Marketing Agent 的边界：目标、上下文、工具、执行链
    |   `-- 03_geo_seo_content_social_b2b_boundaries.md
    |       `-- GEO/SEO/内容/社媒/B2B 线索研究分别是什么
    |
    |-- 02_overseas_benchmarks/
    |   |-- 01_okara.md
    |   |   `-- Okara：有真实工作流部件，但 AI CMO / 替代团队叙事强于公开 ROI 证据
    |   |-- 02_jasper.md
    |   |   `-- Jasper：证明品牌治理和营销工作流价值，但不适合作为第一阶段直接对标
    |   |-- 03_copy_ai.md
    |   |   `-- Copy.ai：证明 GTM workflow 结构价值，但不应第一阶段直接做平台
    |   |-- 04_clay.md
    |   |   `-- Clay：证明 B2B enrichment / GTM workflow 价值，但第一阶段不应直接复刻平台
    |   |-- 05_apollo.md
    |   |   `-- Apollo：证明 B2B 线索/联系人/外联工具有付费锚点，但名单仍需要人审证据链
    |   |-- 06_semrush_surfer.md
    |   |   `-- Semrush / Surfer：证明 SEO-GEO 内容工具有付费锚点，但更适合作为第二阶段增值模块
    |   `-- 07_benchmark_conclusion.md
    |       `-- 海外标杆综合结论：整体支持先做外贸 B2B 线索研究交付包，不支持先做大平台
    |
    |-- 03_china_market_map/
    |   |-- 01_enterprise_martech.md
    |   |   `-- 中国企业级 MarTech：市场不是空白，不支持第一阶段做通用 AI CMO 平台
    |   |-- 02_seo_content_tools.md
    |   |   `-- 中国 SEO/GEO/内容工具：有真实热度和工具供给，但更适合作为第二阶段增值模块
    |   |-- 03_social_data_tools.md
    |   |   `-- 中国社媒数据/舆情监听：有成熟供给和预算锚点，但更适合作为辅助信号和后续模块
    |   `-- 04_local_merchant_saas.md
    |       `-- 中国本地商家 / 本地生活 SaaS：需求和付费存在，但平台强、交付重，更适合作为第二梯队
    |
    |-- 04_customer_scenarios/
    |   |-- 01_b2b_export_lead_research.md
    |   |   `-- 外贸 B2B 线索研究：当前证据最强，适合作为 MVP 主线
    |   `-- 02_local_merchant_content_operation.md
    |       `-- 本地商家内容运营：有需求，但变量多，适合作为第二梯队
    |
    |-- 05_pricing_willingness/
    |   |-- 01_b2b_tools_pricing.md
    |   |   `-- B2B 工具价格：Sales Navigator、Apollo、Hunter、Clay、ZoomInfo 等付费锚点
    |   `-- 02_customs_data_pricing.md
    |       `-- 海关数据价格：ImportGenius、Volza、Panjiva、Tendata 和中文价格线索
    |
    |-- 06_technical_feasibility/
    |   `-- 01_agent_reach_channel_reliability.md
    |       `-- agent-reach 可用性：适合辅助研究，不适合承诺全自动无人值守
    |
    |-- 07_opportunity_decision/
    |   |-- 01_decision_criteria.md
    |   |   `-- 决策标准：痛点、付费、交付清晰度、验证周期、agent 提效、人审价值
    |   |-- 02_decision_matrix.md
    |   |   `-- 候选方向排序：外贸 B2B 第一，本地内容第二，AI CMO 平台暂缓
    |   |-- 03_recommended_mvp.md
    |   |   `-- 推荐 MVP：人工审核的外贸 B2B 线索研究交付包
    |   `-- 04_risks_and_unknowns.md
    |       `-- 风险：LinkedIn 自动化、冷邮件、数据质量、海关数据误用、人审成本
    |
    |-- 08_mvp_plan/
    |   `-- index.md
    |       `-- MVP 计划目录：规格、demo、首单交付、14 天验证、转向标准
    |
    |-- 09_synthesis/
    |   `-- index.md
    |       `-- 最终综合目录：执行摘要、完整报告、汇报大纲
    |
    `-- evidence/
        |-- source_log.md
        |   `-- 来源总台账：S0001-S0392
        |-- command_log.md
        |   `-- agent-reach 命令总台账：CMD0001-CMD0254
        |-- failed_channels.md
        |   `-- 失败和偏差渠道：F0001-F0110
        |-- source_quality_matrix.md
        |   `-- 每个来源的可信度、偏差和使用方式
        `-- glossary.md
            `-- 术语表
```

## 最短阅读路径

```text
1. 07_opportunity_decision/03_recommended_mvp.md
   -> 看第一阶段到底推荐做什么

2. 07_opportunity_decision/04_risks_and_unknowns.md
   -> 看哪些不能承诺，哪些必须人审

3. 07_opportunity_decision/02_decision_matrix.md
   -> 看为什么外贸 B2B 胜出，本地内容和 AI CMO 为什么暂缓

4. 04_customer_scenarios/01_b2b_export_lead_research.md
   -> 看外贸 B2B 需求证据

5. 05_pricing_willingness/01_b2b_tools_pricing.md
   -> 看客户已经为什么付费

6. evidence/command_log.md
   -> 审计每个点是否真的跑了 agent-reach
```

## 当前完成度

| 模块 | 已完成页 | 状态 |
|---|---:|---|
| 方法论 | 4 | 可审计 |
| 类目定义 | 3 | 可审计 |
| 海外标杆 | 7 | 已完成 Okara、Jasper、Copy.ai、Clay、Apollo、Semrush/Surfer、海外标杆综合结论 |
| 中国市场地图 | 4 | 已完成企业级 MarTech / CRM / SCRM / CDP / MA、SEO/GEO/内容工具、社媒数据/舆情监听、本地商家 / 本地生活 SaaS |
| 客户场景 | 2 | 外贸 B2B 和本地商家已完成 |
| 价格与付费 | 2 | B2B 工具和海关数据已完成 |
| 技术可行性 | 1 | agent-reach 渠道可靠性已完成 |
| 机会决策 | 4 | 标准、矩阵、推荐 MVP、风险已完成 |
| MVP 计划 | 1 | 已建立目录页，正式计划文档待补 |
| 最终综合 | 1 | 已建立目录页，综合报告待补 |
| 证据日志 | 5 | 来源、命令、失败、质量矩阵、术语表 |

## 旧材料处理说明

```text
旧报告不再作为最终交付内容。

原因：
- 旧报告更像一次性总报告，逐点证据链不够清晰。
- 旧报告中部分结论先于搜索过程成型，不符合当前“先证据后结论”的交付要求。
- 当前报告已用独立 Markdown、agent-reach 命令日志、来源台账和失败渠道记录替代旧报告。

处理方式：
- VitePress 主导航和侧边栏不再展示旧报告。
- 最终交付以 docs/research/ 下的 00-09 研究架构为准。
- 旧文件只作为内部历史材料，不作为对外交付阅读路径。
```

## 后续 goal 执行提醒

```text
继续补剩余点时，不能直接写结论。
每补一个点，都要先写搜索计划，再单独执行 agent-reach 全网搜索。
每个点至少 3 条命令、3 类信源、5 个有效来源、1 条失败或偏差记录。
完成一个点，立刻更新 query_log / command_log / source_log / failed_channels / source_quality_matrix。
```



