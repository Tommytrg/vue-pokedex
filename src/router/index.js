import Vue from 'vue'
import Router from 'vue-router'
import AllPokemons from '@/pages/AllPokemons'
import Search from '@/pages/Search'
import Types from '@/pages/Types'
import TypeDetail from '@/pages/TypeDetail'
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'
import MyPokemons from '@/pages/MyPokemons'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AllPokemons',
      component: AllPokemons
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
