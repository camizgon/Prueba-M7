import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '../views/AboutView.vue';
import CounterView from '../views/CounterView.vue';

const routes = [
  { path: '/', 
    name: 'home', 
    component: CounterView 
  },

  { path: '/about',
     name: 'about',
      component: AboutView 
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

