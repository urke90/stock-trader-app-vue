import axios from 'axios';
import { SET_STOCKS, SET_PORTFOLIO_STOCKS } from './constants';

export const loadData = ({ commit }) => {
    const url = 'https://stock-trader-vue-94484-default-rtdb.firebaseio.com/data.json';
    axios.get(url)
        .then(res => {
            if (res.data) {
                const { funds, stocks, portfolioStocks } = res.data;
                const porfolioStocksData = {
                    portfolioStocks,
                    funds
                };

                commit(SET_STOCKS, stocks);
                commit(SET_PORTFOLIO_STOCKS, porfolioStocksData);
            }
        });
}