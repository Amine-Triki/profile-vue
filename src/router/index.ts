import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../components/AppLayout.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../pages/HomePage.vue'),
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('../pages/ContactPage.vue'),
      },
      {
        path: 'projects',
        name: 'Projects',
        component: () => import('../pages/ProjectsPage.vue'),
      },
      {
        path: 'skills',
        name: 'Skills',
        component: () => import('../pages/SkillsPage.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../pages/NotFound.vue'),
      },
    ],
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
