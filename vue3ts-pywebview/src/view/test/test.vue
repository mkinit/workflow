<template setup>
	<div class="p-form">
		<form action="">
			{{count}}
			<button type="button" @click="count++">count is {{ count }}</button>
			<el-button type="primary" @click="test">点击调用python函数</el-button>
			<el-button type="primary" @click="reject">点击调用python函数reject</el-button>
		</form>
	</div>
</template>
<script setup>
import { ref } from 'vue'
const count = ref(0)

const test = async () => {
	const result = await pywebview.api.test()
	console.log(result)
}

const reject = async () => {
	try{
		const result = await pywebview.api.reject()
		console.log(result)
	}catch(err){
		console.log(err)
	}
}
</script>
<style lang="less">
.p-form {
	color: @primary;
}
</style>