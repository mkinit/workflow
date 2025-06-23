const env = import.meta.env
console.log(env)
/* 
	默认后台程序和前台网站是同域名，打包时可根据实际修改域名
	后台的文件、图片相关接口返回的地址不带域名，需要将域名和接口路径区分开，方便文件引用时组合地址
*/

const api_host = env.VITE_API_HOST ? env.VITE_API_HOST : location.origin

export default {
    app_mode: env.MODE,
    is_dev: env.MODE == 'development' ? true : false,
    api_host: env.MODE == 'development' ? 'https://js2api.com' : api_host,
    api_url: api_host + '/js2-json/v1',
    route_exclude: env.VITE_ROUTE_EXCLUDE.replace(/\s/g, '').split(','), //需要排除的路由
}