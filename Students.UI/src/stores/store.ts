import { defineStore } from 'pinia'
import DataBaseQueries from '../API/api'
import { ref } from 'vue'
import { StudentType } from '../types/models'

export const useStore = defineStore('store', () => {

    const students = ref<StudentType[]>([]);
    const studentObject = ref<StudentType>({ id: 0})

    const executeAndRefresh = async (action: () => Promise<unknown>): Promise<void> => {
        try {
            await action();
            students.value = await DataBaseQueries.getStudents();
        }
        catch (error: unknown) {
            console.error("Ошибка при выполнении действия с таблицей", error);
        }
    }

    const refreshTable = () => executeAndRefresh(() => Promise.resolve());

    const addStudent = (studentObject: StudentType) =>
        executeAndRefresh(() => DataBaseQueries.postStudent(studentObject));

    const editStudent = (studentObject: StudentType) =>
        executeAndRefresh(() => DataBaseQueries.putStudent(studentObject));

    const deleteStudent = (id: number) =>
        executeAndRefresh(() => DataBaseQueries.deleteStudent(id));

    return {
        refreshTable,
        addStudent,
        deleteStudent,
        editStudent,
        students,
        studentObject
    }
})