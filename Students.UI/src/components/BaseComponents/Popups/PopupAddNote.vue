<template>
    <Popup :popup-title="popupAddTitle">
        <div class="popup-body">
            <AddStudentForm />
        </div>
        <div class="popup-footer">
            <button class="button-confirm">{{ buttonAddConfirm }}</button>
            <button class="button-deny" @click="popupAddClose()">{{ buttonAddDeny }}</button>
        </div>
    </Popup>
</template>

<script lang="ts">
import Popup from '../Popup.vue';
import AddStudentForm from '../AddStudentForm.vue';

export default {
    components: {
        Popup,
        AddStudentForm
    },

    data() {
        return {
            showPopupAdd: true,
            popupAddTitle: "Добавить запись",
            buttonAddConfirm: "Добавить",
            buttonAddDeny: "Отмена"
        }
    },

    methods: {
        popupAddClose() {
            this.$emit('popupAddClose')
        }
    }
}
</script>