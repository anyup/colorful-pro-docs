// import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

// const require = createRequire(import.meta.url)
// const pkg = require('vitepress/package.json')

export const en = defineConfig({
  lang: 'en-US',

  description: 'anyup design is solution-driven and includes project best practices.',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/zh/blog/': { base: '/zh/blog/', items: sidebarBlog() },
      '/zh/uniui/': { base: '/zh/uniui/', items: sidebarUniUI() },
      '/zh/uni-http/': { base: '/zh/uni-http/', items: sidebarUniHttp() },
      '/zh/uni-colorful/': { base: '/zh/uni-colorful/', items: sidebarUniColorful() }
    },

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under <a style="color:#4e6e8e;" rel="noopener noreferrer" target="_blank" href="https://beian.miit.gov.cn/">鲁ICP备2021040594号-1</a>',
      copyright: `Copyright © 2020 - ${new Date().getFullYear()} <a target="_blank" href="https://github.com/anyup"> anyup design </a>`
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Home', link: '/' },
    { text: 'Blog', link: '/zh/blog/', activeMatch: '/zh/blog/' },
    {
      text: 'uni-app library',
      items: [
        { text: 'uniui tools', link: '/zh/uniui/guide/', activeMatch: '/zh/uniui/' },
        { text: 'uni-http Request', link: '/zh/uni-http/guide/', activeMatch: '/zh/uni-http/' }
      ]
    }
  ]
}

function sidebarBlog(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '简介',
      link: 'index',
      items: [
        {
          text: '可视化大屏',
          collapsed: false,
          items: [
            { text: 'ECharts十万级+数据渲染性能优化方案', link: 'large-screen/ECharts十万级+数据渲染性能优化方案' },
            { text: 'ECharts地图实战分析：实现一个完整的地图下钻功能', link: 'large-screen/ECharts地图实战分析：实现一个完整的地图下钻功能' }
          ]
        }
      ]
    }
  ]
}

function sidebarUniHttp(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'uni-http 请求库',
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
    }
  ]
}

function sidebarUniUI(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'uni-app 工具库',
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
        },
        { text: 'gitee', link: 'https://gitee.com/anyup/uniui' },
        { text: 'github', link: 'https://github.com/anyup/uniui' }
      ]
    }
  ]
}

function sidebarUniColorful(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'uni-app 工具库',
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
        },
        { text: 'gitee', link: 'https://gitee.com/anyup/uni-colorful' },
        { text: 'github', link: 'https://github.com/anyup/uni-colorful' }
      ]
    }
  ]
}
