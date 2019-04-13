import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import About from './views/About'
import User from './views/User'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: '/user/:username',
      name: 'user',
      component: User,
      props: true
    },
    {
      path: '/info',
      redirect: { name: 'about' }
    }
  ]
})
