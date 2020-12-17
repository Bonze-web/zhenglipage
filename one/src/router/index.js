import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path : "/",
    redirect : "/major_works",
  },
  {
    path : "/major_works",
    component : ()=>import(/*  */"../components/headNar.vue"),
  }
]

const router = new VueRouter({
  routes
})

export default router
