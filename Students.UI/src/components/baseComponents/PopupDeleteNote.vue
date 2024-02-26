<template>
    <PopupTemplate>
        <template v-slot:popupHeader>
            <span class="popup-title">{{ popupDeleteTitle }}</span>
        </template>
        <template v-slot:popupBody>
            <div class="popup-body">
                <span class="popup-body-text">Вы действительно хотите удалить выбранную запись?</span>
            </div>
        </template>
        <template v-slot:popupFooter>
            <div class="popup-footer">
                <button class="button-confirm">Удалить</button>
                <button class="button-deny" @click="popupDeleteClose()">Отмена</button>
            </div>
        </template>
    </PopupTemplate>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
import PopupTemplate from './Popup/PopupTemplate.vue';

const popupDeleteTitle = ref("Удалить запись")

const emits = defineEmits(['popupDeleteClose'])
const popupDeleteClose = () => {
    emits('popupDeleteClose')
}
</script>