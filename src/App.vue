<template>
    <div class="container">
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    export default {
        components: {
            appHeader: Header
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
</style>
