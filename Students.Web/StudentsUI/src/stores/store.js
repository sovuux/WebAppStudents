import { defineStore } from "pinia";

export const useStore = defineStore("store", {
    state: () => ({
        isPopupAddOpen: false,
        isPopupEditOpen: false,
        isPopupDeleteOpen: false,
        selectedStudent: {}
    }),
    actions: {
        showPopupAdd() {
            this.isPopupAddOpen = true
        },
        closePopupAdd() {
            this.isPopupAddOpen = false
        },

        showPopupEdit() {
            this.isPopupEditOpen = true
        },

        closePopupEdit() {
            this.isPopupEditOpen = false
        },

        showPopupDelete() {
            this.isPopupDeleteOpen = true
        },

        closePopupDelete() {
            this.isPopupDeleteOpen = false
        },

        setSelectedStudent(student) {
            this.selectedStudent = { ...student }

        },

        getSelectedStudent() {
            return this.selectedStudent
        },

        setSelectedStudentId(id) {
            this.selectedStudentId = id
        },

        getSelectedStudentId() {
            return this.selectedStudentId
        }
    }
});