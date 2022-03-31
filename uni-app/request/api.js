import axios from './axios.js'

//状态码测试接口
export const api200 = () => {
	return axios.get('200')
}

export const api403 = () => {
	return axios.get('403')
}

export const api404 = () => {
	return axios.get('404')
}

export const api503 = () => {
	return axios.get('503')
}

export const api504 = () => {
	return axios.get('504')
}