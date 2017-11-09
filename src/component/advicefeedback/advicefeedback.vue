<template>
	<main>
		<div class="top">
			<i class="iconfont icon-back" @click="back"></i>
			<p class="user">用戶反饋</p>
			<router-link to="/historyfeedback">
				<p class="histroy">歷史反饋</p>
			</router-link>
		</div>
		<div></div>
		<router-link to="/feedback">
			<div class="feedback">
				<i class="iconfont icon-iconfont_bubble bubble"></i>
				<span>我要反饋</span>
				<i class="iconfont icon-htbarrowright02 forward-right"></i>
			</div>
		</router-link>
		<div class="problem">
			<p>常見問題</p>
		</div>
		<router-link to="/q1">
			<div class="q1">
				<span>Q1:小記如何收藏和編輯？</span>
				<i class="iconfont icon-htbarrowright02 forward-right"></i>
			</div>
		</router-link>
		<router-link to="/q2">
			<div class="q2">
				<span>Q2:聽書功能還有嗎？</span>
				<i class="iconfont icon-htbarrowright02 forward-right"></i>
			</div>
		</router-link>
		<router-link to="/q3">
			<div class="q3">
				<span>Q3:在哪裡查看往期文章？</span>
				<i class="iconfont icon-htbarrowright02 forward-right"></i>
			</div>
		</router-link>
		<router-link to="/submission">
			<div class="submission">
				<span>投稿方式</span>
				<i class="iconfont icon-htbarrowright02 forward-right"></i>
			</div>
		</router-link>
	</main>
</template>

<style scoped type="text/css">
	main{
		height: 100vh;
		background-color: #fafafa;
	}
	main>a{
		text-decoration: none;
		color: #051b28;
	}
	.top+div+a{
		color: #333;
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
	.histroy{
		height: 40px;
		line-height: 40px;
		position: absolute;
		right: 10px;
		top: 0;
		font-size: 15px;
		color: #d30d0d;
	}
	
	.top+div{
		height: 19px;
		border-top: 1px solid #ccc;
		box-sizing: border-box;
		margin-top: 40px;
	}
	/*我要反饋*/
	.feedback{
		height: 44px;
		background-color: #fff;
	}
	.bubble{
		font-size: 13px;
		margin-left: 11px;
		height: 44px;
		line-height: 44px;
	}
	.feedback>span{
		font-size: 12px;
		height: 44px;
		line-height: 44px;
		margin-left: 10px;
	}
	/*常見問題*/
	.problem{
		height: 37px;
	}
	.problem>p{
		font-size: 13px;
		height: 37px;
		line-height: 37px;
		margin-left: 12px;
		color: #666;
	}
	/*Q1-3*/
	.q1,
	.q2,
	.q3,
	.submission{
		height: 45px;
		border-top: 1px solid #ddd;
		box-sizing: border-box;
		background-color: #fff;
	}
	.q1>span,
	.q2>span,
	.q3>span,
	.submission>span{
		font-size: 12px;
		height: 44px;
		line-height: 44px;
		margin-left: 12px;
	}
	/*向右箭頭樣式*/
	.forward-right{
		float: right;
		margin-top: 15px;
		margin-right: 13px;
		font-size: 14px;
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