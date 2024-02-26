<template>
    <button class="button" @click="openPopupAdd()">{{ buttonName }}</button>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue'

const buttonName = ref('Добавить')

const emits = defineEmits(['openPopupAdd'])
const openPopupAdd = () => {
    emits('openPopupAdd')
}
</script>

<style scoped lang="scss"> 
$button-color: rgba(62, 62, 253, 0.7);
$button-color-hover: rgba(62, 62, 253, 0.65);
.button {
     margin-top: 5%;
     font-size: 25px;
     font-weight: 200;
     background-color: $button-color;
     color: whitesmoke;
     border: none;
     border-radius: 3px;
     cursor: pointer;
     padding: 0.2%;

     &:hover {
         background-color: $button-color-hover;
     }
 }
</style>