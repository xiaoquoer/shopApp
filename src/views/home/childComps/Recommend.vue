<template>
	<div class="recommend">
		<div v-for="item in recommends" class="recommend-item" >
			<a :href="item.link">
				<img :src="item.image" alt="">
			</a>
			<div>{{item.title}}</div>
		</div>
	</div>
</template>

<script>
	
	export default{
		name:"Recommend",
		props:{
			recommends : {
				type: Array,
				default(){
					return []
				}
			}
		}
		
	}
</script>

<style>
	.recommend{
		display: flex;
	  padding: 0.1rem 0 0.2rem 0;
		text-align: center;
		border-bottom: 0.05rem solid #eee;
		font-size: 0.12rem;
	}
	.recommend-item{
		flex: 1;
	}
	.recommend-item img{
		width: 70%;
		padding-bottom: 0.05rem;
	}
</style>
