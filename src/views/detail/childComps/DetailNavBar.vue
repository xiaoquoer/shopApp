<template>
	<nav-bar>
		<nav-bar-item>
			<div slot="left" @click="backClick"><</div>
			<div slot="center">详情页</div>
		</nav-bar-item>
	</nav-bar>
</template>

<script>
	import NavBar from "../../../components/common/navbar/NavBar.vue"
	import NavBarItem from "../../../components/common/navbar/NavBarItem.vue"
	export default{
		name:"DetailNavBar",
		components:{
			NavBar,
			NavBarItem
		},
		methods:{
			backClick(){
				this.$router.back();
			}
		}
	}
</script>

<style>
</style>
