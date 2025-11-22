# Sign Language Glove Project - Official Website

## 项目概述

这是一个专业的手语翻译手套项目官方网站，采用现代化的设计和技术栈构建，旨在展示产品特性、技术原理和团队故事。

## 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **UI组件库**: shadcn/ui
- **样式框架**: Tailwind CSS
- **路由**: React Router v6
- **图标**: Lucide React
- **后端**: Supabase (数据库已配置但未在前端使用)

## 设计特点

### 配色方案
- **主题**: 黑白极简风格
- **浅色模式**: 纯白背景 + 纯黑文字
- **深色模式**: 纯黑背景 + 纯白文字
- **首页封面**: 冷色调渐变 (slate-700 → slate-800 → slate-900)

### 设计理念
- ✨ 极简主义美学
- 🎯 高对比度设计
- 💼 专业科技感
- ♿ 无障碍友好
- 📱 完全响应式

## 网站结构

### 页面列表

1. **Home** (`/`)
   - 全屏冷色调渐变封面
   - 核心价值展示（准确率、成本、实时翻译）
   - 产品工作流程演示
   - 行动号召

2. **Product** (`/product`)
   - 技术验证数据（准确率92%、响应速度<200ms、用户满意度95%）
   - 用户反馈和测试现场照片
   - 三个真实用户案例
   - 资源下载（PPT、白皮书、宣传手册）
   - 合作伙伴邀请

3. **Technology** (`/technology`)
   - 系统总览（数据采集→处理→输出）
   - 数据采集层（弯曲传感器 + 陀螺仪）
   - 处理中心（ESP32微控制器）
   - 输出模块（语音合成）
   - 算法原理详解

4. **Story** (`/story`)
   - 项目灵感故事（Carolin和Stephen的相遇）
   - 团队使命宣言
   - 核心团队成员介绍（3人）

5. **Contact** (`/contact`)
   - 联系表单（姓名、邮箱、主题、留言）
   - 联系信息（邮箱、社交媒体）
   - 工作时间
   - 常见问题解答（5个FAQ）

### 导航结构

**顶部导航栏**（始终可见，无汉堡菜单）:
- Logo: Sign Language Glove
- Home
- Product
- Technology
- Story
- Contact
- Purchase / Partner 按钮

**页脚**:
- About Us
- Contact
- Follow Us (GitHub, Twitter)
- Copyright

## 核心功能

### 用户体验
- ✅ 流畅的页面导航
- ✅ 响应式设计（桌面优先，移动适配）
- ✅ 清晰的信息层次
- ✅ 专业的视觉呈现
- ✅ 快速加载速度

### 交互功能
- ✅ 联系表单提交（带Toast提示）
- ✅ 导航高亮显示当前页面
- ✅ 悬停效果和过渡动画
- ✅ 卡片式内容布局
- ✅ 图片展示和说明

## 项目文件结构

```
app-7q7dzmxz2rr5/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.tsx          # 导航栏组件
│   │   │   └── Footer.tsx          # 页脚组件
│   │   └── ui/                     # shadcn/ui组件
│   ├── pages/
│   │   ├── Home.tsx                # 首页
│   │   ├── Product.tsx             # 产品介绍页
│   │   ├── Technology.tsx          # 技术原理页
│   │   ├── Story.tsx               # 背景故事页
│   │   └── Contact.tsx             # 联系我们页
│   ├── routes.tsx                  # 路由配置
│   ├── App.tsx                     # 主应用组件
│   └── index.css                   # 全局样式和设计系统
├── supabase/
│   └── migrations/                 # 数据库迁移文件
├── public/                         # 静态资源
└── package.json                    # 项目依赖
```

## 设计系统

### 颜色变量 (index.css)

```css
/* 浅色模式 */
--background: 0 0% 100%;      /* 纯白 */
--foreground: 0 0% 0%;        /* 纯黑 */
--primary: 0 0% 0%;           /* 黑色主色 */
--secondary: 0 0% 96%;        /* 浅灰 */
--muted: 0 0% 96%;            /* 静音色 */
--border: 0 0% 90%;           /* 边框色 */

/* 深色模式 */
--background: 0 0% 0%;        /* 纯黑 */
--foreground: 0 0% 100%;      /* 纯白 */
--primary: 0 0% 100%;         /* 白色主色 */
--secondary: 0 0% 15%;        /* 深灰 */
```

### 阴影效果

```css
--shadow-elegant: 0 10px 30px -10px hsl(var(--primary) / 0.1);
--shadow-glow: 0 0 40px hsl(var(--primary) / 0.15);
```

### 过渡动画

```css
--transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

## 响应式断点

- **移动端**: < 1280px (默认样式)
- **桌面端**: ≥ 1280px (xl: 前缀)

## 图片资源

所有图片使用CDN托管：
- 产品演示图
- 用户案例图
- 团队成员照片
- 技术原理示意图

## 数据库结构

虽然已配置Supabase，但当前版本为纯静态展示网站，未使用数据库功能。

数据库表（已创建但未使用）：
- `blog_posts` - 博客文章
- `user_cases` - 用户案例
- `resources` - 资源文件
- `contact_submissions` - 联系表单提交

## 开发指南

### 安装依赖
```bash
pnpm install
```

### 开发模式
```bash
pnpm run dev
```

### 构建生产版本
```bash
pnpm run build
```

### 代码检查
```bash
pnpm run lint
```

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 性能优化

- ✅ 代码分割和懒加载
- ✅ 图片CDN加速
- ✅ CSS优化和压缩
- ✅ 最小化JavaScript包大小
- ✅ 响应式图片加载

## 可访问性

- ✅ 语义化HTML标签
- ✅ ARIA标签支持
- ✅ 键盘导航支持
- ✅ 高对比度设计
- ✅ 屏幕阅读器友好

## 未来改进建议

1. **功能增强**
   - [ ] 添加博客功能
   - [ ] 实现资源下载功能
   - [ ] 集成联系表单后端
   - [ ] 添加用户案例管理

2. **国际化**
   - [ ] 添加中英文切换
   - [ ] 实现i18n框架
   - [ ] 支持更多语言

3. **性能优化**
   - [ ] 添加页面过渡动画
   - [ ] 实现图片懒加载
   - [ ] 优化首屏加载速度
   - [ ] 添加PWA支持

4. **SEO优化**
   - [ ] 添加元标签
   - [ ] 实现结构化数据
   - [ ] 优化页面标题和描述
   - [ ] 添加sitemap

5. **用户体验**
   - [ ] 添加滚动视差效果
   - [ ] 实现平滑滚动
   - [ ] 添加加载动画
   - [ ] 优化移动端体验

## 版本历史

### v1.0.0 (2025-11-22)
- ✅ 初始版本发布
- ✅ 5个主要页面完成
- ✅ 黑白配色方案
- ✅ 响应式设计
- ✅ 英文界面

### 更新记录
1. 初始创建（中文版本）
2. 配色更新为蓝灰色调
3. 导航重组为5个主菜单
4. 配色更新为黑白主题
5. 移除汉堡菜单
6. 首页封面更新为冷色调渐变
7. **全站内容更换为英文** ← 当前版本

## 联系方式

- **Email**: contact@signglove.com
- **GitHub**: [项目仓库]
- **Twitter**: [@signglove]

## 许可证

Copyright © 2025 Sign Language Glove

---

**项目状态**: ✅ 生产就绪
**最后更新**: 2025-11-22
**维护者**: Sign Language Glove Team
