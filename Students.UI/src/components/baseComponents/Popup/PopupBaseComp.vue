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
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.popup {
    background-color: white;
    width: 1000px;
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
        color: #334155;
        border-bottom: 1px solid #64748b;
        text-align: center;

        &-section {
            font-size: 18px;
            color: #334155;
            border-bottom: 1px solid #334155;
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
        justify-content: center;

        &-text {
            color: #334155;
            user-select: none;
            font-size: 18px;
        }

        &-container {
            display: block;
            width: 100%;

            &-section {
                background-color: rgb(238, 241, 248);
                margin: 1%;
                border-radius: 5px;

                &-content {
                    display: flex;
                }
            }
        }
    }

    &-footer {
        display: flex;
        justify-content: center;
    }
}

.button-confirm {
    background-color: #4CAF50;
    color: whitesmoke;
    border: none;
    border-radius: 3px;
    font-size: 25px;
    cursor: pointer;
    font-weight: 400;
    &:hover {
        background-color: #45a049;
    }
}

.button-deny {
    background-color: #e53935;
    color: whitesmoke;
    border: none;
    border-radius: 3px;
    font-size: 25px;
    cursor: pointer;
    font-weight: 400;
    &:hover {
        background-color: #c62828;
    }
}
.input-container-span {
  color: #334155;
  text-decoration: underline;
}
</style>