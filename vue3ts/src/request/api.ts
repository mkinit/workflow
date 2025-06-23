import axios from './axios.ts'

export const apiTest = () => {
	return axios.get('/setting')
}