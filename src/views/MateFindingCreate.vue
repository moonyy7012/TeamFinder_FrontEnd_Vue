<template>
  <section id="main" class="wrapper">
    <div class="inner">
      <div class="content">
          <h3>팀원 모집</h3><br><br>
        <form v-on:submit.prevent="createMateFinding">
        <table class="table table-bordered">
            <tr>
              <td>팀 이름</td>
              <td><input type="text" name="title"></td>
            </tr>
            <tr>
              <td>모집 인원</td>
              <td>
                <input type="number" name="recruiting_number">
              </td>
            </tr>
            <tr>
              <td>활동 지역</td>
              <td>
                <select id="region" name="region" size="1"><br>
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
              </select>
              </td>
            </tr>
            <tr><td>사용 기술 및 스택</td><td><input type="text" name="project_stack"></td></tr>
            <tr><td>미팅 방식</td>
              <td>
              <select id="meeting_method" name="meeting_method" size="1"><br>
                <option value="대면">대면</option>
                <option value="비대면">비대면</option>
              </select>
              </td>
            </tr>
            <tr><td>예상 활동 기간</td>
             <td>
              <select id="project_period" name="project_period" size="1"><br>
                <option value="1달 미만">1달 미만</option>
                <option value="1달 이상">1달 이상</option>
                <option value="3달 이상">3달 이상</option>
                <option value="6달 이상">6달 이상</option>
                <option value="1년 이상">1년 이상</option>
              </select>
              </td>
            </tr>
            <tr>
              <td>팀 로고</td>
              <td>
                <input type="file" name="team_image" id="image">
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                <textarea name="context"></textarea>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <input type="submit" value="작성 완료">
              </td>
            </tr>

          </table>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MateFindingCreate"
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
form{
  text-align: center;
}
select, textarea{
  width: 25rem;
}


</style>
