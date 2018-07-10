<template>
    <div >
        <h3>Last 10 Transactions:</h3>
        <ul class="recentTransactions">
        <li v-for="block in blockchain.slice(blockchain.length - 10, blockchain.length).reverse()"
        :key="block.index">
                    <div v-for="tx in block.transactions" :key="tx.index">
                    <div class="blkNumber">
                        Block Number: {{block.index}} 
                        <span class="right">Amount Sent: {{tx.amount}}</span></div>
                    <!-- <div>previous_hash: {{ block.previous_hash }}</div> -->
                    <div class="transactionBox">
                        <div>Recipient: {{ tx.recipient }}</div>
                        <div>Sender: {{ tx.sender }}</div>
                    </div>
                </div>
        </li>
        </ul>
    </div>

</template>

<script>
import moment from 'moment'
export default {
    data () {
        return {
        showElement: null,
        currentPage: 1,
        itemsPerPage: 10,
        resultCount: 0,
        showLastItems: 10,
        }
    },
    computed: {
        loadedData: function () {
            if (this.view === 'chain') {
                return this.blockchain;
            } else {
                return this.openTransactions
            }
        },
        totalPages: function() {
            return Math.ceil(this.resultCount / this.itemsPerPage)
        },
        blockchain(){
            return this.$store.state.blockchain;
        },
        currentAddress(){
            return this.$store.state.public_key;
        },
     },
    methods: {
        setPage: function(pageNumber) {
            this.currentPage = pageNumber
        },
    },
    
}
</script>

<style>
    .blkNumber{
        margin-top: 10px;
        background-color: orange;
        padding: 10px;
    }
    .recentTransactions{
        background-color: inherit;
    }
    .transactionBox{
        font-size: 0.8em;
        background-color: white;
        white-space: pre-wrap;
        word-wrap: break-word;
        padding: 10px;
        border: solid 1px black;
    }
    .collapse{
        background-color: green;
    }
    .showElement{
        background-color: orange;
    }
</style>
