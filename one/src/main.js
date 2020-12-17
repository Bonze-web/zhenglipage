import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/js/flexiblenew"
import "./assets/css/base.css"
import "./assets/less/page.less"
import "./assets/css/page.css"
Vue.config.productionTip = false
import $ from "jquery"
Vue.prototype.$ = $;
import 'swiper/swiper-bundle.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);
import { Checkbox, Radio, RadioGroup,Input } from 'element-ui'
Vue.use(Checkbox);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Input);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
