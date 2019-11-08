<template>
	<div id="home">
		<!-- 标题 -->
		<nav-bar>
			<nav-bar-item>
				<div slot="left">
					<img class="lefts" src="../../assets/img/home/localtion.png">
					<span style="position: absolute;left: 0.3rem;top: 0rem;">上海</span>
					<img class="rights" src="../../assets/img/home/more.png">
				</div>
			</nav-bar-item>
		</nav-bar>
		<!-- 轮播图 -->
		<swiper>
			<swiper-item></swiper-item>
		</swiper>
		
		<!-- 推荐商品 -->
		<recommend :recommends="recommends"></recommend>
		
		<!-- 视图 -->
		<feature-view></feature-view>
		
		<!-- tab栏 -->
		<tab-contral class="tab-contral" @tabClick="tabClick" :titles="['新款','流行','精选']"></tab-contral>
		<!-- 商品页 -->
		<good-list :goods="goods[currentType].list"></good-list>
		
	</div>
</template>

<script>
	import NavBar from "../../components/common/navbar/NavBar.vue"
	import NavBarItem from "../../components/common/navbar/NavBarItem.vue"
	import Swiper from "../../components/common/swiper/Swiper.vue"
	import SwiperItem from "../../components/common/swiper/SwiperItem.vue"
	import {getHomeData} from "../../network/home.js"
	import {getHomeGoods} from "../../network/homes.js"
	import Recommend from "./childComps/Recommend.vue"
	import GoodList from "../../components/content/goods/GoodList.vue"
	import FeatureView from "./childComps/FeatureView.vue"
	import TabContral from "../../components/content/tabContral/TabContral.vue"
	export default {	
		data(){
			return{
					recommends : [],
					keywords : [],
					goods:{
						'pop':{page:0 , list:[]},
						'new':{page:0 , list:[]},
						'sell':{page:0 , list:[]}
					},
					currentType : 'pop'
			}
		},
		created() {
			this.getHomeData()
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
		},
		methods:{
			tabClick(index){
				switch(index){
					case 0:
					this.currentType = 'pop';
					break;
					case 1:
					this.currentType = 'new';
					break;
					case 2:
					this.currentType = 'sell';
					break;
				}
			},
			// 网络请求
			getHomeData(){
				getHomeData().then(res=>{
					this.recommends = res.data.data.recommend.list;
					console.log(res);
				})
			},
			getHomeGoods(type){
				const page = this.goods[type].page + 1;
				getHomeGoods(type,page).then(res=>{
					console.log(res.data.data.list);
					this.goods[type].list.push(...res.data.data.list)
					this.goods[type].page += 1
				})
			}
		},
		components: {
			NavBar,
			NavBarItem,
			Swiper,
			SwiperItem,
			Recommend,
			GoodList,
			FeatureView,
			TabContral
		},
	}
</script>

<style>
	#home {
		font-size: 0.16rem;
	}
	.lefts{
		position: absolute;
		left: 0.1rem;
		top: 0.1rem;
		width: 0.2rem;
	}
	.rights{
		position: absolute;
		left: 0.7rem;
		width: 0.1rem;
	}
	.tab-contral{
		position: sticky;
		top: 0rem;
	}
</style>
