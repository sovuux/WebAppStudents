<template>
    <div class="popup-background popup-show">
        <div class="popup">
            <div class="popup-header">
                <slot name="popupHeader">
                </slot>
            </div>
            <div class="popup-body">
                <slot name="popupBody"></slot>
            </div>
            <div class="popup-footer">
                <slot name="popupFooter" class="actions"></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
$popup-title-color: rgba(62, 62, 253, 0.9);

$button-confirm-color: rgba(62, 62, 253, 0.7);
$button-confirm-color-hover: rgba(62, 62, 253, 0.65);

$button-deny-color: rgba(157, 78, 221, 0.9);
$button-deny-color-hover: rgba(157, 78, 221, 0.65);

.popup {
    background-color: white;
    width: 400px;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    animation: popup-button-anim 0.3s ease-in-out;

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

    &-background {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    &-show {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &-title {
        font-size: 26px;
        color: $popup-title-color;
        border-bottom: 1px solid $popup-title-color;
        text-align: center;
    }

    &-header {
        text-align: center;
        user-select: none;
    }

    &-body {
        margin-top: 2%;
        padding: 1%;
        text-align: center;

        &-text {
            color: $popup-title-color;
            user-select: none;
        }
    }

    &-footer {
        margin-top: 5%;
    }
}

.button-confirm {
    background-color: $button-confirm-color;
    color: whitesmoke;
    border: none;
    border-radius: 3px;
    font-size: 25px;
    cursor: pointer;
    font-weight: 400;

    &:hover {
        background-color: $button-confirm-color-hover;
    }
}

.button-deny {
    background-color: $button-deny-color;
    color: whitesmoke;
    border: none;
    border-radius: 3px;
    font-size: 25px;
    cursor: pointer;
    margin-left: 42%;
    font-weight: 400;

    &:hover {
        background-color: $button-deny-color-hover;
    }
}
</style>