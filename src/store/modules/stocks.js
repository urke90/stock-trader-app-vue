import stocks from '../../data/stocks';

const state = {
    stocks: []
}

const mutations = {
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS'(state) {

    }
}

const actions = {
    initStocks({  commit }) {
        commit('SET_STOCKS', stocks);
    },
    buyStock({ commit }, order) {
        console.log('kurac', order);
        commit('BUY_STOCK', order);
    },
    randomizeStocks({ commit }) {
        commit('RND_STOCKS')
    }
}

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
