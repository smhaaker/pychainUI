import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        wallet: 'blank',
        public_key: 'public_key',
        private_key: 'private_key',
        funds: null,
        current_block: null,
        blockchain: [          
            // { "index": 1, "previous_hash": "c775ae7455f086e2fc68520d31bfebfdb18ffeaceb933085c510d5f8d2177813", "proof": 92, "timestamp": 1528478760.7629466, "transactions": [ { "amount": 10, "recipient": "30819f300d06092a864886f70d010101050003818d0030818902818100b312dfd288e1f7d47927411199495129a5ee999bf317c3fd06524ee511b1c94e3fa865501bc4d2c0cd90be4f56f71857244e75568dfa206f60bcaf4aa1d14279918163c0a03ffb77140f57ca2b147df95800a599a4256ceadac503e88da0fd7b1751f6166c3e520fa250c9ec582e407b613d140f2b09ddefbf0f945fad772bcd0203010001", "sender": "MINING", "signature": "" } ] },
        ],
        error: null,
        success: null
    },
    getters: {
        getfunds: state => state.funds,
        gettransactions: state => state.blockchain[1],
        geterror: state => state.error,
    }
});