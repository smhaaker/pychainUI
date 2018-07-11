<template>
    <div>
         <div id="parent">
            <div id="wide">
                <button class="button right" @click="onCreateWallet" :class="{ disabled: isDisabled }" :disabled="isDisabled">Create Wallet</button>
                <button class="button right" @click="onMine">Mine</button>
                <button class="button right" @click="onResolve">Resolve</button>
                <!-- <button class="btn" type="submit" :class="{ disabled: isDisabled }" :disabled="isDisabled">Submit</button> -->
                <!-- <app-funds style="color:white"></app-funds> -->
                <app-sendfunds></app-sendfunds>
                <app-recenttransactions class="recent"></app-recenttransactions>
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
        width: 60%;
        padding: 10px;
        background: white;
        border-right: 1px solid orange;
    }
    .btn{
        background-color: azure;
    }
    .recent{
    }
</style>

<script>
    import axios from 'axios';
    import Keys from './Keys.vue';
    import Funds from './Funds.vue';
    import Sendfunds from './Sendfunds.vue';
    import Recenttransactions from './Recenttransactions.vue';

    export default {
        data () {
            return {
            success: '',
            keyLength: this.$store.state.public_key,
            }
        },
        components:{
            'app-keys': Keys,
            'app-funds': Funds,
            'app-sendfunds': Sendfunds,
            'app-recenttransactions': Recenttransactions,
        },
        computed: {
            isDisabled () {
            if (this.keyLength.length < 20) {
                return false;
                    } else {
                return true;
                }
            }
        },
        methods: {
            onCreateWallet: function () {
                var vm = this;// view model
                vm.walletLoading = true
                axios.post('http://localhost:5000/wallet')
                    .then(function (response){
                        console.log(response)
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
            onMine: function() {
                var vm = this
                axios.post('http://localhost:5000/mine')
                    .then(function(response){
                        vm.error = null;
                        vm.success = response.data.message;
                        // console.log(response.data);
                        vm.funds = response.data.funds;
                        console.log(vm.success)
                    })
                    .catch(function (error){
                        vm.success = null;
                        vm.error = error.response.data.message;
                    })
            },
            onResolve: function(){
                var vm = this
                axios.post('http://localhost:5000/resolve_conflicts')
                    .then(function(response){
                        vm.error = null;
                        vm.success = response.data.message;
                        console.log(vm.success)
                    })
                    .catch(function (error){
                        vm.success = null;
                        vm.error = error.response.data.message;
                    })
            },
        }
    }

</script>
