<template>
    <div>
        <p class="funds">Current Funds: {{ getfunds }}</p>

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
            funds: null
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