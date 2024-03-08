<template>
    <p class="input-container" v-for="formColumn in formColumns">
        <span>
            {{ formColumn.content }}
        </span>
        <Input :inputColumnKey="store.studentObject[formColumn.key as keyof StudentType]"></Input>
    </p>
</template>

<script lang="ts" setup>
import Input from './baseComponents/Input/Input.vue';
import { ColumnType, StudentType } from '../types/models';
import { useStore } from '../stores/store';

const store = useStore()

const formColumns:ColumnType[] = ([
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