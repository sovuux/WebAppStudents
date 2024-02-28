<template>
    <Popup>
        <template #popupHeader>
            <span class="popup-title">{{ data.popupDeleteTitle }}</span>
        </template>
        <template #popupBody>
            <div class="popup-body">
                <span class="popup-body-text">Вы действительно хотите удалить выбранную запись?</span>
            </div>
        </template>
        <template #popupFooter>
            <div class="popup-footer">
                <button class="button-confirm">Удалить</button>
                <button class="button-deny" @click="emits('popupDeleteClose')">Отмена</button>
            </div>
        </template>
    </Popup>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue'
import Popup from './Popup/Popup.vue';

const data = { 
    popupDeleteTitle:"Удалить запись"
}

const emits = defineEmits(['popupDeleteClose'])
</script>