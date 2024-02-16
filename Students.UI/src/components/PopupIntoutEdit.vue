<template>
    <p class="input-column-name" v-for="inputEditNameColumn in inputEditNameColumns">{{ inputEditNameColumn.content }}<input type="text"></p>
</template>

<script lang="ts">
export default {
    data() {
        return {
            inputEditNameColumns: [
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