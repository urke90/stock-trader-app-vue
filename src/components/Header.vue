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
                <a href="#">End Day</a>
            </li>
            <li class="list__item">
                <a href="#">Save & Load</a>
                <ul class="nav__list nav__list--data">
                    <li class="list__item">
                        <a href="#">Save Data</a>
                    </li>
                    <li class="list__item">
                        <a href="#">Load Data</a>
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
    export default {
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        }
    }
</script>

<style scoped>
    /*
    ALL GRAY COLORS
        E0E2DB
        D2D4C8
        B8BDB5
        889696
        5F7470
    */

    .nav__wrapper {
        background-color: #E0E2DB;
        display: flex;
        justify-content: space-between;
        border-radius: 5px;
        margin-bottom: 20px;
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
    .nav__list--data {
        display: none;
    }
    .router-link-active {
        background-color: #B8BDB5;
    }
</style>
