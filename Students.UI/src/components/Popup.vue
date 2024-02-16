<template>
    <div class="popup-background">
        <div class="popup modal-add">
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
    </div>
    <div class="popup-background">
        <div class="popup modal-edit">
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
    </div>
    <div class="popup-background">
        <div class="popup modal-delete">
            <div class="popup-header">
                <span class="popup-title">{{ popupDeleteTitle }}</span>
            </div>
            <div class="popup-footer">
                <button class="button-confirm">Удалить</button>
                <button class="button-deny">Отмена</button>
            </div>
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
.popup-background {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.show-popup {
    display: flex;
    align-items: center;
    justify-content: center;
}

.popup-title {
    font-size: 26px;
    color: rgba(62, 62, 253, 0.9);
    border-bottom: 1px solid rgba(62, 62, 253, 0.9);
}

.popup {
    background-color: white;
    width: 400px;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    animation: popup-button-anim 0.3s ease-in-out;
}

.popup-header {
    text-align: center;
}

@keyframes popup-button-anim {
    0% {
        opacity: 0;
        transform: scale(0.8);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
}

.popup-footer {
    margin-top: 5%;
}

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
    border-radius: 3px;
    font-size: 25px;
    cursor: pointer;
    margin-left: 48%;
}

.button-deny:hover {
    background-color: rgba(157, 78, 221, 0.65);
}
</style>