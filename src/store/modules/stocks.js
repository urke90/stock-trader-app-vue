import stocks from '../../data/stocks';

const state = {
    stocks: []
}

const mutations = {
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS'(state) {
       state.stocks.forEach(stock => {
           stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
       });
    }
}

const actions = {
    initStocks({  commit }) {
        commit('SET_STOCKS', stocks);
    },
    buyStock({ commit }, order) {
        commit('BUY_STOCK', order);
    },
    randomizeStocks({ commit }) {
        console.log('randomize stocks action')
        commit('RND_STOCKS')
    }
}


/*
END DAY btn
    1. randomize stocks
        - cena je cena * (1 + Math.Random() - 0.5)  ---- zaokruziti
*/

const getters = {
    getStocks(state) {
        return state.stocks;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
