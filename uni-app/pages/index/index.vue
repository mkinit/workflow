<template>
	<view class="content">
	</view>
</template>
<script>
	import {apiSetting} from '@/request/api.js'
	export default {
		data() {
			return {
			}
		},
		onLoad() {
			apiSetting().then(res=>{
				console.log(res)
			})
		},
		methods: {

		}
	}
</script>

<style lang="less">
</style>
