/*
	自定义页面路由，方便登录拦截和其他跳转前的处理，配合自定义路由使用router.js
	@property title{String} 页面标题
	@property path{String} 页面路径
	@property must_login{Boolean} 是否需要登录
	@property must_phone{Boolean} 是否需要绑定手机
	@property tabbar{Boolean} 是否为tabbar页面
*/
export default {
	'index': {
		title: '首页',
		path: '/pages/index/index',
		must_login: false,
	},
	'login': {
		title: '登录',
		path: '/pages/login/login',
		must_login: false
	}
}