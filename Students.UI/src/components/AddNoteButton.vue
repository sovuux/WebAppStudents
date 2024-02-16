<template>
    <button class="button-add" @click="addStudent">Добавить</button>
</template>

<script lang="ts">
export default {
    methods: {
        addStudent() {

        }
    }
}
</script>

<style scoped lang="scss">
.button-add {
    margin-top: 5%;
    font-size: 25px;
    background-color: rgba(62, 62, 253, 0.7);
    color: whitesmoke;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    padding: 0.2%;
}

.button-add:hover {
    background-color: rgba(62, 62, 253, 0.65);
}
</style>