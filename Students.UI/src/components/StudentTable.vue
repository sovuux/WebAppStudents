<template>
    <table class="table">
        <thead>
            <tr>
                <th class="table-column" v-for="tableColumn in tableColumns">
                    {{ tableColumn.content }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>

                </th>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
export default {
    data() {
        return {
            tableColumns: [
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
                { content: "Группа" },
                { content: "Изменить" },
                { content: "Удалить" }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
.table {
    width: 80%;
    margin-left: 10%;
    border: 3px solid rgba(8, 8, 185, 0.7)
}

.table-column {
    color: rgba(62, 62, 253, 0.7);
    border-left: 1px solid rgba(62, 62, 253, 0.7);
}
</style>