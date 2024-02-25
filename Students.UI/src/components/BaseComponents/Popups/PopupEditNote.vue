<template>
    <Popup :popup-title="popupEditTitle">
        <div class="popup-body">
            <EditStudentInputForm />
        </div>
        <div class="popup-footer">
            <button class="button-confirm">{{ buttonEditConfirm }}</button>
            <button class="button-deny" @click="popupEditClose()">{{ buttonEditDeny }}</button>
        </div>
    </Popup>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
import Popup from '../Popup.vue';
import EditStudentInputForm from '../Inputs/EditStudentInputForm.vue';

const popupEditTitle = ref('Изменить запись')
const buttonEditConfirm = ref('Изменить')
const buttonEditDeny = ref('Отмена')

const emits = defineEmits(['popupEditClose'])

const popupEditClose = () => {
    emits('popupEditClose')
}
</script>