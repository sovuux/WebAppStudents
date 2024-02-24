<template>
    <div class="page">
        <h2 class="app-title">
            StudentsUI(Vue TS + C# + PostgreSQL)
        </h2>
        <StudentTable />
        <AddNoteButton @click="showPopupAdd = true" />
    </div>
    <PopupAddNote v-if="showPopupAdd" :popupAddClose="showPopupAdd = false"></PopupAddNote>
    <PopupEditNote v-if="showPopupEdit"></PopupEditNote>
    <PopupDeleteNote v-if="showPopupDelete"></PopupDeleteNote>
</template>

<script lang="ts">
import StudentTable from './StudentTable.vue';
import AddNoteButton from './BaseComponents/AddNoteButton.vue';
import PopupDeleteNote from './BaseComponents/Popups/PopupDeleteNote.vue';
import PopupEditNote from './BaseComponents/Popups/PopupEditNote.vue';
import PopupAddNote from './BaseComponents/Popups/PopupAddNote.vue';

export default {
    components: {
        StudentTable,
        AddNoteButton,
        PopupDeleteNote,
        PopupEditNote,
        PopupAddNote
    },

    data() {
        return {
            showPopupAdd: false,
            showPopupEdit: false,
            showPopupDelete: false
        }
    }
}
</script>

<style lang="scss">
.page {
    text-align: center;
}

.app-title {
    border-bottom: 1px solid rgb(62, 62, 253);
    padding-bottom: 1%;
    color: rgba(62, 62, 253, 0.7);
}
</style>