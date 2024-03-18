<template>
  <Table class="table">
    <template #tableHeader>
      <th
        v-for="(tableColumn, key) in tableColumns"
        :key="key"
        class="table-column"
      >
        <span>
          {{ tableColumn.content }}
        </span>
      </th>
    </template>

    <template #tableBody>
      <tr
        v-for="(student, key) in students"
        :key="key"
      >
        <td
          v-for="(tableColumn, columnIndex) in tableColumns"
          :key="columnIndex"
          class="table-column"
        >
          <span>
            {{ student[tableColumn.key as keyof StudentType] }}
          </span>
        </td>
        <td class="table-column">
          <Button
            class="table-buttons"
            @click-action="openPopupEdit(student)"
          >
            <template #buttonContent>
              <img
                class="table-buttons-icon"
                src="/pencil.png"
                alt="edit"
              >
            </template>
          </Button>
        </td>
        <td class="table-column">
          <Button
            class="table-buttons"
            @click-action="openPopupDelete(student.id)"
          >
            <template #buttonContent>
              <img
                class="table-buttons-icon"
                src="/trash.png"
                alt="delete"
              >
            </template>
          </Button>
        </td>
      </tr>
    </template>
  </Table>
</template>

<script lang="ts" setup>
import { useStore } from '../../stores/store';
import { onMounted, ref, watch, defineEmits } from 'vue';
import { StudentType, ColumnType } from '../../types/models';
import Button from '../baseComponents/Button/ButtonBaseComp.vue';
import Table from '../baseComponents/Table/TableBaseComp.vue';

const store = useStore()
const tableColumns = ref<ColumnType[]>([
    { key: "id", content: "ID" },
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

const students = ref<StudentType[]>([])

const emits = defineEmits(['openPopupEdit', 'openPopupDelete'])

watch(() => store.students, (newValue) => {
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

const openPopupDelete = (id: number) => {
    emits('openPopupDelete')
    console.log(id)
    store.studentObject.id = id
}
</script>../baseComponents/Table/TableBaseComp.vue