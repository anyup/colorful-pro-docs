import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '高效的前端知识库',
  description: 'anyup design 是以解决方案为驱动，包含项目的最佳实践，最佳的组件实现和便捷的工具类封装',
  base: '/dist/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://www.anyup.cn/static/anyup/images/logo1.png',
    // 侧边栏导航
    aside: true,
    // 搜索
    search: {
      provider: 'local'
    },
    // 翻页
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    // 编辑此页面
    // editLink: {
    //   pattern: 'https://juejin.cn/post/:path',
    //   text: '在 GitHub 上编辑此页面',
    // },

    // editLink: {
    //   text: '在 GitHub 上编辑此页面',
    //   pattern: ({ filePath }) => {
    //     if (filePath.startsWith('packages/')) {
    //       return `https://github.com/acme/monorepo/edit/main/${filePath}`
    //     } else {
    //       return `https://github.com/acme/monorepo/edit/main/docs/${filePath}`
    //     }
    //   }
    // },
    // 底部许可
    // footer: {
    //   message: '基于 MIT 许可发布',
    //   copyright: `版权所有 © 2019-${new Date().getFullYear()} anyup`
    // },

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
    darkModeSwitchTitle: '切换到深色模式',
    nav: [
      { text: '首页', link: '/' },
      { text: '博客园', link: '/blog/zh/index.html' },
      {
        text: 'uni-app 相关库',
        items: [
          { text: 'uniui 工具库', link: '/uniui/zh/guide/introduce.html' },
          { text: 'uni-http 请求库', link: '/uni-http/zh/guide/introduce.html' }
        ]
      }
    ],
    sidebar: {
      '/uniui/': [
        {
          text: 'uni-app 工具库',
          items: [
            {
              text: '指南',
              collapsed: false,
              items: [
                { text: '介绍', link: '/uniui/zh/guide/introduce.html' },
                { text: '安装', link: '/uniui/zh/guide/install.html' },
                { text: '快速上手', link: '/uniui/zh/guide/quickstart.html' },
                { text: '目录结构', link: '/uniui/zh/guide/directory.html' },
                { text: '开发工具', link: '/uniui/zh/guide/devtools.html' },
                { text: '注意事项', link: '/uniui/zh/guide/feature.html' },
                { text: '更新日志', link: '/uniui/zh/guide/changelog.html' }
              ]
            },
            {
              text: '组件',
              collapsed: false,
              items: [
                { text: 'Layout - 布局', link: '/uniui/zh/components/layout.html' },
                { text: 'Button - 按钮', link: '/uniui/zh/components/button.html' },
                { text: 'Loader - 加载图标', link: '/uniui/zh/components/loader.html' },
                { text: 'Loading - 加载框', link: '/uniui/zh/components/loading.html' },
                { text: 'Table - 表格', link: '/uniui/zh/components/table.html' },
                { text: 'Toast - 提示', link: '/uniui/zh/components/toast.html' },
                { text: 'WebView - 网页视图', link: '/uniui/zh/components/webview.html' },
                { text: 'Updater - 应用更新管理', link: '/uniui/zh/components/updater.html' },
                { text: 'Apis - 服务器选择', link: '/uniui/zh/components/apis.html' }
              ]
            },
            {
              text: '工具',
              collapsed: false,
              items: [
                { text: 'Checker - 表单校验', link: '/uniui/zh/js/checker.html' },
                { text: 'Http - 网络请求', link: '/uniui/zh/js/http.html' },
                { text: 'Optimize - 优化类', link: '/uniui/zh/js/optimize.html' },
                { text: 'Pager - 分页', link: '/uniui/zh/js/pager.html' },
                { text: 'Push - 推送', link: '/uniui/zh/js/push.html' },
                { text: 'Plus - 真机类', link: '/uniui/zh/js/plus.html' },
                { text: 'Store - 状态管理', link: '/uniui/zh/js/store.html' },
                { text: 'Tips - 提示', link: '/uniui/zh/js/tips.html' }
              ]
            },
            { text: 'gitee', link: 'https://gitee.com/anyup/uniui' },
            { text: 'github', link: 'https://github.com/anyup/uniui' }
          ]
        }
      ],
      '/uni-colorful/': [
        {
          text: 'uni-app 工具库',
          items: [
            {
              text: '指南',
              collapsed: false,
              items: [
                { text: '介绍', link: '/uni-colorful/zh/guide/introduce.html' },
                { text: '安装', link: '/uni-colorful/zh/guide/install.html' },
                { text: '快速上手', link: '/uni-colorful/zh/guide/quickstart.html' },
                { text: '目录结构', link: '/uni-colorful/zh/guide/directory.html' },
                { text: '开发工具', link: '/uni-colorful/zh/guide/devtools.html' },
                { text: '注意事项', link: '/uni-colorful/zh/guide/feature.html' },
                { text: '更新日志', link: '/uni-colorful/zh/guide/changelog.html' }
              ]
            },
            {
              text: '组件',
              collapsed: false,
              items: [
                { text: 'Layout - 布局', link: '/uni-colorful/zh/components/layout.html' },
                { text: 'Button - 按钮', link: '/uni-colorful/zh/components/button.html' },
                { text: 'Loader - 加载图标', link: '/uni-colorful/zh/components/loader.html' },
                { text: 'Loading - 加载框', link: '/uni-colorful/zh/components/loading.html' },
                { text: 'Table - 表格', link: '/uni-colorful/zh/components/table.html' },
                { text: 'Toast - 提示', link: '/uni-colorful/zh/components/toast.html' },
                { text: 'WebView - 网页视图', link: '/uni-colorful/zh/components/webview.html' },
                { text: 'Updater - 应用更新管理', link: '/uni-colorful/zh/components/updater.html' },
                { text: 'Apis - 服务器选择', link: '/uni-colorful/zh/components/apis.html' }
              ]
            },
            {
              text: '工具',
              collapsed: false,
              items: [
                { text: 'Checker - 表单校验', link: '/uni-colorful/zh/js/checker.html' },
                { text: 'Http - 网络请求', link: '/uni-colorful/zh/js/http.html' },
                { text: 'Optimize - 优化类', link: '/uni-colorful/zh/js/optimize.html' },
                { text: 'Pager - 分页', link: '/uni-colorful/zh/js/pager.html' },
                { text: 'Push - 推送', link: '/uni-colorful/zh/js/push.html' },
                { text: 'Plus - 真机类', link: '/uni-colorful/zh/js/plus.html' },
                { text: 'Store - 状态管理', link: '/uni-colorful/zh/js/store.html' },
                { text: 'Tips - 提示', link: '/uni-colorful/zh/js/tips.html' }
              ]
            },
            { text: 'gitee', link: 'https://gitee.com/anyup/uni-colorful' },
            { text: 'github', link: 'https://github.com/anyup/uni-colorful' }
          ]
        }
      ],
      '/uni-http/': [
        {
          text: 'uni-http 请求库',
          items: [
            {
              text: '指南',
              collapsed: false,
              items: [
                { text: '介绍', link: '/uni-http/zh/guide/introduce.html' },
                { text: '实现思路', link: '/uni-http/zh/guide/implement.html' },
                { text: '安装', link: '/uni-http/zh/guide/install.html' },
                { text: '快速上手', link: '/uni-http/zh/guide/quickstart.html' },
                { text: '注意事项', link: '/uni-http/zh/guide/feature.html' },
                { text: '更新日志', link: '/uni-http/zh/guide/changelog.html' }
              ]
            }
          ]
        }
      ],
      '/blog/': [
        {
          text: '简介',
          link: '/blog/zh/index.html',
          items: [
            {
              text: '可视化大屏',
              collapsed: false,
              items: [{ text: 'ECharts十万级+数据渲染性能优化方案', link: '/blog/zh/echarts/ECharts十万级+数据渲染性能优化方案.html' }]
            }
          ]
        }
      ]
    },
    socialLinks: [
      {
        icon: {
          svg: '<svg t="1713940423541" class="icon" viewBox="0 0 1316 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10589" width="64" height="64"><path d="M643.181714 247.698286l154.916572-123.172572L643.181714 0.256 643.072 0l-154.660571 124.269714 154.660571 123.245715 0.109714 0.182857z m0 388.461714h0.109715l399.579428-315.245714-108.361143-87.04-291.218285 229.888h-0.146286l-0.109714 0.146285L351.817143 234.093714l-108.251429 87.04 399.433143 315.136 0.146286-0.146285z m-0.146285 215.552l0.146285-0.146286 534.893715-422.034285 108.397714 87.04-243.309714 192L643.145143 1024 10.422857 525.056 0 516.754286l108.251429-86.893715L643.035429 851.748571z" fill="#1E80FF" p-id="10590"></path></svg>'
        },
        link: 'https://juejin.cn/user/4230576472589976/posts'
      }
    ]
  },
  head: [
    ['link', { rel: 'icon', href: 'https://www.anyup.cn/static/anyup/images/logo.png' }],
    ['meta', { name: 'referrer', content: 'no-referrer' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'anyupdocs,anyupdeisgn,vuepress,vuepress-theme,theme,anyup,docs,anyupui,anyup-uniui,uniui,anyup docs of vuepress,uni-app前端工具库,主题,vuepress主题,anyup设计,blog,vuepress-blog'
      }
    ],
    // 百度站长验证
    ['meta', { name: 'baidu-site-verification', content: 'code-KOgnjImY1m' }],
    // 添加百度统计
    [
      'script',
      {},
      `
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?b3d2cace082e577b291d93de68e86eaa";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
        })();
        `
    ]
  ]
})
