// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
// 自定义样式
import './custom.css'
// 自定义组件
import DemoScan from '../components/DemoScan.vue'
import DemoPreview from '../components/DemoPreview.vue'
import FooterInfo from '../components/FooterInfo.vue'



/** @type {import('vitepress').Theme} */
export default {
	extends: DefaultTheme,
	enhanceApp({ app }) {
		// 注册自定义全局组件
		app.component('DemoScan', DemoScan),
			app.component('DemoPreview', DemoPreview),
			app.component('FooterInfo', FooterInfo)
	}
}