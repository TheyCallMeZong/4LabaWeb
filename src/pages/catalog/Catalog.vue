<script setup>
import TopNavbar from "@/components/TopNavbar.vue";
import BottomNavabar from "@/components/BottomNavabar.vue";
import AllBooks from "@/components/all-books/AllBooks.vue";
import Space from "@/components/Space.vue";
</script>

<template src="./catalog.html"/>

<script>
export default {
  components:{
    TopNavbar,
    BottomNavabar,
    AllBooks
  }
}
</script>

<style scoped src="./catalog.css">

</style>