<template>
    <Popup>
        <template #popupHeader>
            <span class="popup-title">{{ data.popupEditTitle }}</span>
        </template>
        <template #popupBody>
            <div class="popup-body">
                <Input />
            </div>
        </template>
        <template #popupFooter>
            <div class="popup-footer">
                <button class="button-confirm" @click="editStudent()">Изменить</button>
                <button class="button-deny" @click="emits('popupEditClose')">Отмена</button>
            </div>
        </template>
    </Popup>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue'
import Popup from './baseComponents/Popup/Popup.vue';
import Input from './baseComponents/Input/Input.vue';
import { useStore } from '../stores/store';

const store = useStore()

const data = {
    popupEditTitle: 'Изменить запись'
}

const emits = defineEmits(['popupEditClose'])

const editStudent = async () => {
    await store.editStudent(store.studentObject)
    store.studentObject = {}
    emits("popupEditClose")
    store.refreshTable()
    console.log("OK")
}
</script>