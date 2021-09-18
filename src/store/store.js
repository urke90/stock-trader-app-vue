import Vue from 'vue';
import Vuex from 'vuex';

import stocks from './modules/stocks.js';
import portfolio from './modules/portfolio.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        stocks,
        portfolio
    }
});

// buy stock povezati prvo
// napraviti novu comp za portfolio kao stock
// 1. treba da ima i quantity
// 2. sell umesto buy i treba da se poveze sa vuex
// probati sa mapActions da uradim
// U PORTFOLIO KOMPONENTI TREBA DA SE GETTERS STOCK PORTFOLIO