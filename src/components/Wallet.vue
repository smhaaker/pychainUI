<template>
    <div>
         <div id="parent">
            <div id="wide">
                <!-- <button @click="onLoadWallet">Load Wallet</button> -->
                <app-funds style="color:white"></app-funds>
                <app-sendfunds></app-sendfunds>
                <app-recenttransactions/>
            </div>
            <div id="keys"><app-keys></app-keys>
            </div>
        </div>
    </div>
</template>
<style>
    #parent {
        display: flex;
    }
    #keys {
        width: 40%;
        background: white;
    }
    #wide {
        flex: 1;
        padding: 10px;
        background: aquamarine;
    }
    .btn{
        background-color: azure;
    }
</style>

<script>
    import axios from 'axios';
    import NewComponent from './NewComponent.vue';
    import Keys from './Keys.vue';
    import Funds from './Funds.vue';
    import Sendfunds from './Sendfunds.vue';
    import Recenttransactions from './Recenttransactions.vue';

    export default {
        data () {
            return {
            wallet: {
                private_key: 'none',
                public_key: 'none'
            },
            success: '',
            }
        },
        components:{
            'app-info': NewComponent,
            'app-keys': Keys,
            'app-funds': Funds,
            'app-sendfunds': Sendfunds,
            'app-recenttransactions': Recenttransactions,
        },
        methods: {
                onCreateWallet: function () {
                    var vm = this;// view model
                    vm.walletLoading = true
                    axios.post('http://localhost:5000/wallet')
                        .then(function (response){
                            //console.log(response)
                            vm.error = null;
                            vm.success = 'Wallet Created \n\nPublic Key: \n\n' + response.data.public_key + '\n\nPrivate Key: \n\n' + response.data.private_key;
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
                },
                onLoadWallet() { // move this later. 
                    var vm = this;
                    this.walletLoading = true
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
                    this.$store.state.funds = vm.wallet.funds
                    }
            }
    }

</script>
