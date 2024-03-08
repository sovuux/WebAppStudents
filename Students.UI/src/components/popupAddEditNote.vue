<template>
    <Popup>
        <template #popupHeader>
            <span class="popup-title">{{ props.isNew ? 'Добавить запись' : 'Изменить запись' }}</span>
        </template>

        <template #popupBody>
            <StudentForm />
        </template>

        <template #popupFooter>
            <Button class="button-confirm" @clickAction="saveStudent()">
                <template #buttonContent>
                    {{ props.isNew ? "Добавить" : "Изменить" }}
                </template>
            </Button>
            <Button class="button-deny" @clickAction="closePopupAddEdit()">

                <template #buttonContent>
                    Отмена
                </template>
            </Button>
        </template>
    </Popup>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import Popup from './baseComponents/Popup/Popup.vue';
import StudentForm from './studentForm.vue';
import Button from './baseComponents/Button/Button.vue';
import { useStore } from '../stores/store';

const store = useStore()

const props = defineProps({
    isNew: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['closePopupAddEdit'])

const saveStudent = async () => {
    if (props.isNew === true) {
        await store.addStudent(store.studentObject)
        store.studentObject = { id: Number(null) }
        emit('closePopupAddEdit')
        console.log("OK!")
    }
    else {
        await store.editStudent(store.studentObject)
        store.studentObject = { id: Number(null) }
        emit('closePopupAddEdit')
        console.log("OK")
    }
}

const closePopupAddEdit = () => {
    emit('closePopupAddEdit')
    store.studentObject = { id: Number(null) }
}
</script>