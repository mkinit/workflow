//前台脚本

//发送数据/任务给后台，等待后台响应/操作
const send = chrome.runtime.sendMessage
send('这是前台发送的消息', response => {
	console.log(response)
})
	//读取本地缓存
	chrome.storage.local.get(null, function(result) {
		console.log(result);
	});

window.addEventListener('load', () => {
	//主要脚本
})