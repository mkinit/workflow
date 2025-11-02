<template setup>
	<div class="p-home">
		<div class="js2-padding-xxl">首页</div>
		<div>{{message}}</div>
		<el-button @click="test">测试python执行函数并传递数据</el-button>
	</div>
</template>
<script setup>
import {ref} from 'vue'
const message = ref('这是消息变量占位，如果python执行函数并传递数据，这里的字符串将会改变')
window.callback = (res) => {
	const response = JSON.parse(res)
	message.value = response.message
	console.log('window.callback', response)
}
const test = () => {
	pywebview.api.evaluate_js('callback')
}
</script>
<style lang="less">
.p-home {}
</style>