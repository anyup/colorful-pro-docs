import { defineConfig, type DefaultTheme } from 'vitepress'

// 自动化，给text添加索引值
function addTextIndex(items): DefaultTheme.SidebarItem[] {
  return items.map((item, index) => {
    item.text = `${index + 1}. ${item.text}`
    return item
  })
}

class Menu<T> {
  locale: string
  constructor(locale: string) {
    this.locale = locale
  }
  // 导航栏
  nav(): DefaultTheme.NavItem[] {
    return [
      { text: '首页', link: '/' },
      {
        text: 'JS 相关库',
        activeMatch: `/${this.locale}/fly`,
        items: [{ text: 'flyit 工具库', link: `/${this.locale}/flyit/guide/introduce`, activeMatch: `/${this.locale}/flyit/` }]
      },
      {
        text: 'uni-app 相关库',
        activeMatch: `/${this.locale}/uni`,
        items: [
          { text: 'uniui 工具库', link: `/${this.locale}/uniui/guide/introduce`, activeMatch: `/${this.locale}/uniui/` },
          { text: 'uni-http 请求库', link: `/${this.locale}/uni-http/guide/introduce`, activeMatch: `/${this.locale}/uni-http/` }
        ]
      },
      {
        text: '博客园',
        activeMatch: `/${this.locale}/blog/`,
        items: [
          { text: '关于我', link: `/${this.locale}/blog/` },
          { text: '可视化大屏', link: `/${this.locale}/blog/large-screen/`, activeMatch: `/${this.locale}/blog/large-screen/` },
          { text: 'uni-app开发', link: `/${this.locale}/blog/uni-app/`, activeMatch: `/${this.locale}/blog/uni-app/` }
        ]
      }
    ]
  }
  // 侧边栏
  sidebar(): DefaultTheme.Sidebar {
    return {
      '/zh/blog/': { base: '/zh/blog/', items: this.sidebarBlog() },
      '/zh/uniui/': { base: '', items: this.sidebarUniUI() },
      '/zh/uni-http/': { base: '', items: this.sidebarUniHttp() },
      '/zh/uni-colorful/': { base: '', items: this.sidebarUniColorful() },
      '/zh/flyit/': { base: '', items: this.sidebarFlyit() }
    }
  }
  // 1.博客菜单
  sidebarBlog(): DefaultTheme.SidebarItem[] {
    return [
      {
        text: '可视化大屏',
        collapsed: true,
        items: addTextIndex([
          { text: '专栏简介 - 可视化大屏', link: 'large-screen/' },
          { text: 'ECharts十万级+数据渲染性能优化方案', link: 'large-screen/ECharts十万级+数据渲染性能优化方案' },
          { text: 'ECharts地图实战分析：实现一个完整的地图下钻功能', link: 'large-screen/ECharts地图实战分析：实现一个完整的地图下钻功能' },
          { text: '产品需求：ECharts鼠标自由刷选区域，定向放大图表', link: 'large-screen/产品需求：ECharts鼠标自由刷选区域，定向放大图表' },
          { text: '分享ECharts地图合规整改经验，并实现一个最基础的中国地图', link: 'large-screen/分享ECharts地图合规整改经验，并实现一个最基础的中国地图' },
          { text: '分析ECharts图表渲染导致的内存泄漏问题-附解决方案', link: 'large-screen/分析ECharts图表渲染导致的内存泄漏问题-附解决方案' }
        ])
      },
      {
        text: 'uni-app开发',
        collapsed: true,
        items: addTextIndex([
          { text: '专栏简介 - uni-app开发', link: 'uni-app/' },
          { text: '解析 uni-app 小程序分包策略：合理优化包体积分布', link: 'uni-app/解析 uni-app 小程序分包策略：合理优化包体积分布' },
          { text: '【超详细】从0到1打包你的uni-app应用：安卓篇打包指南', link: 'uni-app/【超详细】从0到1打包你的uni-app应用：安卓篇打包指南' },
          { text: 'uni-app跳坑系列：谈谈我是如何提升安卓App扫码准确率的', link: 'uni-app/uni-app跳坑系列：谈谈我是如何提升安卓App扫码准确率的' },
          { text: 'uni-app扫码插件推荐：基于支付宝mPaaS扫码组件进行开发', link: 'uni-app/uni-app扫码插件推荐：基于支付宝mPaaS扫码组件进行开发' },
          { text: 'uni-app图标库整合：使用iconfont构建属于自己的图标库', link: 'uni-app/uni-app图标库整合：使用iconfont构建属于自己的图标库' },
          { text: '一文读懂uni-app中的尺寸单位rpx', link: 'uni-app/一文读懂uni-app中的尺寸单位rpx' },
          { text: '玩转uni-app多端部署：自定义平台的条件编译实战详解', link: 'uni-app/玩转uni-app多端部署：自定义平台的条件编译实战详解' },
          { text: '玩转uni-app多端编译：static目录进行条件编译的最佳实践', link: 'uni-app/玩转uni-app多端编译：static目录进行条件编译的最佳实践' },
          { text: '经历了PMP和软考高项，我独立开发了一款刷题小程序', link: 'uni-app/经历了PMP和软考高项，我独立开发了一款刷题小程序' },
          { text: '100行代码打造小而美的uni-app请求库', link: 'uni-app/100行代码打造小而美的uni-app请求库' },
          { text: '前端小工具！加速构建你的API请求类，全端通用', link: 'uni-app/前端小工具！加速构建你的API请求类，全端通用' }
        ])
      }
    ]
  }

