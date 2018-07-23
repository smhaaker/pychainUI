<template>
    <div>
        <!-- <input type="text" v-model="searchKey"> -->
        <ul class="pagination">
            <li active-class="active" class="pagination" v-for="pageNumber in totalPages" :key="pageNumber.id" v-if="Math.abs(pageNumber - currentPage) < 10 || pageNumber == totalPages || pageNumber == 1">
            <a active-class="active" class="pagination" v-bind:key="pageNumber" href="#" @click="setPage(pageNumber)" :class="{current: currentPage === pageNumber, last: (pageNumber == totalPages && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 1 && Math.abs(pageNumber - currentPage) > 3)}">{{ pageNumber }}</a>
            </li>
        </ul>
        <!-- <button class="btn btn-primary" @click="onLoadData">{{ view === 'chain' ? 'Load Blockchain' : 'Load Transactions' }}</button> -->
        <ul class="transactions">
            <li v-for="block in paginate" :key="block.index">
                <div class="transacationdiv">               
                    Block Number: {{block.index}}
                    Timestamp: {{block.timestamp}}
                    <span>{{block.timestamp | unixFormat}}</span>
                    <!-- <span>{{ moment(block.timestamp).format('MMMM Do YYYY, h:mm:ss a') }}</span> -->
                    <!-- <span>{{ block.timestamp | moment('YYYY')}}</span> -->
                </div>    
                <div v-for="tx in block.transactions" :key="tx.index" class="blockList">
                    <div>previous_hash: {{ block.previous_hash }}</div>
                    <div>Sender: {{ tx.sender }}</div>
                    <div>Recipient: {{ tx.recipient }}</div>
                    <div>Amount: {{ tx.amount }}</div>
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
        searchKey: '',
        currentPage: 1,
        itemsPerPage: 10,
        resultCount: 0
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
.transactions{
    background-color: white;
}
.transactions li{
    background-color: #555555;
    color: white;
    border: 1px solid #555555;
    padding: 0px;
} 
.transactions ul{
    background-color: white;
    margin: 10px;
} 
.transactions a{
    background-color: antiquewhite;
    padding: 10px;
} 
.transacationdiv {
    padding: 10px;
    border: 1px solid orange;
}
.pagination {
    display: inline-block;
    background-color: white;
}
.pagination a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color .3s;
    border: 1px solid #ddd;
    margin: 0 4px;
}
.pagination a:active {
    background-color: #4CAF50;
    color: white;
    border: 1px solid #4CAF50;
}
.pagination a:hover {
    background-color: #4CAF50;
    color: white;
    border: 1px solid #4CAF50;
}
/* .pagination a:hover:not(.active) {background-color: #ddd;} */
.blockList{
    background-color: white;
    color: black;
    border: 1px solid orange;
    padding: 10px;
    white-space: pre-wrap;
    word-wrap: break-word;
}

</style>
