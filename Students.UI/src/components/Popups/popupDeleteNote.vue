<template>
    <Popup>
        <template #popupHeader>
            <Button class="button-close" @clickAction="closePopupDelete()">
                <template #buttonContent>
                    <img src="/close.png" alt="close" class="button-close-image">
                </template>
            </Button>
            <span class="popup-title">
                Удалить запись
            </span>
        </template>
        <template #popupBody>
            <div class="popup-body">
                <span class="popup-body-text">
                    Вы действительно хотите удалить выбранную запись?
                </span>
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
import Popup from '../baseComponents/Popup/Popup.vue';
import Button from '../baseComponents/Button/Button.vue';
import { useStore } from '../../stores/store';
import { onMounted } from 'vue';

const store = useStore()

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

onMounted(() => {
    document.addEventListener('keyup', (event) => {
        if (event.key === "Escape") {
            closePopupDelete()
        }
    })
})
</script>


<style lang="scss" scoped>
.popup {
    &-body {
        text-align: center;
        margin-top: 0;
        margin-left: 21%;
    }

    &-footer {
        margin-top: 5%;
    }
}

.button {
    &-close {
        background-color: white;
        margin-left: 95%;

        &-image {
            width: 30px;
            height: 30px;

            &:hover {
                opacity: 0.75;
            }
        }
    }

    &-confirm {
        margin-left: 32%;
    }

    &-deny {
        margin-left: 10%;
    }
}
</style>