<template>
	<div class="nav-bar-item">
		<div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
	export default{
		name:"NavBarItem"
	}
</script>

<style>
	.nav-bar-item{
		width: 100%;
		display: flex;
		text-align: center;
		font-size: 0.16rem;
		height: 0.44rem;
		line-height: 0.44rem;
		border-bottom: 2px solid #EEEEEE;
		box-shadow:0px 1px 0px rgba(100,100,100,.1) ;
	}
	.left{
		flex: 1;
	}
	.center{
		flex: 2;
	}
	.right{
		flex: 1;
	}
</style>
