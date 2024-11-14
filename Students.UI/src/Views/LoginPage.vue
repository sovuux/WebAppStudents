<template>
  <Toast />
  <div class="wrapper">
    <div class="login">
      <div class="login-form">
        <h1 class="login-form-title">
          Авторизация
        </h1>
        <form class="login-form-input-box">
          <input
            v-model="user.login"
            type="text"
            placeholder="Имя пользователя"
            class="login-form-input-box-input"
            required
          >
          <img
            :src="UserIcon"
            alt="user"
            class="login-form-input-box-icon"
          >
        </form>
        <form class="login-form-input-box">
          <input 
            v-model="user.password"
            type="text"
            placeholder="Пароль"
            class="login-form-input-box-input"
            required
          >
          <img
            :src="LockIcon"
            alt="lock"
            class="login-form-input-box-icon"
          >
        </form>
        <ButtonBaseComponent
          class="login-form-button"
          @click-action="tryLogin"
        >
          <template #buttonContent>
            Войти
          </template>
        </ButtonBaseComponent>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonBaseComponent from "@/components/baseComponents/Button/ButtonBaseComponent.vue";
import Toast from "primevue/toast";

import UserIcon from "@/assets/SvgImages/user.svg";
import LockIcon from "@/assets/SvgImages/lock.svg"

import router from "@/router";

import { ref } from "vue";
import { UserType } from "@/types/models.js";
import { useToast } from "primevue/usetoast";

const user = ref<UserType>({
  login: "",
  password: ""
});

const toast = useToast()

const tryLogin = () => {
  if (user.value.login === "admin" && user.value.password === "admin") {
    openHomePage()
  }
  else {
    showError()
  }
}

function showError() {
  toast.add(
      { severity:"error", summary: "Ошибка авторизации", detail: "Неверный логин или пароль!", life: 3000 }
  )
}

function openHomePage() {
  router.push("/main-page");
}
</script>

<style scoped lang="scss">
.wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background: url("../../public/images/LoginPageBack.jpg") no-repeat center;
}
.login {
  width: 30rem;
  color: #fff;
  background: transparent;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 0.1rem solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 2rem 3rem;
  &-form {
    &-title {
      font-size: 3rem;
      text-align: center;
      user-select: none;
    }
    &-input-box {
      position: relative;
      width: 100%;
      height: 50px;
      margin: 1rem 0;

      &-input {
        width: 100%;
        height: 100%;
        padding: 1rem 2rem 1rem 1rem;
        background: transparent;
        outline: none;
        border: 2px solid white;
        border-radius: 40px;
        font-size: 1rem;
        color: #fff;

        &::placeholder {
          color: #ffffff;
        }
      }
      &-icon {
        position: absolute;
        right: 2rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    &-button {
      width: 100%;
      height: 3rem;
      background: #ffffff;
      outline: none;
      border-radius: 40px;
      color: #333;
      box-shadow: 0 0 10px rgba(0, 0, 0, .1);
      cursor: pointer;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 1rem;

      &:hover {
        background: rgba(255, 255, 255, 0.7);
        color: black;
      }
    }
  }
}
</style>