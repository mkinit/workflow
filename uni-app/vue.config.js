// #ifdef APP-PLUS || H5
const api_url = 'http://rap2api.taobao.org/app/mock/269355/'
// #endif

const style_path = '@/assets/style/style.less'
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
					'hack': `true; @import '${style_path}'`
				}
			}
		}
	}
}
