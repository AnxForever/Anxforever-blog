# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于 Next.js 16 的前卫程序员作品集博客网站,采用 Neo-Brutalist 设计风格。该项目由 v0.app 自动生成并同步到 Vercel 部署。主要特点包括：

- **技术栈**：Next.js 16.0.7 + React 19.2.0 + TypeScript + Tailwind CSS 4.1.9
- **Node.js 要求**：>=20.9.0（必须）
- **设计风格**：Neo-Brutalism（新野兽派）风格，大胆的边框、强烈的阴影、高对比度配色
- **创意特性**：Chaos Mode（混乱模式）、自定义光标、命令面板、物理引擎布局等实验性交互

## 开发命令

### 基础命令
```bash
# 开发服务器（默认端口 3000）
npm run dev

# 生产构建
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint
```

### 测试命令
```bash
# 运行 Jest 单元测试和集成测试
npm test

# 运行 Playwright E2E 测试
npx playwright test

# 运行特定的 E2E 测试文件
npx playwright test e2e/navigation.spec.ts

# 运行单个 Jest 测试文件
npx jest __tests__/components/nav.test.tsx

# Playwright UI 模式（推荐用于调试）
npx playwright test --ui

# 生成 Playwright 测试报告
npx playwright show-report
```

## 核心架构

### App Router 结构
- **App Directory**：使用 Next.js 13+ App Router，所有页面在 `app/` 目录
- **动态路由**：
  - `/blog/[slug]` - 博客文章详情
  - `/work/[slug]` - 项目详情
  - `/lab/[slug]` - 实验性项目详情
- **布局系统**：
  - `app/layout.tsx` - 根布局，包含全局字体、元数据、CustomCursor、ChaosModeToggle、CommandPalette
  - `app/template.tsx` - 使用 Framer Motion 提供页面转场动画

### 数据管理
- **静态数据源**：`lib/data.ts` 包含所有内容数据（posts、projects、experiments）
- **无数据库**：所有内容硬编码在数据文件中，适合静态部署
- **数据结构**：
  - `posts` - 博客文章列表
  - `projects` - 作品项目列表
  - `experiments` - 实验性项目列表

### 组件架构

#### 全局组件（在 layout.tsx 中挂载）
- `CustomCursor` - 自定义鼠标光标效果
- `ChaosModeToggle` - 混乱模式切换按钮（右下角固定定位）
- `CommandPalette` - 命令面板（Cmd/Ctrl+K 触发）

#### 特色组件
- **实验性组件**（`components/experiments/`）：
  - `audio-reactive-particles.tsx` - 音频反应粒子系统，使用 Web Audio API
  - `generative-typography.tsx` - 生成式排版，鼠标交互文字
  - `physics-based-layout.tsx` - 基于 Matter.js 的物理引擎布局
- **UI 组件**（`components/ui/`）：基于 Radix UI 和 shadcn/ui 的设计系统

#### 混乱模式实现
- `ChaosModeToggle` 组件通过添加/移除 `chaos-mode` class 到 body 元素
- CSS 变量和样式通过 `globals.css` 中的 `.chaos-mode` 选择器定义
- 可通过命令面板或右下角按钮切换

### 样式系统
- **Tailwind CSS 4.x**：使用最新的 PostCSS 插件 `@tailwindcss/postcss`
- **自定义颜色**：定义了 accent-pink、accent-green、accent-blue、accent-yellow 等强调色
- **字体**：Geist Sans（正文）和 Geist Mono（等宽字体）
- **动画**：使用 `tailwindcss-animate` 和 `framer-motion` 实现

### 路径别名
```typescript
"@/*" -> "./*"  // 所有文件都可以通过 @ 引用
```

## TypeScript 配置要点
- **编译目标**：ES6
- **严格模式**：已启用
- **构建行为**：`ignoreBuildErrors: true` 在 next.config.mjs 中，允许 TypeScript 错误不阻塞构建
- **JSX**：使用 `react-jsx` 运行时（React 19 新特性）

## 测试架构

### 测试策略（Testing Trophy 模式）
1. **静态分析**：TypeScript + ESLint（已配置）
2. **单元测试**：Jest + React Testing Library - 测试独立组件和工具函数
3. **集成测试**：Jest + React Testing Library - 测试组件交互
4. **E2E 测试**：Playwright - 测试关键用户流程

