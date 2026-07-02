# 产品调研工作区

这个 repo 用来承载 AI CMO / Marketing Agent 方向的产品调研。

## 一眼看懂

先读这个总览文件：

- [research/overview.md](research/overview.md)

它用一张 ASCII 架构图说明每个文档写了什么，以及建议阅读顺序。

## 目录结构

```text
.
|-- local_sensitive_context.md       # 本地敏感素材示意；实际文件已 git ignore
|-- goals/
|   `-- 2026-07-01_research_goal_prompts.md
|-- research/
|   |-- 00_context/
|   |-- 01_okara_teardown/
|   |-- 02_china_competitor_matrix/
|   |-- 03_customer_scenarios/
|   |-- 04_technical_feasibility/
|   `-- 05_mvp_route/
`-- templates/
```

## 工作流

1. 从 `goals/2026-07-01_research_goal_prompts.md` 复制一个编号任务。
2. 开 goal 执行该任务。
3. 把 sources、notes、findings 写入对应 `research/*` 目录。
4. 最后运行 `06. 最终整合报告 Goal`，生成 `research/final_report.md`。

## 工作规则

- 事实和判断分开写。
- 外部结论必须带来源链接。
- 不自动生成合规条款。
- 需要人类判断的问题直接标记为“需要 发起人A 判断”。



