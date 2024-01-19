<template>
    <div class="page">
        <h1 class="main-title">StudentUI</h1>
        <div class="container">
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
                    <tr v-for="student in students" :key="student.id">
                        <td>{{ student.id }}</td>
                        <td>{{ student.name }}</td>
                        <td>{{ student.surname }}</td>
                        <td>{{ student.patron }}</td>
                        <td>{{ student.city }}</td>
                        <td>{{ student.postIndex }}</td>
                        <td>{{ student.street }}</td>
                        <td>{{ student.email }}</td>
                        <td>{{ student.phoneNumber }}</td>
                        <td>{{ student.faculty }}</td>
                        <td>{{ student.specialty }}</td>
                        <td>{{ student.course }}</td>
                        <td>{{ student.groupName }}</td>
                        <td>
                            <button class="button-edit" @click="editStudent(student)">
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
                            <button class="button-delete" @click="deleteStudent(student)">
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
        </div>
        <div class="button-add-container">
            <button class="button-add" @click="showPopupAdd = true">Добавить запись</button>
        </div>
    </div>
    <div class="popup-background" v-bind:class="{ 'show-popup': showPopupAdd }">
        <div class="popup" tabindex="-1" aria-labelledby="popup-add-label" aria-hidden="true">
            <div class="popup-add-dialog">
                <div class="popup-add-dialog-content">
                    <div class="popup-add-dialog-content-header">
                        <h5 class="popup-add-dialog-content-header-title" id="popup-add-label">{{ popupAddTitle }}</h5>
                    </div>
                    <div class="popup-add-dialog-content-body">
                        <p>Имя: <input type="text" v-model="name"></p>
                        <p>Фамилия: <input type="text" v-model="surname"></p>
                        <p>Отчество: <input type="text" v-model="patron"></p>
                        <p>Город: <input type="text" v-model="city"></p>
                        <p>Почтовый индекс: <input type="text" v-model="postIndex"></p>
                        <p>Улица: <input type="text" v-model="street"></p>
                        <p>Email: <input type="text" v-model="email"></p>
                        <p>Номер телефона: <input type="text" v-model="phoneNumber"></p>
                        <p>Факультет: <input type="text" v-model="faculty"></p>
                        <p>Специальность: <input type="text" v-model="specialty"></p>
                        <p>Курс: <input type="text" v-model="course"></p>
                        <p>Группа: <input type="text" v-model="groupName"></p>
                        <button class="button-confirm" @click="addStudent()">Добавить</button>
                        <button class="button-deny" @click="showPopupAdd = false">Отмена</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="popup-background" v-bind:class="{ 'show-popup': showPopupEdit }">
        <div class="popup" tabindex="-2" aria-labelledby="popup-edit-label" aria-hidden="true">
            <div class="popup-edit-dialog">
                <div class="popup-edit-dialog-content">
                    <div class="popup-edit-dialog-content-header">
                        <h5 class="popup-edit-dialog-content-header-title" id="popup-edit-label">{{ popupEditTitle }}</h5>
                    </div>
                    <div class="popup-edit-dialog-content-body" v-if="selectedStudent">
                        <p>Имя: <input type="text" v-model="selectedStudent.name"></p>
                        <p>Фамилия: <input type="text" v-model="selectedStudent.surname"></p>
                        <p>Отчество: <input type="text" v-model="selectedStudent.patron"></p>
                        <p>Город: <input type="text" v-model="selectedStudent.city"></p>
                        <p>Почтовый индекс: <input type="text" v-model="selectedStudent.postIndex"></p>
                        <p>Улица: <input type="text" v-model="selectedStudent.street"></p>
                        <p>Email: <input type="text" v-model="selectedStudent.email"></p>
                        <p>Номер телефона: <input type="text" v-model="selectedStudent.phoneNumber"></p>
                        <p>Факультет: <input type="text" v-model="selectedStudent.faculty"></p>
                        <p>Специальность: <input type="text" v-model="selectedStudent.specialty"></p>
                        <p>Курс: <input type="number" v-model="selectedStudent.course"></p>
                        <p>Группа: <input type="text" v-model="selectedStudent.groupName"></p>
                        <button class="button-confirm" @click="saveChanges()">Сохранить</button>
                        <button class="button-deny" @click="showPopupEdit = false">Отмена</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="popup-background" v-bind:class="{ 'show-popup': showPopupDelete }">
        <div class="popup" tabindex="-3" aria-labelledby="popup-delete-label" aria-hidden="true">
            <div class="popup-delete-dialog">
                <div class="popup-delete-dialog-content">
                    <div class="popup-delete-dialog-content-header">
                        <h5 class="popup-delete-dialog-content-header-title" id="popup-delete-label">{{ popupDeleteTitle }}
                        </h5>
                    </div>
                    <div class="popup-delete-dialog-content-body">
                        <button class="button-confirm" @click="confirmDeleteStudent()">Да</button>
                        <button class="button-deny" @click="showPopupDelete = false">Нет</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            students: [],
            popupAddTitle: "Добавить запись",
            popupEditTitle: "Изменение записи",
            popupDeleteTitle: "Вы действительно хотите удалить запись?",
            name: "",
            surname: "",
            patron: "",
            city: "",
            postIndex: 0,
            street: "",
            phoneNumber: "",
            faculty: "",
            specialty: "",
            course: 0,
            groupName: "",
            showPopupAdd: false,
            showPopupEdit: false,
            showPopupDelete: false,
            selectedStudent: null,
            tempedStudent: {}
        }
    },

    mounted() {
        const API_URL_GET = "https://localhost:7167/api/Student";
        axios.get(API_URL_GET).then(response => {
            this.students = response.data
        })

            .catch(error => {
                console.log(error);
            })
    },

    methods: {
        addStudent() {
            const API_URL_ADD = "https://localhost:7167/api/Student";

            const newStudent = {
                name: this.name,
                surname: this.surname,
                patron: this.patron,
                city: this.city,
                postIndex: this.postIndex,
                street: this.street,
                email: this.email,
                phoneNumber: this.phoneNumber,
                faculty: this.faculty,
                specialty: this.specialty,
                course: this.course,
                groupName: this.groupName
            }

            axios.post(API_URL_ADD, newStudent)
                .then(response => {
                    this.students.push(response.data)

                    this.name = ""
                    this.surname = ""
                    this.patron = ""
                    this.city = ""
                    this.postIndex = 0
                    this.street = ""
                    this.email = ""
                    this.phoneNumber = ""
                    this.faculty = ""
                    this.specialty = ""
                    this.course = 0
                    this.groupName = ""
                    this.showPopupAdd = false

                    this.getStudent()
                })
                .catch(error => {
                    console.log(error)
                })
        },

        getStudent() {
            const API_URL_GET = "https://localhost:7167/api/Student"

            axios.get(API_URL_GET)
                .then(response => {
                    this.students = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        },

        editStudent(student) {
            this.selectedStudent = { ...student }
            this.showPopupEdit = true
        },

        saveChanges() {
            const API_URL_EDIT = "https://localhost:7167/api/Student";
            this.showPopupEdit = true
            axios.put(API_URL_EDIT, this.selectedStudent)
                .then((response) => {
                    const updatedStudent = response.data
                    const index = this.students.findIndex((student) => student.id ===
                        updatedStudent.id)
                    if (index !== -1) {
                        this.students.splice(index, 1, updatedStudent)
                    }
                    this.showPopupEdit = false

                    this.getStudent()
                })
                .catch(error => {
                    console.log(error)
                })
        },

        deleteStudent(student) {
            this.getStudent = { ...student }
            this.showPopupDelete = true
            console.log(student.id)

        },
        confirmDeleteStudent() {
            const index = this.students.find((tempStudent) => tempStudent.id === this.getStudent.id).id
            const API_URL_DELETE = `https://localhost:7167/api/Student?Id=${index}`
            axios.delete(API_URL_DELETE)
                .then(() => {
                    if (index !== -1) {
                        this.students.splice(index, 1)
                    }
                    this.showPopupDelete = false

                    this.getStudent()
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>

<style>
.page {
    top: 0;
    left: 0;
    width: 100%;
    position: absolute;
}

.main-title {
    margin-left: 45%;
}

.container {
    color: whitesmoke;
    background-color: rgb(10, 139, 139);
    width: 80%;
    margin-left: 10%;
}

.button-add-container {
    margin-top: 2%;
    margin-left: 43%;
}

.button-add {
    font-size: 25px;
}

.popup-background {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.show-popup {
    display: flex;
    align-items: center;
    justify-content: center;
}

.popup {
    background-color: white;
    max-width: 400px;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    animation: popup-button-anim 0.3s ease-in-out;
}

@keyframes popup-button-anim {
    0% {
        opacity: 0;
        transform: scale(0.8);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
}
</style>