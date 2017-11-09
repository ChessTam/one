<template>
	<main>
		<!--頂部-日期-->
		<router-link to="/datelist">
			<div class="top">
				<h2>2017/10/09</h2>
				<h6>地球 對流層 -275℃</h6>
			</div>
		</router-link>
		
		<!--圖文-->
		<div class="part-tu">
			<img src="../../assets/image/tu/tu-2017.10.09.jpg"/>
			<p class="tu-pic-author">摄影 | Greg Raines</p>
			<pre class="tu-dec">记住快乐是短暂的，也是可以再来的，也要记住伤痛会卷土重来，但它终将过去。</pre>
			<p class="tu-dec-author">苏更生</p>
			<div class="icons">
				<div class="icons-left">
					<i class="iconfont icon-pen"></i>
					<span>小記</span>
				</div>
				<div class="icons-right">
					<i class="iconfont icon-diligently"></i>
					<i class="iconfont icon-iconfont40"></i>
					<i class="iconfont icon-share"></i>
				</div>
			</div>
		</div>
		
		<!--閱讀-->
		<div class="part part-wen">
			<p class="part-title">-ONE STORY-</p>
			<h3 class="part-article-title">没有赏味期限，只有来日方长</h3>
			<p class="part-article-author">文／周源远</p>
			<img class="part-img" src="../../assets/image/wen/wen-2017.10.09.jpg"/>
			<pre class="part-brief">爱一个人的时候，才会学会理解和包容。愿意为对方削去身上的棱角，然后打磨成圆。</pre>
			<div class="part-icons">
				<div class="part-icons-left">
					<span>今天</span>
				</div>
				<div class="part-icons-right">
					<i class="iconfont icon-diligently"></i>
					<i class="iconfont icon-share"></i>
				</div>
			</div>
		</div>
		
		<!--音樂-->
		<div class="part part-yinyue">
			<p class="part-title">-音樂-</p>
			<h3 class="part-article-title">这个世界未必所有事都如你所愿，但总有它的意思</h3>
			<p class="part-article-author">文／馆长Jeekit</p>
			<div class="part-music">
				<i class="iconfont icon-xiamimusic iconxiami"></i>
				<div class="part-music-play">
					<img class="part-music-img" src="../../assets/image/yinyue/yinyue-2017.10.09.jpg"/>
					<i class="iconfont icon-play part-music-play-icon"></i>
				</div>
			</div>
			<p class="part-music-song">替你高兴 · 谢安琪 | Slowness</p>
			<pre class="part-brief">上路去，别太挂念这里。</pre>
			<div class="part-icons">
				<div class="part-icons-left">
					<span>今天</span>
				</div>
				<div class="part-icons-right">
					<i class="iconfont icon-diligently"></i>
					<i class="iconfont icon-share"></i>
				</div>
			</div>
		</div>
		
		<!--影視-->
		<div class="part part-yingshi">
			<p class="part-title">-影視-</p>
			<h3 class="part-article-title">豆瓣9.9，再也找不到比它评价更牛的剧了</h3>
			<p class="part-article-author">文／鱼叔</p>
			<img class="part-img" src="../../assets/image/yingshi/yingshi-2017.10.09.jpg"/>
			<pre class="part-brief">到底是谁没打满分!？这剧都拿不到满分，观众也太严格了吧？</pre>
			<p class="part-film">——关于《瑞克和莫蒂 第三季》</p>
			<div class="part-icons">
				<div class="part-icons-left">
					<span>今天</span>
				</div>
				<div class="part-icons-right">
					<i class="iconfont icon-diligently"></i>
					<i class="iconfont icon-share"></i>
				</div>
			</div>
		</div>
		
		<!--footer-->
		<ul class="footer">
			<li>
				<router-link to="/home">
					<i class="iconfont icon-iconjiewuquan footer-active"></i>
					<span class="footer-active">ONE</span>
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
					<i class="iconfont icon-me"></i>
					<span>ME</span>
				</router-link>
			</li>
		</ul>
	</main>
</template>

