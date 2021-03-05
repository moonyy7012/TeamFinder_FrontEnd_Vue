<template>
  <div>
    <div class="tables">
    <h5>나의 팀</h5><br><br>

    <table class="table table-bordered">
      <tr><td>팀 이름</td><td>팀원ID</td></tr>
      <tr :key="i" v-for="(d,i) in items1">
        <td><a href="/matefindingdetail">{{d.팀이름}}</a></td>
        <td>{{d.팀원ID}}</td>
      </tr>
    </table>
  </div>

    <div class="tables">
    <h5>수락 대기중인 팀원</h5><br><br>
    <table class="table table-bordered">
      <tr><td>팀 이름</td><td>팀원ID</td><td>수락여부</td></tr>
      <tr :key="i" v-for="(d,i) in items2">
        <td><a href="/teamfindingdetail">{{d.팀이름}}</a></td>
        <td>{{d.팀원ID}}</td>
        <td align="center"><b-button href="#" variant="primary" class="btn">수락</b-button><b-button href="#" variant="primary" class="btn">거절</b-button></td>
      </tr>
    </table>
  </div>

    <div class="tables">
    <h5>수락 대기중인 팀</h5><br><br>
    <table class="table table-bordered">
      <tr><td>팀 이름</td><td>팀장ID</td><td>수락여부</td></tr>
      <tr :key="i" v-for="(d,i) in items3">
        <td><a href="/matefindingdetail">{{d.팀이름}}</a></td>
        <td>{{d.팀장ID}}</td>
        <td align="center"><b-button href="#" variant="primary" class="btn">수락</b-button><b-button href="#" variant="primary" class="btn">거절</b-button></td>
      </tr>
    </table>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items1: [
        { 팀이름: 'web', 팀원ID: 'Dickerson' }

      ],
      items2: [
        { 팀이름: 'web', 팀원ID: 'MOON', 수락여부: '' }

      ],
      items3: [
        { 팀이름: 'App', 팀장ID: 'YOON', 수락여부: '' }

      ]
    }
  }
}
</script>

<style scoped>
.tables{
  margin: 5rem;
  text-align: center;
}
.btn{
  /*padding: 0.5rem;*/
  margin: 0.5rem;
  text-align: center;
}
</style>
