const state = {
    portfolioStocks: [],
    funds: 10000
};

const mutations = {
    // id, price, quantity comes from Stock.vue ( where we purchase stock)
    'BUY_STOCK'(state, { id, price, quantity }) {
        const existingStock = state.portfolioStocks
            .find(portStock => portStock.id === order.id);

        if (existingStock) {
            existingStock.quantity += quantity;
        } else {
            // state.portfolioStocks.push(order);
            state.portfolioStocks.push({
                id,
                quantity
            });
        }

        state.funds -= quantity * price;
    },
    'SELL_STOCK'(state, { id, price, quantity }) {
        const existingStock = state.portfolioStocks
            .find(portStock => portStock.id === id);

        if (!existingStock) return;

        if (existingStock.quantity > quantity) {
            existingStock.quantity -= quantity;
        } else {
            state.portfolioStocks.splice(state.portfolioStocks.indexOf(existingStock), 1);
        }

        state.funds += quantity * price;
    }
};

const actions = {
    sellStock({ commit }, stock) {
        commit('SELL_STOCK', stock);
    }
}

const getters = {
    portfolioStocks(state, getters) {
        return state.portfolioStocks.map(stock => {
            const existingStock = getters.stocks.find(el => el.id === stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                price: existingStock.price,
                name: existingStock.name
            };
        });
    },
    funds(state) {
        return state.funds;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
