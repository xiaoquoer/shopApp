<template>
	<div class="detail">
		<detail-nav-bar></detail-nav-bar>
		<detail-swiper :topImages="topImages"></detail-swiper>
		<detail-base-info :goods="goods"></detail-base-info>
		<detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
		<!-- <div><ul>
			<li v-for="item in $store.state.cartList">
				{{item}}
			</li>
		</ul></div> -->
	</div>
</template>

<script>
	import DetailNavBar from "./childComps/DetailNavBar.vue"
	import {getDetail,Goods} from "../../network/detail.js"
	import DetailSwiper from "./childComps/DetailSwiper.vue"
	import DetailBaseInfo from "./childComps/DetailBaseInfo.vue"
	import DetailBottomBar from "./childComps/DetailBottomBar.vue"
	export default{
		name:"Detail",
		data(){
			return {
				iid : null,
				topImages:[],
				goods : {}
			}
		},
		created() {
			this.iid = this.$route.params.iid;
			getDetail(this.iid).then(res=>{
				console.log(res.data.result);
				const data = res.data.result;
				this.topImages = data.itemInfo.topImages;
				// 获取商品信息
				this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
			})
		},
		methods:{
			addToCart(){
				console.log("123");
				// 获取购物车需要的信息
				const product = {}
				product.image = this.topImages[0];
				product.title = this.goods.title;
				product.desc = this.goods.desc;
				product.price = this.goods.realPrice;
				product.iid = this.iid;
				// 将商品添加到购物车
				this.$store.commit('addCart',product);
				console.log(product);
			}
		},
		components:{
			DetailNavBar,
			DetailSwiper,
			DetailBaseInfo,
			DetailBottomBar
		}
	}
</script>

<style>
</style>
