//小程序的请求封装
import config from '@/config.js'

//默认头部
const request_header = {
	token: uni.getStorageSync('token')
}

export default {
	get: (url, params = {}, header = {}) => {
		return request(url, 'GET', params, header)
	},
	post: (url, data = {}, header = {}) => {
		return request(url, 'POST', data, header)
	},
	put: (url, data = {}, header = {}) => {
		return request(url, 'PUT', params, header)
	},
	delete: (url, data = {}, header = {}) => {
		return request(url, 'DELETE', data, header)
	},
	upload: (url, name, filePath, header = {}, formData = {}) => {
		return new Promise((resolve, reject) => {
			uni.uploadFile({
				url: config.api_url + url,
				name: name,
				filePath: filePath,
				header: Object.assign(request_header, header, {
					'content-type': 'multipart/form-data',
				}),
				formData,
				success: response => {
					const status_code = response.statusCode
					if (/^2[\d]+/.test(status_code)) {
						resolve(response)
					} else {
						checkStatus(status_code, response, resolve, reject)
					}
				},
				fail
			})
		})
	}
}

//请求函数
function request(url, method, data, header) {
	uni.showLoading({
		mask: true
	})
	return new Promise((resolve, reject) => {
		uni.request({
			url: config.api_url + url,
			method,
			data,
			header: Object.assign(request_header, header),
			success: response => {
				uni.hideLoading()
				const status_code = response.statusCode
				if (/^2[\d]+/.test(status_code)) {
					resolve(response.data)
				} else {
					checkStatus(status_code, response, resolve, reject)
				}
			},
			fail
		})
	})
}

//接口调用失败提示
function fail(err) {
	uni.showToast({
		icon: 'error',
		title: err.errMsg
	})
}

//检查非2开头的状态码并统一做出响应
function checkStatus(status_code, response, resolve, reject) {
	switch (status_code) {
		case 401:
			uni.showToast({
				icon: 'error',
				title: '身份验证过期，请重新登录！'
			})
			setTimeout(() => {
				//清空用户数据和过期的token
				logout()
			}, 1500)
			break
		case 500:
			uni.showToast({
				icon: 'error',
				title: '服务器错误'
			})
			break
		default:
			uni.showToast({
				icon: 'error',
				title: response.data.msg
			})
			break
	}
	reject(response)
}