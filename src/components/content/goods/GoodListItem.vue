<template>
	<div class="GoodListItem" @click="itemClick">
		<img :src="goodsItem.show.img">
		<div>
			<p>{{goodsItem.title}}</p>
			<span class="price">{{goodsItem.price}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:"GoodListItem",
		props:{
			goodsItem: {
				type:Object,
				default(){
					return {}
				}
			}
		},
		methods:{
			itemClick(){
				this.$router.push('./detail/'+this.goodsItem.iid);
			}
		}
	}
</script>

<style>
	.GoodListItem{
		width: 45%;
		display: inline-block;
		padding: 2%;
	}
	.GoodListItem img{
		width: 100%;
	}
	.GoodListItem p{
		font-size: 0.12rem;
	}
</style>
