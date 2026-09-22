---
kind: external_dependency
name: HTML5 UP Editorial 模板
slug: html5up-editorial
category: external_dependency
category_hints:
    - vendor_identity
scope:
    - '**'
source_files:
    - README.md
    - index.html
    - publications.html
---

本项目基于 HTML5 UP 提供的 Editorial 静态站点模板构建个人主页，托管于 GitHub Pages（https://gyguo.github.io/）。模板通过 assets/css、assets/sass、assets/js 等目录引入样式与脚本，页面结构由 index.html 与 publications.html 组成。编辑时需注意该仓库的 HTML 文件使用 CRLF 换行符，而 custom.css 使用 LF，混编时需保持原有换行格式以避免 diff 噪声。