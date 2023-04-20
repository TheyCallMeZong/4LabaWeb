import { defineStore } from 'pinia'

export const catalog = defineStore('catalog', {
    state: () => {
        return {
            allBooks: [],
        }
    },

    getters: {
        results(state) {
            return state.allBooks;
        },

        isFetching(state) {
            return state.allBooks;
        }
    },

    actions: {
        async fetchNewArrivals() {
            const response = await fetch('/data/all-books.json');
            try {
                const result = await response.json();
                this.allBooks = result.books;
            } catch (err) {
                this.allBooks = [];
                console.error('Error loading new arrivals.html:', err);
                return err;
            }
        }
    }
})