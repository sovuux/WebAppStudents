<template>
    <div class="page">
        <h1 class="main-title">StudentUI(Vue 3 + postgreSQL + C#)</h1>
        <div class="container">
            <Table />
        </div>
        <Button />
    </div>
    <Popup />
</template>

<script>
import Popup from './Popup.vue'
import Table from './Table.vue'
import Button from './Button.vue'
export default {
    components: {
        Popup,
        Table,
        Button
    }
}
</script>

<style>
    * {
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }

    .page {
        top: 0;
        left: 0;
        width: 100%;
        position: absolute;
    }

    .main-title {
        margin-left: 38%;
        color: rgb(5, 129, 129);
    }

    .container {
        color: whitesmoke;
        background-color: rgb(10, 139, 139);
        width: 80%;
        margin-left: 10%;
    }

    .data-table-column {
        border-right: 1px solid white;
        border-bottom: 1px solid white;
        padding: 4px;
    }

    .button-add-container {
        margin-top: 2%;
        margin-left: 43%;
    }

    .button-add {
        font-size: 25px;
        background-color: rgb(10, 139, 139);
        color: whitesmoke;
        border: 1px solid black;
        cursor: pointer;
    }

    .button-add:hover {
        background-color: rgb(17, 197, 197);
    }

    .input-title {
        font-size: 18px;
    }

    .popup-input {
        font-size: 15px;
    }
</style>