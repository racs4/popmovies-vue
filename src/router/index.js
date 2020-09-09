import Vue from 'vue';
import VueRouter from 'vue-router';
import MoviePage from '@/views/MoviePage.vue';
import SearchPage from '@/views/SearchPage.vue';
import NotFound from '@/views/NotFound.vue';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/movie/:id',
    name: 'MoviePage',
    component: MoviePage,
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/search/:query/:page',
    name: 'Search',
    component: SearchPage,
  },
  {
    path: '*',
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
