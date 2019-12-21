<template>
	<div id="api"class="c_header">
		<el-row>
			<el-col :span=11>App登陆账号：{{account.appUsername}}</el-col>
			<el-col :span=11>钉耙登陆账号：{{account.dingpaproUsername}}</el-col>
			<el-col :span=2><el-button @click="accountDialog=true">编辑登陆账号</el-button></el-col>
		</el-row>
		<el-row><div class="grid-content"></div></el-row>
		<el-row>
			<el-col :span=3>
				<div class="grid-content bg">
					<el-select v-model="request_method">
						<el-option v-for="item in methods" :key="item.value" :value="item.value" :label="item.label"></el-option>
					</el-select>
				</div>
			</el-col>
			<el-col :span=15>
				<div class="grid-content bg">
					<el-input placeholder="输入请求URL" v-model="request_all_url" clearable @clear="clear()"></el-input>
				</div>
			</el-col>
			<el-col :span=1>
				<div class="grid-content"></div>
			</el-col>
			<el-col :span=2>
				<div class="grid-content">
					<el-button type="success" round @click="send()">Send</el-button>
				</div>
			</el-col>
			<el-col :span=1>
				<div class="grid-content"></div>
			</el-col>
			<el-col :span=2>
				<div class="grid-content">
					<el-button type="primary" round>Save</el-button>
				</div>
			</el-col>
		</el-row>
		<el-row class="bg">
			<el-col :span=24>
				<el-tabs v-model="activeName">
					<el-tab-pane label="params" name="params">
						<el-row>
							<el-col :span=8><div class="grid-content bg center">KEY</div></el-col>
							<el-col :span=8><div class="grid-content bg center">VALUE</div></el-col>
							<el-col :span=4>
								<el-button @click="addParam()" type="primary">增加参数</el-button>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span=8>
								<el-input v-for="(item,index) in param_data" v-model="item.key" :key="index"></el-input>
							</el-col>
							<el-col :span=8>
								<el-input v-for="(item,index) in param_data" v-model="item.value" :key="index"></el-input>
							</el-col>
							<el-col :span=2>
								<el-button v-for="(item,index) in param_data" :key="index" type="danger" @click="delParam(index)" style="margin-left:0px">delete</el-button>
							</el-col>
						</el-row>
					</el-tab-pane>
					<el-tab-pane label="body(form-data)" name="body-form">
						<el-row>
							<el-col :span=8><div class="grid-content bg center">KEY</div></el-col>
							<el-col :span=8><div class="grid-content bg center">VALUE</div></el-col>
							<el-col :span=4>
								<el-button @click="addForm()" type="primary">增加参数</el-button>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span=8>
								<el-input v-for="(item,index) in form_data" v-model="item.key" :key="index"></el-input>
							</el-col>
							<el-col :span=8>
								<el-input v-for="(item,index) in form_data" v-model="item.value" :key="index"></el-input>
							</el-col>
							<el-col :span=2>
								<el-button v-for="(item,index) in form_data" :key="index" type="danger" @click="delForm(index)" style="margin-left:0px">delete</el-button>
							</el-col>
						</el-row>
					</el-tab-pane>
					<el-tab-pane label="body(form-json)" name="body-json">
						<el-row>
							<el-col :span=18>
								<el-input type="textarea" placeholder="请输入请求内容" :autosize="{ minRows: 8, maxRows: 8}" v-model="json_data"></el-input>
							</el-col>
						</el-row>
					</el-tab-pane>
				</el-tabs>
			</el-col>
		</el-row>
		<el-row>
			<div class="grid-content"></div>
		</el-row>
		<el-row>
			<el-col :span=18>
				<textarea cols="150" rows="25" disabled>{{resp}}</textarea>
				
			</el-col>
		</el-row>
		<el-dialog title="编辑登陆账户" :visible.sync="accountDialog">
			<el-form :model="account" ref="account" :rules="rules">
				<el-form-item label="App登陆账号" prop="appUsername">
					<el-input v-model="account.appUsername"></el-input>
				</el-form-item>
				<el-form-item label="App登陆密码" prop="appPassword">
					<el-input v-model="account.appPassword"></el-input>
				</el-form-item>
				<el-form-item label="钉耙登陆账号" prop="dingpaproUsername">
					<el-input v-model="account.dingpaproUsername"></el-input>
				</el-form-item>
				<el-form-item label="钉耙登陆密码" prop="dingpaproPassword">
					<el-input v-model="account.dingpaproPassword"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="accountDialog=false">确定</el-button>
				<el-button @click="accountDialog=false">取消</el-button>
			</div>
		</el-dialog>
	</div>
