<template>
	<main>
		<div class="top">
			<i class="iconfont icon-back" @click="back"></i>
			<p class="user">用戶反饋</p>
			<p class="histroy">歷史反饋</p>
		</div>
		
	</main>
</template>

<style scoped type="text/css">
	main>a{
		text-decoration: none;
	}
	/*頂部*/
	.top{
		height: 40px;
		position: fixed;
		left: 0;
		top: 0;
		background-color: #fff;
	}
	.top>i{
		font-size: 16px;
		position: absolute;
		top: 13px;
		left: 13px;
		color: #fefefe;
		text-shadow: 1px 1px 1px #c7c7c7; 
	}
	.top>.user{
		width: 100vw;
		height: 40px;
		line-height: 40px;
		text-align: center;
		font-size: 15px;
		color: #d30d0d;
	}
	.top>.histroy{
		height: 40px;
		line-height: 40px;
		position: absolute;
		right: 10px;
		top: 0;
		font-size: 15px;
		color: #d30d0d;
	}
</style>

<script type="text/javascript">
	export default{
		methods:{
			back(){
				this.$router.go(-1);
			}
		}
	}
</script>