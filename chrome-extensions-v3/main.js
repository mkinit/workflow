//程序窗口脚本，要打开窗口才会执行
console.log('程序窗口启动')

const test = () => {
	chrome.tabs.query(
		{
			active: true,
			currentWindow: true,
		},
		tabs => {
			//给foreground.js发送消息
			chrome.tabs.sendMessage(tabs[0].id, {
				//自定义数据
				from: 'popup',
				action: 'test',
			})
		}
	)
}

const btn = document.querySelector('.test-btn')
btn.onclick = () => {
	test()
}

//本地缓存
//chrome.storage.local.set({ token: '19900208' });

//清除本地缓存
//chrome.storage.local.clear()

//删除某个缓存
//chrome.storage.local.remove(["token"])
