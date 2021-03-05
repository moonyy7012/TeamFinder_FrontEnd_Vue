<template>
  <v-app id="app">
    <Header />
    <div id="content" class="content">
      <router-view></router-view>
    </div>
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import request from "request"
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },

  mounted() {
    request('http://localhost:8081', function (error, response, body) {
      window.console.log('error:', error);
      window.console.log('statusCode:', response && response.statusCode);
      window.console.log('body:', body);

    });
  }
}
</script>

<style>

</style>
