<template>
	<div id="shop-item">
		<div class="item-selector">
			<CheckButton></CheckButton>
		</div>
		<div class="item-img">
			<img :src="itemInfo.image" alt="">
		</div>
		<div class="item-info">
			<div class="item-title">{{itemInfo.title}}</div>
			<div class="item-desc">{{itemInfo.desc}}</div>
			<div class="info-bottom">
				<button @click="removeClick">-</button>
				<div class="item-price left">￥{{itemInfo.price}}</div>
				<div class="item-count right">*{{itemInfo.count}}</div>
				<button @click="addClick">+</button>
			</div>
		</div>
		
	</div>
</template>
 
<script>
	import CheckButton from '../../../components/content/checkButton/CheckButton.vue'
	export default{
		name:"CartListItem",
		props:{
			itemInfo: {
				type : Object,
				default(){
					return {}
				}
			}
		},
		components:{
			CheckButton
		},
		data(){
			return{
				allMoney : this.itemInfo.price
			}
		},
		methods:{
			removeClick(){
				this.itemInfo.count--;
				if(this.itemInfo.count<0){
					this.itemInfo.count = 0;
				}
			},
			addClick(){
				this.itemInfo.count++;
			}
		}
	}
</script>

<style>
	#shop-item{
		font-size: 0.14rem;
		display: flex;
		width: 100%;
		padding: 0.05rem;
		border-bottom: 1px solid #ccc;
	}
	.item-title , .item-desc{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.item-selector{
		width: 0.2rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.item-img{
		padding: 0.05rem;
	}
	.item-img img{
		width: 1.5rem;
		height: 2rem;
		display: block;
		
	}
	.item-info{
		color: #333;
		padding: 0.05rem 0.1rem;
		position: relative;
		overflow: hidden;
	}
	
	.item-info .item-desc{
		color: #666;
		margin-top: 0.15rem;
		font-size: 0.12rem;
	}
	.info-bottom{
		display: flex;
		margin-top: 0.1rem;
		position: absolute;
		bottom: 0.5rem;
		left: 0.1rem;
		right: 0.1rem;
		text-align: center;
		line-height: 0.1rem;
	}
	.info-bottom .item-price{
		color: orange;
		padding: 0.1rem 0.1rem;
	}
	.info-bottom .item-count{
		padding: 0.1rem 0rem;
	}
	.allMoney{
		display: flex;
		margin-top: 0.1rem;
		position: absolute;
		bottom: 0.3rem;
		left: 0.1rem;
		right: 0.1rem;
		text-align: center;
		line-height: 0.1rem;
	}

</style>
