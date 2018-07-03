<template>
    <div>
        <p class="funds">Current Funds: {{ getfunds }}</p>
            <!-- Shows error in loading wallet only if error happens {{onLoadWallet}} -->
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
        getfunds() { 
            return this.$store.getters.getfunds
        },
    },
 

}
</script>

<style>

</style>