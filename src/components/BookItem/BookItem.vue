<script setup>
import {useCart} from '/src/store/cart.js'
const cart = useCart()
</script>

<template>
  <div v-for="booki in books" class="books">
    <p><span> Название новинки:</span> {{ booki.title }}&nbsp;</p>
    <p><span>Описание кинги:</span> {{ booki.description }}&nbsp;</p>
    <p><span>Категория:</span> {{ booki.category }}</p>
    <div>
      <img :src="booki.image" alt="photo" :width="booki.size"/>
    </div>
    <p><span> Цена: {{ booki.price }} {{ booki.currency }} </span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button type="submit" class="buy-btn"
        @click="addToCart(booki)">
        В корзину
      </button>
      &nbsp;&nbsp;&nbsp;
      <button type="submit" class="buy-btn"
              @click="showInfo(booki)">
        Подробнее
      </button>
    </p>
  </div>
</template>

<script>
import {mapActions} from "pinia";

export default {
  name: "BookItem",
  props:{
    books: Object
  },

  methods:{
    showInfo(book){
      this.$emit('showInfo', book)
    },

    ...mapActions(useCart, [
      'addToCart'
    ])
  }
}
</script>

<style scoped>
p {
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #D2B48C;
}

h1{
  font-weight: bold;
  color: #D2B48C;
  text-align: center;
  font-family: 'Shadows Into Light Two', cursive;
}

img {
  max-width: 100%;
  height: auto;
}

.books {
  border: 3px solid rgb(255, 255, 255);
  padding: 10px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 10%);
  border-radius: 15px;
}

.books p {
  margin: 5px 0;
}

.books img {
  margin-top: 10px;
  margin-bottom: 10px;
}

.container {
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
}

*{
  position: relative;
}

.buy-btn{
  padding: 10px 15px;
  background: none;
  border: 2px solid #D2B48C;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: #fff;
  text-align: center;
}

.buy-btn:hover{
  background: #D2B48C;
  color: #000;
  border: 2px solid #fff;
}

span{
  color: #d9a03d;
}
</style>