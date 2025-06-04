const open_proxy = 1 //开启代理
const is_dev = process.env.NODE_ENV === 'development'
const base_url = is_dev ? 'http://js2api.com' : 'https:/正式环境域名'
export default {
	is_dev
	base_url, //基本地址
	api_url: (is_dev && open_proxy) ? '/js2-json/v1' : base_url + '/js2-json/v1', //接口地址
}