<template>
	<div id="login" class="c_login">
		<div id="login-container" class="c_login-container">
			<div id="title" class="c_title">
				<span><i>小猪接口平台</i></span>
			</div>
			<el-form :model="user" class="lgoin-form" ref="user" :rules="rules">
				<el-form-item prop="username">
					<el-input v-model="user.username"  placeholder="请输入用户名"></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input type="password" v-model="user.password"  placeholder="请输入登陆密码"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button class="c_buttom" type="success" @click="submit('user')">SIGN IN</el-button>
				</el-form-item>
			</el-form>
			<div style="text-align:center;color:red;">
				<span>{{res}}</span>
			</div>
			

		</div>
	</div>
</template>
<script>
export default {
	data(){
		const validPwd = (rule,value,callback) => {
			let len = value.length;
			if(len<6){
				return callback(new Error("密码长度必须大于6"));
			};
			callback();
		};
		return{
			user:{
				username:'',
				password:''
			},
			rules:{
				username:[{required:true,message:"请输入用户名",trigger:'blur'}],
				password:[{required:true,message:"请输入密码",trigger:'blur'},{validator:validPwd,trigger:'blur'}]
			},
			response: {
        		code: 0,
        		msg: "",
        		data: []
     		},
     		res:""
		}
	},
	methods:{
		submit(formName){
			this.$refs[formName].validate((valid)=>{
				if(!valid){
					return false;
				};
				this.$http.post("login",this.user).then(res => {
					this.response = res;
					if(this.response.code === 200){
						if(this.res!=''){
							this.res = '';
						}
						const wls = window.localStorage;
						wls.setItem('sessionId',this.response.data[0]['sessionId']);
						wls.setItem('username',this.response.data[0]['username']);
						this.$router.push("/main");
					}else{
					   this.res = this.response.msg;
					}
				});
			});
		}
	}
}
</script>
<style>
	.c_login {
		position: absolute;
		top:0px;
		bottom:0px;
		left:0px;
		right:0px;
		background-image:url(../../static/login.jpg);
		background-size:100%;
		padding-top: 10%;
	}
	.c_login-container {
		width: 30%;
		height: 50%;
		margin: auto;
		background-color: #fff;
	}
	.c_title {
		height: 60px;
		text-align: center;
		font-size: 26px;
		line-height: 60px;
	}
	.lgoin-form {
		margin: auto 30px
	}
	.c_buttom {
		width: 100%;
	}
</style>