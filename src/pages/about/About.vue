<script setup>
import TopNavbar from "@/components/TopNavbar.vue";
import BottomNavabar from "@/components/BottomNavabar.vue";
import Space from "@/components/Space.vue";
</script>

<template src="./about.html"/>

<script>
export default {
  name: "About",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  components:{
    TopNavbar,
    BottomNavabar
  }
}

</script>

<style scoped src="./about.css"/>