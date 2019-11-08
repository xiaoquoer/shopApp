<template>
	<div class="Cart">
		<nav-bar>
			<nav-bar-item>
				<div slot="center">购物车({{cartLength}})</div>
			</nav-bar-item>
		</nav-bar>
		<cart-list></cart-list>
	</div>
</template>

<script>
	import NavBar from '../../components/common/navbar/NavBar.vue'
	import NavBarItem from '../../components/common/navbar/NavBarItem.vue'
	import CartList from './childComps/CartList.vue'
	import { mapGetters } from 'vuex'
	export default{
		name:"Cart",
		components:{
			NavBar,
			NavBarItem,
			CartList
		},
		computed:{
			...mapGetters(['cartLength','cartList'])
		}
	}
</script>

<style scoped>
</style>
