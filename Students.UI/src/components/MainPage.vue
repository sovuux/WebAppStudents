<template>
    <div class="page">
        <h2 class="page-app-title">
            StudentsUI(Vue TS + C# + PostgreSQL)
        </h2>
        <studentTable @openPopupEdit="show.showPopupEdit = true" @openPopupDelete="show.showPopupDelete = true" />
        <addButton @openPopupAdd="show.showPopupAdd = true"/>
    </div>
    <PopupAddNote v-if="show.showPopupAdd" @popupAddClose="show.showPopupAdd = false" />
    <PopupEditNote v-if="show.showPopupEdit" @popupEditClose="show.showPopupEdit = false" />
    <PopupDeleteNote v-if="show.showPopupDelete" @popupDeleteClose="show.showPopupDelete = false" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import studentTable from './baseComponents/studentTable.vue'
import addButton from './baseComponents/addButton.vue';
import PopupDeleteNote from './baseComponents/popupDeleteNote.vue';
import PopupEditNote from './baseComponents/popupEditNote.vue';
import PopupAddNote from './baseComponents/popupAddNote.vue';

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