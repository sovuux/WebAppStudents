<template>
    <div class="page">
        <h2 class="app-title">
            {{ appTitle }}
        </h2>
        <div class="container">
            <StudentTable />
        </div>
        <AddNoteButton />
    </div>
    <Popup />
</template>

<script lang="ts">
import StudentTable from './StudentTable.vue';
import AddNoteButton from './AddNoteButton.vue';
import Popup from './Popup.vue';

export default {
    components: {
        StudentTable,
        AddNoteButton,
        Popup
    },

    data() {
        return {
            appTitle: "StudentsUI(Vue TS + C# + PostgreSQL)"
        }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');

* {
    font-family: "Roboto Condensed", sans-serif;
}

.page {
    text-align: center;
}

.app-title {
    border-bottom: 1px solid rgb(62, 62, 253);
    padding-bottom: 1%;
    color: rgba(62, 62, 253, 0.7);
}
</style>