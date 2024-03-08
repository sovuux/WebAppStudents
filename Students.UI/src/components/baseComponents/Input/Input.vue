<template>
    <p class="input-container">
        <input v-model.lazy="props.inputColumnKey<StudentType[]>" type="text" class="input-text">
    </p>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { StudentType } from '../../../types/models';

const props = defineProps({
    inputColumnKey: {
        type: String,
        default: ""
    }
})
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