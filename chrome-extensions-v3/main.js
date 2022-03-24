//程序窗口脚本，要打开窗口才会执行

const send = chrome.runtime.sendMessage

//发送数据/任务给后台，等待后台响应/操作
send('这是窗口发送的消息', response => {
	console.log(response)
})

//本地缓存
//chrome.storage.local.set({ token: '19900208' });

//清除本地缓存
//chrome.storage.local.clear()


//删除某个缓存
//chrome.storage.local.remove(["token"])