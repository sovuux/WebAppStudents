<!-- eslint-disable vue/no-unused-components -->
<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div
    class="popup-background"
    :class="{ 'show-popup': isPopupAddOpen }"
  >
    <div
      class="popup"
      tabindex="-1"
      aria-labelledby="popup-add-label"
      aria-hidden="true"
    >
      <div class="popup-add-dialog">
        <div class="popup-add-dialog-content">
          <div class="popup-add-dialog-content-header">
            <h5
              id="popup-add-label"
              class="popup-dialog-content-header-title"
            >
              {{ popupAddTitle }}
            </h5>
          </div>
          <div class="popup-add-dialog-content-body">
            <InputAdd ref="inputAdd" />
            <button
              class="button-confirm"
              @click="addStudentParent(); getStudent()"
            >
              Добавить
            </button>
            <button
              class="button-deny button-deny-add"
              @click="closePopupAdd"
            >
              Отмена
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="popup-background"
    :class="{ 'show-popup': isPopupEditOpen }"
  >
    <div
      class="popup"
      tabindex="-2"
      aria-labelledby="popup-edit-label"
      aria-hidden="true"
    >
      <div class="popup-edit-dialog">
        <div class="popup-edit-dialog-content">
          <div class="popup-edit-dialog-content-header">
            <h5 class="popup-dialog-content-header-title">
              {{ popupEditTitle }}
            </h5>
          </div>
          <div class="popup-edit-dialog-content-body">
            <InputEdit ref="inputEdit" />
            <button
              class="button-confirm"
              @click="editStudentParent(); getStudent()"
            >
              Сохранить
            </button>
            <button
              class="button-deny"
              @click="closePopupEdit"
            >
              Отмена
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="popup-background"
    :class="{ 'show-popup': isPopupDeleteOpen }"
  >
    <div
      class="popup"
      tabindex="-3"
      aria-labelledby="popup-delete-label"
      aria-hidden="true"
    >
      <div class="popup-delete-dialog">
        <div class="popup-delete-dialog-content">
          <div class="popup-delete-dialog-content-header">
            <h5
              id="popup-delete-label"
              class="popup-dialog-content-header-title"
            >
              {{ popupDeleteTitle }}
            </h5>
          </div>
          <div class="popup-delete-dialog-content-body">
            <button
              class="button-confirm"
              @click="deleteStudent()"
            >
              Да
            </button>
            <button
              class="button-deny button-deny-delete"
              @click="closePopupDelete"
            >
              Нет
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ButtonAdd from "./Button.vue";
import InputAdd from "./InputAdd.vue";
import InputEdit from "./InputEdit.vue";
import { API_URL } from "./ApiController.vue";
import { useStore } from "@/stores/store.js";

export default {
  components: {
    InputAdd,
    InputEdit,
    // eslint-disable-next-line vue/no-unused-components
    ButtonAdd
  },

  data() {
    return {
      popupAddTitle: "Добавить запись",
      popupEditTitle: "Изменение записи",
      popupDeleteTitle: "Вы действительно хотите удалить запись?",
      students: [],
      student: {
        name: "",
        surname: "",
        patron: "",
        city: "",
        postIndex: "",
        street: "",
        phoneNumber: "",
        faculty: "",
        specialty: "",
        course: "",
        groupName: ""
      }
    };
  },

  computed: {
    isPopupAddOpen() {
      const store = useStore();
      return store.isPopupAddOpen;
    },

    isPopupEditOpen() {
      const store = useStore();
      return store.isPopupEditOpen;
    },

    isPopupDeleteOpen() {
      const store = useStore();
      return store.isPopupDeleteOpen;
    }

  },

  methods: {
    closePopupAdd() {
      const store = useStore();
      store.closePopupAdd();
    },

    closePopupEdit() {
      const store = useStore();
      store.closePopupEdit();
    },

    closePopupDelete() {
      const store = useStore();
      store.closePopupDelete();
    },

    addStudentParent() {
      this.$refs.inputAdd.addStudent();
    },

    editStudentParent() {
      this.$refs.inputEdit.editStudent();
    },

    deleteStudent() {
      const store = useStore();
      const index = store.getSelectedStudentId();
      const API_URL_DELETE = API_URL + `?Id=${index}`;
      axios.delete(API_URL_DELETE)
        .then(() => {
          if (index !== -1) {
            this.students.splice(index, 1);
          }

          this.closePopupDelete();
          location.reload();
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
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

.popup {
    background-color: white;
    max-width: 400px;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    animation: popup-button-anim 0.3s ease-in-out;
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

.button-confirm {
    background-color: rgba(72, 247, 72, 0.8);
    color: rgb(58, 55, 55);
    border: none;
    border-radius: 10%;
    font-size: 25px;
    cursor: pointer;
}

.button-confirm:hover {
    background-color: rgba(16, 199, 16, 0.8);
}

.button-deny {
    background-color: rgba(247, 72, 72, 0.8);
    color: rgb(58, 55, 55);
    border: none;
    border-radius: 10%;
    font-size: 25px;
    margin-left: 36%;
    margin-top: 5%;
    cursor: pointer;
}

.button-deny:hover {
    background-color: rgba(238, 15, 15, 0.8);
}

.button-deny-delete {
    margin-left: 70%;
    cursor: pointer;
}

.button-deny-add {
    margin-left: 39%;
    cursor: pointer;
}

.button-edit {
    background-color: whitesmoke;
    border: none;
    margin-left: 50%;
    cursor: pointer;
}

.button-edit:hover {
    background-color: rgb(17, 197, 197);
}

.button-delete {
    background-color: whitesmoke;
    border: none;
    margin-left: 100%;
    cursor: pointer;
}

.button-delete:hover {
    background-color: rgb(17, 197, 197);
}

.popup-dialog-content-header-title {
    font-size: 18px;
    text-align: center;
}
</style>