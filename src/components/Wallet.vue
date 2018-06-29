<template>
    <div>
         <div id="parent">
            <div id="wide">Send Funds</div>
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
        /* Just so it's visible */
    }
    #wide {
        flex: 1;
        /* Grow to rest of container */
        background: aquamarine;
        /* Just so it's visible */
    }

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
