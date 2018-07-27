<template>
    <div>
        <div class="fundsstyle">
            <button class="button" @click="onSendTx">SEND</button>
            <div class="pushDown">
                <input v-model="outgoingTx.recipient" type="text" placeholder="Send funds: pycoin address: 30819f300d06092a...." />
                <input v-model.number="outgoingTx.amount" type="text" placeholder="Amount...." />
            </div>
        </div>

        <!-- <app-status v-html="success" v-if="success" class="alert alert-success" role="alert"></app-status>
        <app-status v-html="error" v-if="error" class="alert alert-danger" role="alert"></app-status> -->

        <!-- <app-funds style="color:white; padding-left: 10px;"></app-funds> -->
    </div>
</template>

<script>
import Funds from './Funds.vue';
import Status from './Status.vue';
import axios from 'axios';
// import store from '../store/store.js'
export default {
    data () {
        return {
            outgoingTx: {
                recipient: '',
                amount: 0
            },
            error: null,
            success: null
        }
    },
    components:{
        'app-funds': Funds,
        'app-status': Status,
    },
    methods:{
        onSendTx: function () {
            this.txLoading = true;
            var vm = this;
            axios.post('http://localhost:5000/transaction', {
                recipient: this.outgoingTx.recipient,
                amount: this.outgoingTx.amount
            })
                .then(function(response){
                    vm.error = null;
                    vm.success = response.data.message;
                    console.log("RESPONSE DATA : " + response.data.message);
                    vm.funds = response.data.funds;
                    vm.txLoading = false;
                    vm.$store.state.success = response.data.message;
                    vm.$store.state.error = null;
            })
                .catch(function (error){
                    vm.success = null;
                    vm.error = error.response.data.message;
                    vm.txLoading = false;
                    vm.$store.state.success = null;
                    vm.$store.state.error = error.response.data.message;
            })
            console.log(vm.error)
            console.log(vm.success)
            // this.$store.state.error = vm.error
            // this.$store.state.success = vm.success
        },
    }
}

</script>

<style>
    input[type=text]{
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        border: 3px solid #ccc;
        -webkit-transition: 0.5s;
        transition: 0.5s;
        outline: none;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    input[type=text]:focus {
        border: 3px solid #555;
    }
    .button {
        margin-right: 5px;
        margin-left: 5px;
        padding: 10px;
        width: 20%;
        background-color: #555555;
        color: white;
        border: 2px solid #555555;
        -webkit-transition-duration: 0.4s;
        cursor: pointer;border-radius: 4px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .button:hover{
        background-color: white; 
        color: black; 
    }
    .button:active{
        background-color: red;
    }
    .right{
        float: right;
    }
    .fundsstyle{
        padding-top: 0px;
    }
    .alert{
        margin-top: 10px;
        border-radius: 5px;
        padding: 15px;
        border: 1px solid gray;
    }
    .alert-danger{
        background-color: white;
        border: 2px solid red;
        font-size: 0.9em;
    }
    .alert-success{
        background-color: white;
        border: 2px solid greenyellow;
    }
    .pushDown{
        margin-top: 10px;
    }
</style>
