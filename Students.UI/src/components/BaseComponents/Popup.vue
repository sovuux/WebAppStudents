<template>
    <div class="popup-background show-popup">
        <div class="popup">
            <div class="popup-header">
                <span class="popup-title">
                    {{ popupTitle }}
                </span>
            </div>
            <div class="popup-footer">
                <slot class="actions"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        popupTitle: {
            type: String,
            default: ""
        }
    }
}
</script>

<style>
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
    text-align: center;
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
    font-weight: 400;
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
    margin-left: 42%;
    font-weight: 400;
}

.button-deny:hover {
    background-color: rgba(157, 78, 221, 0.65);
}
</style>