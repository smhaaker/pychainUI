<template>
<div>
    <p>CHANGE THIS FILE TO MOUNTED, LIKE IN TRANSACTION, also load the chain ehre.. </p>
    <!-- <p>{{onLoadWallet}}</p> -->
    <div v-if="error" class="alert alert-danger" role="alert">
        {{ error }}
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data () {
        return {
        blockchain: [          
            {"index":1, "previous_hash":"Tom"},
        ],
        wallet: {
            private_key: 'none',
            public_key: 'none'
        },
        view: 'chain',
        walletLoading: false,
        txLoading: false,
        dataLoading: false,
        showElement: null,
        error: null,
        success: null,
        funds: 0,
        block: 0,
        funds: null,
        outgoingTx: {
            recipient: '',
            amount: 0
        },
        wallet: {
            private_key: 'none',
            public_key: 'none'
        },
        success: '',
        error: '',
        funds: 0,
        }
    },
methods: {
    onLoadWallet() {
        var vm = this;
        this.walletLoading = true
        window.setInterval(() => { // setting interval for frequency 
            axios.get('http://localhost:5000/wallet')
                    .then(function (response){
                        // console.log(response)
                        vm.error = null;
                        vm.success = 'Wallet Loaded' + response.data.public_key;
                        //console.log(response.data.public_key);
                        vm.wallet = {
                            public_key: response.data.public_key,
                            private_key: response.data.private_key
                        }
                        vm.funds = response.data.funds;
                        vm.walletLoading = false
                    })
                    .catch(function (error) {
                        vm.success = null;
                        vm.error = error.response.data.message;
                        vm.wallet = null;
                        vm.walletLoading = false
                    });
            // console.log("updated: " + vm.wallet.private_key)
            this.$store.state.public_key = vm.wallet.public_key
            this.$store.state.private_key = vm.wallet.private_key
            this.$store.state.funds = vm.funds
        },2000); //  just setting interval so it updates at same frequency 
    },
    onLoadData: function () {
        window.setInterval(() => { // setting interval for frequency 
        if (this.view === 'chain') {
            var vm = this
            this.dataLoading = true
            axios.get('http://localhost:5000/chain')
                .then(function (response){
//                        console.log(response.data[response.data.length - 1 ].index) // last block index
                    console.log(response.data)
                    vm.block = response.data.length - 1// loads last block
                    vm.blockchain = response.data
                    vm.dataLoading = false
                    // console.log(vm.blockchain)
                    console.log(vm.block)
                })
                .catch(function (error){
                    vm.dataLoading = false
                    vm.error = 'Something went wrong'
                });
        } else {
            var vm = this
            axios.get('http://localhost:5000/transactions')
                .then(function (response){
                    console.log(response.data)
                    vm.openTransactions = response.data
                    vm.dataLoading = false
                })
                .catch(function (error){
                    vm.dataLoading = false
                    vm.error = 'Something went wrong'
                });
            }
        this.$store.state.current_block = vm.block
        this.$store.state.blockchain = vm.blockchain
        },2000); //  just setting interval so it updates at same frequency 
    }
    // getfunds() { // to use this we actually need to change state somewhere...
    //              // must send a change of state. 
    //     return this.$store.getters.getfunds
    // },
    },
    mounted: function(){
        this.onLoadWallet();
        this.onLoadData();
    }
}
</script>
