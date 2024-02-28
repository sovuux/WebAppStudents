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
                <button class="button-confirm" @click="addStudent()">Добавить</button>
                <button class="button-deny" @click="emits('popupAddClose')">Отмена</button>
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
    popupAddTitle: "Добавить запись"
}

const emits = defineEmits(['popupAddClose'])

const addStudent = async () => {
    await store.addStudent(store.studentObject)
    store.studentObject = {}
    emits("popupAddClose")
    console.log("OK!")
}

</script>