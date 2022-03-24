const api_url = '跨域请求地址'
const style_path = '@/assets/style/style.less'
module.exports = {
	devServer: {
		proxy: api_url,
	},
	css: {
		loaderOptions: {
			less: {
				globalVars: {
					'hack': `true; @import '${style_path}'`
				}
			}
		}
	}
}
