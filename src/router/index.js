import { createRouter, createWebHistory } from 'vue-router';
import PaginaRestaurantes from '../views/PaginaRestaurante.vue';
import PaginaBares from '../views/PaginaBares.vue';
import PaginPrincipal from '@/views/PaginPrincipal.vue';

const routes = [
  {
    path: '/',
    redirect: '/principal'
  },
  {
    path:'/principal',
    component:PaginPrincipal,
    name:'ScamFree'
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
