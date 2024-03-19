<template>
  <div class="page">
    <h2 class="page-app-title">
      StudentsUI(Vue TS + C# + PostgreSQL)
    </h2>
    <StudentTable
      @open-popup-edit="openPopupAddEdit()"
      @open-popup-delete="show.showPopupDelete = true"
    />
    <Button
      class="add-button"
      @click-action="openPopupAddEdit()"
    >
      <template #buttonContent>
        Добавить
      </template>
    </Button>
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
import { useStore } from '../stores/store';
import StudentTable from './Tables/StudentTable.vue';
import Button from './baseComponents/Button/ButtonBaseComp.vue';
import PopupDeleteNote from './Popups/PopupDeleteNote.vue';
import PopupAddEditNote from './Popups/PopupAddEditNote.vue';

const store = useStore()

const show = ref({
  showPopupDelete: false,
  showPopupAddEdit: false
})

const isNewStudent = ref(false)

const openPopupAddEdit = () => {
  show.value.showPopupAddEdit = true
  console.log(store.studentObject.id)
  if (store.studentObject.id === 0) {
    isNewStudent.value = true
  }
  else {
    isNewStudent.value = false
  }
}
</script>

<style lang="scss">
$main-color: rgb(62, 62, 253);

$text-color: rgba(62, 62, 253, 0.7);

$button-color: rgba(62, 62, 253, 0.7);
$button-color-hover: rgba(62, 62, 253, 0.65);

.page {
  text-align: center;

  &-app-title {
    border-bottom: 1px solid $main-color;
    padding-bottom: 1%;
    color: $text-color;
  }
}

.add-button {
  margin-top: 3%;
  background-color: $button-color;

  &:hover {
    background-color: $button-color-hover;
  }
}
</style>