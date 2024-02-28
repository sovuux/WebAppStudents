<template>
    <table class="table">
        <thead>
            <th class="table-column" v-for="tableColumn in tableColumns">
                <span>{{ tableColumn.content }}</span>
            </th>
        </thead>
        <tbody v-if="students">
            <tr v-for="(student, key) in students" :key="key">
                <td class="table-column" v-for="(tableColumn, columnIndex) in tableColumns" :key="columnIndex">
                    <span>{{ student[tableColumn.key] }}</span>
                </td>
                <td class="table-column"><button class="table-buttons" @click="openPopupEdit(student)"><img
                            width="25" height="25" src="/public/pencil.png" alt="edit"></button></td>
                <td class="table-column"><button class="table-buttons" @click="openPopupDelete(student.id)"><img width="25"
                            height="25" src="/public/trash.png" alt="delete"></button></td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts" setup>
import { useStore } from '../../../stores/store';
import { onMounted, ref, watch, defineEmits } from 'vue';
import { StudentType, ColumnType } from '../../../types/models';

const store = useStore()
const tableColumns = ref<ColumnType[]>([
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
    { key: "groupName", content: "Группа" }
])

const students = ref<StudentType[]>([{}])

const emits = defineEmits(['openPopupEdit', 'openPopupDelete'])

watch(() => store.students, async (newValue) => {
    students.value = newValue
})

onMounted(async () => {
    await store.refreshTable()
})

const openPopupEdit = (student: StudentType) => {
    store.studentObject = student
    console.log(store.studentObject)
    emits('openPopupEdit')
}

const openPopupDelete = (id?: number) => {
    emits('openPopupDelete')
    console.log(id)
    store.studentObject.id = id
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