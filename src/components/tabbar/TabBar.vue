<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
	// import TabBarItem from './TabBarItem'
	export default{
		name: 'TabBar',
		components:{
			// TabBarItem
		}
	}
	
</script>

<style>


	#tab-bar {
		display: flex;
		height: 0.49rem;
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		background: #f2f2f2;
		box-shadow: 0 -1px 10px rgba(100, 100, 100, .3);
	}
	

</style>
