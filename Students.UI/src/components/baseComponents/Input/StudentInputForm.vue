<template>
    <p class="popup-input-column-name" v-for="inputNameColumn in inputNameColumns">
        <span>
            {{ inputNameColumn.content }}
        </span>
        <input type="text" class="popup-input-text">
    </p>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const inputNameColumns = ref([
    { content: "Имя" },
    { content: "Фамилия" },
    { content: "Отчество" },
    { content: "Город" },
    { content: "Почтовый индекс" },
    { content: "Улица" },
    { content: "Email" },
    { content: "Номер телефона" },
    { content: "Факультет" },
    { content: "Специальность" },
    { content: "Курс" },
    { content: "Группа" }
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