<template>
    <p class="input-container">
        <input v-model="selectedStudentValue" @input="updateSelectedStudentValue" type="text" class="input-text">
    </p>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
    inputColumnKey: {
        required: true
    }
})

const selectedStudentValue = ref(props.inputColumnKey)

const emit = defineEmits(['newStudentValue'])

const updateSelectedStudentValue = (event: Event) => {
    const target = event.target as HTMLInputElement;
    selectedStudentValue.value = target.value
    emit('newStudentValue', selectedStudentValue.value)
}

</script>

<style lang="scss">
$input-text-color: rgba(107, 6, 190, 0.9);

.input {
    &-container {
        display: grid;
        margin: 2%;
        color: $input-text-color;
    }

    &-text {
        margin-left: 0.01%;
        padding: 0;
        color: $input-text-color;
    }
}
</style>