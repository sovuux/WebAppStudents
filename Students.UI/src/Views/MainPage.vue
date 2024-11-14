<template>
  <HeaderPageElement />
  <div class="dictionaries-body">
    <div class="dictionaries-body-top-block">
      <div class="dictionaries-body-top-block-title">
        <span class="dictionaries-body-top-block-title-text">
          Справочик для работы с WebApp Students
        </span>
        <span class="dictionaries-body-top-block-title-text-bottom">
          Новое приложение для удобной работы с базой данных со студентами
        </span>
      </div>
      <div class="dictionaries-body-top-block-container">
        <img
          :src="TopBlockImg"
          alt="image"
          class="dictionaries-body-top-block-image"
        >
      </div>
    </div>
    <div class="dictionaries-body-features">
      <h2 class="dictionaries-body-features-title">
        Чем удобно это приложение
      </h2>
      <div class="dictionaries-body-features-container">
        <div
          v-for="(feature, key) in features"
          :key="key"
          class="dictionaries-body-features-container-content"
        >
          <img
            :src="feature.image"
            alt="image"
            class="dictionaries-body-features-container-content-image"
          >
          <h4 class="dictionaries-body-features-container-content-title">
            {{ feature.title }}
          </h4>
          <span>
            {{ feature.description }}
          </span>
        </div>
      </div>
    </div>
    <div class="dictionaries-body-table">
      <h2 class="dictionaries-body-features-title">
        Удобная в использовании таблица
      </h2>
      <div class="dictionaries-body-table-content">
        <img
          :src="TableImage"
          alt="table"
          class="dictionaries-body-table-content-image"
        >
      </div>
    </div>
    <div class="dictionaries-body-modal">
      <h2 class="dictionaries-body-features-title">
        Модальные окна для работы с таблицей
      </h2>
      <div class="dictionaries-body-modal-container">
        <div
          v-for="(modal, key) in modals"
          :key="key"
          class="dictionaries-body-modal-content"
        >
          <img
            :src="modal.image"
            alt="table"
            class="dictionaries-body-modal-content-image"
          >
          <span class="dictionaries-body-modal-content-span">
            {{ modal.description }}
          </span>
        </div>
      </div>
    </div>
  </div>
  <FooterPageElement />
</template>

<script setup lang="ts">
import HeaderPageElement from "@/components/UiComponents/Header/HeaderPageElement.vue";
import TopBlockImg from "../../public/images/topBlockImage.png"
import TableImage from "../../public/images/tableScreenShot.png"
import OneSvg from "@/assets/SvgImages/1-circle.svg"
import TwoSvg from "@/assets/SvgImages/2-circle.svg"
import ThreeSvg from "@/assets/SvgImages/3-circle.svg"
import FourSvg from "@/assets/SvgImages/4-circle.svg"
import ModalAdd from "../../public/images/modalAdd.png"
import ModalEdit from "../../public/images/modalEdit.png"
import FooterPageElement from "@/components/UiComponents/Footer/FooterPageElement.vue";

const features = [
  { image: OneSvg, title: "Доступность", description: "Приложение доступно для установки из открытого кода на GitHub"},
  { image: TwoSvg, title: "Удобность", description: "Удобность использования приложения достигается путем простого и понятного интерфейса"},
  { image: ThreeSvg, title: "Скорость", description: "Приложение отличиается высокой скоростью работы с ним"},
  { image: FourSvg, title: "Кроссбраузерность", description: "Доступно к использованию в любом браузере"}
]
const modals = [
  { image: ModalAdd, description: "Окно добавления" },
  { image: ModalEdit, description: "Окно изменения" }
]
</script>

<style scoped lang="scss">
.dictionaries-body {
  display: grid;
  justify-content: center;
  text-align: center;
  padding: 6% 1rem 1rem;

  &-top-block {
    display: flex;
    max-width: 75%;
    user-select: none;
    margin-left: 11%;
    &-title {
      max-height: 99.3%;
      padding: 1rem;
      background: #4CAF50;
      display: grid;
      font-size: 2rem;
      color: white;
      text-align: left;
      border-radius: 20px 0 0 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      &-text {
        font-weight: 800;
        &-bottom {
          margin-top: 90%;
          font-size: 1rem;
          font-weight: 400;
        }
      }
    }
    &-image {
      border-radius: 0 20px 20px 0;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    }
  }
  &-features {
    padding: 2%;
    align-items: center;
    display: grid;
    user-select: none;
    &-title {
      color: #424141;
      text-decoration: underline;
    }
    &-container {
      display: flex;
      text-align: left;
      align-items: center;
      justify-content: center;
      &-content {
        background: #4CAF50;
        padding: 2%;
        margin: 1%;
        border-radius: 30px;
        color: white;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        &-title {
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: 1px;
        }
      }
    }
  }
  &-table {
    user-select: none;
    &-content {
      &-image {
        width: 50%;
        border: 4px solid #4CAF50;
        border-radius: 20px;
      }
    }
  }
  &-modal {
    display: flex;
    flex-direction: column;
    user-select: none;
    &-container {
      display: flex;
      justify-content: center;
    }
    &-content {
      display: grid;
      align-items: center;
      padding: 4%;
      text-align: center;
      &-span {
        color: #424141;
        padding: 10%;
      }
      &-image {
        border-radius: 20px;
        border: 4px solid #4CAF50;
        width: 400px;
        padding-bottom: 1%;
      }
    }
  }
}
</style>