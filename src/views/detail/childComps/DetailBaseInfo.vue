<template>
	<div v-if="Object.keys(goods).length !== 0" class="info">
		<div class="info-title">{{goods.title}}</div>
		<div class="info-price">
			<span class="n-price">{{goods.newPrice}}</span>
			<span class="o-price">{{goods.oldPrice}}</span>
			<span v-if="goods.discount" class="discount">{{goods.discount}}</span>
		</div>
		<div class="info-other">
			<span>{{goods.columns[0]}}</span>
			<span>{{goods.columns[1]}}</span>
			<span>{{goods.services[goods.services.length-1].name}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:"DetailBaseInfo",
		props:{
			goods:{
				type:Object,
				default(){
					return {}
				}
			}
		}
	}
</script>

<style>
	.info{
		font-size: 0.16rem;
	}
</style>
