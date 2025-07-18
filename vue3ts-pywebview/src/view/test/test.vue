<template setup>
	<div class="p-form">
		<div class="js2-padding-xxl">
			<div class="js2-padding-s">这是一个测试页面</div>
			<div class="js2-padding-s">
				<el-button @click="pythonFunc('test')">test</el-button>
				<el-button @click="pythonFunc('test2')">test2</el-button>
				<el-button @click="reject">reject</el-button>
				<el-button @click="cmd">cmd</el-button>
			</div>
		</div>
	</div>
</template>
<script setup>
const pythonFunc = async (name) => {
	const result = await pywebview.api[name]()
	console.log(result)
}

const reject = async () => {
	try {
		await pywebview.api.reject()
	} catch (err) {
		console.log(err)
	}
}

const cmd = async () => {
	try {
		const result = await pywebview.api.cmd()
		console.log(result)
	} catch (err) {
		console.log(err)
	}
}
</script>
<style lang="less">
.p-form {}
</style>