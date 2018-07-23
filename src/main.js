import Vue from 'vue'
import App from './App.vue'
import Welcome from './components/Welcome.vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import Info from './components/Info.vue';
import Wallet from './components/Wallet.vue';
import Chain from './components/Chain.vue';
import  { store } from './store/store';


Vue.use(VueRouter);
Vue.use(axios);

const routes = [
  { path: '/wallet', component: Wallet},
  { path: '/chain', component:Chain},
  { path: '/info', component: Info},
  { path: '/', component: Welcome},
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

Vue.component('app-Welcome', Welcome)

new Vue({
  el: '#app',
  store,
  router: router,
  render: h => h(App)
})
