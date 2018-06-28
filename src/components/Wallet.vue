<template>
    <div>
    <h3>Wallet Management Page</h3>
    
    <!-- <button class="btn btn-primary" @click="onLoadWallet">
        Create Wallet To be fixed
    </button> -->
    <button>Create Wallet</button>
    <!-- Grayed out if wallet is active Create new if no wallet file found -->

    <!-- <app-info :myProp="public_key"></app-info> -->
    <!-- <p class="keys">Wallet key public: {{wallet.public_key}}</p>
    <p class="keys">Wallet key private: {{wallet.private_key}}</p> -->

    <app-keys></app-keys>
    <app-funds></app-funds>

    <p>transactions: </p>
    <h2>Send funds</h2>
    </div>
</template>
<style>
        .keys{
            white-space: pre-wrap;
            word-wrap: break-word;
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

    export default {
        data () {
            return {
            public_key: '213123',
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
        },
        methods: {
                onCreateWallet: function () {
                    var vm = this;// view model
                    vm.walletLoading = true
                    axios.post('/wallet')
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
                }
            }
    }

</script>
