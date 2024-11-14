<template>
  <button
    class="button"
    @click="emit('clickAction')"
  >
    <slot name="buttonContent">
      {{ props.buttonName }}
    </slot>
  </button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  buttonName: {
    type: String,
    default: ""
  }
});

const emit = defineEmits(['clickAction']);
</script>

<style scoped lang="scss">
.button {
  font-size: 25px;
  font-weight: 200;
  color: whitesmoke;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
}
</style>