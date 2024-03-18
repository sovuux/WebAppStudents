<template>
  <p class="input-container">
    <input
      v-model="selectedStudentValue"
      type="text"
      class="input-text"
      @input="updateSelectedStudentValue"
    >
  </p>
</template>

<script lang="ts" setup>
import { defineProps, PropType, ref } from 'vue'

const props = defineProps({
  inputColumnKey: {
    type: [String, Number] as PropType<string | number | undefined>,
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
    padding: 0 5px;
    color: rgba(62, 62, 253, 0.9);
    border: 1px solid gray;
    font-size: 15px;
    letter-spacing: 2px;
    outline: none;
    border-radius: 5px;
    width: 150px;
  }
}
</style>