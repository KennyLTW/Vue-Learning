import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


const routes = [
  //Home.vue components
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  //About.vue components
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  //User.vue components
  {
    path: '/user', 
    name: 'User',
    //用邊一個components
    component: () => import(/* webpackChunkName: "user" */ '../components/User.vue')
  },
  {
    path: '/user/:id',    
    //http://localhost:8080/#/user/x x can be 1,2,3,...,n
    //e.g. /user/1001 = User A, /user/1002 = User B, etc..
    name: 'User',
    //用邊一個components
    component: () => import(/* webpackChunkName: "user" */ '../components/User.vue'),
  },
  {
    path: '/user/:id/GET/:postid', 
    name: 'User',
    //用邊一個components
    component: () => import(/* webpackChunkName: "user" */ '../components/User.vue')
  },
  //capture 404 page not found
  {
    path: '*',
    name: '404',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
