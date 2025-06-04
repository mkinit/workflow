import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'

// https://vite.dev/config/
export default defineConfig({
	base:'./',
	plugins: [
		vue(),
		electron({
			// 主进程入口文件
			entry: './src-electron/main.js'
		})
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src')
		}
	},
	css: {
		preprocessorOptions: {
			less: {
				additionalData: `@import '@/assets/style/var.less';`, //配置less全局变量
			},
		},
	},
})