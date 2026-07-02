# agent-reach 渠道体检

## 1. 体检目的

本文件记录 agent-reach 在当前机器上的渠道可用性。每个调研点仍需单独记录自己的搜索命令、结果和失败渠道。

## 2. 体检记录

| 时间 | 命令 | 结果 | 说明 |
|---|---|---|---|
| 2026-07-01 | `agent-reach doctor --json` | 超时 | 首次 30 秒超时，说明 doctor 本身可能受部分渠道拖慢 |
| 2026-07-01 | `agent-reach doctor --json` | 成功 | 120 秒超时设置下成功返回 |

## 3. 成功体检摘要

| 渠道 | 状态 | active_backend | 备注 |
|---|---|---|---|
| GitHub | ok | gh CLI | 仓库和代码搜索可用 |
| Twitter/X | ok | OpenCLI | doctor 显示可用，但实际搜索出现未登录错误，需要逐点记录 |
| YouTube | ok | yt-dlp | 可提取视频信息和字幕 |
| Reddit | ok | OpenCLI | 搜索可用，输出包含帖子正文 |
| B站 | ok | OpenCLI | 搜索可用 |
| 小红书 | ok | OpenCLI | 搜索可用 |
| LinkedIn | off | 无 | MCP 未配置，需要公开网页或其他来源兜底 |
| 小宇宙 | warn | 无 | 缺少 Groq API Key，不作为本轮核心渠道 |
| V2EX | warn | 无 | API 连接超时，可能需要代理 |
| 雪球 | ok | Xueqiu API | 与本项目弱相关 |
| RSS | ok | feedparser | 可读取 RSS/Atom |
| Exa Search | ok | Exa via mcporter | doctor 显示可用，但实际 mcporter 调用提示未知 server |
| Web | ok | Jina Reader | doctor 显示可用，但首次 curl 未返回内容 |

## 4. 原始 JSON 摘要

```json
{
  "github": {"status": "ok", "active_backend": "gh CLI"},
  "twitter": {"status": "ok", "active_backend": "OpenCLI"},
  "youtube": {"status": "ok", "active_backend": "yt-dlp"},
  "reddit": {"status": "ok", "active_backend": "OpenCLI"},
  "bilibili": {"status": "ok", "active_backend": "OpenCLI"},
  "xiaohongshu": {"status": "ok", "active_backend": "OpenCLI"},
  "linkedin": {"status": "off", "active_backend": null},
  "xiaoyuzhou": {"status": "warn", "active_backend": null},
  "v2ex": {"status": "warn", "active_backend": null},
  "xueqiu": {"status": "ok", "active_backend": "Xueqiu API"},
  "rss": {"status": "ok", "active_backend": "feedparser"},
  "exa_search": {"status": "ok", "active_backend": "Exa via mcporter"},
  "web": {"status": "ok", "active_backend": "Jina Reader"}
}
```

