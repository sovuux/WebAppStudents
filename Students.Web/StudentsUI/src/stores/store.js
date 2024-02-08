import { API_URL } from "@/components/ApiController.vue";
import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    isPopupAddOpen: false,
    isPopupEditOpen: false,
    isPopupDeleteOpen: false,
    selectedStudent: {},
    students: [],
    API_URL: API_URL
  }),
  actions: {
    showPopupAdd() {
      this.isPopupAddOpen = true;
    },
    closePopupAdd() {
      this.isPopupAddOpen = false;
    },
    showPopupEdit() {
      this.isPopupEditOpen = true;
    },
    closePopupEdit() {
      this.isPopupEditOpen = false;
    },
    showPopupDelete() {
      this.isPopupDeleteOpen = true;
    },
    closePopupDelete() {
      this.isPopupDeleteOpen = false;
    },
    setSelectedStudent(student) {
      this.selectedStudent = { ...student };
    },
    getSelectedStudent() {
      return this.selectedStudent;
    },
    setSelectedStudentId(id) {
      this.selectedStudentId = id;
    },
    getSelectedStudentId() {
      return this.selectedStudentId;
    }
  }
});
