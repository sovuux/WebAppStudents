import { defineStore } from 'pinia'
import DataBaseQeuries from '../API/api'
import { ref } from 'vue'

export const useStore = defineStore('store', () => {
    const students = ref([])

    const refreshTable = async () => {
        students.value = await DataBaseQeuries.getStudents()
    }

    return {
        refreshTable,
        students
    }
})