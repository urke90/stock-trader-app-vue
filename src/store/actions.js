import axios from 'axios';

export const loadData = ({ commit }) => {
    const url = 'https://stock-trader-vue-94484-default-rtdb.firebaseio.com/data.json';
    const response = axios.get(url)
        .then(res => {
            if (res.data) {
                const { funds, stocks, portfolioStocks } = res.data;
                console.log('funds', funds);
                console.log('stocks', stocks);
                console.log('portfolioStocks', portfolioStocks);


                const porfolioStocksData = {
                    portfolioStocks,
                    funds
                };

                commit('SET_STOCKS', stocks);
                commit('SET_PORTFOLIO_STOCKS', porfolioStocksData);
            }
        });
    console.log('response', response)

}