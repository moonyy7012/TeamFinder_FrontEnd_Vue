<template>
  <section id="main" class="wrapper">
    <h2>회원정보수정</h2><br>
    <div class="inner">
      <div class="content">
        <header>
          <h3>홍길동 님!</h3>
        </header>
        <br><br>
        <form v-on:submit.prevent="editPwd">
<!--          <h5>비밀번호</h5><br>-->
          <div>
          새 비밀번호 : <br><input type="password" name="user_pwd"><br>
          새 비밀번호 확인 : <br><input type="password" name="conf_pwd"><br><br>
          </div>
          <div>
            <button type="submit">수정</button>
          </div>
          <br><br>
        </form>
        <form v-on:submit.prevent="editEmail">
          <div>
          이메일 : <br><input type="email" name="user_email"><br><br>
          </div>
          <div>
            <button type="submit">수정</button>
          </div>
          <br><br>
        </form>
        <form v-on:submit.prevent="editRegion">
          <div>
          지역 : <br><select id="region" name="region" size="8"><br>
            <option value="서울">서울</option>
            <option value="부산">부산</option>
            <option value="대구">대구</option>
            <option value="대전">대전</option>
            <option value="광주">광주</option>
            <option value="울산">울산</option>
            <option value="제주">제주</option>
            <option value="충청">충청도</option>
            <option value="경상">경상도</option>
            <option value="전라">전라도</option>
            <option value="강원">강원도</option>
            <option value="경기">경기도</option>
        </select><br><br>
          </div>
          <div>
            <button type="submit">수정</button>
          </div>
          <br><br>
        </form>
        <form v-on:submit.prevent="editStack">
          <div>
        보유기술 및 스택 : <br><input type="text" name="user_stack"><br>

          <br>
          </div>
          <div>
            <button type="submit">수정</button>
          </div>
          <br><br>
        </form>
        <form v-on:submit.prevent="editImg">
          <div>
        이미지 : <input type="file" name="user_image" id="image">
          </div>
          <br>
          <div>
            <button type="submit">수정</button>
          </div>
          <br>
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
input{
  width: 25rem;
}
#id2{
  width: 20rem;
}
#region{
  width: 25rem;
  height: 4rem;
}
</style>
