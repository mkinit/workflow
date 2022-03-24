import axios from './axios.js'

//导出接口
export const demo = () => {
	return axios.get('/demo')
}