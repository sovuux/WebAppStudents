import { defineStore } from 'pinia'
import DataBaseQeuries from '../API/api'

export const useStore = defineStore('store', {
    state: () => ({
        students: []
    }),

    actions: {
        async refreshTable() {
            const students = await DataBaseQeuries.getStudent()
            return students
        }
    }
})