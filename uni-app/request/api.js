import http from './mp-http.js'

//状态码测试接口
export const api200 = () => {
	return http.get('200')
}

export const api403 = () => {
	return http.get('403')
}

export const api404 = () => {
	return http.get('404')
}

export const api503 = () => {
	return http.get('503')
}

export const api504 = () => {
	return http.get('504')
}

export const apiUpload = (name, filePath, header = {}, formData = {}) => {
	return http.upload('files', name, filePath, header, formData)
}
