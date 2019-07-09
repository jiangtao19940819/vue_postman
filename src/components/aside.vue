<template>
	<div id=“xz-aside” style="background-color:#409EFF">
		<el-menu text-color="#E8D098" active-text-color="#3E4348" background-color="#8EC0E4" default-active='/project' router>
			<el-menu-item index='/project'> 
				<i class="el-icon-location"></i>
				<span slot="title"><b>项目管理</b></span>
			</el-menu-item>
			<el-menu-item index='/api'>
				<i class="el-icon-menu"></i>
				<span slot="title"><b>接口管理</b></span>
			</el-menu-item>
			<el-menu-item index='/case'>
				<i class="el-icon-info
				"></i>
				<span slot="title"><b>用例管理</b></span>
			</el-menu-item>
			<el-menu-item index='/caserun'>
				<i class="el-icon-setting"></i>
				<span slot="title"><b>用例执行</b></span>
			</el-menu-item>
			<el-menu-item index='/testresult'>
				<i class="el-icon-time"></i>
				<span slot="title"><b>测试报告</b></span>
			</el-menu-item>
		</el-menu>
	</div>

</template>
<script>
	export default {
		data(){
			return {

			}
		}
	}
</script>
<style>
	.aside-positon {
		margin:0px;
		padding:0px;
		
		
	}
</style>