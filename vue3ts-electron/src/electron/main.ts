import { app, BrowserWindow } from 'electron'
import { join } from 'path'
import version_list from './version.js'

let main

// 创建浏览器窗口时，调用这个函数。
const createWindow = () => {
    main = new BrowserWindow({
        width: 1280,
        height: 768,
        title: `应用名称 v${version_list[0].version}（mkinit）`,
        icon: join(__dirname, './public/icon256.ico'),
        autoHideMenuBar: true, //隐藏菜单，按alt可以显示菜单
        webPreferences: {
            nodeIntegration: false, //在渲染进程中启用 Node API，开启后在渲染进程可使用@electron/remote，有安全风险，关闭后渲染进程无法使用require导入模块
            contextIsolation: true, //隔离渲染进程和预加载脚本上下文，启用后渲染进程无法访问预加载脚本暴露的API，必须通过contextBridge暴露，防止原型污染攻击，开启后渲染进程无法使用require导入模块
            preload: join(__dirname, 'preload.js')
        }
    })

    // development模式
    if (process.env.VITE_DEV_SERVER_URL) {
        // main.loadURL('http://localhost:3000')
        main.loadURL(process.env.VITE_DEV_SERVER_URL)
        // 开启调试台
        main.webContents.openDevTools()
    } else {
        main.removeMenu() //移除菜单，按alt也不会出现菜单
        main.loadFile(join(__dirname, '../dist/index.html'))
    }
}

// Electron 会在初始化后并准备
app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})