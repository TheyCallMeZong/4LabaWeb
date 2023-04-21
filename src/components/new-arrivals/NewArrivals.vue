<script setup>
import {useCatalog} from "@/store/arrivals";
import BookItem from "@/components/BookItem/BookItem.vue";
const store = useCatalog()
</script>

<template src="./new-arrivals.html" />
<style scoped src="./new-arrivals.css"></style>

<script>
import { mapState, mapActions } from 'pinia'
import {Modal} from "usemodal-vue3";
export default {
  data() {
    return {
      show: false,
      book: Object
    };
  },
  components:{
  },

  computed: {
    ...mapState(useCatalog, {
      newArrivals: 'results'
    })
  },

  methods: {
    ...mapActions(useCatalog, [
      'fetchNewArrivals'
    ]),

    showInfo(event){
      this.book = event
      this.show = true;
    },

    closeInfo(){
      this.show = false;
    },
  },

  created() {
    this.fetchNewArrivals();
    console.log(this.newArrivals)
  }
};
</script>