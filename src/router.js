import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import About from './views/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about-us',
      name: 'about',
      component: About,
      alias: '/about'
    },
    {
      path: '/info',
      redirect: { name: 'about' }
    }
  ]
})
