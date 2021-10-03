<template>
    <div class="stocks__grid">
        <app-portfolio-stock
            v-for="stock in portfolioStocks"
            :key="stock.id"
            :stock="stock"
        ></app-portfolio-stock>
    </div>
</template>

<script>
    import AppStock from './PortfolioStock.vue';

    export default {
        components: {
            appPortfolioStock: AppStock
        },
        computed: {
            portfolioStocks() {
                return this.$store.getters.portfolioStocks;
            }
        }
    }
</script>

<style scoped>
    .stocks__grid {
        display: grid;
        grid-gap: 30px;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    }
</style>
