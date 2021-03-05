import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'
import router from './router'
// import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuetify);
Vue.config.productionTip = false



new Vue({
  router,
  vuetify : new Vuetify(),
  render: h => h(App)
}).$mount('#app')

