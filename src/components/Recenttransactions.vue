<template>
    <div >
        <h3>Last 10 Transactions:</h3>
        <ul class="recentTransactions">
        <li v-for="block in blockchain.slice(blockchain.length - 10, blockchain.length)"
        :key="block.index">
                    <div class="blkNumber">Block Number: {{block.index}}</div>
                    <div v-for="tx in block.transactions" :key="tx.index">
                    <!-- <div>previous_hash: {{ block.previous_hash }}</div> -->
                    <div class="transactionBox">
                        <div>Recipient: {{ tx.recipient }}</div>
                        <div>Sender: {{ tx.sender }}</div>
                        <div>Amount: {{ tx.amount }}</div>
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
        paginate: function() {
            if (!this.blockchain || this.blockchain.length != this.blockchain.length) {
                return
            }
            // this.resultCount = this.blockchain.length // need lenght of chain where only current address is used
            // so we need a loop here to go over blockchain.length blockchain[1-blockchain.length]
            // first loop over blockchain, then loop over transactions in that chain. Then match string.
            this.resultCount = this.blockchain.length;
            if (this.currentPage >= this.totalPages) {
              this.currentPage = this.totalPages
            }
            this.currentPage = this.totalPages; 
            var index = this.currentPage * this.itemsPerPage - this.itemsPerPage
            return this.blockchain.slice(index, index + this.itemsPerPage)
        },
        blockchain(){
            return this.$store.state.blockchain;
        },
        currentAddress(){
            return this.$store.state.public_key;
        },
     },
    filters: {
        unixFormat: function (value) {
            if (value) {
                return moment.unix(value).format('MM-DD-YYYY hh:mm:ss')
                // 'MM/DD/YYYY hh:mm'
            }
        },
    },
    methods: {
        setPage: function(pageNumber) {
          this.currentPage = pageNumber
        },
        gettransactionsMethod() { 
            return this.$store.getters.gettransactions;
        },
    },
    
}
</script>

<style>
    .blkNumber{
        margin-top: 10px;
        background-color: orange;
    }
    .recentTransactions{
        background-color: inherit;
    }
    .transactionBox{
        background-color: white;
        white-space: pre-wrap;
        word-wrap: break-word;
        padding: 10px;
        border: solid 1px black;
    }

</style>
