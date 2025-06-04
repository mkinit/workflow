import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
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