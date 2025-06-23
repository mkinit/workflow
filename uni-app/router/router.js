import route from './route.js'
/*
	跳转方式：
	navigateTo：保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面。小程序中页面栈最多十层。
	redirectTo：关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
	reLaunch：关闭所有页面，打开到应用内的某个页面
	switchTab：跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
*/
export default (name, params, type = "navigateTo") => {
	if (route[name].must_login && !uni.getStorageSync('token')) {
		uni.showToast({
			icon: 'none',
			title: '请先登录'
		})
		setTimeout(() => {
			uni.navigateTo({
				url: route['login'].path
			})
		}, 1000)
		return
	}
	let url = route[name].path
	let param = 0
	for (let key in params) {
		url += `${param?'&':'?'}${key}=${params[key]}`
		param++
	}
	uni[type]({
		url
	})
}

export const back = () => {
	uni.navigateBack()
}