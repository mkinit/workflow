## Vue 3 + TypeScript + Vite + electron

### 渲染进程使用node
- nodeIntegration和contextIsolation设置，或使用preload
```
webPreferences: {
    nodeIntegration: true,
    contextIsolation: false,
    //preload: path.join(__dirname, 'preload.js')
}
```

### 注意
- 在渲染进程是用require导入必须nodeIntegration=true并且contextIsolation=false，否则会报错require is not defined
- package.json
	- 删除 "type": "module"，或改成“commonjs”，否则会报错
	- "build-win-target"参数：portable（单文件），zip（压缩包），dir（文件夹模式），nsis（安装包）

### 打包问题
如果出现electron和依赖无法下载，需要手动将资源下载后放到指定位置：
- electron-v36.3.2-win32-x64
	- https://github.com/electron/electron/releases/download/v36.3.2/electron-v36.3.2-win32-x64.zip
- nsis
	- https://github.com/electron-userland/electron-builder-binaries/releases/download/nsis-3.0.4.1/nsis-3.0.4.1.7z
- nsis-resources
	- https://github.com/electron-userland/electron-builder-binaries/releases/download/nsis-resources-3.4.1/nsis-resources-3.4.1.7z
- winCodeSign
	- https://github.com/electron-userland/electron-builder-binaries/releases/download/winCodeSign-2.6.0/winCodeSign-2.6.0.7z

- 最终目录如下
	- C:\Users\用户名\AppData\Local
		- electron
			- Cache
				- electron-v36.3.2-win32-x64.zip
		- electron-builder
			- Cache
				- nsis
					- nsis-3.0.4.1
					- nsis-resources-3.4.1
				- winCodeSign
					- winCodeSign-2.6.0