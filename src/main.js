import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
import CreateItem from './components/CreateItem.vue';

Vue.use(VueAxios, axios);

import App from './App.vue';

const routes = [
  {
        name: 'CreateItem',
        path: '/',
        component: CreateItem
    }
];
const router = new VueRouter({ mode: 'history', routes: routes});
new Vue(Vue.util.extend({ router }, App)).$mount('#app');