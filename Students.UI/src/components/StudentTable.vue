<template>
    <table class="table">
        <thead>
            <th class="table-column" v-for="tableColumn in tableColumns">
                <span>{{ tableColumn.content }}</span>
            </th>
        </thead>
        <tbody v-if="students">
            <tr v-for="(student, key) in students" :key="key">
                <td class="table-column"><span>{{ student.id }}</span></td>
                <td class="table-column"><span>{{ student.name }}</span></td>
                <td class="table-column"><span>{{ student.surname }}</span></td>
                <td class="table-column"><span>{{ student.patron }}</span></td>
                <td class="table-column"><span>{{ student.city }}</span></td>
                <td class="table-column"><span>{{ student.postIndex }}</span></td>
                <td class="table-column"><span>{{ student.street }}</span></td>
                <td class="table-column"><span>{{ student.email }}</span></td>
                <td class="table-column"><span>{{ student.phoneNumber }}</span></td>
                <td class="table-column"><span>{{ student.faculty }}</span></td>
                <td class="table-column"><span>{{ student.specialty }}</span></td>
                <td class="table-column"><span>{{ student.course }}</span></td>
                <td class="table-column"><span>{{ student.groupName }}</span></td>
                <td class="table-column"><button class="table-buttons" @click="openPopupEdit()"><img width="25" height="25"
                            src="../../icons8-edit-50.png" alt="edit"></button></td>
                <td class="table-column"><button class="table-buttons" @click="openPopupDelete()"><img width="25" height="25"
                            src="../../icons8-delete-64.png" alt="delete"></button></td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts" setup>
import { table } from 'console';
import { useStore } from '../stores/store.ts'
import { onMounted, ref, watch, defineEmits } from 'vue'

const store = useStore()

const tableColumns = ref([
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
])

const students = ref<Object[]>([{}])

const emits = defineEmits(['openPopupEdit', 'openPopupDelete'])
const openPopupEdit = () => {
    emits('openPopupEdit')
}
const openPopupDelete = () => {
    emits('openPopupDelete')
}

watch(() => store.students, async (newValue) => {
    students.value = newValue
})

onMounted(() => {
    refreshTable()
})

const refreshTable = async () => {
    store.refreshTable()
}
</script>

<style lang="scss" scoped>
$table-border-color: rgba(8, 8, 185, 0.7);

$table-column-color: rgba(62, 62, 253, 0.7);
$table-column-border-color: rgba(62, 62, 253, 0.7);

$table-buttons-color: rgba(126, 126, 240, 0.7);
$table-buttons-color-hover: rgba(62, 62, 253, 0.65);

.table {
    width: 80%;
    margin-left: 10%;
    border: 3px solid $table-border-color;

    &-column {
        color: $table-column-color;
        border-left: 1px solid $table-column-border-color;
    }

    &-buttons {
        background-color: $table-buttons-color;
        border: none;
        border-radius: 3px;
        cursor: pointer;

        &:hover {
            background-color: $table-buttons-color-hover;
        }
    }
}
</style>