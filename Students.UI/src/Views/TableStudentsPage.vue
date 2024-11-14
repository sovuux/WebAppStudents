<template>
  <HeaderPageElement />
  <div class="page">
    <span class="page-table-title">
      Таблица студентов
    </span>
    <ButtonBaseComponent
      class="add-button"
      @click-action="openPopupAddEdit()"
    >
      <template #buttonContent>
        <img
          :src="PersonPlusIcon"
          :alt="PersonPlusIcon"
          class="add-button-image"
        >
        Добавить
      </template>
    </ButtonBaseComponent>
    <StudentTable
      @open-popup-edit="openPopupAddEdit"
      @open-popup-delete="show.showPopupDelete = true"
    />
  </div>
  <PopupAddEditNote
    v-if="show.showPopupAddEdit"
    :is-new="isNewStudent"
    @close-popup-add-edit="show.showPopupAddEdit = false"
  />
  <PopupDeleteNote
    v-if="show.showPopupDelete"
    @popup-delete-close="show.showPopupDelete = false"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useStore } from '@/stores/store.js';

import StudentTable from "@/components/UiComponents/Tables/StudentTable.vue";
import ButtonBaseComponent from "@/components/baseComponents/Button/ButtonBaseComponent.vue";
import PopupDeleteNote from "@/components/UiComponents/Popups/PopupDeleteNote.vue";
import PopupAddEditNote from "@/components/UiComponents/Popups/PopupAddEditNote.vue";
import HeaderPageElement from "@/components/UiComponents/Header/HeaderPageElement.vue";

import PersonPlusIcon from "@/assets/SvgImages/plusPerson.svg"

const store = useStore()

const show = ref({
  showPopupDelete: false,
  showPopupAddEdit: false
})

const isNewStudent = ref(false)

const openPopupAddEdit = () => {
  show.value.showPopupAddEdit = true
  isNewStudent.value = store.studentObject.id === 0;
}
</script>

<style lang="scss">
.page {
  text-align: center;
  display: grid;
  align-items: center;
  padding-top: 6%;
  &-table-title {
    user-select: none;
    padding: 1rem;
    text-decoration: underline;
    font-weight: 600;
    font-size: 2rem;
  }
}

.add-button {
  background-color:  #4CAF50;
  width: 10%;
  margin-left: 89%;
  display: flex;
  justify-content: center;
  padding: 1rem;
  &:hover {
    background-color: #45a049;
  }
  &-image {
    margin-right: 1rem;
  }
}
</style>