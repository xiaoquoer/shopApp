<template>
	<div class="tab-contral">
		<div v-for="(item,index) in titles" class="tab-contral-item" :class="{active:index===currentIndex}" @click="itemClick(index)">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:"TabContral",
		props:{
			titles:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return{
				currentIndex : 0
			}
		},
		methods:{
			itemClick(index){
				this.currentIndex = index;
				this.$emit('tabClick',index)
			}
		}
	}
</script>

<style>
	.tab-contral{
		display: flex;
		background: #fff;
		height: 0.44rem;
		line-height: 0.44rem;
		padding: 0 0 0.1 0;
	}
	.tab-contral-item{
		flex: 1;
		text-align: center;
	}
	.active{
		color: hotpink;
	}
	.active span{
		border-bottom: 1px solid hotpink;
		padding: 0.05rem;
	}
</style>
