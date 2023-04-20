<script setup>
import {catalog} from "@/store/catalog";
const store = catalog()
</script>

<template src="./all-books.html" />
<style scoped src="./all-books.css"></style>

<script>
import { mapState, mapActions } from 'pinia'

export default {
  data() {
    return {
      book: Object
    };
  },
  components:{

  },

  computed: {
    ...mapState(catalog, {
      books: 'results'
    })
  },

  methods: {
    ...mapActions(catalog, [
      'fetchNewArrivals'
    ]),
  },

  created() {
    this.fetchNewArrivals();
    console.log(this.books)
  }
};
</script>