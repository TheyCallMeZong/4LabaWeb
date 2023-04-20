<script setup>
import {catalog} from "@/store/catalog";
import BookItem from "@/components/BookItem/BookItem.vue";
const store = catalog()
</script>

<template src="./all-books.html" />
<style scoped src="./all-books.css"></style>

<script>
import { mapState, mapActions } from 'pinia'
import MyDialog from "@/pages/catalog/dialog/MyDialog.vue";
export default {
  data() {
    return {
      book: Object,
      show: false
    };
  },
  components:{
    BookItem,
    MyDialog
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
      this.show = true;
    },

    closeInfo(){
      this.show = false;
    }
  },

  created() {
    this.fetchNewArrivals();
    console.log(this.books)
  }
};
</script>