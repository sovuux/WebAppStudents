<template>
    <Popup @click.outside="closePopupAddEdit()">
        <template #popupHeader>
            <span class="popup-title">{{ props.isNew ? 'Добавить запись' : 'Изменить запись' }}</span>
        </template>

        <template #popupBody>
            <p class="input-container" v-for="formColumn in formColumns">
                <span>
                    {{ formColumn.content }}
                </span>
                <Input 
                    :inputColumnKey="store.studentObject[formColumn.key as keyof StudentType]"
                    @newStudentValue="store.studentObject[formColumn.key as keyof StudentType] = $event" 
                />
            </p>
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
import Popup from '../baseComponents/Popup/Popup.vue';
import Input from '../baseComponents/Input/Input.vue';
import Button from '../baseComponents/Button/Button.vue';
import { useStore } from '../../stores/store';
import { ColumnType, StudentType } from '../../types/models';

const store = useStore()

const formColumns: ColumnType[] = ([
    { key: "name", content: "Имя" },
    { key: "surname", content: "Фамилия" },
    { key: "patron", content: "Отчество" },
    { key: "city", content: "Город" },
    { key: "postIndex", content: "Почтовый индекс" },
    { key: "street", content: "Улица" },
    { key: "email", content: "Email" },
    { key: "phoneNumber", content: "Номер телефона" },
    { key: "faculty", content: "Факультет" },
    { key: "specialty", content: "Специальность" },
    { key: "course", content: "Курс" },
    { key: "groupName", content: "Группа" }
])

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