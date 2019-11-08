<template>
	<div class="nav-bar">	
		<slot></slot>
	</div>
</template>

<script>
	export default{
		name:"NavBar"
	}
</script>

<style>
	.nav-bar{
		display: flex;
		height: 0.44rem;
		text-align: center;

	}
</style>
