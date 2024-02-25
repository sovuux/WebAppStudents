<template>
    <div class="page">
        <h2 class="page-app-title">
            StudentsUI(Vue TS + C# + PostgreSQL)
        </h2>
        <StudentTable @openPopupEdit="showPopupEdit = true" @openPopupDelete="showPopupDelete = true" />
        <AddNoteButton @openPopupAdd="showPopupAdd = true" />
    </div>
    <PopupAddNote v-if="showPopupAdd" @popupAddClose="showPopupAdd = false"></PopupAddNote>
    <PopupEditNote v-if="showPopupEdit" @popupEditClose="showPopupEdit = false"></PopupEditNote>
    <PopupDeleteNote v-if="showPopupDelete" @popupDeleteClose="showPopupDelete = false"></PopupDeleteNote>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import StudentTable from './StudentTable.vue';
import AddNoteButton from './BaseComponents/AddNoteButton.vue';
import PopupDeleteNote from './BaseComponents/Popups/PopupDeleteNote.vue';
import PopupEditNote from './BaseComponents/Popups/PopupEditNote.vue';
import PopupAddNote from './BaseComponents/Popups/PopupAddNote.vue';

const showPopupAdd = ref(false)
const showPopupEdit = ref(false)
const showPopupDelete = ref(false)
</script>

<style lang="scss">
$main-color: rgb(62, 62, 253);
$text-color: rgba(62, 62, 253, 0.7);

.page {
    text-align: center;

    &-app-title {
        border-bottom: 1px solid $main-color;
        padding-bottom: 1%;
        color: $text-color;
    }
}
</style>