<template>
    <div class="container">
        <app-header></app-header>
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    export default {
        components: {
            appHeader: Header
        },
        created() {
            this.$store.dispatch('initStocks');
        }
    }
    /*
       TODO (code refactor in the end)
       1. should emit event from APP.vue which will trigger toggleDropdown function
       2. when save-day dropdown is opened opacity of stock grid should be 0.1/0.2 or so
       3. check this.$root --- usage and cons and pros
       4. can provice/inject be used in this case
    */
</script>

<style>
    body {
        padding: 30px;
    }
    .container {
        box-sizing: border-box;
        max-width: 1200px;
        margin: 0 auto;
    }
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    .slide-enter-active {
        animation: slide-in 200ms ease-out forwards;
    }
    .slide-leave-active {
        animation: slide-out 200ms ease-out forwards;

    }
    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0px);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0px);
            opacity: 1;
        }
        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }
</style>
