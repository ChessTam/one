<template>
	<main>
		<div class="top">
			<i class="iconfont icon-back" @click="back"></i>
			<p>登錄ONE</p>
		</div>
		<ul class="third-party-login">
			<li>
				<div>
					<i class="iconfont icon-wechat"></i>
					<p class="clearfix">微信</p>
				</div>
			</li>
			<li>
				<div>
					<i class="iconfont icon-sina"></i>
					<p class="clearfix">微博</p>
				</div>
			</li>
			<li>
				<div>
					<i class="iconfont icon-qq"></i>
					<p class="clearfix">QQ</p>
				</div>
			</li>
		</ul>
		<p>或者</p>
		<div class="telephone-number-login">
			<i class="iconfont icon-phone"></i>
			<p>使用手機號登錄</p>
		</div>
		<router-link to="/agreement">
			<pre>創建賬戶即代表您同意
使用條款和隱私政策</pre>
		</router-link>
	</main>
</template>

<style scoped type="text/css">
	main{
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background-image: url("../../assets/image/login-choice-bg.jpg");
		background-size: cover;/*背景拉伸——cover->把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。
													  背景图像的某些部分也许无法显示在背景定位区域中。*/
	}
	/*頂部*/
	.top{
		height: 40px;
		position: fixed;
		left: 0;
		top: 0;
		
	}
	.top>i{
		font-size: 16px;
		position: absolute;
		top: 13px;
		left: 13px;
		color: #d8d8d8;
	}
	.top>p{
		width: 100vw;
		height: 40px;
		line-height: 40px;
		text-align: center;
		font-size: 15px;
		color: #333;
	}
	
	/*第三方登錄選擇*/
	.third-party-login{
		margin-top: 40px;
		width: 100%;
		padding: 46px 46px 1px;
		box-sizing: border-box;
	}
	.third-party-login>li{
		overflow: hidden;
	}
	.third-party-login>li>div{
		width: 100%;
		height: 47px;
		background-color: #b6bac4;
		border-radius:5px 5px 5px 5px;
		margin: 6px 0;
	}
	.third-party-login>li>div>i{
		font-size: 25px;
		color: #FFFFFF;
		float: left;
		margin-left: 17px;
		line-height: 47px;
	}
	.third-party-login>li>div>p{
		width: 100%;
		margin-left: 50%;
		transform: translateX(-19px);
		font-size: 14px;
		line-height: 47px;
		color: #fff;
	}
	
	ul+p{
		width: 100%;
		line-height: 23px;
		font-size: 14px;
		color: #dddfe2;
		text-align: center;
	}
	
	/*手機號碼登錄*/
	.telephone-number-login{
		width: 142px;
		height: 20px;
		margin-left: 50%;
		transform: translateX(-50%);
	}
	.telephone-number-login>i{
		font-size: 20px;
		color: #fbfbfb;
		float: left;
	}
	.telephone-number-login>p{
		font-size: 15px;
		color: #d6d8dc;
		margin-left: 25px;
	}
	
	pre{
		font-size: 13px;
		color: #ccc;
		line-height: 27px;
		position: fixed;
		left: 50%;
		bottom: 19px;
		transform: translateX(-50%);
		text-align: center;
		text-decoration: underline;
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