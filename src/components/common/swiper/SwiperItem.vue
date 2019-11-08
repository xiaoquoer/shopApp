<template>
	<div class="SwiperItem">
		<div class="SwiperPic">
			<slot name="SwiperPic">
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div v-for='(item,index) in banners' class="swiper-slide">
							<a :href="item.link">
								<img class="img" :src="item.image">
							</a>
						</div>
					</div>
					<!-- 如果需要分页器 -->
					<div class="swiper-pagination"></div>
				</div>
			</slot>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.css';
	import {getHomeData} from "../../../network/home.js"
	export default {
		name: "SwiperItem",
		mounted: function() {
			new Swiper('.swiper-container', {
				loop: true, // 循环模式选项
				// 如果需要分页器
				pagination: {
					item: '.swiper-pagination',
				},
			})
		},
		data() {
			return {
				banners: []
			}
		},
		created() {
			getHomeData().then(res=>{
				this.banners = res.data.data.banner.list;
				// console.log(this.banners);
			})
		},
	}
</script>

<style>
	.SwiperItem {
		height: 2rem;
		border-radius: 5%;
		/* background: red; */
	}
	.SwiperItem img{
		width: 100%;
		height: 2rem;
		border-radius: 5%;
	}
</style>
