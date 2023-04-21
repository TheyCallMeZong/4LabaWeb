
<template>
  <Space></Space>
  <div>
    <main class="box">
      <h2>Авторизация</h2>
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
        <div>
          <router-link class="button" style="float: left" to="/">Назад</router-link>
          <button type="submit" name="" style="float: left">Подтвердить</button>
          <router-link class="button" style="float: left" to="/sign-in">Регистрация</router-link>
        </div>
      </form>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import TopNavbar from "@/components/TopNavbar.vue";

export default {
  components: {TopNavbar}

}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  background-color: #1c1c1c;
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
  color: #1c1c1c;
  text-align: center;
}

.box .inputBox label {
  color: #1c1c1c;
}

.box .inputBox input {
  background: transparent;
  border: none;
  border-bottom: 1px solid #1c1c1c;
  color: #1c1c1c;
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
  color: #1c1c1c;
  cursor: pointer;
  font-weight: 600;
  padding: 10px 20px;
  letter-spacing: 2px;
  outline: none;
  text-transform: uppercase;
  text-decoration: none;
  margin: 2px 10px 2px 7px;
  display: inline-block;
}

.box input[type="submit"]:hover,
.box button[type="submit"]:hover,
a.button:hover {
  opacity: 0.8;
}


</style>

