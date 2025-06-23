const is_dev = import.meta.env.MODE == 'development'
/* 
	后台的文件、图片相关接口返回的地址不带域名，需要将域名和接口路径区分开，方便文件引用时组合地址。
	也可以使用在引用文件时使用设置中的网站域名。
*/
const base_url = is_dev ? 'https://im.mkinit.com' : location.origin
export default {
	is_dev,
	base_url,
	api_url: base_url + '/js2-json/v1',
}