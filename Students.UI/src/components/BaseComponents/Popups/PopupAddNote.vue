<template>
    <Popup :popup-title="popupAddTitle">
        <div class="popup-body">
            <AddStudentInputForm />
        </div>
        <div class="popup-footer">
            <button class="button-confirm">{{ buttonAddConfirm }}</button>
            <button class="button-deny" @click="popupAddClose()">{{ buttonAddDeny }}</button>
        </div>
    </Popup>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
import Popup from '../Popup.vue';
import AddStudentInputForm from '../Inputs/AddStudentInputForm.vue';

const popupAddTitle = ref("Добавить запись")
const buttonAddConfirm = ref("Добавить")
const buttonAddDeny = ref("Отмена")

const emits = defineEmits(['popupAddClose'])

const popupAddClose = () => {
    emits('popupAddClose')
}
</script>