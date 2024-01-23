//前台脚本
console.log('前台脚本启动')

//发送数据/任务给后台，等待后台响应/操作
//chrome.runtime.sendMessage
chrome.runtime.onMessage.addListener((msg, sender, response) => {
	if (msg.from == 'popup' && msg.action == 'test') {
	}
})

//读取本地缓存
/*chrome.storage.local.get(null, function(result) {
	console.log(result)
})*/

window.addEventListener('load', () => {
	//主要脚本
})
