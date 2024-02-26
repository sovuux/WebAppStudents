<template>
    <PopupTemplate>
        <template v-slot:popupHeader>
            <span class="popup-title">{{ popupAddTitle }}</span>
        </template>
        <template v-slot:popupBody>
            <div class="popup-body">
                <StudentInputForm />
            </div>
        </template>
        <template v-slot:popupFooter>
            <div class="popup-footer">
                <button class="button-confirm">Добавить</button>
                <button class="button-deny" @click="popupAddClose()">Отмена</button>
            </div>
        </template>
    </PopupTemplate>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
import PopupTemplate from './Popup/PopupTemplate.vue';
import StudentInputForm from './Input/StudentInputForm.vue';

const popupAddTitle = ref("Добавить запись")

const emits = defineEmits(['popupAddClose'])

const popupAddClose = () => {
    emits('popupAddClose')
}
</script>