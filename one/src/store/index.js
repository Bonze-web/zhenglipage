import Vue from 'vue'
import Vuex from 'vuex'
import { mapMutations } from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photoChangeCount: 0,
  },
  mutations: {
    photoChangeTab (state,count){
      state.photoChangeCount = count
    }
  },
  actions: {
  },
  modules: {
  }
})
