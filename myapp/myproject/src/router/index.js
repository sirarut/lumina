import Vue from 'vue'
import Router from 'vue-router'
import FavourMovies from '@/components/FavourMovies'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FavourMovies',
      component: FavourMovies
    }
  ]
})
