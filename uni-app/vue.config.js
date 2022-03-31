const api_url = 'http://rap2api.taobao.org/app/mock/269355/'
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
