<template>
  <div id="project">
     <el-row style="height:20px">
    </el-row>
    <el-row>
      <el-button type="success" round @click="createProject">新增服务</el-button>
    </el-row>
    <el-row style="height:40px">
    </el-row>
    <el-row>
      <div>
        <el-table :data="projectData">
          <el-table-column type="index"></el-table-column>
          <el-table-column prop="project_id" label="项目ID" v-if="false"></el-table-column>
          <el-table-column prop="project_name" label="项目名称"></el-table-column>
          <el-table-column prop="project_description" label="项目描述"></el-table-column>
          <el-table-column prop="create_time" label="创建时间"></el-table-column>
          <el-table-column width="200px">
            <template slot="header" slot-scope="scope"> 
              <el-input v-model="search" placeholder="请输入项目名称" clearable size="small"></el-input>
            </template>
            <template slot-scope="scope"> 
              <el-button type="success" plain @click="editProject(scope.row)">Edit</el-button>
              <el-button type="danger" plain @click="delProject(scope.row)">Delete</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-row>
    <el-dialog title="新增项目" :visible.sync="createProjectDialog">
      <el-form :model="project">
        <el-form-item label="项目名称" required>
          <el-input placeholder="请输入项目名称" v-model="project.project_name"></el-input>
        </el-form-item>
        <el-form-item label="项目描述">
         <el-input placeholder="请输入项目描述" v-model="project.project_description"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="createProjectDialog=false">取消</el-button>
        <el-button type="primary" @click="ensureCreateProject()">确定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="删除项目" :visible.sync="deleteProjectDialog" width="30%">
      <span>请确认是否删除: {{project.project_name}}</span>
      <div slot="footer" class="dialog-footer">
        <el-button @click="deleteProjectDialog=false">取消</el-button>
        <el-button type="primary" @click="ensureDeleteProject()">确定</el-button>
      </div>
    </el-dialog>
    
    <el-dialog title="编辑项目" :visible.sync="editProjectDialog">
      <el-form :model="project">
        <el-form-item label="项目名称" required>
          <el-input v-model="project.project_name"></el-input>
        </el-form-item>
        <el-form-item label="项目描述">
         <el-input v-model="project.project_description"></el-input>
        </el-form-item>
        <el-form-item label="创建时间">
         <el-input v-model="project.create_time" disabled></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editProjectDialog=false">取消</el-button>
        <el-button type="primary" @click="ensureEditProject()">确定</el-button>
      </div>
    </el-dialog>
  </div>
    
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      projectData : [],
      createProjectDialog:false,
      project: {
        projec_id:0,
        project_name:"",
        project_description:"",
        create_time:""
      },
      response: {
        code: 0,
        msg: "",
        data: []
      },
      search: "",
      deleteProjectDialog:false,
      editProjectDialog:false
    }
  },
  mounted:function(){
      this.getProject();
  },
  methods:{
    ensureEditProject(){
      this.$http.post("project/edit",this.project).then(res=>{
        this.response = res;
        this.getProject();
        this.editProjectDialog = false;
        this.afterOperate();
      })
    },
    editProject(row){
      this.project.project_id = row.project_id;
      this.project.project_name = row.project_name;
      this.project.project_description = row.project_description;
      this.project.create_time = row.create_time
      this.editProjectDialog = true
    },
    delProject(row){
      this.project.project_id = row.project_id;
      this.project.project_name = row.project_name;
      this.deleteProjectDialog = true;
    },
    ensureDeleteProject(){
      console.log(this.project.project_id)
      this.$http.post("project/delete",{"project_id":this.project.project_id}).then(res=>{
        this.response = res;
        this.getProject();
        this.deleteProjectDialog = false;
        this.afterOperate();
      })
    },
    getProject(){
      this.$http.get("project/query",this.project).then(res=>{
        this.response = res;
        this.projectData = res.data;
      })
    },
    createProject(){
      this.project.project_description = "";
      this.project.project_name = "";
      this.createProjectDialog = true;
    },
    ensureCreateProject(){
      this.$http.post("project/add",this.project).then(res=>{
        this.response = res;
        this.createProjectDialog = false;
        this.getProject()
        this.afterOperate();
      })
    },
    afterOperate(){
      if(this.response.code==200){
        this.$message.success(this.response.msg)
      }else{
        this.$message.error(this.response.msg)
      }
    }
  }
}
</script>