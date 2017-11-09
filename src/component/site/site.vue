<template>
	<main>
		<div class="top">
			<i class="iconfont icon-back" @click="back"></i>
			<p>設置</p>
		</div>
		<div class="set">
			<p>設置</p>
		</div>
		<div class="night" @click="night">
			<span>夜間模式</span>
			<input type="checkbox" name="" id="night" class="chk" value="" />
			<label for="night"></label>
		</div>
		<center><hr /></center>
		<div class="traffic-play" @click="trafficplay">
			<span>流量播放提醒</span>
			<input type="checkbox" name="" id="traffic-play" class="chk" value="" />
			<label for="traffic-play"></label>
		</div>
		<center><hr /></center>
		<div class="clear-cache" @click="clearcache">
			<span>清除緩存</span>
			<i class="iconfont icon-htbarrowright02 forward-right"></i>
		</div>
		<div class="feedback">
			<p>反饋</p>
		</div>
		<router-link to="advicefeedback">
			<div class="advice-feedback">
				<span>意見與反饋</span>
				<i class="iconfont icon-htbarrowright02 forward-right"></i>
			</div>
		</router-link>
		<center><hr /></center>
		<div class="fo-us" @click="fous">
			<span>關注我們</span>
			<i class="iconfont icon-htbarrowright02 forward-right"></i>
		</div>
		<center><hr /></center>
		<div class="score" @click="score">
			<span>給一個評分</span>
			<i class="iconfont icon-htbarrowright02 forward-right"></i>
		</div>
		<div class="about">
			<p>關於</p>
		</div>
		<router-link to="/agreement">
			<div class="user-agreement">
				<span>用戶協議</span>
				<i class="iconfont icon-htbarrowright02 forward-right"></i>
			</div>
		</router-link>
		<center><hr /></center>
		<div class="version">
			<span>版本號</span>
			<span class="version-no">4.3.4</span>
		</div>
		<div class="recommend-app">
			<p>推薦應用</p>
		</div>
		<div class="interface-news" @click="downloadinterfacenews">
			<div class="in-dec">
				<div class="complete-icon">
					<i class="iconfont icon-jiemianxinwen icon-interface-news"></i>
				</div>
				<p class="in-title">「界面新聞」-致獨立思考者</p>
				<p class="in-tip">人云亦云的人請勿下載本app</p>
			</div>
			<i class="iconfont icon-htbarrowright02 forward-right"></i>
		</div>
		<center><hr /></center>
	</main>
</template>

<style scoped type="text/css">
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
	
	main>a{
		text-decoration: none;
	}
	
	/*第一部分-設置*/
	.set{
		margin-top: 40px;
	}
	.set,
	.feedback,
	.about,
	.recommend-app{
		height: 32px;
		background-color: #f8f8f8;
		border-top: 1px solid #e8e8e8;
		box-sizing: border-box;
	}
	.set>p,
	.feedback>p,
	.about>p,
	.recommend-app>p{
		font-size: 10px;
		height: 32px;
		line-height: 32px;
		margin-left: 19px;
		color: #9c9c9c;
	}
	.recommend-app{
		height: 49px;
	}
	.recommend-app>p{
		line-height: 68px;
	}
	
	
		/*夜間模式*/
	.night,
	.traffic-play,
	.clear-cache,
	.advice-feedback,
	.fo-us,
	.score,
	.user-agreement,
	.version{
		height: 44px;
	}
	.interface-news{
		height: 53px;
	}
	.night>span,
	.traffic-play>span,
	.clear-cache>span,
	.advice-feedback>span,
	.fo-us>span,
	.score>span,
	.user-agreement>span,
	.version>span,
	.interface-news>span{
		font-size: 12px;
		height: 44px;
		line-height: 44px;
		margin-left: 19px;
		color: #333;
	}
	.in-dec{
		width: 206px;
		height: 53px;
		overflow: hidden;
	}
	.complete-icon{
		width: 35px;
		height: 35px;
		background-color: #f52b00;
		border-radius: 20%;
		margin-left: 15px;
		margin-top: 9px;
		float: left;
	}
	.icon-interface-news{
		color: #fff;
		font-size: 32px;
		margin-left: 2px;
	}
	.in-title{
		font-size: 12px;
		margin-left: 56px;
		margin-top: 10px;
		color: #333;
	}
	.in-tip{
		font-size: 9px;
		margin-left: 58px;
		margin-top: 5px;
		color: #adadad;
	}
	/*版本號樣式*/
	.version-no{
		float: right;
		margin-right: 13px;
		color: #adadad;
	}
	/*分割線樣式*/
	hr{
		margin: 0;
		border-width: 0.4px;
		border-color: #e8e8e8;
		width: 97%;
	}
	/*向右箭頭樣式*/
	.forward-right{
		float: right;
		margin-top: 15px;
		margin-right: 13px;
		font-size: 11px;
		color: #afafaf;
	}
	.interface-news>.forward-right{
		margin-top: -30px;
	}
	/*複選框自定義樣式-開始*/
	.chk { 
	    display: none; 
	} 
	label{
		float: right;
		margin-top: 15px;
		/*width: 1px;
		height: 1px;*/
	} 
	.chk + label { 
	    background-color: #FFF; 
	    border: 1px solid #CACACA; 
	    /*padding: 9px; */
	    border-radius: 5px; 
	    display: inline-block; 
	    position: relative; 
	    margin-right: 11px; 
	    box-sizing: border-box;
	    width: 20px;
	    height: 20px;
	    text-align: center;
	    line-height: 20px;
	} 
	.chk:checked + label { 
	    background-color: #fff; 
	    border: 1px solid #cacaca; 
	    color: #243441; 
	} 
	.chk:checked + label:after { 
	    content: '\2714'; //勾选符号 
	    position: absolute; 
	    top: 0px; 
	    left: 0px; 
	    color: #6cc0ea; 
	    width: 100%; 
	    text-align: center; 
	    font-size: 16px; 
	    padding: 1px 0 0 0; 
	    vertical-align: text-top; 
	} 
	/*複選框自定義樣式-結束*/
</style>

<script type="text/javascript">
	export default{
		methods:{
			back(){
				this.$router.go(-1);
			},
			night(){
				
			},
			trafficplay(){
				
			},
			clearcache(){
				
			},
			fous(){
				window.open("https://weibo.com/duchangtuanparty")
			},
			score(){
				window.open("http://a.sm.cn/details/info?ua=android&vid=21&pkg=one.hh.oneclient&ch=SM_6&uc_param_str=dn&from=wh10344")
			},
			downloadinterfacenews(){
				window.open("https://at.umeng.com/X9HfmC")
			}
		}
	}
</script>