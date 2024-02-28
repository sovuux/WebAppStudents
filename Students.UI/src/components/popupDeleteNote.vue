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
                <button class="button-confirm" @click="deleteStudent()">Удалить</button>
                <button class="button-deny" @click="emits('popupDeleteClose')">Отмена</button>
            </div>
        </template>
    </Popup>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue'
import Popup from './baseComponents/Popup/Popup.vue';
import { useStore } from '../stores/store';

const store = useStore()

const data = {
    popupDeleteTitle: "Удалить запись"
}

const emits = defineEmits(['popupDeleteClose'])

const deleteStudent = async () => {
    await store.deleteStudent(store.studentObject.id)
    store.studentObject.id = 0
    emits("popupDeleteClose")
    console.log("OK!")
}
</script>