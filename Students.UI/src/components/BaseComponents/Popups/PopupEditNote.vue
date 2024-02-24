<template>
    <Popup :popup-title="popupEditTitle">
        <div class="popup-body">
            <EditStudentForm />
        </div>
        <div class="popup-footer">
            <button class="button-confirm">{{ buttonEditConfirm }}</button>
            <button class="button-deny" @click="showPopupEdit = false">{{ buttonEditDeny }}</button>
        </div>
    </Popup>
</template>

<script lang="ts">
import Popup from '../Popup.vue';
import EditStudentForm from '../EditStudentForm.vue';

export default {
    components: {
        Popup,
        EditStudentForm
    },

    data() {
        return {
            showPopupEdit: true,
            popupEditTitle: "Изменить запись",
            buttonEditConfirm: "Изменить",
            buttonEditDeny: "Отмена"
        }
    }
}
</script>