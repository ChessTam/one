<template>
	<main>
		<!--頂部-->
		<div class="top">
			<h2>ONE IS ALL</h2>
		</div>
		<i class="iconfont icon-search" @click="search"></i>
		
		<!--輪播圖-->
		<mt-swipe :auto="4000" :show-indicators="false">
			<mt-swipe-item><img src="../../assets/image/swipe/swipe-1.png"/></mt-swipe-item>
			<mt-swipe-item><img src="../../assets/image/swipe/swipe-2.png"/></mt-swipe-item>
			<mt-swipe-item><img src="../../assets/image/swipe/swipe-3.png"/></mt-swipe-item>
			<mt-swipe-item><img src="../../assets/image/swipe/swipe-4.png"/></mt-swipe-item>
			<mt-swipe-item><img src="../../assets/image/swipe/swipe-5.png"/></mt-swipe-item>
			<mt-swipe-item><img src="../../assets/image/swipe/swipe-6.png"/></mt-swipe-item>
			<mt-swipe-item><img src="../../assets/image/swipe/swipe-7.png"/></mt-swipe-item>
			<mt-swipe-item><img src="../../assets/image/swipe/swipe-8.png"/></mt-swipe-item>
			<mt-swipe-item><img src="../../assets/image/swipe/swipe-9.png"/></mt-swipe-item>
		</mt-swipe>
		
		<div class="nav">
			<h3>分類導航</h3>
			<ul class="nav-list clearfix">
				<li>
					<router-link to="/tulist">
						<img src="../../assets/image/nav/nav-tu.png">
					</router-link>
				</li>
				<li>
					<router-link to="/wenlist">
						<img src="../../assets/image/nav/nav-wen.png">
					</router-link>
				</li>
				<li>
					<router-link to="/yinyuelist">
						<img src="../../assets/image/nav/nav-yinyue.png">
					</router-link>
				</li>
				<li>
					<router-link to="/yingshilist">
						<img src="../../assets/image/nav/nav-yingshi.png">
					</router-link>
				</li>
			</ul>
		</div>
		
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
					<i class="iconfont icon-menu1 footer-active"></i>
					<span class="footer-active">ALL</span>
				</router-link>
			</li>
			<li>
				<router-link to="/me">
					<i class="iconfont icon-me"></i>
					<span>ME</span>
				</router-link>
			</li>
		</ul>
	</main>
</template>

<style scoped type="text/css">
	main{
		height: 100vh;
		background-color: #eee;
	}
	
	/*頂部-日期*/
	.top{
		width: 100%;
		height: 46px;
		background-color: #fff;
		overflow: hidden;
		position: fixed;
		left: 0;
		top: 0;
		border-bottom: 1px solid #e9e9e9;
	}
	h2{
		text-align: center;
		font-size: 19px;
		line-height: 46px;
		color: #333;
	}
	.top+i{
		color: #838383;
		font-size: 18px;
		position: absolute;
		right: 14px;
		top: 16px;
	}
	
	/*輪播圖*/
	.mint-swipe{
		width: 100vw;
		height: 60vw;
		top: 46px;
	}
	.mint-swipe-item>img{
		width: 100%;
	}
	
	/*導航板塊*/
	.nav{
		width: 100%;
		height: 40vw;
		margin-top: 53px;
		background-color: #fff;
	}
	.nav>h3{
		font-size: 12px;
		color: #333333;
		height: 9vw;
		line-height: 38px;
		margin-left: 21px;
	}
	.nav-list{
		width: 92%;
		height: 30vw;
		margin: 1vw 4vw 6vw;
	}
	.clearfix:after{
		content: "";
		display: block;
		clear: both;
	}
	.clearfix{
		*zoom: 1;/*兼容IE*/
	}
	.nav-list>li{
		width: 21vw;
		height: 21vw;
		margin: 1vw;
		float: left;
	}
	.nav-list img{
		width: 100%;
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
		/*data(){
			return{
				list:""
			}
		},*/
		methods:{
			search(){
				
			}
		},
		mounted(){
			/*this.$http.get("datelistdata.json").then(function(res){
				for(var i=0;i<res.body.data.length;i++){
					console.log(res.body.data[i]);
				}
				
				for(var i=0;i<res.body.data.length;i++){
					this.list=res.body.data;
				}
			})*/
		}
	}
</script>