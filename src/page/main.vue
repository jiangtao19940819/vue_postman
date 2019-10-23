<template>
	<div id="main">
		<el-container class="container-position">
			<el-header height="50px" style="margin:0px;padding:0px;">
				<v-header></v-header>
			</el-header>
			<el-container>
				<el-aside width="150px" class="aside-positon">
					<v-aside></v-aside>
				</el-aside>
				<el-main class="main-position">
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	import header from "@/components/header.vue"
	import aside from "@/components/aside.vue"
	export default {
		name : "main-page",
		data(){
			return {

			}
		},
		components : {
			"v-header" : header,
			"v-aside" : aside
		}

	}
</script>

<style>
	.container-position {
		position : absolute;
		top : 0;
		left : 0;
		width: 100%;
		height : 100%;
	}
	.header-position {
		margin:0px;
		padding:0px;
	}
	.aside-positon {
		position:absolute;
		top:58px;
		bottom:0px;
		background-color:#8EC0E4;
	}
	.main-position {
		position:absolute;
		top:58px;
		left:150px;
		right:0px;
		bottom:0px;
	}

</style>