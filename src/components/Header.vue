<template>
    <nav class="nav__wrapper">
        <ul class="nav__list">
            <router-link
                class="list__item"
                to="/"
                tag="li"
                exact
            >Stock Trader</router-link>
            <router-link
                class="list__item"
                to="/portfolio"
                tag="li"
            >Portfolio</router-link>
            <router-link
                class="list__item"
                to="/stocks"
                tag="li"
            >Stocks</router-link>
        </ul>
        <ul class="nav__list nav__list--second">
            <li class="list__item">
                <button @click="endDayHandler">End Day</button>
            </li>
            <li class="list__item list__item-dropdown">
                <button @click="dropdownIsOpened = !dropdownIsOpened">Save & Load</button>
                <ul
                    class="nav__list nav__list--data"
                    :class="{'nav__list--visible': dropdownIsOpened}"
                >
                    <li class="list__item">
                        <button @click="saveDataHandler">Save Data</button>
                    </li>
                    <li class="list__item">
                        <button @click="loadDataHandler">Load Data</button>
                    </li>
                </ul>
            </li>
            <li class="list__item">
                <strong>Funds: {{ funds | currency }}</strong>
            </li>
        </ul>
    </nav>
</template>

<script>
    import axios from 'axios';
    import { mapActions } from 'vuex';

    export default {
        data() {
            return {
                dropdownIsOpened: false
            };
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        },
        methods: {
            ...mapActions([
                'randomizeStocks',
                'loadData'
            ]),
            endDayHandler() {
                this.randomizeStocks();
            },
            saveDataHandler() {
                const url = 'https://stock-trader-vue-94484-default-rtdb.firebaseio.com/data.json';

                const data = {
                    funds: this.$store.getters.funds,
                    portfolioStocks: this.$store.getters.portfolioStocks,
                    stocks: this.$store.getters.stocks
                };

                axios.put(url, data)
                    .then(res => res)
                    .catch(err => console.error(err));
            },
            loadDataHandler() {
                this.loadData();
            }
        }
    }
</script>

<style scoped>
    .nav__wrapper {
        background-color: #E0E2DB;
        display: flex;
        justify-content: space-between;
        border-radius: 5px;
        margin-bottom: 20px;
    }
    .nav__wrapper button {
        border: none;
        outline: none;
        background-color: inherit;
        cursor: pointer;
    }
    .nav__list {
        display: flex;
    }
    .list__item,
    .list__item a {
        padding: 10px;
        color: #000000;
        text-decoration: none;
        cursor: pointer;
    }
    .list__item-dropdown {
        position: relative;
    }
    .nav__list--data {
        position: absolute;
        background-color: #E0E2DB;
        display: none;
        top: 38px;
    }
    .nav__list--data.nav__list--visible {
        display: block;
    }
    .router-link-active {
        background-color: #B8BDB5;
    }
</style>
