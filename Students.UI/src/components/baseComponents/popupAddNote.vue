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
                <Button class="button-confirm" @clickAction="addStudent()">
                    <template #buttonContent>
                        Добавить
                    </template>
                </Button>
                <Button class="button-deny" @clickAction="popupAddClose()">
                    <template #buttonContent>
                        Отмена
                    </template>
                </Button>
            </div>
        </template>
    </Popup>
</template>

<script lang="ts" setup>
import Popup from './Popup/Popup.vue';
import Input from './Input/Input.vue';
import Button from './Button/Button.vue';
import { useStore } from '../../stores/store';

const store = useStore()

const data = {
    popupAddTitle: "Добавить запись"
}

const emit = defineEmits(['popupAddClose'])

const addStudent = async () => {
    await store.addStudent(store.studentObject)
    store.studentObject = { id: Number(null) }
    emit("popupAddClose")
    console.log("OK!")
}

const popupAddClose = () => {
    emit("popupAddClose")
}
</script>