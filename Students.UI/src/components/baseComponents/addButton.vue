<template>
    <Button @clickAction="openPopupAdd()" class="add-button">
        <template #buttonContent>{{ data.addButtonName }}</template>
    </Button>
</template>

<script lang="ts" setup>
import Button from './Button/Button.vue';

const emit = defineEmits(["openPopupAdd"])

const openPopupAdd = () => {
    emit("openPopupAdd")
}

const data = {
    addButtonName: "Добавить"
}
</script>

<style lang="scss">
$button-color: rgba(62, 62, 253, 0.7);
$button-color-hover: rgba(62, 62, 253, 0.65);

.add-button {
    margin-top: 3%;
    background-color: $button-color;

    &:hover {
        background-color: $button-color-hover;
    }
}
</style>