<template>
  <div>

    <br><br>
    <header>
      <h2>팀원 모집</h2>
    </header>


    <section class="wrapper">
      <div class="inner">
    <b-card-group deck align="center">
      <b-card
        title="moonyy7012"
        img-src="https://www.flaticon.com/svg/vstatic/svg/681/681443.svg?token=exp=1614701834~hmac=9217d239b74342f16b1bc1a3ba2b88a4"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 17rem;"
        class="mb-2"
      >
        <b-card-text>
          <h5><strong>웹 프로젝트</strong></h5>
          <div align="right"> moonyy7012</div><br>
          서울/비대면/vue.js/1달 미만<br><br>
          1일전 업데이트
        </b-card-text>
        <div class="btn">
        <b-button href="/matefindingdetail" variant="primary">상세보기</b-button>
        </div>
      </b-card>
      <b-card
        title="moonyy7012"
        img-src="https://www.flaticon.com/svg/vstatic/svg/681/681443.svg?token=exp=1614701834~hmac=9217d239b74342f16b1bc1a3ba2b88a4"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 17rem;"
        class="mb-2"
      >
        <b-card-text>
          <h5><strong>웹 프로젝트</strong></h5>
          <div align="right"> moonyy7012</div><br>
          서울/비대면/vue.js/1달 미만<br><br>
          1일전 업데이트
        </b-card-text>
        <div class="btn">
        <b-button href="/matefindingdetail" variant="primary">상세보기</b-button>
        </div>
      </b-card>
      <b-card
        title="moonyy7012"
        img-src="https://www.flaticon.com/svg/vstatic/svg/681/681443.svg?token=exp=1614701834~hmac=9217d239b74342f16b1bc1a3ba2b88a4"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 17rem;"
        class="mb-2"
      >
        <b-card-text>
          <h5><strong>웹 프로젝트</strong></h5>
          <div align="right"> moonyy7012</div><br>
          서울/비대면/vue.js/1달 미만<br><br>
          1일전 업데이트
        </b-card-text>
      <div class="btn">
        <b-button href="/matefindingdetail" variant="primary">상세보기</b-button>
      </div>
      </b-card>
    </b-card-group>
      </div>
    </section>

<br>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      align="center"
    ></b-pagination>
    <br>
  </div>
</template>

<script>
export default {
  name: "MateFindingBD"
}
</script>

<style scoped>
.wrapper {
  padding: 0 0 0 0 ;
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
h2 {
  text-align: center;
}
.mb-2{
  margin-left: 5rem;
  margin-right: 5rem;
  border-color: #323843;
  border-width: medium;
  padding: 1.5rem;
  /*width: 70rem;*/
  /*height:70rem;*/

}
.btn{
  text-align: center;
}

</style>
