import { createRouter, createWebHistory } from 'vue-router';
import PaginaRestaurantes from '../views/PaginaRestaurante.vue';
import PaginaBares from '../views/PaginaBares.vue';

const routes = [
  {
    path: '/',
    redirect: '/Restaurantes'
  },
  {
    path: '/Restaurantes',
    component: PaginaRestaurantes,
    name: 'Restaurantes'
  },
  {
    path: '/Bares',
    component: PaginaBares,
    name: 'Bares'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
