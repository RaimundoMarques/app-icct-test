import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import EditLivro from '../components/EditLivro.vue'
import CriarLivro from '../components/CriarLivro.vue'


const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/criaLivro',
    name: 'CriarLivro',
    component: CriarLivro
    // component: () => import(/* webpackChunkName: "criaLivro" */ '../components/CriarLivro.vue')
  },
  {
    path: '/editar/:id',
    name: 'EditLivro',
    component: EditLivro
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
