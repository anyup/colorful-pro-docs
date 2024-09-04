// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
// 自定义样式
import './custom.css'
import './iconfont.css'
// 自定义组件
import DemoScan from '../components/DemoScan.vue'
import DemoPreview from '../components/DemoPreview.vue'
import FooterInfo from '../components/FooterInfo.vue'
import ArticleFooter from '../components/ArticleFooter.vue'
import CustomIcon from '../components/CustomIcon.vue'
import SitePV from '../components/SitePV.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { ElPopover } from 'element-plus'


/** @type {import('vitepress').Theme} */
export default {
	extends: DefaultTheme,
	enhanceApp({ app }) {
		// 注册自定义全局组件
		app.component('DemoScan', DemoScan),
			app.component('DemoPreview', DemoPreview),
			app.component('FooterInfo', FooterInfo),
			app.component('ArticleFooter', ArticleFooter),
			app.component('CustomIcon', CustomIcon),
			app.component('SitePV', SitePV),
			app.component('ElPopover', ElPopover)
	}
}