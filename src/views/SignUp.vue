<!--<template>-->
<!--  <section id="main" class="wrapper">-->
<!--    <div class="inner">-->
<!--      <div class="content">-->
<!--        <header>-->
<!--          <h2>회원가입</h2>-->
<!--        </header>-->
<!--        <br><br>-->
<!--        <form action="join" method="post">-->
<!--          아이디 :<br>-->
<!--          <input type="text" id="id2">  <button type="button" id="id_input">중복체크</button><br><br>-->
<!--          비밀번호 : <br><input type="password" name="user_pwd"><br><br>-->
<!--          비밀번호 확인 : <br><input type="password" name="user_pwd2"><br><br>-->
<!--          이메일 : <br><input type="email" name="user_email"><br><br>-->
<!--          지역 : <br><select id="region" name="region" size="8"><br>-->
<!--          <option value="서울">서울</option>-->
<!--          <option value="부산">부산</option>-->
<!--          <option value="대구">대구</option>-->
<!--          <option value="대전">대전</option>-->
<!--          <option value="광주">광주</option>-->
<!--          <option value="울산">울산</option>-->
<!--          <option value="제주">제주</option>-->
<!--          <option value="충청">충청도</option>-->
<!--          <option value="경상">경상도</option>-->
<!--          <option value="전라">전라도</option>-->
<!--          <option value="강원">강원도</option>-->
<!--          <option value="경기">경기도</option>-->
<!--        </select><br><br>-->
<!--          보유기술 및 스택 : <br><input type="password" name="user_stack"><br>-->

<!--          <br>-->
<!--          <input type="submit" id="sub" value="가입하기">-->

<!--        </form>-->

<!--      </div>-->
<!--    </div>-->
<!--  </section>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "Login"-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--.wrapper {-->
<!--  padding: 8rem 0 6rem 0 ;-->
<!--  position: relative;-->
<!--  z-index: 1;-->
<!--}-->
<!--/*@media screen and (max-width: 1280px) {*/-->
<!--/*  .wrapper {*/-->
<!--/*    padding: 4rem 0 2rem 0 ; } }*/-->
<!--/*@media screen and (max-width: 736px) {*/-->
<!--/*  .wrapper {*/-->
<!--/*    padding: 3rem 0 1rem 0 ; } }*/-->
<!--/*@media screen and (max-width: 480px) {*/-->
<!--/*  .wrapper {*/-->
<!--/*    padding: 2rem 0 0.1rem 0 ; } }*/-->
<!--#main .content {-->
<!--  background: #ffffff;-->
<!--  border-radius: 4px;-->
<!--  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.025);-->
<!--  margin-bottom: 2rem;-->
<!--  margin-left: 20rem;-->
<!--  margin-right: 20rem;-->

<!--  padding: 3rem;-->
<!--  background-color: lightgray;-->

<!--}-->
<!--/*@media screen and (max-width: 980px) {*/-->
<!--/*  #main .content {*/-->
<!--/*    padding: 2rem; } }*/-->
<!--/*@media screen and (max-width: 480px) {*/-->
<!--/*  #main .content {*/-->
<!--/*    padding: 1.5rem; } }*/-->
<!--.inner {-->
<!--  margin: 0 auto;-->
<!--  width: 75rem;-->
<!--  max-width: calc(100% - 6rem);-->

<!--}-->

<!--.loginForm{-->
<!--  /*width: 80rem;*/-->
<!--  text-align: center;-->
<!--}-->
<!--h2{-->
<!--  text-align: center;-->
<!--}-->
<!--input{-->
<!--  width: 25rem;-->
<!--}-->
<!--#id2{-->
<!--  width: 20rem;-->
<!--}-->
<!--#region{-->
<!--  width: 25rem;-->
<!--  height: 4rem;-->
<!--}-->
<!--</style>-->

<template>
    <section id="main" class="wrapper">
      <div class="inner">
        <div class="content">
          <h3>회원가입</h3><br>
          <v-text-field
              label="아이디"
              v-model="user_id"
          ></v-text-field>
          <v-text-field
              label="비밀번호"
              type="password"
              v-model="user_pwd"
          ></v-text-field>
          <v-text-field
              label="이메일"
              v-model="user_email"
          ></v-text-field>
          <v-select
              :items="['서울', '부산','인천','대구','광주','대전','울산','세종','경기','강원','충남','충북','경북','경남','전북','전남','제주']"
              label="지역"
              v-model="region"
          ></v-select>

          <v-text-field
              label="보유기술 및 스택"
              v-model="user_stack"
          ></v-text-field>
          <v-btn @click="signUp">가입하기</v-btn>
        </div>
      </div>
    </section>
</template>

<script>
import { registerUser } from '@/api/index';

export default {
  data() {
    return {
      user_id: null,
      user_pwd: null,
      user_email: null,
      region: null,
      user_stack: null
    };
  },
  methods: {
    async signUp() {
      console.log('submit');
      const userData = {
        user_id: this.user_id,
        user_pwd: this.user_pwd,
        user_email: this.user_email,
        region: this.region,
        user_stack: this.user_stack
      };

      const response = await registerUser(userData);
      if (response.status == 200) {
        alert('환영합니다.');
        await this.$router.push('/users/login');
      } else {
        alert(response.data);
      }

      this.clearForm()
    },
    clearForm() {
      this.user_id = null,
          this.user_pwd = null,
          this.user_email = null,
          this.region = null,
          this.user_stack = null
    }
  }
}
</script>
<style>
.wrapper {
  padding: 8rem 0 6rem 0 ;
  position: relative;
  z-index: 1;
}

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

.inner {
      margin: 0 auto;
      width: 75rem;
      max-width: calc(100% - 6rem);

    }



</style>