### 测试配置
- **Jest 配置**：`jest.config.js` + `jest.setup.js`
  - 使用 `next/jest` 预设
  - 测试环境：`jsdom`
  - 路径别名映射已配置
- **Playwright 配置**：`playwright.config.ts`
  - 测试目录：`./e2e`
  - 自动启动开发服务器（`npm run dev`）
  - 测试浏览器：Desktop Chrome、Pixel 5、iPhone 12
  - 基础 URL：http://localhost:3000

### 测试覆盖重点（参考 TESTING.md）
- **交互元素**：导航链接、命令面板（Cmd+K）、Chaos Mode 切换
- **表单**：联系表单验证、提交状态
- **动态内容**：博客/作品/实验列表渲染、动态路由、404 处理
- **响应式**：移动菜单、布局调整（375px/768px/1024px 断点）

## 开发工作流

### 添加新内容
1. 编辑 `lib/data.ts` 添加新的 post/project/experiment 条目
2. 确保 `slug` 字段唯一
3. 如需添加图片，放置到 `public/` 目录并引用

### 添加新页面
1. 在 `app/` 目录创建新的路由文件夹
2. 添加 `page.tsx`（必需）
3. 可选：添加 `layout.tsx`（局部布局）或 `loading.tsx`（加载状态）

### 添加新组件
1. 功能组件 → `components/` 目录
2. UI 基础组件 → `components/ui/` 目录
3. 实验性组件 → `components/experiments/` 目录

### 调试物理/动画组件
- Matter.js 组件：检查 `components/experiments/physics-based-layout.tsx`
- Framer Motion：所有动画使用 ease curves `[0.22, 1, 0.36, 1]` 保持一致性
- Web Audio API：检查 `components/experiments/audio-reactive-particles.tsx`

## 部署注意事项
- **自动部署**：代码推送到仓库后，Vercel 自动触发部署
- **v0.app 同步**：在 v0.app 上的更改会自动推送到此仓库
- **图片优化**：`next.config.mjs` 中 `images.unoptimized = true`，所有图片不经过 Next.js 优化
- **生产环境**：https://vercel.com/anxs-projects-8b1c0be5/v0-avant-garde-programmer-blog

## 特殊注意事项

### 命令面板实现
- 使用 `Cmd/Ctrl+K` 快捷键触发
- 可导航到所有主要页面
- 可触发 Chaos Mode
- 组件路径：`components/command-palette.tsx`

### 自定义光标
- 全局光标替换，跟随鼠标移动
- 在 layout.tsx 中挂载
- 组件路径：`components/custom-cursor.tsx`

### Neo-Brutalist 设计原则
- **粗边框**：所有卡片/按钮使用 2px+ 边框
- **硬阴影**：使用 `shadow-[4px_4px_0px_0px_rgba(...)]` 创建 offset 阴影
- **高对比度**：黑白为主，配合鲜艳的 accent 色
- **几何形状**：避免圆角，使用直角矩形
- **大胆排版**：大字号、粗字重、宽字距（tracking-widest）

### 性能考虑
- **客户端组件**：所有交互组件使用 `"use client"` 指令
- **服务端组件**：静态页面默认为服务端组件
- **动态导入**：大型实验性组件考虑使用 `next/dynamic` 懒加载

## 常见问题排查

### Node.js 版本要求
- **必需版本**：Node.js >= 20.9.0
- **当前 WSL 环境**：Node.js v20.18.2 已安装在 `/tmp/node-v20.18.2-linux-x64/bin`
- **升级方法**：
  ```bash
  # 下载并使用 Node.js 20
  wget -O - https://nodejs.org/dist/v20.18.2/node-v20.18.2-linux-x64.tar.xz | tar -xJ -C /tmp
  export PATH=/tmp/node-v20.18.2-linux-x64/bin:$PATH
  ```

### 构建失败
- 检查 TypeScript 错误（虽然不会阻塞构建，但应修复）
- 检查 ESLint 警告：`npm run lint`

### 测试失败
- **E2E 测试**：确保开发服务器运行在 3000 端口
- **单元测试**：检查 Jest 配置中的路径映射

### 样式问题
- 检查 Tailwind 类名是否正确
- Chaos Mode 样式定义在 `globals.css` 的 `.chaos-mode` 块中
- 确保使用 `@tailwindcss/postcss` 插件（Tailwind 4.x）

### 动画性能
- Framer Motion 动画默认使用 GPU 加速
- Matter.js 物理引擎可能在低端设备上卡顿，考虑降低粒子数量
