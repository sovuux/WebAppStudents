<template>
    <Popup>
        <template #popupHeader>
            <Button class="button-close" @clickAction="closePopupDelete()">
                <template #buttonContent>
                    <img src="/close.png" alt="close" class="button-close-image">
                </template>
            </Button>
            <span class="popup-title">{{ data.popupDeleteTitle }}</span>
        </template>
        <template #popupBody>
            <div class="popup-body" style="margin-top: 5%;">
                <span class="popup-body-text" style="font-size: 18px;">Вы действительно хотите удалить выбранную
                    запись?</span>
            </div>
        </template>

        <template #popupFooter>
            <div class="popup-footer">
                <Button class="button-confirm" @clickAction="deleteStudent()">
                    <template #buttonContent>
                        Удалить
                    </template>
                </Button>
                <Button class="button-deny" @clickAction="closePopupDelete()" style="margin-left: 47%;">
                    <template #buttonContent>
                        Отмена
                    </template>
                </Button>
            </div>
        </template>
    </Popup>
</template>

<script lang="ts" setup>
import Popup from '../baseComponents/Popup/Popup.vue';
import Button from '../baseComponents/Button/Button.vue';
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


<style lang="scss" scoped>
.button {
    &-close {
        background-color: white;
        margin-left: 90%;

        &-image {

            &:hover {
                opacity: 0.75;
            }
        }
    }
}
</style>