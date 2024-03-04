<template>
    <p class="popup-input-column-name" v-for="inputNameColumn in inputNameColumns">
        <span>
            {{ inputNameColumn.content }}
        </span>
        <input v-model.lazy="store.studentObject[inputNameColumn.key as keyof StudentType]" type="text"
            class="popup-input-text">
    </p>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useStore } from '../../../stores/store';
import { ColumnType, StudentType } from '../../../types/models';

const store = useStore()

const inputNameColumns = ref<ColumnType[]>([
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
</script>

<style scoped lang="scss">
$input-text-color: rgba(107, 6, 190, 0.9);

.popup-input {
    &-column-name {
        display: grid;
        color: $input-text-color;
    }

    &-text {
        margin-left: 0.01%;
        padding: 1%;
        color: $input-text-color;
    }
}
</style>