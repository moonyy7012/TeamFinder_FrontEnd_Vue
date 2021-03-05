<template>
  <section id="main" class="wrapper">
    <div class="inner">
      <div class="content">
        <header>
          <h5>계속하려면 먼저 본인임을 인증하세요.</h5>
        </header>
        <br><br>
        <form v-on:submit.prevent="checkPwd">
          비밀번호 입력 &nbsp;<input type="password" name="user_pwd">
          <br><br><br>
          <div id="btn">
            <button type="submit">다음</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login"
}
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
#btn{
  text-align: center;

}
input{
  width: 17rem;
}
</style>
