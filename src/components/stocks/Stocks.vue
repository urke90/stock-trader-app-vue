<template>
    <div class="stocks__grid">
        <app-stock
            v-for="stock in stocks"
            :key="stock.id"
            :stock="stock"
        ></app-stock>
    </div>
</template>

<script>
    import Stock from './Stock.vue';
    export default {
        components: {
            appStock: Stock
        },
        computed: {
            stocks() {
                return this.$store.getters.stocks;
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
