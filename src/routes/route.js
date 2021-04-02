import { createWebHistory, createRouter } from 'vue-router';
import Home from '../view/Home.vue';
import Projects from '../view/Projects.vue';
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/Projects/:id', name: 'Projects', component: Projects },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
