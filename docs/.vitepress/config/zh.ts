// import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

// const require = createRequire(import.meta.url)
// const pkg = require('vitepress/package.json')

export const zh = defineConfig({
  lang: 'zh-Hans',

  description: 'anyup design 是以解决方案为驱动，包含项目的最佳实践，最佳的组件实现和便捷的工具类封装',

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
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '备案许可：<a style="color:#4e6e8e;" rel="noopener noreferrer" target="_blank" href="https://beian.miit.gov.cn/">鲁ICP备2021040594号-1</a>',
      copyright: `Copyright © 2020 - ${new Date().getFullYear()} <a target="_blank" href="https://github.com/anyup"> anyup design </a>`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '首页', link: '/' },
    { text: '博客园', link: '/zh/blog/', activeMatch: '/zh/blog/' },
    {
      text: 'uni-app 相关库',
      items: [
        { text: 'uniui 工具库', link: '/zh/uniui/guide/introduce', activeMatch: '/zh/uniui/' },
        { text: 'uni-http 请求库', link: '/zh/uni-http/guide/introduce', activeMatch: '/zh/uni-http/' }
      ]
    }
  ]
}
// 博客菜单
function sidebarBlog(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '简介',
      link: '/',
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

// uni-http 文档
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

// uniui 文档
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

// uni-colorful 文档
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

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  zh: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消'
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除'
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接'
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者'
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈'
        }
      }
    }
  }
}
