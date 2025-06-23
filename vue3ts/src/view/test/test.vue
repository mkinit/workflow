<template setup>
	<div class="p-form">
		<form action="">
			{{count}}
			<button type="button" @click="count++">count is {{ count }}</button>
		</form>
	</div>
</template>
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>
<style lang="less">
.p-form {
	color: @primary;
}
</style>