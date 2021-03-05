<template>
  <section id="main" class="wrapper">
    <div class="inner">
      <div class="content" align="center">
        <header>
          <h3>회원 탈퇴</h3><br>
        </header>
        <img src="https://www.flaticon.com/svg/vstatic/svg/848/848043.svg?token=exp=1614578037~hmac=17a68dca205c3815d9a31ae252558163">
        <br>
        <form action="signOut" method="post">
          ${sessionScope.id}&nbsp;님
          <br><br>
          <input type="button" value="회원탈퇴" id="singOut" >

        </form>
      </div>
    </div>
  </section>
</template>


<script type="text/javascript">
export default {
  name: "SignOut"

}



</script>

<style scoped>
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
  margin-left: 10rem;
  margin-right: 10rem;

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
  width: 50rem;
  max-width: calc(100% - 6rem);

}
img{
  width: 5rem;
  height: 5rem;
}
</style>
