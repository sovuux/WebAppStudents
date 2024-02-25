<template>
    <span class="popup-input-column-name" v-for="inputEditNameColumn in inputEditNameColumns">
        <span>
            {{ inputEditNameColumn.content }}
        </span>
        <input type="text" class="popup-input-text">
    </span>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const inputEditNameColumns = ref([
    { content: "Имя:" },
    { content: "Фамилия:" },
    { content: "Отчество:" },
    { content: "Город:" },
    { content: "Почтовый индекс:" },
    { content: "Улица:" },
    { content: "Email:" },
    { content: "Номер телефона:" },
    { content: "Факультет:" },
    { content: "Специальность:" },
    { content: "Курс:" },
    { content: "Группа:" }
])
</script>

<style scoped lang="scss">
$input-text-color: rgba(107, 6, 190, 0.9);

.popup-input {
    &-column-name {
        display: grid;
        color: $input-text-color;
        padding: 2%;
    }

    &-text {
        margin-left: 0.01%;
        padding: 1%;
        color: $input-text-color;
    }
}
</style>