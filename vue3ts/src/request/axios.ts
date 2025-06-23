import axios from 'axios'

import { ElMessage, ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading.js'

import config from '@/config.ts'

const use_proxy = 0 //是否使用代理

//在vite.config.js配置跨域时 axios 的 baseURL 需要设置为对应的“/api”
axios.defaults.baseURL = (config.is_dev && use_proxy) ? '/api' : config.api_url

axios.defaults.timeout = 10000

let loading: LoadingInstance

//请求拦截
axios.interceptors.request.use(
	config => {
		loading = ElLoading.service()
		/*if (localStorage.getItem('user')) {
			config.headers.token = JSON.parse(
				localStorage.getItem('user')
			).token
		}*/
		return config
	},
	error => {
		/* 
			这里什么情况会出现错误还不清楚，也从来没遇到过这里抛出错误的。
			官方没有具体的说明，这里的请求拦截第一个回调函数实际上只做了配置属性的修改。
			猜想有可能在第一个回调函数中写错代码会触发，但现在的框架都是有eslint的代码校验，所以没机会触发。
		*/
		console.log(error)
		return Promise.reject(error)
	}
)

//响应拦截
axios.interceptors.response.use(
	success => {
		//成功，HTTP状态：200
		loading.close()
		return Promise.resolve(success.data)
	},
	fail => {
		if (fail.message == 'Network Error') {
			ElMessage.error('网络错误，或远程主机无响应')
		}
		if (fail.message.indexOf('timeout') >= 0) {
			ElMessage.error('请求超时')
		}
		loading.close()
		if (fail.response) {
			//请求成功，有响应，但不是2开头的状态码，根据需求按HTTP状态处理
			const status = fail.response.status
			const msg = fail.response.data.msg
			switch (status) {
				case 302:
					ElMessage.error(msg)
					setTimeout(() => {
						location.href = fail.response.data.data
					}, 2000)
					break
				case 401:
					ElMessage.error('身份验证过期，请重新登录！')
					setTimeout(() => {
						//做退出登陆后的操作
					}, 1500)
					break
				case 404:
					ElMessage.error('接口地址不存在！')
					break
				case 500:
					ElMessage.error('服务器错误：' + msg)
					break
				default:
					ElMessage.error(msg)
					break
			}
		}
		return Promise.reject(fail)
	}
)

export default axios