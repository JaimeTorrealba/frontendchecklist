import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/route.js';
import store from './store/store.js';

import './assets/style/tailwind.css';

createApp(App).use(router).use(store).mount('#app');
