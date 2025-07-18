<template>
	<div class="app-wrap">
		<div class="js2-padding-s">
			<el-button :type="router.currentRoute.value.name=='home'?'primary':''" @click="goto('home')">首页</el-button>
			<el-button :type="router.currentRoute.value.name=='test'?'primary':''" @click="goto('test')">测试</el-button>
		</div>
		<router-view v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<!-- 如果使用过渡效果的话，需要用include，路由的keep_alive属性忽略 -->
				<keep-alive :include="['test']">
					<component :is="Component"></component>
				</keep-alive>
			</transition>
		</router-view>
		
	</div>
</template>
<script setup>
import '@/assets/style/reset.css'
import '@/assets/style/public.css'
import '@/assets/style/nocss.css'
import '@/assets/style/app.less'
import router from '@/router'
const goto = name=>{
	router.replace({name})
}
</script>
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