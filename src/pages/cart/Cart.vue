<script setup>
import BottomNavabar from "@/components/BottomNavabar.vue";
import TopNavbar from "@/components/TopNavbar.vue";
import {useCart} from "/src/store/cart"
</script>

<template src="./cart.html" />

<script>
import { mapState, mapActions } from 'pinia'
export default {
  components:{
    BottomNavabar,
    TopNavbar
  },

  mounted() {
  },

  computed:{
    ...mapState(useCart, {
      contents: 'getContents',
      count: 'count',
      cartTotal: 'total'
    }),

    total() {
      console.log(this.contents)
      return Math.max(this.cartTotal - this.promo.value, 0).toFixed(2);
    }
  },

  data() {
    return {
      currency: {
        name: 'RUB',
        symbol: '₽'
      },
      promo: {
        code: 'EXAMPLECODE',
        value: 5
      }
    };
  }
}
</script>

<style scoped src="./cart.css">

</style>