import Vue from 'vue'
import Router from 'vue-router'
import Speakers from '@/pages/Speakers'
import Details from '@/pages/Details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Speakers',
      component: Speakers
    },
    {
      path: '/details',
      name: 'Details',
      component: Details,
      props: true
    },
  ]
})
