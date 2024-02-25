<template>
    <Popup :popup-title="popupDeleteTitle">
        <div class="popup-footer">
            <button class="button-confirm">{{ buttonDeleteConfirm }}</button>
            <button class="button-deny" @click="popupDeleteClose()">{{ buttonDeleteDeny }}</button>
        </div>
    </Popup>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
import Popup from '../Popup.vue';

const popupDeleteTitle = ref("Удалить запись")
const buttonDeleteConfirm = ref("Удалить")
const buttonDeleteDeny = ref("Отмена")

const emits = defineEmits(['popupDeleteClose'])
const popupDeleteClose = () => {
    emits('popupDeleteClose')
}
</script>