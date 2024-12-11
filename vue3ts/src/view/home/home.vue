<template setup>
	<div class="p-home">

		<form action="">
			{{count}}
			<button type="button" @click="count++">count is {{ count }}</button>
		</form>
		首页
		<div>
			<button @click="getData">api测试</button>
		</div>
	</div>
</template>
<script setup>
	import { ref } from 'vue'
const count = ref(0)
import { apiTest } from '@/request/api.ts'
const getData = () => {
	apiTest().then(res => {
		console.log(res)
	}).catch(err => {
		console.log(err)
	})
}
</script>
<style lang="less">
.p-home {
	color: @primary;
}
</style>