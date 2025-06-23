import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'

// https://vite.dev/config/
export default defineConfig({
	base: './',
	plugins: [
		vue(),
		electron([{
				entry: './src/electron/main.ts',
			},
			{
				entry: './src/electron/preload.ts',
			},
			{
				entry: './src/electron/version.ts',
			},
		]),
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