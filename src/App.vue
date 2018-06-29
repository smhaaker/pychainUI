<template>
  <div id="app">
    <div>
    <ul class="nav">
      <li role="presentation"><router-link to="/">Home</router-link></li>
      <li role="presentation"><router-link to="/chain">Chain</router-link></li>
      <li role="presentation"><router-link to="/wallet">Wallet</router-link></li>
      <li role="presentation" style="float:right"><router-link to="/about">About</router-link></li>
      <app-funds id="fundsstyle"></app-funds>
    </ul>
    </div>
    <router-view></router-view>
    <!-- <app-user></app-user> -->
    <!-- <p>Test Test</p> -->

    <!-- <appWallet></appWallet> -->
  </div>
</template>

<script>
import Keys from './components/Keys.vue'
import Funds from './components/Funds.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: 'FIRST',
    }
  },
  components: {
            'app-keys': Keys,
            'app-funds': Funds,
  }
}
</script>

<style>
    html {
        overflow: -moz-scrollbars-vertical; 
        overflow-y: scroll;
    }


body{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: .8em;
    line-height: 20px;
}

#funds {
    float: right;
    color: blue;
}

#fundsstyle{
    color: white;
    float: right;
    padding: 1px;
}

ul {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

li {
    float: left;
    border-right:1px solid #bbb;
}

li:last-child {
    border-right: none;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover:not(.active) {
    background-color: rgb(173, 0, 196);
}

.active {
    background-color: #4CAF50;
}
</style>

