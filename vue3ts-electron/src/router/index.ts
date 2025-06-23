import { createRouter, createWebHashHistory } from 'vue-router'
/*
	meta.keep_alive：需要缓存的页面
*/
export const routes = [{
		//404
		name: 'error',
		path: '/:catchAll(.*)',
		component: () => import('@/view/404.vue'),
		meta: {
			title: '404',
			keep_alive: true, //缓存
		},
	},
	{
		//首页
		name: 'home',
		path: '/',
		component: () => import('@/view/home/home.vue'),
		meta: {
			title: '首页',
		},
	},
	{
		//测试
		name: 'test',
		path: '/test',
		component: () => import('@/view/test/test.vue'),
		meta: {
			title: '测试',
			keep_alive: true,
		},
	},
]

export const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

//路由拦截
router.beforeEach((to, from, next) => {
	//路由跳转之前
	//document.title = to.meta.title + ' - JS2system'
	if (to.meta.must_login && !localStorage.getItem('user')) {
		//登录拦截
		const redirect = to.name == 'login' ? from.fullPath : to.fullPath
		next({
			path: '/login',
			query: {
				redirect,
			},
		})
	} else {
		next()
	}
})
router.afterEach(() => {
	//路由跳转之后
	window.scrollTo(0, 0) //跳转页面返回顶部
})



export default router