<style scoped type="text/css">
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
		z-index: 3;
	}
	h2{
		text-align: center;
		font-size: 19px;
		margin-top: 2px;
		color: #333;
	}
	h6{
		text-align: center;
		font-size: 10px;
		margin-top: 3px;
		color: #333;
	}
	
	/*圖文*/
	.part-tu{
		width: 100%;
		margin-top: 46px;
		background-color: #fff;
	}
	.part-tu>img{
		width: 100%;
		
	}
	.tu-pic-author{
		width: 100%;
		height: 37px;
		line-height: 37px;
		text-align: center;
		color: #7f7f7f;
		font-size: 10px;
	}
	.tu-dec{
		font-size: 12px;
		color: #333333;
		line-height: 25px;
		margin: 10px 35px;
		white-space:pre-wrap;
	}
	.tu-dec-author{
		width: 100%;
		line-height: 50px;
		font-size: 10px;
		color: #818181;
		text-align: center;
	}
	/*圖標字體*/
	.icons{
		width: 100%;
		height: 39px;
		margin-top: 12px;
	}
	/*左邊*/
	.icons-left{
		float: left;
		margin-left: 15px;
	}
	.icons-left>i{
		font-size: 18px;
		color: #cdcdcd;
	}
	.icons-left>span{
		font-size: 10px;
		color: #808080;
		line-height: 39px;
	}
	/*右邊*/
	.icons-right{
		line-height: 39px;
		float: right;
		margin-right: 21px;
	}
	.icons-right>i{
		font-size: 15px;
		color: #cdcdcd;
	}
	.icons-right>i:nth-of-type(1){
		margin-right:36px ;
	}
	.icons-right>i:nth-of-type(2){
		margin-right:37px ;
	}
	
	/*閱讀*/
	.part{
		border-top: 5px solid #eee;
		width: 100%;
		background-color: #fff;
	}
	.part-title{
		width: 100%;
		font-size: 8px;
		line-height: 36px;
		text-align: center;
		color: #7e7e7e;
	}
	.part-article-title{
		font-size: 16px;
		color: #333333;
		margin: 6px 0 16px 19px;
	}
	.part-article-author{
		font-size: 12px;
		margin-left: 19px;
		color: #7e7e7e;
	}
	.part-img{
		width: 100%;
		padding: 12px 19px 7px;
		box-sizing: border-box;
	}
	.part-brief{
		font-size: 11px;
		color: #818181;
		line-height: 26px;
		margin: 7px 12px 0;
		white-space:pre-wrap;
	}
	/*圖標字體行*/
	.part-icons{
		width: 100%;
		height: 36px;
		margin-top: 28px;
	}
	.part-icons-left{
		float: left;
		margin-left: 15px;
	}
	.part-icons-left>span{
		font-size: 10px;
		color: #a6a6a6;
		line-height: 36px;
	}
	.part-icons-right{
		line-height: 36px;
		float: right;
		margin-right: 21px;
	}
	.part-icons-right>i{
		font-size: 15px;
		color: #cdcdcd;
	}
	.part-icons-right>i:nth-of-type(1){
		margin-right:36px ;
	}
	
	/*音樂*/
	.part-music{
		overflow: hidden;
	}
	.iconxiami{
		float: left;
		color: #fb5300;
		font-size: 24px;
		margin: 161px 0 7px 19px;
	}
	.part-music-play{
		width: 194px;
		height: 194px;
		border-radius: 50%;
		overflow: hidden;
		margin: 0 25%;
	}
	.part-music-img{
		height: 100%;
	}
	.part-music-play-icon{
		font-size: 40px;
		color: #000;
		opacity: 0.7;
		position: relative;
		left: 40%;
		bottom: 65%;
	}
	.part-music-song{
		font-size: 9px;
		color: #a4a4a4;
		margin: 14px 0 7px 19px;
	}
	
	.part-film{
		color: #7d7d7d;
		font-size: 11px;
		float: right;
		margin-right: 24px;
	}
	
	/*上移底導航欄*/
	.part-yingshi{
		margin-bottom: 65px;
	}
	
	.part-wen,
	.part-yinyue,
	.part-yingshi{
		margin-top: 5px;
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

<!--<script type="text/javascript">
	export default{
		data(){
			return{
				list:[],
				i:""
			}
		},
		mounted(){
			this.$http.get("onedaylistdata.json").then(function(res){
//				for(var i=0;i<res.body.data.length;i++){
					console.log(res.body.data[0]);
//				}
				
//				for(var i=0;i<res.body.data.length;i++){
					this.list=res.body.data[0];
//				}
			})
		}
	}
</script>-->