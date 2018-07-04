<template>
    <div>
        <!-- <input type="text" v-model="searchKey"> -->

        <ul class="pagination">
            <li active-class="active" class="pagination" v-for="pageNumber in totalPages" :key="pageNumber.id" v-if="Math.abs(pageNumber - currentPage) < 3 || pageNumber == totalPages || pageNumber == 1">
            <a active-class="active" class="pagination" v-bind:key="pageNumber" href="#" @click="setPage(pageNumber)" :class="{current: currentPage === pageNumber, last: (pageNumber == totalPages && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 1 && Math.abs(pageNumber - currentPage) > 3)}">{{ pageNumber }}</a>
            </li>
        </ul>
        <button class="btn btn-primary" @click="onLoadData">{{ view === 'chain' ? 'Load Blockchain' : 'Load Transactions' }}</button>

        <p>{{ onLoadData }}</p>
        <ul class="transactions">
            <li v-for="block in paginate" :key="block.index">Block Number:   {{block.index}}   {{ block.previous_hash }}</li>
            
        </ul>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    data () {
        return {
        blockchain: [          
            {"index":1, "previous_hash":"Tom"},
            {"id":2, "name":"Kate"},
            {"id":3, "name":"Jack"},
            {"id":4, "name":"Jill"},
            {"id":4, "name":"bill"},
            {"id":4, "name":"aill"},
            {"id":4, "name":"cill"},
            {"id":4, "name":"dill"},
            {"id":4, "name":"eill"},
            {"id":4, "name":"cill"},
            {"id":4, "name":"dill"},
            {"id":4, "name":"eill"}
        ],
        wallet: {
            private_key: 'none',
            public_key: 'none'
        },
        wallet: null,
        view: 'chain',
        walletLoading: false,
        txLoading: false,
        dataLoading: false,
        showElement: null,
        error: null,
        success: null,
        funds: 0,
        block: 0,
        funds: null,
        outgoingTx: {
            recipient: '',
            amount: 0
        },

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
        }
    },
    methods: {
        setPage: function(pageNumber) {
          this.currentPage = pageNumber
        },
        onLoadData: function () {
            if (this.view === 'chain') {
                var vm = this
                this.dataLoading = true
                axios.get('http://localhost:5000/chain')
                    .then(function (response){
//                        console.log(response.data[response.data.length - 1 ].index) // last block index
                        console.log(response.data)
                        vm.block = response.data.length - 1// loads last block
                        vm.blockchain = response.data
                        vm.dataLoading = false
                        // console.log(vm.blockchain)
                    })
                    .catch(function (error){
                        vm.dataLoading = false
                        vm.error = 'Something went wrong'
                    });
            } else {
                var vm = this
                axios.get('http://localhost:5000/transactions')
                    .then(function (response){
                        console.log(response.data)
                        vm.openTransactions = response.data
                        vm.dataLoading = false
                    })
                    .catch(function (error){
                        vm.dataLoading = false
                        vm.error = 'Something went wrong'
                    });

            }
            console.log(vm.blockchain[100].index)

        }
    }
}
</script>


<style>

.transactions{
    background-color: white;
}

.transactions li{
    background-color: blue;
    color: white;
 
} 

.transactions ul{
    background-color: white;
    margin: 10px;
} 

.transactions a{
    background-color: antiquewhite;
    padding: 10px;
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


</style>
