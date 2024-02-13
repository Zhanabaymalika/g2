import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import GalleryComponent from '@/views/GalleryView.vue'; // Импортируйте компонент GalleryComponent

// Импортируйте компоненты, которые будут использоваться в маршрутах
import GettingStarted from '@/views/GalleryView.vue';

import StudentInfo from '@/views/StudentInfo.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/home',
    component: HomeView,
    children: [
      { path: '', redirect: { name: 'Home' } },
      { path: 'getting-started', component: GettingStarted },
      { path: 'gallery', component: GalleryComponent },
      
    ],
  },
  {
    path: '/student/:id',
    name: 'StudentInfo',
    component: StudentInfo
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
