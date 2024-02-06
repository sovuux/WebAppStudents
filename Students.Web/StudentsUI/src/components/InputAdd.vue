<template>
    <p class="input-title">Имя: <input type="text" class="popup-input" v-model="student.name"></p>
    <p class="input-title">Фамилия: <input type="text" class="popup-input" v-model="student.surname"></p>
    <p class="input-title">Отчество: <input type="text" class="popup-input" v-model="student.patron"></p>
    <p class="input-title">Город: <input type="text" class="popup-input" v-model="student.city"></p>
    <p class="input-title">Почтовый индекс: <input type="text" class="popup-input" v-model="student.postIndex"></p>
    <p class="input-title">Улица: <input type="text" class="popup-input" v-model="student.street"></p>
    <p class="input-title">Email: <input type="text" class="popup-input" v-model="student.email"></p>
    <p class="input-title">Номер телефона: <input type="text" class="popup-input" v-model="student.phoneNumber"></p>
    <p class="input-title">Факультет: <input type="text" class="popup-input" v-model="student.faculty"></p>
    <p class="input-title">Специальность: <input type="text" class="popup-input" v-model="student.specialty"></p>
    <p class="input-title">Курс: <input type="text" class="popup-input" v-model="student.course"></p>
    <p class="input-title">Группа: <input type="text" class="popup-input" v-model="student.groupName"></p>
</template>

<script>
import { useStore } from '@/stores/store.js'
import axios from 'axios'
import { API_URL } from './ApiController.vue'

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
            },
        }
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
            }

            axios.post(API_URL, newStudent)
                .then(response => {
                    this.students.push(response.data)

                    for (var key in this.student) {
                        this.student[key] = ""
                    }

                    const store = useStore()
                    store.closePopupAdd()
                    location.reload()

                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>
