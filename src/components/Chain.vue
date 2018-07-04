<template>
<div>
    <h3>Chain Page!</h3>
    <p>Look at the chain</p>
    <app-transactions></app-transactions>
</div>
</template>

<script>
import App from '../App.vue'
import Transactions from './Transactions.vue'
export default {
  components: {
    'app-transactions': Transactions,
  }
}


</script>