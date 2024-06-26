// #ifdef APP-PLUS || H5
const api_url = 'http://rap2api.taobao.org/app/mock/269355/'
// #endif

const styel_var = '@/assets/style/var.less'
module.exports = {
	devServer: {
		// #ifdef APP-PLUS || H5
		proxy: api_url,
		// #endif
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
