<template>
    <Popup>
        <template #popupHeader>
            <span class="popup-title">{{ data.popupAddTitle }}</span>
        </template>
        <template #popupBody>
            <div class="popup-body">
                <Input />
            </div>
        </template>
        <template #popupFooter>
            <div class="popup-footer">
                <button class="button-confirm">Добавить</button>
                <button class="button-deny" @click="emits('popupAddClose')">Отмена</button>
            </div>
        </template>
    </Popup>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue'
import Popup from './Popup/Popup.vue';
import Input from './Input/Input.vue';

const data = {
    popupAddTitle:"Добавить запись"
}

const emits = defineEmits(['popupAddClose'])
</script>