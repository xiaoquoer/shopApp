<template>
	<div class="check-button" @click="changeClick">
		<img src="../../../assets/img/cart/check_1.jpg" :class="{check : isChecked}" class="checks">
	</div>
</template>

<script>
	export default{
		name:"CheckButton",
		// props:{
		// 	isChecked:{
		// 		type : Boolean,
		// 		default : false
		// 	}
		// },
		data(){
			return{
				isChecked : false
			}
		},
		methods:{
			changeClick(){
				this.isChecked = !this.isChecked
				console.log(this.isChecked);
			}
		}
	}
</script>

<style>
	
	.check-button{
		width: 0.2rem;
		height: 0.2rem;
		border: 3px solid ghostwhite;
		border-radius: 50%;
	}
	.checks{
		width: 0.2rem;
		border-radius: 50%;
	}
	.check{
		display: none;
	}
	
</style>
