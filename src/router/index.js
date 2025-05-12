import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/create-character',
      name: 'create-character',
      component: () => import('../views/CreateView.vue')
    },

    {
      path: '/rooms/room/:name',
      name: 'view-room',
      component: () => import('../views/RoomView.vue'),
      props: true,
    },

    {
      path: '/character/:name',
      name: 'view-character',
      component: () => import('../views/RoomView.vue'),
      props: true,
    },

    {
      path: '/rooms/all',
      name: 'all-rooms',
      component: () => import('../views/CreateView.vue')
    },

    {
      path: '/lore',
      name: 'world-lore',
      component: () => import('../views/WorldView.vue')
    },
  ],
})

export default router
