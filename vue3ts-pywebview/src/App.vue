<script setup>
import '@/assets/style/main.less'
</script>
<template>
	<div class="app-wrap">
		<router-view v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<!-- 如果使用过渡效果的话，需要用include，路由的keep_alive属性忽略 -->
				<keep-alive :include="['test']">
					<component :is="Component"></component>
				</keep-alive>
			</transition>
		</router-view>
		<RouterLink to="/">首页</RouterLink>
		<RouterLink to="/test">测试</RouterLink>
	</div>
</template>
<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity .28s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>