</template>
<script>
	export default {
		name : "apiManage",
		data() {
			return {
				request_method:"GET",
				methods:[
					{value:"GET",label:"GET"},
					{value:"POST",label:"POST"},
					{value:"DELETE",label:"DELETE"},
					{value:"PUT",label:"PUT"}
				],
				//request_url:"",
				activeName:"params",
				param_data:[
					{key:null,value:null}
				],
				form_data:[
					{key:null,value:null}
				],
				json_data:"",
				accountDialog:false,
				account:{
					appUsername:13641046298,
					appPassword:"19940819b",
					dingpaproUsername:"jiangtao",
					dingpaproPassword:"jiangtao"
				},
				rules:{
					appUsername:[{required:true,message:"请输入APP登陆账号",trigger:'blur'}],
					appPassword:[{required:true,message:"请输入APP登陆密码",trigger:"blur"}],
					dingpaproUsername:[{required:true,message:"请输入钉耙登陆账号",trigger:"blur"}],
					dingpaproPassword:[{required:true,message:"请输入钉耙登陆密码",trigger:"blur"}]
				},
				response: {
			        code: 0,
			        msg: "",
			        data: []
      			},
      			request_url:"",
      			resp:""
			}
		},
		computed:{
			request_all_url: {
				set: function(value){
					console.log(value);
					this.request_url = value;
					if(value.indexOf("?") > 0){
						let array1 = value.split("?");
						let array2 = array1[1].split("&");
						let array3 = [];
						array2.forEach((x)=>{
							let map1 = {};
							let array4 = x.split("=");
							map1["key"] = array4[0];
							map1["value"] = array4[1];
							array3.push(map1);
						});
					this.param_data = array3;
					this.request_url = array1[0];
					};
				},
				get: function(){
					let str = "";
					for(let index in this.param_data){
						if(this.param_data[index]["key"] == null){
							continue;
						};
						
						str += this.param_data[index]["key"]+"="+this.param_data[index]["value"]+"&";
					};
					str = str.slice(0,-1);
					//return this.request_url;
					if(str!=""){
						return this.request_url + "?" + str;
					}else{
						return this.request_url;
					};
				}
				
			}
		},
		methods:{
			clear(){
				this.request_url = "";
				this.param_data = [{key:null,value:null}];
			},
			addParam(){
				this.param_data.push({key:null,value:null});
			},
			delParam(id){
				this.param_data.splice(id,1);
			},
			addForm(){
				this.form_data.push({key:null,value:null});
			},
			delForm(id){
				this.form_data.splice(id,1);
			},
			send(){
				this.resp = "等待服务器返回，请稍后";
				this.sendRequest();
			},
			sendRequest(){
				this.$http.post("project/reqapi",{"request_method":this.request_method,"request_url":this.request_url,"activeName":this.activeName,"param_data":this.param_data,"account":this.account,"form_data":this.form_data,"json_data":this.json_data}).then(res=>{
						this.response = res;
						if(this.response.code != 200){
							this.resp = "服务器异常，请联系管理员解决, "+this.response.msg
						}else{
							this.resp= this.response.data[0];
						}
						
					}

				)
			}
		} 
	}
</script>
<style>
	.bd {
		border:1px solid red;
	}
	.c_header {
		width: 100%;
		height: 10%;
	}
	.grid-content {
		border-radius: 4px;
    	min-height: 40px;
    	
	}
	.bg {
		background-color: #F4F4F4;
		border:#666666 solid 1px;
	}

	.center {
		text-align:center;
		line-height:40px;
	}

	.bu_center {
		margin-left: 0px;
		
	}
</style>