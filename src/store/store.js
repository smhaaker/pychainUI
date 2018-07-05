import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        wallet: 'blank',
        public_key: 'public_key',
        private_key: 'private_key',
        funds: 0,
        current_block: null,
        blockchain: [          
            {"index":1, "previous_hash":"Tom"},
        ],
    },
    getters: {
        // getfunds: state => {
        //     return state.funds
        // }
        getfunds: state => state.funds
    }
});