import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Room from '../views/Room.vue';
import Rooms from '../views/Rooms.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/room/:id',
    name: 'room',
    component: Room

  },
  {
    path: '/rooms',
    name: 'rooms',
    component: Rooms

  },
  {path: '*', redirect: {name: 'home'}}
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
