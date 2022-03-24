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
		//成功，HTTP状态：200
		uni.hideLoading()
		return Promise.resolve(success.data)
	},
	(fail) => {
		//失败，HTTP状态：200以外的
		uni.hideLoading()
		const status = fail.response.status
		const msg = status === 500 ? '网络错误' : fail.response.data.msg
		switch (status) {
			case 401:
				break
			default:
				break
		}
		return Promise.reject(fail.response.data.msg)
	}
)

export default axios
