const { app, BrowserWindow } = require('electron')
const { join } = require('path')

// 屏蔽安全警告
// ectron Security Warning (Insecure Content-Security-Policy)
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

// 创建浏览器窗口时，调用这个函数。
const createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 768,
        title: '应用名称',
        icon: join(__dirname, './public/icon256.ico'),
        autoHideMenuBar: true, //隐藏菜单
        webPreferences: {
            preload: join(__dirname, 'preload.js')
        }
    })

    // development模式
    if (process.env.VITE_DEV_SERVER_URL) {
        // win.loadURL('http://localhost:3000')
        win.loadURL(process.env.VITE_DEV_SERVER_URL)
        // 开启调试台
        win.webContents.openDevTools()
    } else {
        win.loadFile(join(__dirname, './dist/index.html'))
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