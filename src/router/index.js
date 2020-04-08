import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Notification from '../views/Notifications.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: true
    },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    props: true
  },
  {
    path: '/notification',
    name: 'Notifications',
    component: Notification,
    props: true
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

/**
 * import Vue from 'vue'
import Router from 'vue-router'
import Projects from './views/Projects.vue'
import Notifications from './views/Notifications.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/notification',
      name: 'Notifications',
      component: Notifications,
    }
  ]
})

 */