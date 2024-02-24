<template>
    <Popup :popup-title="popupDeleteTitle">
        <div class="popup-footer">
            <button class="button-confirm">{{ buttonDeleteConfirm }}</button>
            <button class="button-deny" @click="showPopupDelete = false">{{ buttonDeleteDeny }}</button>
        </div>
    </Popup>
</template>

<script lang="ts">
import Popup from '../Popup.vue';

export default {
    components: {
        Popup
    },
    data() {
        return {
            showPopupDelete: true,
            popupDeleteTitle: "Удалить запись",
            buttonDeleteConfirm: "Удалить",
            buttonDeleteDeny: "Отмена"
        }
    }
}
</script>