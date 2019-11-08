<template>
	<div class="SwiperItem">
		<div class="SwiperPic">
			<slot name="SwiperPic">
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div v-for='(item,index) in topImages' class="swiper-slide">
								<img class="img" :src="item">
						</div>
					</div>
					<!-- 如果需要分页器 -->
				</div>
			</slot>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.css';
	export default{
		name:"DetailSwiper",
		mounted: function() {
			new Swiper('.swiper-container', {
				loop: true, // 循环模式选项
				// 如果需要分页器
			})
		},
		props:{
			topImages:{
				type : Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style>
	.SwiperItem{
		height: 3rem;
	}
	.SwiperItem img{
		width: 100%;
		height: 3rem;
	}
</style>
