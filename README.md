# fateStray personal site

个人网站地址：<https://uninstall400.github.io/>

## 本地预览

```powershell
npm install
npm run dev
```

## 发布文章

1. 在 GitHub 仓库中打开 `src/content/posts/`。
2. 点击 `Add file`，再选择 `Create new file`。
3. 文件名使用英文和短横线，例如 `my-first-note.md`。
4. 复制 `src/content/templates/article.md` 的内容作为开头。
5. 修改标题、日期、标签、语言和正文。
6. 确认 `draft: false` 后提交到 `main` 分支。
7. GitHub Actions 会自动构建并发布，通常等待一至两分钟即可。

## 文章字段

```yaml
---
title: "文章标题"
description: "文章摘要"
publishedAt: 2026-09-29
tags:
  - 开发
  - 游戏
draft: false
lang: zh
---
```

- `tags` 可以有多个，文章页会自动生成标签入口。
- `draft: true` 的文章只会在本地开发时可看到，不会被正式发布。
- `lang` 可填 `zh`、`ja` 或 `en`，用于告诉浏览器文章本身使用的语言。
- 文章标题和正文是文章内容，不随网站的中日英界面切换。

## 首次部署

在 GitHub 仓库的 `Settings -> Pages` 中，把 `Source` 设置为 `GitHub Actions`。之后每次推送到 `main` 分支都会自动发布。
