<template>
<div>
    <h3>Blockchain Explorer</h3>
    <p></p>
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

<style>
</style>
