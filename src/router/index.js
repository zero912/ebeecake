import Vue from 'vue'
import VueRouter from 'vue-router'
import CarouselFigure from '../components/CarouselFigure.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CarouselFigure',
    component: CarouselFigure
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
