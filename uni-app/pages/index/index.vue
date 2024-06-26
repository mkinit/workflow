<template>
	<view class="v-index">

	</view>
</template>
<script>
	import {
		api200,
		api403,
		api404,
		api503,
		api504,
		apiUpload
	} from '@/request/api.js'
	export default {
		data() {
			return {}
		},
		onLoad() {
			//不同状态接口测试
			api200().then(res=>{
				console.log(res)
			})
			setTimeout(() => {
				api403()
			}, 2000)
			setTimeout(() => {
				api404().then(res=>{
					console.log(res)
				}).catch(err=>{
					console.log(err)
				})
			}, 4000)
			setTimeout(() => {
				api503()
			}, 6000)
			setTimeout(() => {
				api504()
			}, 8000)
		},
		methods: {

		}
	}
</script>

<style lang="less">
	.v-index{
		
	}
</style>
