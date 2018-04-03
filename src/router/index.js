import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import MyPokemons from '@/pages/MyPokemons'
import Search from '@/pages/Search'
import Signup from '@/pages/Signup'
import TypeDetail from '@/pages/TypeDetail'
import Types from '@/pages/Types'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/buscar',
      name: 'Search',
      component: Search
    },
    {
      path: '/tipos',
      name: 'Types',
      component: Types
    },
    {
      path: '/tipos/:type',
      name: 'TypeDetail',
      component: TypeDetail
    },
    {
      path: '/iniciar-sesion',
      name: 'Login',
      component: Login
    },
    {
      path: '/registro',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/mis-pokemon',
      name: 'MyPokemons',
      component: MyPokemons
    }
  ]
})
