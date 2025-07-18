<template setup>
	<div class="p-home">
		<form action="">
			{{count}}
			<el-button type="primary" @click="count++">count is {{ count }}</el-button>
		</form>
		首页
	</div>
</template>
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>
<style lang="less">
.p-home {
	color: @primary;
}
</style>