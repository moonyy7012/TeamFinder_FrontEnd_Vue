<template>
  <div>



    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">구해줘 팀즈</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
<!--          <b-nav-item href="#" v-show="loginShow">마이페이지</b-nav-item>-->
          <b-nav-item-dropdown text="마이페이지" right v-show="loginShow">
            <b-dropdown-item href="/myteam">나의 팀 정보</b-dropdown-item>
            <b-dropdown-item href="/useredit">회원정보 수정</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="/matefindingBD">팀원 모집</b-nav-item>
          <b-nav-item href="/teamfindingBD">팀 찾기</b-nav-item>
          <b-nav-item href="/users/login" v-show="logoutShow">로그인</b-nav-item>
          <b-nav-item href="/users/register" v-show="logoutShow">회원가입</b-nav-item>
          <b-nav-item href="/" v-show="loginShow">로그아웃</b-nav-item>
<!--          <b-nav-item href="#" disabled>Disabled</b-nav-item>-->
        </b-navbar-nav>


      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default{
  data () {
    return{
      logoutShow: true,
      loginShow: false
    }
  }

}

</script>
