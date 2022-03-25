import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormView from '../views/FormView.vue'
import BakerView from '../views/BakerView.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/Form',
    name: 'Form',
    component:  FormView
  },
  {
    path: '/Baker',
    name: 'Baker',
    component:  BakerView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
