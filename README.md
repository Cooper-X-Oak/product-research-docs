# 产品调研文档站

这个 repo 承载 AI CMO / Marketing Agent 方向的产品机会研究报告，并用 VitePress 发布为在线文档站。

## 在线入口

- 文档站：https://cooper-x-oak.github.io/product-research-docs/
- GitHub 仓库：https://github.com/Cooper-X-Oak/product-research-docs

如果忘记线上地址，按这个规则找：

```text
https://<GitHub 用户名>.github.io/<仓库名>/

当前项目：
https://cooper-x-oak.github.io/product-research-docs/
```

## 最短阅读路径

先从文档站首页进入：

- [文档站首页](https://cooper-x-oak.github.io/product-research-docs/)
- [研究总览](https://cooper-x-oak.github.io/product-research-docs/research/)
- [推荐 MVP](https://cooper-x-oak.github.io/product-research-docs/research/07_opportunity_decision/03_recommended_mvp)
- [风险和未知数](https://cooper-x-oak.github.io/product-research-docs/research/07_opportunity_decision/04_risks_and_unknowns)
- [证据台账](https://cooper-x-oak.github.io/product-research-docs/research/evidence/source_log)

当前一句话结论：

```text
不要先做大而全的 AI CMO / 中国版 Okara / 通用 Marketing Agent 平台。

第一阶段优先验证：
人工审核的外贸 B2B 线索研究交付包。
```

## 本地使用

安装依赖：

```bash
npm ci
```

启动本地文档站：

```bash
npm run docs:dev
```

本地预览地址通常是：

```text
http://127.0.0.1:5173/
```

构建静态站点：

```bash
npm run docs:build
```

预览构建产物：

```bash
npm run docs:preview
```

## 目录结构

```text
.
|-- docs/
|   |-- index.md                    # VitePress 首页
|   |-- research/                   # 当前研究报告正文
|   `-- .vitepress/
|       |-- config.mts               # VitePress 配置
|       `-- theme/                   # 自定义主题样式
|-- goals/                          # 调研任务和目标提示词
|-- templates/                      # 研究卡片、竞品矩阵、来源台账模板
|-- .github/workflows/pages.yml     # GitHub Pages 自动部署
|-- package.json                    # VitePress 脚本
`-- README.md
```

## 部署配置

这个项目已经按 GitHub Pages 部署配置好：

- VitePress 配置文件：`docs/.vitepress/config.mts`
- GitHub Pages workflow：`.github/workflows/pages.yml`
- 构建命令：`npm run docs:build`
- 构建产物目录：`docs/.vitepress/dist`

线上部署流程：

```text
push 到 main
  |
  v
GitHub Actions 运行 .github/workflows/pages.yml
  |
  v
npm ci
  |
  v
npm run docs:build
  |
  v
上传 docs/.vitepress/dist
  |
  v
发布到 GitHub Pages
```

`docs/.vitepress/config.mts` 里没有把 `base` 写死，而是在 GitHub Pages 构建时自动根据仓库名生成：

```text
/product-research-docs/
```

所以当前线上页面会发布到：

```text
https://cooper-x-oak.github.io/product-research-docs/
```

本地开发时 `base` 是 `/`，因此本地地址仍然是根路径，不需要手动加 `/product-research-docs/`。

## GitHub Pages 设置

如果线上地址打不开，优先检查 GitHub 仓库：

```text
Settings
  -> Pages
  -> Build and deployment
  -> Source: GitHub Actions
```

然后检查：

- `Actions` 里 `Deploy VitePress site to GitHub Pages` 是否成功。
- 仓库默认分支是否是 `main`。
- `.github/workflows/pages.yml` 是否还在。
- `docs/.vitepress/config.mts` 是否还保留 GitHub Pages 的 `base` 逻辑。

## 工作规则

- 事实和判断分开写。
- 外部结论必须带来源链接。
- 需要人类判断的问题直接标记为“需要 发起人A 判断”。
