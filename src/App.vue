<template>
    <div class="container">
        <app-header
            @toggleDropdown="toggleSaveLoadDropdown($event)"
            :dropdown-is-open="dropDownIsOpen"
        ></app-header>
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import AppHeader from './components/Header.vue';
    export default {
        data() {
            return {
                dropDownIsOpen: false,
                shouldHideStocks: false,
            };
        },
        components: {
            AppHeader
        },
        methods: {
            toggleSaveLoadDropdown() {
                this.dropDownIsOpen = !this.dropDownIsOpen;
                this.shouldHideStocks = !this.shouldHideStocks;

            }
        },
        created() {
            this.$store.dispatch('initStocks');
        }
    }
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
