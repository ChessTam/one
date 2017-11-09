<template>
	<main class="main">
		<router-link to="/site">
			<i class="iconfont icon-naviconsite site-icon"></i>
		</router-link>
		<router-link to="/login">
			<div class="click-login">
				<div>
					<i class="iconfont icon-AnonymousMaskFille"></i>
				</div>
				<p>點擊登錄</p>
			</div>
		</router-link>
		<!--footer-->
		<ul class="footer">
			<li>
				<router-link to="/home">
					<i class="iconfont icon-iconjiewuquan"></i>
					<span>ONE</span>
				</router-link>
			</li>
			<li>
				<router-link to="/all">
					<i class="iconfont icon-menu1"></i>
					<span>ALL</span>
				</router-link>
			</li>
			<li>
				<router-link to="/me">
					<i class="iconfont icon-me footer-active"></i>
					<span class="footer-active">ME</span>
				</router-link>
			</li>
		</ul>
	</main>
</template>

<style scoped type="text/css">
	main{
		width: 100vw;
		height: 100vh;
		background-image: url("../../assets/image/login-bg.jpg");
		background-size: cover;/*背景拉伸——cover->把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。
												  背景图像的某些部分也许无法显示在背景定位区域中。*/
	}
	main a{
		text-decoration: none;
		color: #fff;
	}
	
	/*左上角-設置圖標*/
	.site-icon{
		position: absolute;
		left:13px;
		top: 12px;
		font-size: 20px;
	}
	
	/*點擊登錄*/
	.click-login{
		width: 55px;
		height: 75px;
		position: absolute;
		left: 50%;
		top: 34%;
		transform: translateX(-50%);
	}
	.click-login>div{
		position: absolute;
		left: 0;
		top: 0;
		width: 55px;
		height: 55px;
		background-color: #ddd;
		border: 2px solid #fff;
		box-sizing: border-box;
		border-radius: 50%;
		opacity: 0.9;
	}
	.click-login>div>i{
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translateX(-50%) translateY(-46%);
		font-size: 43px;
		color: #fff;
	}
	.click-login>p{
		width: 55px;
		position: absolute;
		left: 0;
		bottom: 0;
		text-align: center;
		font-size: 13px;
		color: #fff;
	}
	
	/*footer*/
	.footer{
		width: 100%;
		height: 65px;
		position: fixed;
		left: 0;
		bottom: 0;
		background-color: #fff;
		border-top: 1px solid #e9e9e9;
	}
	.footer>li{
		float: left;
		width: 33.3%;
		text-align: center;
		padding-top: 12px;
		box-sizing: border-box;
	}
	.footer>li>a{
		text-decoration: none;
		color: #000;
	}
	.footer>li>a>i{
		font-size: 29px;
	}
	.footer>li>a>span{
		display: block;
		font-weight: bold;
		font-size: 10px;
	}
	
	.footer-active{
		color: #999;
	}
</style>

<script type="text/javascript">
	export default{
		methods:{
			
		}
	}
</script>

