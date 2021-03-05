<template>
  <section id="main" class="wrapper">
    <div class="inner">
      <div class="content">
        <div align="center">
          <h3>웹 프로젝트 희망합니다!</h3><br><br>
        </div>
        <div align="right">
          <img src="https://www.flaticon.com/svg/vstatic/svg/848/848043.svg?token=exp=1614578037~hmac=17a68dca205c3815d9a31ae252558163">
          &nbsp;moonyy7012
        </div>
        <br><br>
        <table class="tableLayout" align="center">

          <tr>
            <td class="label">희망 인원</td>
            <td class="labelVal" colspan="2">${post.region}</td>
            <td class="emptySpace" colspan="7"></td>
          </tr>
          <br>
          <tr>
            <td class="label">희망 활동 지역</td>
            <td class="labelVal" colspan="2">${post.region}</td>
            <td class="emptySpace" colspan="7"></td>
          </tr>
          <br>
          <tr>
            <td class="label">보유기술 및 스택</td>
            <td class="labelVal" colspan="2">${post.project_stack}</td>
            <td class="emptySpace" colspan="7"></td>
          </tr>
          <br>
          <tr>
            <td class="label">희망 미팅 방식</td>
            <td class="labelVal" colspan="2">${post.meeting_method}</td>
            <td class="emptySpace" colspan="7"></td>
          </tr>
          <br>
          <tr>
            <td class="label">희망 활동 기간</td>
            <td class="labelVal" colspan="2">${post.project_period}</td>
            <td class="emptySpace" colspan="7"></td>
          </tr>
          <br>
          <tr>
            <td class="label">내 용</td>
            <td colspan="9" class="context">${post.context}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="inner">
      <div class="content">
        <div>
          <select id="comment_type" name="comment_type" size="1"><br>
            <option value="질문하기">질문하기</option>
            <option value="구해줘 팀즈">구해줘 팀즈</option>
            <option value="헌혈해 블록">헌혈해 블록</option>
          </select>
          <input id="input_text" type="text" name="comment_text">
          <input type="submit" value="등록">
        </div>
        <br>
        <div>
          <img src="https://www.flaticon.com/svg/vstatic/svg/848/848043.svg?token=exp=1614578037~hmac=17a68dca205c3815d9a31ae252558163">
          &nbsp;&nbsp;
          moonyy7012
          &nbsp;&nbsp;
          팀원 구하고 있습니다. 함께하고 싶어요!
          <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          '<a href="/matefindingdetail">구해줘 팀즈</a>'에 참여하시겠습니까?
          &nbsp;&nbsp;<input type="submit" value="참여">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TeamFindingDetail"
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
  width: 75rem;
  max-width: calc(100% - 6rem);

}
.label{
  padding-right: 8rem;
}
img{
  width:2rem;
  height: 2rem;
}
#input_text{
  width: 25rem;
}

</style>
