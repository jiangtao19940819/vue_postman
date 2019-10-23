<template>
	<div id="xz-header">
		<div>
			<img src="../../static/xzlog.png" style="float:left" height="50px"/>
		</div>
		<div style="text-align:center;line-height:50px;background-color:#D4DFE6;">
			<span style="font-size:40px;font-style:oblique;color:#E8D098;"><b>xiaozhu api autotest platform</b></span>
			<div style="float:right;width:100px;height:55px;border:1px solid black">
				<span style="font-size:20px;color:black;"><i class="el-icon-service"></i><b>{{username}}</b></span>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "xz-header",
		
		data() {
			let username = window.localStorage.username;
			return {
				username:username
			}
		}
	}
</script>
<style>
	.header-position {
		margin:0px;
		padding:0px;
	}

</style>