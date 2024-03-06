<template>
    <Popup>
        <template #popupHeader>
            <span class="popup-title">{{ props.isNew ? 'Добавить запись' : 'Изменить запись' }}</span>
        </template>
        <template #popupBody>
            <Input />
        </template>
        <template #popupFooter>
            <Button class="button-confirm" @clickAction="saveStudent()">
                <template #buttonContent>
                    {{ props.isNew ? data.addNoteButtonName : data.editNoteButtonName }}
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
import Popup from './Popup/Popup.vue';
import Input from './Input/Input.vue';
import Button from './Button/Button.vue';
import { useStore } from '../../stores/store';

const store = useStore()

const props =  defineProps({
    isNew: {
        type: Boolean,
        default: false
    } 
})

const data = ({
    addNoteButtonName: "Добавить",
    editNoteButtonName: "Изменить"
})

const emit = defineEmits(['closePopupAddEdit'])

const saveStudent = async () => {
    if(props.isNew === true) {
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