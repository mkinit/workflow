const styel_var = '@/assets/style/var.less'
module.exports = {
	devServer: {
		proxy: {
			'/js2-json/v1': {
				target: 'https://js2api.com',
				pathRewrite: {
					'^/js2-json/v1': '/js2-json/v1'
				}
			},
		},
	},

	css: {
		loaderOptions: {
			less: {
				globalVars: {
					//使用全局less变量，小程序使用这个全局配置后，所有打包出来的页面样式都会有全局的样式，所以只能用来定义变量
					'hack': `true; @import '${styel_var}'`
				}
			}
		}
	}
}