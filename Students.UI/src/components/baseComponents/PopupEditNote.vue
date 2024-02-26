<template>
    <PopupTemplate>
        <template v-slot:popupHeader>
            <span class="popup-title">{{ popupEditTitle }}</span>
        </template>
        <template v-slot:popupBody>
            <div class="popup-body">
                <StudentInputForm />
            </div>
        </template>
        <template v-slot:popupFooter>
            <div class="popup-footer">
                <button class="button-confirm">Изменить</button>
                <button class="button-deny" @click="popupEditClose()">Отмена</button>
            </div>
        </template>
    </PopupTemplate>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
import PopupTemplate from './Popup/PopupTemplate.vue';
import StudentInputForm from './Input/StudentInputForm.vue';

const popupEditTitle = ref('Изменить запись')

const emits = defineEmits(['popupEditClose'])

const popupEditClose = () => {
    emits('popupEditClose')
}
</script>