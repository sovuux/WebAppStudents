<template>
    <table class="data-table">
        <thead>
            <tr>
                <th class="data-table-column">Id</th>
                <th class="data-table-column">Имя</th>
                <th class="data-table-column">Фамилия</th>
                <th class="data-table-column">Отчество</th>
                <th class="data-table-column">Город</th>
                <th class="data-table-column">Почтовый индекс</th>
                <th class="data-table-column">Улица</th>
                <th class="data-table-column">Email</th>
                <th class="data-table-column">Номер телефона</th>
                <th class="data-table-column">Факультет</th>
                <th class="data-table-column">Специальность</th>
                <th class="data-table-column">Курс</th>
                <th class="data-table-column">Группа</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="student in  students " :key="student.id">
                <td class="data-table-column">{{ student.id }}</td>
                <td class="data-table-column">{{ student.name }}</td>
                <td class="data-table-column">{{ student.surname }}</td>
                <td class="data-table-column">{{ student.patron }}</td>
                <td class="data-table-column">{{ student.city }}</td>
                <td class="data-table-column">{{ student.postIndex }}</td>
                <td class="data-table-column">{{ student.street }}</td>
                <td class="data-table-column">{{ student.email }}</td>
                <td class="data-table-column">{{ student.phoneNumber }}</td>
                <td class="data-table-column">{{ student.faculty }}</td>
                <td class="data-table-column">{{ student.specialty }}</td>
                <td class="data-table-column">{{ student.course }}</td>
                <td class="data-table-column">{{ student.groupName }}</td>
                <td>
                    <button class="button-edit" @click="showPopupEdit(student)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path
                                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fill-rule="evenodd"
                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                        </svg>
                    </button>
                </td>
                <td>
                    <button class="button-delete" @click="showPopupDelete(student)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path
                                d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                        </svg>
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { API_URL } from './ApiController.vue'
import { useStore } from '@/stores/store.js';
import axios from 'axios'

export default {
    data() {
        return {
            students: [],
            API_URL: API_URL,
            studentObject: {
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
        }
    },

    mounted() {
        this.getStudent()
        setInterval(() => {
            this.getStudent()

        }, 200)
    },

    methods: {
        showPopupEdit(student) {
            this.studentObject = { ...student }

            const store = useStore()
            store.setSelectedStudent({ ...this.studentObject })
            store.showPopupEdit(true)

            console.log("selectedStudent:", store.getSelectedStudent())
        },

        showPopupDelete(student) {
            const selectedStudentId = student.id

            const store = useStore()
            store.setSelectedStudentId(selectedStudentId)
            store.showPopupDelete(true)

            console.log("selectedStudentId:", store.getSelectedStudentId())
        },

        getStudent() {
            axios.get(API_URL).then(response => {
                this.students = response.data
            })

                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>
