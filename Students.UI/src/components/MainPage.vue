<template>
    <div class="page">
        <h2 class="page-app-title">
            StudentsUI(Vue TS + C# + PostgreSQL)
        </h2>
        <StudentTable @openPopupEdit="show.showPopupAddEdit = true; isNewStudent = false"
            @openPopupDelete="show.showPopupDelete = true">
        </StudentTable>
        <AddButton @openPopupAdd="show.showPopupAddEdit = true; isNewStudent = true">
        </AddButton>
    </div>
    <PopupAddEditNote 
        :isNew="isNewStudent" 
        v-if="show.showPopupAddEdit"
        @closePopupAddEdit="show.showPopupAddEdit = false" 
    />
    <PopupDeleteNote 
        v-if="show.showPopupDelete"
        @popupDeleteClose="show.showPopupDelete = false" 
    />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import StudentTable from './baseComponents/studentTable.vue'
import AddButton from './baseComponents/addButton.vue';
import PopupDeleteNote from './baseComponents/popupDeleteNote.vue';
import PopupAddEditNote from './baseComponents/popupAddEditNote.vue';

const show = ref({
    showPopupDelete: false,
    showPopupAddEdit: false
})

const isNewStudent = ref(false)
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