<template>
    <div class="page">
        <h2 class="page-app-title">
            StudentsUI(Vue TS + C# + PostgreSQL)
        </h2>
        <StudentTable @openPopupEdit="show.showPopupEdit = true" @openPopupDelete="show.showPopupDelete = true" />
        <Button @openPopup="show.showPopupAdd = true" />
    </div>
    <PopupAddNote v-if="show.showPopupAdd" @popupAddClose="show.showPopupAdd = false" />
    <PopupEditNote v-if="show.showPopupEdit" @popupEditClose="show.showPopupEdit = false" />
    <PopupDeleteNote v-if="show.showPopupDelete" @popupDeleteClose="show.showPopupDelete = false" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import StudentTable from './baseComponents/Table/Table.vue';
import Button from './baseComponents/Button/Button.vue';
import PopupDeleteNote from './popupDeleteNote.vue';
import PopupEditNote from './popupEditNote.vue';
import PopupAddNote from './popupAddNote.vue';

const show = ref({
    showPopupAdd: false,
    showPopupEdit: false,
    showPopupDelete: false
})
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