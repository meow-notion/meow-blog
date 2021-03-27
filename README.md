这是一个由  [Next.js](https://nextjs.org/) 和 Notion 驱动的个人博客。

## Todo List

- [ ] 后端由 Cloudflare + notion-api-worker 替换方案：
  - [ ] Notion Public API 春季就要发布了，怎么能错过呢？肯定不需要私有 API 了
  - [ ] 前后端分离方案：Next.js Client + Next.js
  - [ ] 同构框架：redwood.js、Blitz.js
  - [ ] 开始选择困难了。。。如果选型了某技术，另一项怎么应用呢？烦恼
- [ ] 前端工作量就比较大了
  - [ ] 依靠 emotion 扩展主题功能，目标通过配置文件更换博客主题
    - [ ] 主题色（类似 MD 的调色板）
    - [ ] 圆角格式
    - [ ] 字体风格
    - [ ] 暗黑风格
  - [ ] 音乐插件组件
    - [ ] 可能会思考一下插件系统的设计模式
    - [ ] 网站后期肯定会扩展更多的外部服务，这时候前端该怎么做？（暂时就考虑前端）
  - [ ] cowcat-ui 项目的启动，替换项目中所有的 UI 组件（MD or AntD），统一风格
    - [ ] 布局组件
    - [ ] 基础的按钮、文字
    - [ ] 走马灯
    - [ ] 复杂的搜索框 + 标签筛选（AntD 看起来不好改造）
    - [ ] 通用树形组件，搭配时间轴
    - [ ] 分页组件
  - [ ] animejs 的引入，react ddd 风格创建流畅的动画系统
    - [ ] 这个地方坑点应该不多
    - [ ] 动画库暂时不想碰，就引入好了，后面渐进式地替换就好了
  - [ ] notion-x 的组件库替换，用 meow-notion 组件库渐进式替换
    - [ ] 组件库 + hooks 库，工作量还是挺大的
    - [ ] table 和 database 这边工作量估计会异常庞大
    - [ ] 优先级较低，太难了
  - [ ] 类型改造
    - [ ] 前端组件尽量支持泛型，少写类型定义
    - [ ] 我实在不想搞一个 notion-types 项目，后端类型能直接映射到前端就好了
    - [ ] 这么说是不是应该尝试一下同构框架两兄弟？
- [ ] 工程化
  - [ ] 可能会写一个脚手架什么的
    - [ ] alloy-eslint
    - [ ] 支持 storybook 等插件的可选项
  - [ ] CICD
    - [ ] 个人项目好像没太大必要，要加 cypress 吗？
  - [ ] mock api
  - [ ] proxy
  - [ ] vite or snowpack：算了，今年把 webpack 源码搞懂，vite 暂时还是玩具
- [ ] 监控埋点与 SEO
  - [ ] 没有深入过的领域（用过等于深入「笑」）
  - [ ] 分析访问数据
  - [ ] 提高站点知名度
- [ ] 拥抱社区
  - [ ] 希望干死同类产品，吸引更多小伙伴
- [ ] 拥抱新技术
  - [ ] 同构框架（这玩意市场前景到底如何？今年 midway 应该会小火一下）
  - [ ] esbuild、esm
  - [ ] recoil 原子化状态管理
    - [ ] react DDD 用了过多的 context，对性能有些担忧
    - [ ] recoil 怎么搭配 domain driven 呢？
- [x] 软件工程
  - [x] 敏捷
  - [ ] TDD
    - [ ] 时间有点紧，0.1.0 好了之后开始补测试
    - [ ] 后面开发一切测试驱动，先用例再实现
  - [x] DDD
- [ ] 更多模块
  - [ ] 仿 thoughtworks 的技术雷达
  - [ ] 推荐博客
  - [ ] 推荐站点，爬取文章
  - [ ] ...



## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
