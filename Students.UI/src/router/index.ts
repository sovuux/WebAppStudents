import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from "../Views/LoginPage.vue";
import MainPage from "../Views/TableStudentsPage.vue";
import DictionariesPage from "../Views/MainPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Login',
            component: LoginPage
        },
        {
            path: '/table-students',
            name: 'Table',
            component: MainPage
        },
        {
            path: '/main-page',
            name: 'Mainpage',
            component: DictionariesPage
        }

    ]
})
export default router