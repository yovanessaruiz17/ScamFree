import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import VueCarousel from 'vue-carousel';

const app = createApp(App);
app.use(router);
app.mount('#app');

/*VueCarousel.use(VueCarousel);*/

Vue.use(VueCarousel);