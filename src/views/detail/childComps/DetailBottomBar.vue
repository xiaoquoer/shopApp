<template>
	<div class="DetailBottomBar">
		<div class="bar-item">
			<div class="cart" @click="addToCart">加入购物车</div>
			<div class="buy">购买</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "DetailBottomBar",
		methods:{
			addToCart(){
				this.$emit('addCart');
			}
		}
	}
</script>

<style>
	.DetailBottomBar {
		font-size: 0.16rem;
		height: 0.49rem;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0.49rem;
		background: #EEEEEE;
	}

	.bar-item {
		height: 100%;
		display: flex;
		line-height: 0.49rem;
		text-align: center;
	}
	.cart{
		width: 1rem;
		height: 100%;
		background: lightgreen;
		margin-left: 2.3rem;
	}
	.buy{
		width: 0.5rem;
		height: 100%;
		background: orange;
	}
</style>
