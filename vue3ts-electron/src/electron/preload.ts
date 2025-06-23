import electron, { contextBridge } from 'electron'
import electronRemote from '@electron/remote'

//默认开放给渲染进程使用的部分electronAPI：contextBridge、crashReporter、ipcRenderer、nativeImage、webFrame、webUtils
console.log('electron', electron)

//渲染进程可使用所有electronAPI，有安全风险，已经被electron剥离出来的一个单独模块
console.log('electronRemote', electronRemote)

console.log('process', process)

const api = {}

if (process.contextIsolated) {
	//如果隔离了渲染进程和预加载脚本上下文，使用通信桥梁方式暴露API，此时预加载脚本的window和渲染进程的window不是同一个
	contextBridge.exposeInMainWorld('api', api)
} else {
	window.api = api
}