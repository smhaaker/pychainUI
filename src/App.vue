<template>
  <div id="app">
    <div>
        <ul class="nav">
            <router-link tag="li" active-class="active" exact to="/"><a>Home</a></router-link>
            <router-link tag="li" active-class="active" to="/chain"><a>Chain</a></router-link>
            <router-link tag="li" active-class="active" to="/wallet"><a>Wallet</a></router-link>
            <router-link tag="li" active-class="active" to="/network"><a>Network</a></router-link>
            <router-link tag="li" active-class="active" style="float:right" to="/about"><a>About</a></router-link>
            <p id="fundsstyle">Current Block: {{current_block}}</p>
            <app-status v-html="success" v-if="{success}" class="alertbar alertbar-success"></app-status>
            <app-status v-html="error" v-if="{error}" class="alertbar alertbar-danger"></app-status>
            <app-funds id="fundsstyle"></app-funds>
        </ul>
    </div>
        <router-view></router-view>
        <app-loadchain></app-loadchain>   

  </div>
</template>

<script>
import Keys from './components/Keys.vue'
import Funds from './components/Funds.vue';
import LoadChain from './components/LoadChain.vue';
import Status from './components/Status.vue';
export default {
  name: 'app',
  data () {
    return {
    //    error: "Error",
    //    success: "Success"
    }
  },
  computed: {
    current_block(){
        return this.$store.state.current_block
    },
    error(){
        return this.$store.state.error
    },
    success(){
        return this.$store.state.success
    },
  },
  components: {
    'app-keys': Keys,
    'app-funds': Funds,
    'app-loadchain': LoadChain,
    'app-status': Status,
  },
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
    h3{
        color: black;
        padding: 5px;
    }
    #funds {
        float: right;
        color: blue;
    }
    #fundsstyle{
        color: white;
        float: right;
        padding: 1px;
        padding-right: 10px;
    }
    p{
        padding-left: 10px;
    }
    a{
        text-decoration: none;
        color: aqua;
    }
    ul {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
    }
    .nav li {
        float: left;
        border-right:1px solid #bbb;
    }
    .nav li:last-child {
        border-right: none;
    }
    .nav li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }
    .nav li a:hover:not(.active) {
        background-color: rgb(173, 0, 196);
    }
    .active {
        background-color: rgb(173, 0, 196);
    }
    .alertbar{
        float: left;
        background-color: #333;
    }
    .alertbar-danger{
        color: red;
        padding-top: 14px;
    }
    .alertbar-success{
        color: greenyellow;
        /* border: 2px solid greenyellow; */
        padding: 14px 16px;
    }
</style>

