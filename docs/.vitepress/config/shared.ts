import { defineConfig } from 'vitepress'
import { search as zhSearch } from './zh'

export const shared = defineConfig({
  title: '高效的前端知识库',
  base: '/site/',
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    math: true,
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ]
  },

  sitemap: {
    hostname: 'https://www.anyup.cn',
    transformItems(items) {
      return items.filter(item => !item.url.includes('migration'))
    }
  },

  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'https://www.anyup.cn/static/anyup/images/logo.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { name: 'referrer', content: 'no-referrer' }],
    ['meta', { name: 'keywords', content: 'anyup design,uni-app,前端工具库,blog' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'anyup design | Vite & Vue Powered Static Site Generator' }],
    ['meta', { property: 'og:site_name', content: 'anyup design' }],
    ['meta', { property: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg' }],
    ['meta', { property: 'og:url', content: 'https://www.anyup.cn' }],
    ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }],
    ['script', { src: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js' }],
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
  ],

  themeConfig: {
    logo: { src: 'https://www.anyup.cn/static/anyup/images/logo1.png', width: 65, height: 24 },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/anyup' },
      {
        icon: {
          svg: '<svg t="1716370022058" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3584" width="64" height="64"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#D81E06" p-id="3585"></path><path d="M771.17 455.1H480.42c-13.96 0-25.28 11.32-25.28 25.28l-0.03 63.23c0 13.95 11.3 25.28 25.28 25.28h177.02c13.96 0 25.28 11.32 25.28 25.28v12.64c0 41.89-33.95 75.84-75.84 75.84H366.62c-13.96 0-25.28-11.32-25.28-25.28V417.18c0-41.89 33.95-75.84 75.84-75.84H771.1c13.96 0 25.28-11.32 25.28-25.28l0.06-63.2c0-13.97-11.31-25.29-25.28-25.31H417.18c-104.72 0-189.61 84.88-189.63 189.6V771.1c0 13.95 11.33 25.28 25.28 25.28h372.93c94.25 0 170.66-76.41 170.66-170.66V480.35c0-13.96-11.32-25.28-25.28-25.28l0.03 0.03z" fill="#FFFFFF" p-id="3586"></path></svg>'
        },
        link: 'https://gitee.com/anyup'
      },
      {
        icon: {
          svg: '<svg t="1713940423541" class="icon" viewBox="0 0 1316 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10589" width="64" height="64"><path d="M643.181714 247.698286l154.916572-123.172572L643.181714 0.256 643.072 0l-154.660571 124.269714 154.660571 123.245715 0.109714 0.182857z m0 388.461714h0.109715l399.579428-315.245714-108.361143-87.04-291.218285 229.888h-0.146286l-0.109714 0.146285L351.817143 234.093714l-108.251429 87.04 399.433143 315.136 0.146286-0.146285z m-0.146285 215.552l0.146285-0.146286 534.893715-422.034285 108.397714 87.04-243.309714 192L643.145143 1024 10.422857 525.056 0 516.754286l108.251429-86.893715L643.035429 851.748571z" fill="#1E80FF" p-id="10590"></path></svg>'
        },
        link: 'https://juejin.cn/user/4230576472589976/posts'
      }
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }

    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: '8J64VVRP8K',
    //     apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
    //     indexName: 'vitepress',
    //     locales: { ...zhSearch }
    //   }
    // },

    // carbonAds: { code: 'CEBDT27Y', placement: 'vuejsorg' }
  }
})
