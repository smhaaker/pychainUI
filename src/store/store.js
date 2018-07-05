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
            {"index":0, "previous_hash":""},
        ],
    },
    getters: {
        // getfunds: state => {
        //     return state.funds
        // }
        getfunds: state => state.funds
    }
});