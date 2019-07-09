import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Project from '@/page/ProjectManage'
import Api from '@/page/ApiManage'
import Case from '@/page/CaseManage'
import CaseRun from '@/page/CaseRun'
import TestResult from '@/page/TestResult'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/project'
    },{
      path: '/project',
      component: Project
    },{
      path: '/api',
      component: Api
  	},{
      path: '/case',
      component: Case
  	},{
      path: '/caserun',
      component: CaseRun
  	},{
      path: '/testresult',
      component: TestResult
  	}

  ]
})
