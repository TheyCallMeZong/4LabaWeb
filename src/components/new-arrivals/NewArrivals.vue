<script setup>
import {useCatalog} from "@/store/arrivals";

const store = useCatalog()
</script>

<template src="./new-arrivals.html" />
<style scoped src="./new-arrivals.css"></style>

<script>
import { mapState, mapActions } from 'pinia'

export default {
  data() {
    return {};
  },

  computed: {
    ...mapState(useCatalog, {
      newArrivals: 'results'
    })
  },

  methods: {
    ...mapActions(useCatalog, [
      'fetchNewArrivals'
    ])
  },

  created() {
    this.fetchNewArrivals();
  }
};
</script>