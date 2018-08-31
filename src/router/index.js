import Vue from 'vue'
import Router from 'vue-router'
import A from '../routingComponents/A.vue'
import B from '../routingComponents/B.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/a/:id',
      component:A
    },
    {
      path:'/b/:id',
      component:B
    },
     {
       path:'/',
      redirect:'/a/1'
     },
  ]
})
