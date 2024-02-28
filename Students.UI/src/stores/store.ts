import { defineStore } from 'pinia'
import DataBaseQeuries from '../API/api'
import { ref } from 'vue'

export const useStore = defineStore('store', () => {
    const students = ref([{}])

    const studentObject = ref({
        id: Number(null),
        name: "",
        surname: "",
        patron: "",
        city: "",
        postIndex: "",
        street: "",
        email: "",
        phoneNumber: "",
        faculty: "",
        specialty: "",
        course: "",
        gruopName: ""
    })

    const refreshTable = async () => {
        students.value = await DataBaseQeuries.getStudents()
    }

    const addStudent = async () => {
        studentObject.value = await DataBaseQeuries.postStudent()
    }

    return {
        refreshTable,
        students,
        studentObject,
        addStudent
    }
})