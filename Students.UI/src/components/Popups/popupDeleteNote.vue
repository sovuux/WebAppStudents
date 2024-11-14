<template>
  <PopupBaseComp>
    <template #popupHeader>
      <ButtonBaseComponent
        class="button-close"
        @click-action="closePopupDelete"
      >
        <template #buttonContent>
          <img
            src="/close.png"
            alt="close"
            class="button-close-image"
          >
        </template>
      </ButtonBaseComponent>
      <span class="popup-title">
        Удалить запись
      </span>
    </template>

    <template #popupBody>
      <span class="popup-body-text">
        Вы действительно хотите удалить выбранную запись?
      </span>
    </template>

    <template #popupFooter>
      <ButtonBaseComponent
        class="button-confirm"
        @click-action="deleteStudent"
      >
        <template #buttonContent>
          Удалить
        </template>
      </ButtonBaseComponent>
      <ButtonBaseComponent
        class="button-deny"
        @click-action="closePopupDelete"
      >
        <template #buttonContent>
          Отмена
        </template>
      </ButtonBaseComponent>
    </template>
  </PopupBaseComp>
</template>

<script lang="ts" setup>
import PopupBaseComp from "@/components/baseComponents/Popup/PopupBaseComp.vue";
import ButtonBaseComponent from "@/components/baseComponents/Button/ButtonBaseComponent.vue";
import { useStore } from '@/stores/store.ts';
import { onMounted } from 'vue';

const store = useStore();

const emit = defineEmits(['popupDeleteClose']);

const deleteStudent = async () => {
  await store.deleteStudent(store.studentObject.id)
  store.studentObject.id = 0
  emit("popupDeleteClose")
};

const closePopupDelete = () => {
  emit('popupDeleteClose')
};

onMounted(() => {
  document.addEventListener('keyup', (event) => {
    if (event.key === "Escape") {
      closePopupDelete()
    }
  })
});
</script>


<style lang="scss" scoped>
.button {
  &-close {
    background-color: white;
    margin-left: 95%;

    &-image {
      width: 30px;
      height: 30px;

      &:hover {
        opacity: 0.75;
      }
    }
  }
}
</style>