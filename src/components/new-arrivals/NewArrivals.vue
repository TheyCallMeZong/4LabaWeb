<script setup>
import {useCatalog} from "@/store/arrivals";
const store = useCatalog()
</script>

<template src="./new-arrivals.html" />
<style scoped src="./new-arrivals.css"></style>

<script>
import { mapState, mapActions } from 'pinia'
import MyDialog from "@/pages/catalog/dialog/MyDialog.vue";

export default {
  data() {
    return {
      show: false,
      book: Object
    };
  },
  components:{
    MyDialog
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
    }
  },

  created() {
    this.fetchNewArrivals();
  }
};
</script>