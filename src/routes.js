import AppHome from './components/Home.vue';
import AppPortfolio from './components/portfolio/Portfolio.vue';
import AppStocks from './components/stocks/Stocks.vue';

export const routes = [
    { path: '/', component: AppHome },
    { path: '/portfolio', component: AppPortfolio },
    { path: '/stocks', component: AppStocks }
];
