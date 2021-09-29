<template>
    <div class="stock__wrapper">
        <div class="stock__heading">
            <h3>{{ stock.name }} <small>(price: {{ stock.price }})</small></h3>
        </div>
        <div class="stock__body">
            <input
                type="number"
                placeholder="Quantity"
                v-model.number="quantity"
                :class="{'stock__input--danger': insufficientFunds}"
            >
            <button
                @click="buyStockHandler"
                :disabled="btnDisabled"
            >{{ insufficientFunds ? 'No funds left' : 'Buy' }}</button>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

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
            ...mapActions([ 'buyStock' ]),
            buyStockHandler() {
                const order = {
                    id: this.stock.id,
                    price: this.stock.price,
                    quantity: this.quantity
                };
                this.buyStock(order);
                this.quantity = 0;
            }
        },
        computed: {
            btnDisabled() {
                return this.insufficientFunds || this.quantity <= 0 || !Number.isInteger(this.quantity);
            },
            funds() {
                return this.$store.getters.funds;
            },
            insufficientFunds() {
                return this.quantity * this.stock.price > this.funds;
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
    .stock__input--danger {
        border: 1px solid #FF0000;
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
