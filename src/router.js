import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './views/Index'
import Login from './views/Login'
import SignUp from './views/SignUp'
import TeamFindingBD from "./views/TeamFindingBD";
import MateFindingBD from "./views/MateFindingBD";
import MyTeam from "./views/MyTeam";
import UserEdit from "./views/UserEdit";
import PwdCheck from "./views/PwdCheck";
import TeamFindingCreate from "./views/TeamFindingCreate";
import MateFindingCreate from "./views/MateFindingCreate";
import MateFindingDetail from "./views/MateFindingDetail";
import TeamFindingDetail from "./views/TeamFindingDetail";
import SignOut from "./views/SignOut";


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [

    {
      path: '/',
      component: Index
    },
    {
      path: '/users/login',
      component: Login
    },
    {
      path: '/users/register',
      component: SignUp
    },
    {
      path: '/teamfindingBD',
      component: TeamFindingBD
    },
    {
      path: '/matefindingBD',
      component: MateFindingBD
    },
    {
      path: '/myteam',
      component: MyTeam
    },
    {
      path: '/useredit',
      component: UserEdit
    },
    {
      path: '/pwdcheck',
      component: PwdCheck
    },
    {
      path: '/teamfindingcreate',
      component: TeamFindingCreate
    },
    {
      path: '/matefindingcreate',
      component: MateFindingCreate
    },
    {
      path: '/matefindingdetail',
      component: MateFindingDetail
    },
    {
      path: '/teamfindingdetail',
      component: TeamFindingDetail
    },
    {
      path: '/signout',
      component: SignOut
    }

  ]
})

export default router
