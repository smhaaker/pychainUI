import Vue from 'vue'
import App from './App.vue'
import User from './components/User.vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import Account from './components/Account.vue';
import Wallet from './components/Wallet.vue';
import Chain from './components/Chain.vue';
import  { store } from './store/store';


Vue.use(VueRouter);
Vue.use(axios);

const routes = [
  { path: '/wallet', component: Wallet},
  { path: '/chain', component:Chain},
  { path: '/', component: User},
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

Vue.component('app-user', User)

new Vue({
  el: '#app',
  store,
  router: router,
  render: h => h(App)
})
