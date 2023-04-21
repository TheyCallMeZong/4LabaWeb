<script setup>
import {catalog} from "@/store/catalog";
import BookItem from "@/components/BookItem/BookItem.vue";
const store = catalog()
</script>

<template src="./all-books.html" />
<style scoped src="./all-books.css"></style>

<script>
import { mapState, mapActions } from 'pinia'
import {Modal} from "usemodal-vue3";
export default {
  data() {
    return {
      book: Object,
      show: false
    };
  },
  components:{
    BookItem,
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

    showInfo(event){
      this.book = event
      this.show = true
    },

    closeInfo(){
      this.show = false;
    },

    addToCart(){

    }
  },

  created() {
    this.fetchNewArrivals();
  }
};
</script>