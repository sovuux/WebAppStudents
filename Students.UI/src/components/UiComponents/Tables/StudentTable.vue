<template>
  <TableBaseComponent class="table">
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
          <ButtonBaseComponent
            class="table-buttons"
            @click-action="openPopupEdit(student)"
          >
            <template #buttonContent>
              <img
                class="table-buttons-icon"
                src="/images/pencil.png"
                alt="edit"
              >
            </template>
          </ButtonBaseComponent>
        </td>
        <td class="table-column">
          <ButtonBaseComponent
            class="table-buttons"
            @click-action="openPopupDelete(student.id)"
          >
            <template #buttonContent>
              <img
                class="table-buttons-icon"
                src="/images/trash.png"
                alt="delete"
              >
            </template>
          </ButtonBaseComponent>
        </td>
      </tr>
    </template>
  </TableBaseComponent>
</template>

<script lang="ts" setup>
import { useStore } from '@/stores/store.ts';
import { onMounted, ref, watch, defineEmits } from 'vue';

import { StudentType, ColumnType } from '@/types/models.ts';

import ButtonBaseComponent from "@/components/baseComponents/Button/ButtonBaseComponent.vue";
import TableBaseComponent from "@/components/baseComponents/Table/TableBaseComp.vue";

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
    emits('openPopupEdit')
}

const openPopupDelete = (id: number) => {
    emits('openPopupDelete')
    store.studentObject.id = id
}
</script>