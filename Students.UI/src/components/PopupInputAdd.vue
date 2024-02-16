<template>
    <p class="input-column-name" v-for="inputAddNameColumn in inputAddNameColumns">{{ inputAddNameColumn.content }}<input type="text"></p>
</template>

<script lang="ts">
export default {
    data() {
        return {
            inputAddNameColumns: [
                { content: "Id" },
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
            ]
        }
    }
}
</script>