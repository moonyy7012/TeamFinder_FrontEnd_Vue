<template>
  <section id="main" class="wrapper">
    <div class="inner">
      <div class="content">
        <header>
          <h2>로그인</h2>
        </header>
        <br><br>
        <form class="loginForm" action="login.do" method="post">
          아이디 &nbsp; &nbsp;<input type="text" name="user_id" ><br><br>
          비밀번호 <input type="password" name="user_pwd">
          <br><br><br>
          <input type="submit" id="sub" value="로그인">

        </form>
      </div>
    </div>
  </section>
</template>

<script>

</script>

<style>
.wrapper {
  padding: 8rem 0 6rem 0 ;
  position: relative;
  z-index: 1;
}
/*@media screen and (max-width: 1280px) {*/
/*  .wrapper {*/
/*    padding: 4rem 0 2rem 0 ; } }*/
/*@media screen and (max-width: 736px) {*/
/*  .wrapper {*/
/*    padding: 3rem 0 1rem 0 ; } }*/
/*@media screen and (max-width: 480px) {*/
/*  .wrapper {*/
/*    padding: 2rem 0 0.1rem 0 ; } }*/
#main .content {
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.025);
  margin-bottom: 2rem;
  margin-left: 20rem;
  margin-right: 20rem;

  padding: 3rem;
  background-color: lightgray;

}
/*@media screen and (max-width: 980px) {*/
/*  #main .content {*/
/*    padding: 2rem; } }*/
/*@media screen and (max-width: 480px) {*/
/*  #main .content {*/
/*    padding: 1.5rem; } }*/
.inner {
  margin: 0 auto;
  width: 75rem;
  max-width: calc(100% - 6rem);

}

.loginForm{
  /*width: 80rem;*/
  text-align: center;
}
h2{
  text-align: center;
}
</style>
