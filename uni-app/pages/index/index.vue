<template>
	<view class="content">
	</view>
</template>
<script>
	import {
		api200,
		api403,
		api404,
		api503,
		api504,
	} from '@/request/api.js'
	export default {
		data() {
			return {}
		},
		onLoad() {
			api200()
			setTimeout(() => {
				api403()
			}, 3000)
			setTimeout(() => {
				api404()
			}, 6000)
			setTimeout(() => {
				api503()
			}, 9000)
			setTimeout(() => {
				api504()
			}, 12000)
		},
		methods: {

		}
	}
</script>

<style lang="less">
</style>
