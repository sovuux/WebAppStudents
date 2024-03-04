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
                <Button class="button-confirm" @click="editStudent()">
                    <template #buttonContent>
                        Изменить
                    </template>
                </Button>
                <Button class="button-deny" @click="closePopupEdit()">
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
    popupEditTitle: 'Изменить запись',
}

const emit = defineEmits(['popupEditClose'])

const editStudent = async () => {
    await store.editStudent(store.studentObject)
    store.studentObject = { id: Number(null) }
    emit("popupEditClose")
    store.refreshTable()
    console.log("OK")
}

const closePopupEdit = () => {
    store.studentObject = { id: Number(null) }
    emit("popupEditClose")
}
</script>