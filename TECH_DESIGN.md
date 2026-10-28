# 个人网站 技术设计文档
## 1. 技术栈
- 构建工具：Vite
- 前端框架：React 18 + TypeScript
- 样式方案：TailwindCSS
- 路由：react-router-dom，实现页面跳转
- Markdown渲染：react-markdown，用于博客详情
- 动效：IntersectionObserver 实现滚动淡入动画，纯CSS过渡，不使用Canvas粒子
- 状态管理：useState / useRef / localStorage（保存主题），不引入复杂状态库
- 数据：前期全部模拟本地ts静态数据，不接入后端数据库。

## 2. 项目目录结构
personal-website/
├── src/
│   ├── components/      # 公共组件：导航、卡片、主题切换、页脚、滚动动画封装
│   ├── pages/           # 各个页面组件 Home、About、Skill、Project、Blog、Contact
│   ├── types/           # ts 类型定义（项目类型、博客类型）
│   ├── data/            # 模拟静态数据，项目列表、技能列表、博客数据
│   ├── hooks/           # 自定义 hook：主题切换、滚动监听
│   ├── App.tsx
│   └── main.tsx
├── PRD.md
├── TECH_DESIGN.md
├── AGENTS.md
├── index.html
└── package.json


## 3. 关键技术难点
1. 双主题切换：主题存入localStorage持久化，全局自动换色。
2. 项目标签筛选、博客标题模糊搜索，前端数组过滤实现。
3. 响应式导航：PC端横向导航，移动端汉堡菜单展开收起。
4. Markdown渲染博客内容，适配亮/暗两套主题样式。
5. IntersectionObserver监听元素，实现滚动淡入，注意组件销毁清除监听，防止内存泄漏。

## 4. 构建部署
静态前端项目，打包命令 `npm run build`，输出dist文件夹，用于Cloudflare Pages部署。

