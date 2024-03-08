<template>
    <div class="page">
        <h2 class="page-app-title">
            StudentsUI(Vue TS + C# + PostgreSQL)
        </h2>
        <StudentTable 
            @openPopupEdit="openPopupAddEdit()" 
            @openPopupDelete="show.showPopupDelete = true">
        </StudentTable>
        <Button @clickAction="openPopupAddEdit()" class="add-button">
            <template #buttonContent>
                Добавить
            </template>
        </Button>
    </div>
    <PopupAddEditNote 
        :isNew="isNewStudent" 
        v-if="show.showPopupAddEdit"
        @closePopupAddEdit="show.showPopupAddEdit = false">
    </PopupAddEditNote>
    <PopupDeleteNote 
        v-if="show.showPopupDelete" 
        @popupDeleteClose="show.showPopupDelete = false">
    </PopupDeleteNote>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useStore } from '../stores/store';
import StudentTable from './studentTable.vue';
import Button from './baseComponents/Button/Button.vue';
import PopupDeleteNote from './popupDeleteNote.vue';
import PopupAddEditNote from './popupAddEditNote.vue';

const store = useStore()

const show = ref({
    showPopupDelete: false,
    showPopupAddEdit: false
})

const isNewStudent = ref(false)

const openPopupAddEdit = () => {
    show.value.showPopupAddEdit = true
    if (store.studentObject.id !== null) {
        isNewStudent.value = false
    }
    else {
        isNewStudent.value = true
    }
}
</script>

<style lang="scss">
$main-color: rgb(62, 62, 253);

$text-color: rgba(62, 62, 253, 0.7);

$button-color: rgba(62, 62, 253, 0.7);
$button-color-hover: rgba(62, 62, 253, 0.65);

.page {
    text-align: center;

    &-app-title {
        border-bottom: 1px solid $main-color;
        padding-bottom: 1%;
        color: $text-color;
    }
}

.add-button {
    margin-top: 3%;
    background-color: $button-color;

    &:hover {
        background-color: $button-color-hover;
    }
}
</style>