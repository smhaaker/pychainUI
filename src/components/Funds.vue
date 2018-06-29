<template>
    <div>
        <p class="funds">Current Funds: {{funds}} {{onLoadWallet}}</p>
            <!-- Shows error in loading wallet only if error happens -->
            <!-- <div v-if="error" class="alert alert-danger" role="alert">
                {{ error }}
            </div> -->
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
            data () {
                return {
                public_key: '213123',
                wallet: {
                    private_key: 'none',
                    public_key: 'none'
                },
                success: '',
                funds: 0
                }
            },
    computed: {
            onLoadWallet() {
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

<style>

</style>