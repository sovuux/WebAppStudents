<template>
  <header class="header">
    <ButtonBaseComponent class="header-logo">
      <template #buttonContent>
        <img
          class="header-logo-image"
          :src="Logo"
          alt="logo"
        >
      </template>
    </ButtonBaseComponent>
    <nav class="header-nav">
      <ul class="header-nav-ul">
        <li class="header-nav-li">
          <ButtonBaseComponent
            class="header-nav-li-button"
            @click-action="goToMainPage"
          >
            <template #buttonContent>
              <img
                :src="HomeSvg"
                alt="list"
                class="header-nav-li-button-img"
              >
            </template>
          </ButtonBaseComponent>
        </li>
        <li class="header-nav-li">
          <ButtonBaseComponent
            class="header-nav-li-button"
            @click-action="goToTableStudents"
          >
            <template #buttonContent>
              <img
                :src="TableSvg"
                alt="list"
                class="header-nav-li-button-img"
              >
            </template>
          </ButtonBaseComponent>
        </li>
        <li class="header-nav-li">
          <ButtonBaseComponent 
            class="header-nav-li-button button-exit"
            @click-action="appExit"
          >
            <template #buttonContent>
              <img
                :src="ExitSvg"
                alt="list"
                class="header-nav-li-button-img"
              >
            </template>
          </ButtonBaseComponent>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import Logo from "../../../../public/images/logo.ico";
import HomeSvg from "@/assets/SvgImages/home.svg"
import ExitSvg from "@/assets/SvgImages/exit.svg"
import TableSvg from "@/assets/SvgImages/table.svg"
import ButtonBaseComponent from "@/components/baseComponents/Button/ButtonBaseComponent.vue";
import router from "@/router";

function appExit() {
  router.push("/")
}
function goToMainPage() {
  router.push("/main-page");
}
function goToTableStudents() {
  router.push("/table-students")
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: white;
  border-bottom: 3px solid black;
  flex-shrink: 0;
  position: fixed;
  z-index: 99999;
  opacity: 0.9;
  &-logo {
    margin-left: 2rem;
    border-radius: 50%;
    align-self: center;
    background: #e3e3e3;
    backdrop-filter: blur(50px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border: 0.5px solid #818181;
    cursor: default;
    &-image {
      padding: 0.2rem;
      width: 3rem;
      height: 3rem;
    }
  }
  &-nav {
    &-ul {
      display: flex;
      list-style: none;
      justify-content: left;
    }
    &-li {
      padding: 0 1rem 0 1rem;
      display: flex;
      justify-content: center;
      align-items: center;

      &-button {
        border-radius: 0.7rem;
        padding: 0.9rem;
        align-items: center;
        background-color: #4CAF50;
        color: white;
        display: flex;
        border: none;
        justify-content: center;
        &:hover {
          background-color: #45a049;
        }
      }
    }
  }
}
.button-exit {
  background-color: #e53935;
  &:hover {
    background-color: #c62828;
  }
}
</style>