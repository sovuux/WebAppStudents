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
import StudentTable from './baseComponents/Table/StudentTable.vue';
import AddNoteButton from './baseComponents/Button/AddNoteButton.vue';
import PopupDeleteNote from './baseComponents/PopupDeleteNote.vue';
import PopupEditNote from './baseComponents/PopupEditNote.vue';
import PopupAddNote from './baseComponents/PopupAddNote.vue';

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