  // 2.uniui 文档
  sidebarUniUI(): DefaultTheme.SidebarItem[] {
    return [
      {
        text: 'uni-app 工具库',
        base: `/${this.locale}/uniui/`,
        items: [
          {
            text: '指南',
            collapsed: false,
            items: [
              { text: '介绍', link: 'guide/introduce' },
              { text: '安装', link: 'guide/install' },
              { text: '快速上手', link: 'guide/quickstart' },
              { text: '目录结构', link: 'guide/directory' },
              { text: '开发工具', link: 'guide/devtools' },
              { text: '注意事项', link: 'guide/feature' },
              { text: '更新日志', link: 'guide/changelog' }
            ]
          },
          {
            text: '组件',
            collapsed: false,
            items: [
              { text: 'Layout - 布局', link: 'components/layout' },
              { text: 'Button - 按钮', link: 'components/button' },
              { text: 'Loader - 加载图标', link: 'components/loader' },
              { text: 'Loading - 加载框', link: 'components/loading' },
              { text: 'Table - 表格', link: 'components/table' },
              { text: 'Toast - 提示', link: 'components/toast' },
              { text: 'WebView - 网页视图', link: 'components/webview' },
              { text: 'Updater - 应用更新管理', link: 'components/updater' },
              { text: 'Apis - 服务器选择', link: 'components/apis' }
            ]
          },
          {
            text: '工具',
            collapsed: false,
            items: [
              { text: 'Checker - 表单校验', link: 'js/checker' },
              { text: 'Http - 网络请求', link: 'js/http' },
              { text: 'Optimize - 优化类', link: 'js/optimize' },
              { text: 'Pager - 分页', link: 'js/pager' },
              { text: 'Push - 推送', link: 'js/push' },
              { text: 'Plus - 真机类', link: 'js/plus' },
              { text: 'Store - 状态管理', link: 'js/store' },
              { text: 'Tips - 提示', link: 'js/tips' }
            ]
          }
        ]
      },
      { text: 'github', link: 'https://github.com/anyup/uniui' },
      { text: 'gitee', link: 'https://gitee.com/anyup/uniui' }
    ]
  }

  // 3.uni-http 文档
  sidebarUniHttp(): DefaultTheme.SidebarItem[] {
    return [
      {
        text: 'uni-http 请求库',
        base: `/${this.locale}/uni-http/`,
        items: [
          {
            text: '指南',
            collapsed: false,
            items: [
              { text: '介绍', link: 'guide/introduce' },
              { text: '实现思路', link: 'guide/implement' },
              { text: '安装', link: 'guide/install' },
              { text: '快速上手', link: 'guide/quickstart' },
              { text: '注意事项', link: 'guide/feature' },
              { text: '更新日志', link: 'guide/changelog' }
            ]
          }
        ]
      },
      { text: 'github', link: 'https://github.com/anyup/uni-http' },
      { text: 'gitee', link: 'https://gitee.com/anyup/uni-http' }
    ]
  }

  // 4.uni-colorful 文档
  sidebarUniColorful(): DefaultTheme.SidebarItem[] {
    return [
      {
        text: 'uni-app 工具库',
        base: `/${this.locale}/uni-colorful/`,
        items: [
          {
            text: '指南',
            collapsed: false,
            items: [
              { text: '介绍', link: 'guide/introduce' },
              { text: '安装', link: 'guide/install' },
              { text: '快速上手', link: 'guide/quickstart' },
              { text: '目录结构', link: 'guide/directory' },
              { text: '开发工具', link: 'guide/devtools' },
              { text: '注意事项', link: 'guide/feature' },
              { text: '更新日志', link: 'guide/changelog' }
            ]
          },
          {
            text: '组件',
            collapsed: false,
            items: [
              { text: 'Layout - 布局', link: 'components/layout' },
              { text: 'Button - 按钮', link: 'components/button' },
              { text: 'Loader - 加载图标', link: 'components/loader' },
              { text: 'Loading - 加载框', link: 'components/loading' },
              { text: 'Table - 表格', link: 'components/table' },
              { text: 'Toast - 提示', link: 'components/toast' },
              { text: 'WebView - 网页视图', link: 'components/webview' },
              { text: 'Updater - 应用更新管理', link: 'components/updater' },
              { text: 'Apis - 服务器选择', link: 'components/apis' }
            ]
          },
          {
            text: '工具',
            collapsed: false,
            items: [
              { text: 'Checker - 表单校验', link: 'js/checker' },
              { text: 'Http - 网络请求', link: 'js/http' },
              { text: 'Optimize - 优化类', link: 'js/optimize' },
              { text: 'Pager - 分页', link: 'js/pager' },
              { text: 'Push - 推送', link: 'js/push' },
              { text: 'Plus - 真机类', link: 'js/plus' },
              { text: 'Store - 状态管理', link: 'js/store' },
              { text: 'Tips - 提示', link: 'js/tips' }
            ]
          }
        ]
      },
      { text: 'github', link: 'https://github.com/anyup/uni-colorful' },
      { text: 'gitee', link: 'https://gitee.com/anyup/uni-colorful' }
    ]
  }

  // 5.flyit 文档
  sidebarFlyit(): DefaultTheme.SidebarItem[] {
    return [
      {
        text: 'flyit 工具库',
        base: `/${this.locale}/flyit/`,
        items: [
          {
            text: '指南',
            collapsed: false,
            items: [
              { text: '介绍', link: 'guide/introduce' },
              { text: '安装', link: 'guide/install' },
              { text: '快速上手', link: 'guide/quickstart' },
              { text: '最佳实践', link: 'guide/bestdemo' }
            ]
          }
        ]
      },
      { text: 'github', link: 'https://github.com/anyup/flyit' },
      { text: 'gitee', link: 'https://gitee.com/anyup/flyit' }
    ]
  }
}

export default Menu
