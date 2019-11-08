<template>
	<div class="tab-bar-item" @click="handClick">
		<!-- <div>首页</div>
		<img src="../../assets/img/foot-menu-a-2.png"> -->
		<div v-if="!isactive"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon-active"></slot></div>	
		<!-- <slot name="item-text"></slot> -->
	</div>
</template>

<script>
	export default{
		props:{
			path : String
		},
		data(){
			return{
				// isactive : true
			}
		},
		computed:{
			isactive(){
				// 判断当前处于活跃状态。
				return this.$route.path.indexOf(this.path) !== -1
			}
		},
		methods:{
			handClick(){
				this.$router.push(this.path)
			},
		}
	}
</script>

<style>
	.tab-bar-item {
		flex: 1;
		text-align: center;
		font-size: 0.16rem;
	}
	.tab-bar-item img{
			width: 0.4rem;
		}
</style>
