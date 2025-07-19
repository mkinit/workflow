<template setup>
	<div class="p-test">
		<div class="js2-padding-xxl">
			<div class="js2-padding-s">这是一个测试页面</div>
			<div class="js2-padding-s">
				<el-button @click="pythonFunc('test')">test</el-button>
				<el-button @click="pythonFunc('test2')">test2</el-button>
				<el-button @click="pythonFunc('test3')">test3</el-button>
				<el-button @click="reject">reject</el-button>
				<el-button @click="cmd">cmd</el-button>
			</div>
		</div>
	</div>
</template>
<script setup>
console.log(pywebview)
const pythonFunc = async (name) => {
	try {
		const result = await pywebview.api[name]()
		console.log(result)
	} catch (err) {
		console.log(err)
	}
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
.p-test {}
</style>