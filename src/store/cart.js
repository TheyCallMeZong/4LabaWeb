import { defineStore } from 'pinia'

export const useCart = defineStore('cart-store', {
    state: () => {
        return {
            cart: []
        }
    },

    getters: {
        getContents(state) {
            const {cart} = state;

            return cart;
        },

        count(state) {
            return state.cart.length;
        },

        total(state) {
            const {cart} = state;

            return cart.reduce((total, item) => {
                total = total + item.price;

                return total;
            }, 0);
        }
    },

    actions: {
        addToCart(book) {
            this.cart = this.cart.slice(0);
            this.cart.push(book);
        }
    }
})