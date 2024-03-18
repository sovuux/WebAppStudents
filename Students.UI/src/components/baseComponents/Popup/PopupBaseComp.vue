<template>
  <div class="popup-background popup-show">
    <div class="popup">
      <div class="popup-header">
        <slot name="popupHeader" />
      </div>
      <div class="popup-body">
        <slot name="popupBody" />
      </div>
      <div class="popup-footer">
        <slot
          name="popupFooter"
          class="actions"
        />
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
    width: 800px;
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

        &-section {
            font-size: 18px;
            color: $popup-title-color;
            border-bottom: 1px solid $popup-title-color;
            margin: 1%;
            user-select: none;
        }
    }

    &-header {
        text-align: center;
        user-select: none;
    }

    &-body {
        text-align: left;
        margin-top: 5%;
        display: flex;

        &-text {
            color: $popup-title-color;
            user-select: none;
            font-size: 18px;
        }

        &-container {
            display: block;
            width: 100%;

            &-section {
                background-color: rgb(221, 221, 221);
                margin: 1%;
                border-radius: 5px;

                &-content {
                    display: flex;
                }
            }
        }
    }

    &-footer {
        margin-top: 2%;
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
    margin-left: 30%;

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
    font-weight: 400;
    margin-left: 10%;

    &:hover {
        background-color: $button-deny-color-hover;
    }
}
</style>