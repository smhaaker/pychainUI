<template>
    <div >

        <span>FOR LOOP: {{testoutput}}</span>

         <span>{{currentAddress}}</span>
         <span>CURRENT!!!! {{blockchain[10].transactions[0].amount}}</span><br/>
                  <!-- <span>{{currentSender}}</span> -->

            <!-- <li v-for='block in blockchain' :key="block.index">{{block}} <br/><br/><span>{{gettransactions.transactions[0].recipient}}</span><br/><br/><br/><br/> </li> -->
               <!-- <span>{{newchain(146)}}</span> -->
               <!-- looks like we need to use this https://vuejs.org/v2/guide/migration.html#Filters-Outside-Text-Interpolations-removed
                use filter in div class blockinfo instead of v for.  -->

            <!-- <span>{{gettransactions.transactions[0].recipient}}</span> -->
    <!-- <span>{{testoutput}}</span> -->

                  <span>{{searchKey}}</span>
        <!-- <input type="text" v-model="searchKey"> -->
        <ul class="pagination" >
            <li active-class="active" class="pagination" v-for="pageNumber in totalPages" :key="pageNumber.id" v-if="Math.abs(pageNumber - currentPage) < 7 || pageNumber == totalPages || pageNumber == 1">
            <a active-class="active" class="pagination" v-bind:key="pageNumber" href="#" @click="setPage(pageNumber)" :class="{current: currentPage === pageNumber, last: (pageNumber == totalPages && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 1 && Math.abs(pageNumber - currentPage) > 3)}">{{ pageNumber }}</a>
            </li>
        </ul>

<input type="text" v-model="searchKey">
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
data () { return this.$store[this.topicId][this.dayStamp] }
<script>
import moment from 'moment'
export default {
    data () {
        return {
        searchKey: 'ddd',
        currentPage: 1,
        itemsPerPage: 10,
        resultCount: 0,
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
            var index = this.currentPage * this.itemsPerPage - this.itemsPerPage
            return this.blockchain.slice(index, index + this.itemsPerPage)
        },
        testoutput(){
            let total = 10;
            let secondtotal = 0;
            for(let i = 0; i <= this.blockchain.length; i++){
                    total = i;
                    total += this.blockchain[10].transactions.length;
                // for(let j = 0; j <= this.blockchain[i].length; j++){
                //     total = j;
                // }
            }
            // total = this.blockchain.length
            return total  + "   BLAH BLAH BLAH   " + this.blockchain[10].transactions.length;
        },
        blockchain(){
            return this.$store.state.blockchain;
        },
        currentAddress(){
            return this.$store.state.public_key;
        },
        gettransactions() { 
            return this.$store.getters.gettransactions;
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
        newchain: function(number){
            console.log(this.$store.state.blockchain[number].transactions[0].recipient)
            return this.$store.state.blockchain[number].transactions[0].recipient;
        },
        gettransactionsMethod() { 
            return this.$store.getters.gettransactions;
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
