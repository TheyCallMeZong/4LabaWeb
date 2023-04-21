<script setup>
import Space from "@/components/Space.vue";
import TopNavbar from '../../../components/TopNavbar.vue';
</script>
<template>
  <div>
  <Space/>
    <main class="box">
      <h2>Регистрация</h2>
      <form @submit.prevent>
        <div class="inputBox">
          <label for="userName">Логин</label>
          <input
              type="text"
              name="userName"
              id="userName"
              placeholder="введите ваш логин"
              required
          />
        </div>
        <div class="inputBox">
          <label for="userPassword">Пароль</label>
          <input
              type="password"
              name="userPassword"
              id="userPassword"
              placeholder="введите ваш пароль"
              required
          />
        </div>
        <div class="inputBox">
          <label for="userConfirmPassword">Подтверждение пароля</label>
          <input
              type="password"
              name="userPassword"
              id="userConfirmPassword"
              placeholder="подтвердите ваш пароль"
              required
          />
        </div>
        <button type="submit" name="" style="float: left">Подтвердить</button>
        <router-link class="button" style="float: left" to="/authorize">Авторизация</router-link>
      </form>
    </main>
    <footer></footer>
  </div>
</template>

<script>


export default {
  name: "SignIn",
  components:{
    Space
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  background-color: #111;
  font-family: 'Shadows Into Light Two', cursive;
  height: 100vh;
  margin: 0;
  padding: 0;
}

header {
  display: none;
}

.box {
  font-family: 'Shadows Into Light Two', cursive;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 15px 25px rgba(255, 255, 255, 0.4);
  margin: auto auto;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
}

.box h2 {
  margin: 0 0 30px 0;
  padding: 0;
  color: #111;
  text-align: center;
}

.box .inputBox label {
  color: #111;
}

.box .inputBox input {
  background: transparent;
  border: none;
  border-bottom: 1px solid #111;
  color: #111;
  font-size: 18px;
  letter-spacing: 2px;
  margin-bottom: 30px;
  outline: none;
  padding: 10px 0;
  width: 100%;
}

.box input[type="submit"],
.box button[type="submit"],
a.button {
  font-family: 'Shadows Into Light Two', cursive;
  background: #f40359;
  font-size: 11px;
  border: none;
  border-radius: 5px;
  color: #111;
  cursor: pointer;
  font-weight: 600;
  padding: 10px 20px;
  letter-spacing: 2px;
  outline: none;
  text-transform: uppercase;
  text-decoration: none;
  margin: 2px 20px 2px 30px;
  display: inline-block;
}

.box input[type="submit"]:hover,
.box button[type="submit"]:hover,
a.button:hover {
  opacity: 0.8;
}

</style>
