<template>
  <div class="container">
    <ul>
      <li><router-link to="/" aria-current="page">Главная страница</router-link></li>
      <li class="dropdown right">
        <router-link to="#" class="dropbtn">Личный кабинет</router-link>
        <div class="dropdown-content">
          <router-link to="/sign-in/">Регистрация</router-link>
          <router-link to="/authorize/">Авторизация</router-link>
        </div>
      </li>
      <li class="right"><router-link to="/cart/">Корзина</router-link></li>
      <li><router-link to="/arrival/" aria-current="page">Новинки недели</router-link></li>
      <li><router-link to="/catalog/">Каталог</router-link></li>
      <li><router-link to="/about/" aria-current="page">О нас</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TopNavbar",
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style scoped>
div ul {
  list-style-type: none;
}

div li {
  float: left;
}

div li a {
  display: block;
  color: #fff;
  font-family: 'Shadows Into Light Two', cursive;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}

div li a:hover {
  color: #D2B48C;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.container{
  background: rgba(255, 255, 255, 10%);
  display: table;
  width: 100%;
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background: #000000;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.right {
  float: right;
}
</style>