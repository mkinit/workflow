import route from './route.js'
//navigateTo、redirectTo、reLaunch、switchTab、
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
