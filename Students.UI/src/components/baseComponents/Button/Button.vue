<template>
    <button class="button" @click="emits('openPopup')">{{ data.buttonName }}</button>
</template>

<script lang="ts" setup>
import {  defineEmits } from 'vue'

const data = { 
    buttonName: 'Добавить' 
}

const emits = defineEmits(['openPopup'])

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