//后台脚本
const website = 'https://XXX.com/'

/*
	接收前台的数据
	request：前台发送的数据
	sendResponse()：发送数据给前台
	sender：插件信息和当前标签页信息
*/
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	return true //异步数据需要返回true，否则前台接收不到数据
})
//chrome.cookies.getAll({ "url": website }, function(cookies) {}) //获取网站cookie
//chrome.runtime.onInstalled.addListener(function(res) {})//安装后的动作
//chrome.runtime.setUninstallURL(website)//卸载后要打开的地址
