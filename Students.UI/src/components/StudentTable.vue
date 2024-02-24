<template>
    <table class="table">
        <thead>
            <th class="table-column" v-for="tableColumn in tableColumns">
                {{ tableColumn.content }}
            </th>
        </thead>
        <tbody>
            <tr v-for="tableColumn in  tableColumns" :key="tableColumn.key">

            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import { useStore } from '../stores/store.ts'

export default {
    data() {
        return {
            tableColumns: [
                { key: "id", content: "Id" },
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
                { key: "group", content: "Группа" },
                { content: "Изменить" },
                { content: "Удалить" }
            ]
        }
    },

    async mounted() {
        await this.refreshTable()
    },

    methods: {
        async refreshTable() {
            const store = useStore()
            await store.refreshTable()
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