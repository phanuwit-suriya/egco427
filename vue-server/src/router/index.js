import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Users from '@/components/Users'
import Contact from '@/components/Contact'
import AddUser from '@/components/AddUser'
import UpdateUser from '@/components/UpdateUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/adduser',
      name: 'AddUser',
      component: AddUser
    },
    {
      path: '/updateuser/:userid',
      name: 'UpdateUser',
      component: UpdateUser
    }
  ]
})
