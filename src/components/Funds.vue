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
        }
    },
    computed: {
        getfunds() { 
            return this.$store.getters.getfunds
        },
    }
}
</script>
