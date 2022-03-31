import axios from 'axios'
import config from '@/config.js'

const env = process.env.NODE_ENV
const dev = env !== 'production'
axios.defaults.baseURL = dev ? '' : config.api_url

//请求拦截
axios.interceptors.request.use(
	request => {
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
	error => {
		uni.hideLoading()
		return new Promise.reject(error)
	}
)

//响应拦截
axios.interceptors.response.use(
	success => {
		//成功，HTTP状态：2开头
		uni.hideLoading()
		return Promise.resolve(success.data)
	},
	fail => {
		//失败，HTTP状态：2开头以外的
		uni.hideLoading()
		const status = fail.response.status
		switch (status) {
			case 400:
				uni.showToast({
					title: '请求参数错误'
				})
				break
			case 401:
				uni.showToast({
					title: '请登录'
				})
				break
			case 403:
				uni.showToast({
					title: '权限不足'
				})
				break
			case 404:
				uni.showToast({
					title: '接口地址不存在'
				})
				break
			case 500:
				uni.showToast({
					title: '服务器错误'
				})
				break
			case 503:
				uni.showToast({
					title: '服务器繁忙'
				})
				break
			default:
				uni.showToast({
					title: '网络错误'
				})
				break
		}
		return Promise.reject(fail.response.data.msg)
	}
)

export default axios
