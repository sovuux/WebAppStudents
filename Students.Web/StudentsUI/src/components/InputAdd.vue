<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <p class="input-title">
    Имя: <input
      v-model="student.name"
      type="text"
      class="popup-input"
    >
  </p>
  <p class="input-title">
    Фамилия: <input
      v-model="student.surname"
      type="text"
      class="popup-input"
    >
  </p>
  <p class="input-title">
    Отчество: <input
      v-model="student.patron"
      type="text"
      class="popup-input"
    >
  </p>
  <p class="input-title">
    Город: <input
      v-model="student.city"
      type="text"
      class="popup-input"
    >
  </p>
  <p class="input-title">
    Почтовый индекс: <input
      v-model="student.postIndex"
      type="text"
      class="popup-input"
    >
  </p>
  <p class="input-title">
    Улица: <input
      v-model="student.street"
      type="text"
      class="popup-input"
    >
  </p>
  <p class="input-title">
    Email: <input
      v-model="student.email"
      type="text"
      class="popup-input"
    >
  </p>
  <p class="input-title">
    Номер телефона: <input
      v-model="student.phoneNumber"
      type="text"
      class="popup-input"
    >
  </p>
  <p class="input-title">
    Факультет: <input
      v-model="student.faculty"
      type="text"
      class="popup-input"
    >
  </p>
  <p class="input-title">
    Специальность: <input
      v-model="student.specialty"
      type="text"
      class="popup-input"
    >
  </p>
  <p class="input-title">
    Курс: <input
      v-model="student.course"
      type="text"
      class="popup-input"
    >
  </p>
  <p class="input-title">
    Группа: <input
      v-model="student.groupName"
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
      API_URL: API_URL,
      students: [],
      student: {
        name: "",
        surname: "",
        patron: "",
        city: "",
        postIndex: "",
        street: "",
        phoneNumber: "",
        faculty: "",
        specialty: "",
        course: "",
        groupName: ""
      }
    };
  },

  methods: {
    addStudent() {
      const newStudent = {
        name: this.student.name,
        surname: this.student.surname,
        patron: this.student.patron,
        city: this.student.city,
        postIndex: this.student.postIndex,
        street: this.student.street,
        email: this.student.email,
        phoneNumber: this.student.phoneNumber,
        faculty: this.student.faculty,
        specialty: this.student.specialty,
        course: this.student.course,
        groupName: this.student.groupName
      };

      axios.post(API_URL, newStudent)
        .then(response => {
          this.students.push(response.data);

          for (let id in this.student) {
            this.student[id] = "";
          }

          const store = useStore();
          store.closePopupAdd();
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
