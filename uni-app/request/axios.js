import axios from 'axios'
import config from '@/config.js'

const env = process.env.NODE_ENV
const dev = env !== 'production'
axios.defaults.baseURL = dev ? '' : config.api_url

//请求拦截
axios.interceptors.request.use(
	(request) => {
		uni.showLoading()
		request.headers = {
			...request.headers,
		}
		if (localStorage.getItem('token') || sessionStorage.getItem('token')) {
			request.headers.token =
				localStorage.getItem('token') || sessionStorage.getItem('token')
		}
		return request
	},
	(error) => {
		uni.hideLoading()
		return new Promise.reject(error)
	}
)

//响应拦截
axios.interceptors.response.use(
	(success) => {
		//成功，HTTP状态：200、204
		uni.hideLoading()
		return Promise.resolve(success.data)
	},
	(fail) => {
		//失败，HTTP状态：200、204以外的
		uni.hideLoading()
		const status = fail.response.status
		switch (status) {
			case 401:
				console.log('请登录')
				break
			case 403:
				console.log('权限不足')
				break
			case 403:
				console.log('接口地址不存在')
				break
			case 500:
				console.log('服务器繁忙')
				break
			default:
				console.log('网络错误')
				break
		}
		return Promise.reject(fail.response.data.msg)
	}
)

export default axios