<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			uni.updateWeCharApp({
				success: res => {
					console.log(res)
				},
				fail: err => {
					console.log(err)
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="less">
	/*每个页面公共css */
</style>
