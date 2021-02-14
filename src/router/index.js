import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/detail/:id',
    name: 'showDetails',
    component: () => import(/* webpackChunkName: "ShowDetails" */ '../views/ShowDetails.vue'),
    props(route) {
      const props = { ...route.params };
      props.id = +props.id;
      return props;
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
