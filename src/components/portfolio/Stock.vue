<template>
    <div class="stock__wrapper">
        <div class="stock__heading">
            <h3>
                {{ stock.name }} <small>(price: {{ stock.price }} | Quantity: {{ stock.quantity }} )</small>
            </h3>
        </div>
        <div class="stock__body">
            <input
                type="number"
                placeholder="Quantity"
                v-model.number="quantity"
            >
            <button

                :disabled="btnDisabled"
            >Sell</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                quantity: 0
            };
        },
        props: {
            stock: {
                type: Object,
                required: true
            }
        },
        methods: {

        },
        computed: {
            btnDisabled() {
                return this.quantity <= 0 || !Number.isInteger(this.quantity);
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
    .stock__wrapper {
        border: 1px solid #E0E2DB;
        border-radius: 5px;
    }
    .stock__heading {
        background-color: #bfd8bd;
        background-color: #d8f3dc;
        padding: 8px
    }
    .stock__body {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 10px;
    }
    h3 {
        margin: 0;
    }
    input {
        padding: 5px;
        border: 1px solid #E0E2DB;
    }
    button {
        background-color: #52b788;
        border: none;
        outline: none;
        color: #FFFFFF;
        border-radius: 5px;
        padding: 8px 16px;
    }
    button:disabled {
        background-color: #95d5b2;
    }
</style>