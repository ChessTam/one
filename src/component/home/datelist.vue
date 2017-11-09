<template>
	<main>
		<!--頂部-日期-->
		<router-link to="/home">
			<div class="top">
				<h2>2017/10/09</h2>
				<h6>地球 對流層 -275℃</h6>
			<i class="iconfont icon-search" @click="search"></i>
			</div>
		</router-link>
		<div class="current">
			<div class="month">
				<center><hr /></center>
				<center><div>10月</div></center>
			</div>
			<ul class="month-current clearfix">
				<li v-for="v in list">
					<div>
						<img :src="v.pic"/>
					</div>
					<p>{{v.date}}</p>
				</li>
			</ul>
		</div>
		
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
	i{
		color: #838383;
		font-size: 18px;
		position: absolute;
		right: 14px;
		top: 16px;
	}
	.current{
		margin: 0 3%;
	}
	.month{
		height: 34px;
		margin-top: 46px;
		overflow: hidden;
	}
	hr{
		border-width: 0.4px;
		color: #ededed;
		/*width: 94%;*/
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
	
	/*每月內容*/
	.clearfix:after{
		content: "";
		display: block;
		clear: both;
	}
	.clearfix{
		*zoom: 1;/*兼容IE*/
	}
	.month-current>li{
		width: 39%;
		height: 35vw;
		margin: 22px 5%;
		border: 1px solid #eaeaea;
		float: left;
	}
	.month-current>li>div{
		width: 100%;
		height: 65%;
		overflow: hidden;
	}
	.month-current>li>div>img{
		width: 100%;
	}
	.month-current>li>p{
		text-align: center;
		font-size: 13px;
		color: #aaa;
		height: 35%;
		line-height: 400%;
	}
</style>

<script type="text/javascript">
	export default{
		data(){
			return{
				list:""
			}
		},
		methods:{
			search(){
				
			}
		},
		mounted(){
			this.$http.get("datelistdata.json").then(function(res){
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