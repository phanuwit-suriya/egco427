import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '@/components/MovieList'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      redirect: '/signin'
    },
    {
      path: '*',
      redirect: '/signin'
    },
    {
      path: '/movie',
      name: 'MovieList',
      component: MovieList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
    }
  ]
})

// Check required authentication
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) {
    next('signin')
  } else if (!requiresAuth && currentUser) {
    next('movie')
  } else {
    next()
  }
})

export default router
