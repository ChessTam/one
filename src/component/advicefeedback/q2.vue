<template>
	<main>
		<div class="top">
			<i class="iconfont icon-back" @click="back"></i>
			<p class="user">常見問題</p>
			<router-link to="/historyfeedback">
				<p class="histroy">歷史反饋</p>
			</router-link>
		</div>
		<div></div>
		<div class="qna">
			<p class="question">Q2:聽書功能還有嗎？</p>
			<hr />
			<pre>A:每週一至週五首頁ONE STORY依舊有曉橙的朗讀，點擊文章標題下方的「有聲閱讀」即可收聽。
 （4.3以上版）</pre>
		</div>
 		<router-link to="/feedback">
 			<p class="feedback-btn">我要反饋</p>	
 		</router-link>
	</main>
</template>

<style scoped type="text/css">
	main{
		background-color: #fafafa;
		height: 100vh;
	}
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
		height: 16px;
		border-top: 1px solid #ccc;
		box-sizing: border-box;
		margin-top: 40px;
	}
	
	/*Q&A*/
	.qna{
		height: 160px;
		background-color: #fff;
	}
	.question{
		height: 44px;
		line-height: 44px;
		font-size: 15px;
		margin-left: 12px;
	}
	/*分割線樣式*/
	hr{
		margin: 0;
		border-width: 0.4px;
		border-color: #e8e8e8;
		width: 97%;
		float: right;
	}
	
	pre{
		font-size: 12px;
		margin: 12px;
		white-space:pre-wrap;
	}
	
	.feedback-btn{
		height: 48px;
		width: 100%;
		line-height: 48px;
		background-color: #0d0e0e;
		font-size: 15px;
		color: #FFFFFF;
		text-align: center;
		position: fixed;
		bottom: 0;
		left: 0;
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