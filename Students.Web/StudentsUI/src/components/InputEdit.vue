<template>
    <p class="input-title">Имя: <input type="text" class="popup-input" v-model="selectedStudent.name"></p>
    <p class="input-title">Фамилия: <input type="text" class="popup-input" v-model="selectedStudent.surname"></p>
    <p class="input-title">Отчество: <input type="text" class="popup-input" v-model="selectedStudent.patron"></p>
    <p class="input-title">Город: <input type="text" class="popup-input" v-model="selectedStudent.city"></p>
    <p class="input-title">Почтовый индекс: <input type="text" class="popup-input" v-model="selectedStudent.postIndex"></p>
    <p class="input-title">Улица: <input type="text" class="popup-input" v-model="selectedStudent.street"></p>
    <p class="input-title">Email: <input type="text" class="popup-input" v-model="selectedStudent.email"></p>
    <p class="input-title">Номер телефона: <input type="text" class="popup-input" v-model="selectedStudent.phoneNumber"></p>
    <p class="input-title">Факультет: <input type="text" class="popup-input" v-model="selectedStudent.faculty"></p>
    <p class="input-title">Специальность: <input type="text" class="popup-input" v-model="selectedStudent.specialty"></p>
    <p class="input-title">Курс: <input type="text" class="popup-input" v-model="selectedStudent.course"></p>
    <p class="input-title">Группа: <input type="text" class="popup-input" v-model="selectedStudent.groupName"></p>
</template>

<script>
import { useStore } from '@/stores/store.js'
import axios from 'axios'
import { API_URL } from './ApiController.vue'

export default {
    data() {
        return {
            students: []
        }
    },

    computed: {
        selectedStudent() {
            const store = useStore()
            return store.getSelectedStudent()
        },
    },


    methods: {
        editStudent() {
            this.showPopupEdit = true
            axios.put(API_URL, this.selectedStudent)
                .then((response) => {
                    const updatedStudent = response.data
                    const index = this.students.findIndex((selectedStudent) => selectedStudent.id ===
                        updatedStudent.id)
                    if (index !== -1) {
                        this.students.splice(index, 1, updatedStudent)
                    }

                    const store = useStore()
                    store.closePopupEdit()

                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>