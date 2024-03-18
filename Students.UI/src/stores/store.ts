import { defineStore } from 'pinia'
import DataBaseQeuries from '../API/api'
import { ref } from 'vue'
import { StudentType } from '../types/models'

export const useStore = defineStore('store', () => {

    const students = ref([])
    const studentObject = ref<StudentType>({
        id: Number(null)
    })

    const refreshTable = async () => {
        students.value = await DataBaseQeuries.getStudents()
    }

    const addStudent = async (studentObject: StudentType) => {
        await DataBaseQeuries.postStudent(studentObject)
        await refreshTable()
    }

    const editStudent = async (studentObject: StudentType) => {
        await DataBaseQeuries.putStudent(studentObject)
        await refreshTable()
    }

    const deleteStudent = async (id: number) => {
        await DataBaseQeuries.deleteStudent(id)
        await refreshTable()
    }

    return {
        refreshTable,
        addStudent,
        deleteStudent,
        editStudent,
        students,
        studentObject
    }
})