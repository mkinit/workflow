<template setup>
	<div class="p-home">
		<form action="">
			{{count}}
			<el-button type="primary" @click="count++">count is {{ count }}</el-button>
		</form>
		首页
		<div>
			<el-button type="primary" @click="getData">api测试</el-button>
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