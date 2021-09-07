import Vue from 'vue';
import VueRouter from 'vue-router';

import { routes } from './routes.js';
import store from './store/store.js';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
});


import App from './App.vue'

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
