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
                <Button class="button-confirm" @clickAction="deleteStudent()">
                    <template #buttonContent>
                        Удалить
                    </template>
                </Button>
                <Button class="button-deny" @clickAction="closePopupDelete()">
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
import Button from './Button/Button.vue';
import { useStore } from '../../stores/store';

const store = useStore()

const data = {
    popupDeleteTitle: "Удалить запись"
}

const emit = defineEmits(['popupDeleteClose'])

const deleteStudent = async () => {
    await store.deleteStudent(store.studentObject.id)
    store.studentObject.id = 0
    emit("popupDeleteClose")
    console.log("OK!")
}

const closePopupDelete = () => {
    emit('popupDeleteClose')
}
</script>