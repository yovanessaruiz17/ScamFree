import{creaatrRouter, createRouter, createWebHistory} from 'vue-router'
import Principal from '../components/Principal.vue'

const routes=[
    {
        path:'/',
        name: 'SCAM FREE',
        component:Principal
    },
    {
        
        path: '/Restaurantes',
        name: 'Restaurantes',
        component: () => import(/* webpackChunkName: "about" */ '../components/RestaurantList.vue')
    },
    {
        
        path: '/Bares',
        name: 'Bares y Discotecas',
        component: () => import( '../components/BarList.vue')
    }
]
const router= createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})
export default router