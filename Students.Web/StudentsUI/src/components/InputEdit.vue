<template>
  <p class="input-title">
    Имя: <input
      v-model="selectedStudent.name"
      type="text"
      class="popup-input"
    >
  </p>
  <p class="input-title">
    Фамилия: <input
      v-model="selectedStudent.surname"
      type="text"
      class="popup-input"
    >
  </p>
  <p class="input-title">
    Отчество: <input
      v-model="selectedStudent.patron"
      type="text"
      class="popup-input"
    >
  </p>
  <p class="input-title">
    Город: <input
      v-model="selectedStudent.city"
      type="text"
      class="popup-input"
    >
  </p>
  <p class="input-title">
    Почтовый индекс: <input
      v-model="selectedStudent.postIndex"
      type="text"
      class="popup-input"
    >
  </p>
  <p class="input-title">
    Улица: <input
      v-model="selectedStudent.street"
      type="text"
      class="popup-input"
    >
  </p>
  <p class="input-title">
    Email: <input
      v-model="selectedStudent.email"
      type="text"
      class="popup-input"
    >
  </p>
  <p class="input-title">
    Номер телефона: <input
      v-model="selectedStudent.phoneNumber"
      type="text"
      class="popup-input"
    >
  </p>
  <p class="input-title">
    Факультет: <input
      v-model="selectedStudent.faculty"
      type="text"
      class="popup-input"
    >
  </p>
  <p class="input-title">
    Специальность: <input
      v-model="selectedStudent.specialty"
      type="text"
      class="popup-input"
    >
  </p>
  <p class="input-title">
    Курс: <input
      v-model="selectedStudent.course"
      type="text"
      class="popup-input"
    >
  </p>
  <p class="input-title">
    Группа: <input
      v-model="selectedStudent.groupName"
      type="text"
      class="popup-input"
    >
  </p>
</template>

<script>
import axios from "axios";
import { API_URL } from "./ApiController.vue";
import { useStore } from "@/stores/store.js";

export default {
  data() {
    return {
      students: []
    };
  },

  computed: {
    selectedStudent() {
      const store = useStore();
      return store.getSelectedStudent();
    }
  },


  methods: {
    editStudent() {
      this.showPopupEdit = true;
      axios.put(API_URL, this.selectedStudent)
        .then(response => {
          const updatedStudent = response.data;
          const index = this.students.findIndex(selectedStudent => selectedStudent.id ===
                        updatedStudent.id);
          if (index !== -1) {
            this.students.splice(index, 1, updatedStudent);
          }

          const store = useStore();
          store.closePopupEdit();
          store.updateTable(API_URL);
          location.reload();
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>