<template>
    <button class="button-add" @click="openPopupAdd">{{ buttonName }}</button>
</template>

<script lang="ts">
export default {
    data() {
        return {
            buttonName: "Добавить"
        }
    },

    methods: {
        openPopupAdd() {
            this.$emit("open-popup-add", true)
        }
    }

}
</script>

<style scoped lang="scss">  .button-add {
      margin-top: 5%;
      font-size: 25px;
      font-weight: 200;
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