<template>
    <div>
         <span>{{currentAddress}}</span>
                  <!-- <span>{{currentSender}}</span> -->
        <p>{{gettransactions}}</p>
        <!-- <input type="text" v-model="searchKey"> -->
        <ul class="pagination">
            <li active-class="active" class="pagination" v-for="pageNumber in totalPages" :key="pageNumber.id" v-if="Math.abs(pageNumber - currentPage) < 3 || pageNumber == totalPages || pageNumber == 1">
            <a active-class="active" class="pagination" v-bind:key="pageNumber" href="#" @click="setPage(pageNumber)" :class="{current: currentPage === pageNumber, last: (pageNumber == totalPages && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 1 && Math.abs(pageNumber - currentPage) > 3)}">{{ pageNumber }}</a>
            </li>
        </ul>
        <ul>
            <li v-for="block in paginate" :key="block.index">
                <div class="blockinfo" v-for="tx in block.transactions" v-if="currentAddress == tx.recipient || currentAddress == tx.sender" :key="tx.index">               
                    Block Number: {{block.index}}
                    <span>{{block.timestamp | unixFormat}}</span>
                </div>    

                <div class="blockinfo" v-for="tx in block.transactions" v-if="currentAddress == tx.recipient || currentAddress == tx.sender" :key="tx.index">
                    <div>previous_hash: {{ block.previous_hash }}</div>
                    <div>Sender: {{ tx.sender }}</div>
                    <div class="recentrecipient">Recipient: {{ tx.recipient }}</div>
                    <div>Amount: {{ tx.amount }}</div>
                    <div>currentAddress equals sender or recipient: {{currentAddress == tx.recipient || currentAddress == tx.sender}}</div>
                </div>
            </li>
        </ul>

    </div>

    <!-- <div>
        <p>Transaction List</p>
        <ul class="transactionlist">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
        </ul>
    </div> -->
</template>

<script>
import moment from 'moment'
export default {
    data () {
        return {
        searchKey: '',
        currentPage: 1,
        itemsPerPage: 10,
        resultCount: 0,
        currentAddress2: null
        }
    },
    computed: {
        gettransactions: function()
        {
            return this.$store.getters.gettransactions
        },
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
            this.resultCount = this.blockchain.length
            if (this.currentPage >= this.totalPages) {
              this.currentPage = this.totalPages
            }
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
        }
    },
    methods: {
        setPage: function(pageNumber) {
          this.currentPage = pageNumber
        },
    },
    
}
</script>

<style>
    .transactionlist{
        display: block;
        background-color: white;
        white-space: pre-wrap;
        word-wrap: break-word;
    }
    .transactionlist li{
        background-color: gray;
        margin: 10px;
    }
    .recentrecipient{
        white-space: pre-wrap;
        word-wrap: break-word;
    }
    .blockinfo{
        padding: 10px;
    }
    .pagination{
        background-color: white;
    }
</style>
