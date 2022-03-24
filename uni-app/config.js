const is_dev = process.env.NODE_ENV === 'development'
const base_url = is_dev?'https://测试接口地址':'https://正式接口地址'
const api_url = base_url + '/js2-json/v1/'
export default {
	base_url, //基本地址
	api_url, //接口地址
}
