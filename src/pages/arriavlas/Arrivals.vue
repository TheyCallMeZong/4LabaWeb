<script setup>
import TopNavbar from "@/components/TopNavbar.vue";
import NewArrivals from "@/components/new-arrivals/NewArrivals.vue";
import Space from "@/components/Space.vue";
import BottomNavabar from "@/components/BottomNavabar.vue";
</script>

<template src="./arrivals.html" />
<script>
export default {
  components:{
    TopNavbar,
    NewArrivals,
    Space,
    BottomNavabar
  }
}
</script>

<style scoped src="./arrivals.css" />