<template>
	<main>
		<div class="top">
			<i class="iconfont icon-back" @click="back"></i>
			<p @click="toggle">影視</p>
		</div>
		<transition name="fade" enter-active-class="animated slideInDown" leave-active-class="animated slideOutUp">
			<ul class="nav-dropdown" v-show="msg">
				<li>
					<router-link to="/tulist">圖文</router-link>
				</li>
				<li>
					<router-link to="/wenlist">閱讀</router-link>
				</li>
				<li>
					<router-link to="/yinyuelist">音樂</router-link>
				</li>
				<li>
					<router-link to="/yingshilist">影視</router-link>
				</li>
			</ul>
		</transition>
		<div class="current">
			<div class="month">
				<center><hr /></center>
				<center><div>10月</div></center>
			</div>
			<ul class="current-list">
				<li v-for="v in list">
					<div>
						<div class="cl-left">
							<img :src="v.yingshipic"/>
						</div>
						<div class="cl-right">
							<h3>{{v.yingshititle}}</h3>
							<p>{{v.yingshifilm}}</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
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
		border-bottom: 1px solid #e6e6e6;
		z-index: 3;
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
	
	/*下拉菜單*/
	.nav-dropdown{
		width: 100%;
		height: 184px;
		position: absolute;
		left: 0;
		top: 40px;
		background-color: #fff;
		z-index: 2;
	}
	.nav-dropdown>li{
		width: 100%;
		height: 45px;
		line-height: 45px;
		text-align: center;
		border-bottom: 1px solid #f3f3f3;
	}
	.nav-dropdown>li>a{
		text-decoration: none;
		font-size: 12px;
		color: #808080;
	}
	
	/*下拉菜單動畫開始*/
		.fade-enter-active{
			animation: show 1s;
		}
		.fade-leave-active{
			animation: leave 1s;
		}
		@keyframes show{
			from{
				width: 100%;
				height: 0;
			}
			to{
				height: 184px;
			}
		}
		@keyframes leave{
			from{
				height: 184px;
			}
			to{
				width: 100%;
				height: 0;
			}
		}		
	/*下拉菜單動畫結束*/
	
	.current{
		margin: 0 1%;
	}
	
	/*月分界線*/
	.month{
		height: 34px;
		margin-top: 46px;
		overflow: hidden;
	}
	hr{
		border-width: 0.4px;
		color: #ededed;
		margin:0;
		margin-top: 16px;
	}
	.month div{
		font-size: 12px;
		color: #a3a3a3;
		text-align: center;
		width: 10%;
		background-color: #fff;
		transform: translateY(-50%);
	}
	
	/*每月內容列表*/
	.current-list>li{
		width: 100%;
		height: 53px;
		overflow: hidden;
		border-top: 0.4px solid #eee;
	}
	.current-list>li:nth-of-type(1){
		border-top: 0px;
	}
	.current-list>li>div{
		width: 94%;
		height: 35px;
		margin: 9px 3%;
	}
	.cl-left{
		height: 35px;
		width: 35px;
		float: left;
		overflow: hidden;
	}
	.cl-left>img{
		height: 100%;
	}
	.cl-right{
		height: 35px;
		overflow: hidden;
	}
	.cl-right>h3{
		font-size: 12px;
		color: #333;
		margin: 3px 0 1px 14px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.cl-right>p{
		font-size: 8px;
		color: #a6a6a6;
		margin-left: 14px;
	}
	
</style>

<script type="text/javascript">
	export default{
		data(){
			return{
				msg:false,
				list:[]
			}
		},
		methods:{
			back(){
				this.$router.go(-1);
			},
			toggle(){
				this.msg=!this.msg;
			}
		},
		mounted(){
			this.$http.get("yingshilistdata.json").then(function(res){
				for(var i=0;i<res.body.data.length;i++){
					console.log(res.body.data[i]);
				}
				
				for(var i=0;i<res.body.data.length;i++){
					this.list=res.body.data;
				}
			})
		}
	}
</script>