<template>
  <div>
  <div id="banner">
    <div class="inner">

      <h1>구해줘 팀즈</h1>
      <br>
      <p>새로 시작할 사이드 프로젝트의 팀 또는 팀원을 찾으시나요?<br />
      </p>
    </div>
  </div>
  <div align="center">
      <header class="btn">
          <a href="/matefindingBD" class="btn1">팀원 모집</a>
          <a href="/teamfindingBD" class="btn2">팀 찾기</a>
      </header>
  </div>
    <div>
      <h3 align="center">팀원 모집</h3>
      <br><br>
      <h3 align="center">팀 찾기</h3>
      <br><br>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return{

      // work: require('../assets/work.jpg')
    }
  }
}
</script>

<style>

#banner{
  background: url(https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg);
}
.inner{
  padding: 100px;
  background-color: rgba(255, 255, 255, 0.5);

}
 h1{
   text-align: center;
   margin-top: 30px;
   font-weight: bold;
   opacity: initial;
   color: rgba(49, 56, 58, 1);
 }

 p{
   text-align: center;
   font-size: larger;
   color: #323843;
 }
 header.btn{
   text-align: center;
 }
.btn1{
  box-shadow: none;
  background-color: #1abc9c;
  color: #ffffff !important;
  width: 600px;
  height: 100px;
  font-size: x-large;
  line-height: 200px;
  padding-left: 80px;
  padding-right: 80px;
  padding-bottom: 20px;
  padding-top: 20px;
  text-align: center;
  /*margin: 10px;*/
}
.btn2{
  box-shadow: none;
  background-color: #FF5722;
  color: #ffffff !important;
  width: 600px;
  height: 100px;
  font-size: x-large;
  line-height: 200px;
  padding-left: 80px;
  padding-right: 80px;
  padding-bottom: 20px;
  padding-top: 20px;
  text-align: center;
  /*margin: 10px;*/
}


</style>
