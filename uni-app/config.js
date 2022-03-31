const is_dev = process.env.NODE_ENV === 'development'
const base_url = is_dev?'http://rap2api.taobao.org':'https://正式接口地址'
const api_url = base_url + '/app/mock/269355/'
export default {
	base_url, //基本地址
	api_url, //接口地址
}
