<template>
    <p class="popup-input-column-name" v-for="inputAddNameColumn in inputAddNameColumns">
        <span>
            {{ inputAddNameColumn.content }}
        </span>
        <input type="text" class="popup-input-text">
    </p>
</template>

<script lang="ts">
export default {
    data() {
        return {
            inputAddNameColumns: [
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
            ]
        }
    }
}
</script>

<style scoped lang="scss">
.popup-input-column-name {
    display: grid;
    color: rgba(107, 6, 190, 0.9);
}

.popup-input-text {
    margin-left: 0.01%;
    padding: 1%;
}
</style>