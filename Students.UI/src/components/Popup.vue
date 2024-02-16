<template>
    <div class="popup-add">
        <div class="popup-header">
            <span class="popup-title">{{ popupAddTitle }}</span>
        </div>
        <div class="popup-body">
            <PopupInputAdd />
        </div>
        <div class="popup-footer">
            <button class="button-confirm">Добавить</button>
            <button class="button-deny">Отмена</button>
        </div>
    </div>
    <div class="popup-edit">
        <div class="popup-header">
            <span class="popup-title">{{ popupEditTitle }}</span>
        </div>
        <div class="popup-body">
            <PopupInputEdit />
        </div>
        <div class="popup-footer">
            <button class="button-confirm">Изменить</button>
            <button class="button-deny">Отмена</button>
        </div>
    </div>
    <div class="popup-delete">
        <div class="popup-header">
            <span class="popup-title">{{ popupDeleteTitle }}</span>
        </div>
        <div class="popup-footer">
            <button class="button-confirm">Удалить</button>
            <button class="button-deny">Отмена</button>
        </div>
    </div>
</template>

<script lang="ts">
import PopupInputAdd from './PopupInputAdd.vue'
import PopupInputEdit from './PopupIntoutEdit.vue'

export default {
    components: {
        PopupInputAdd,
        PopupInputEdit
    },

    data() {
        return {
            popupAddTitle: "Добавить запись",
            popupEditTitle: "Изменить запись",
            popupDeleteTitle: "Удалить запись"
        }
    }
}
</script>

<style scoped lang="scss">
.button-confirm {
    background-color: rgba(62, 62, 253, 0.7);
    color: whitesmoke;
    border: none;
    border-radius: 3px;
    font-size: 25px;
    cursor: pointer;
}

.button-confirm:hover {
    background-color: rgba(62, 62, 253, 0.65);
}

.button-deny {
    background-color: rgba(157, 78, 221, 0.9);
    color: whitesmoke;
    border: none;
    border-radius: 10%;
    font-size: 25px;
    cursor: pointer;
    margin-left: 10%;
}

.button-deny:hover {
    background-color: rgba(157, 78, 221, 0.65);
}
</style>