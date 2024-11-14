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
    required: true,
    default: ""
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
.input {
  &-container {
    display: grid;
    padding: 0 1rem;
    color: #183462;
  }

  &-text {
    margin-left: 0.01%;
    padding: 0.3rem 0.5rem;
    color: #183462;
    border: 1px solid gray;
    font-size: 15px;
    outline: none;
    border-radius: 5px;
    width: 100%;
  }
}
</style>