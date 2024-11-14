<template>
  <PopupBaseComp>
    <template #popupHeader>
      <ButtonBaseComponent
        class="button-close"
        @click-action="closePopupAddEdit()"
      >
        <template #buttonContent>
          <img
            src="/images/close.png"
            alt="close"
            class="button-close-image"
          >
        </template>
      </ButtonBaseComponent>
      <span class="popup-title">{{ props.isNew ? 'Добавить запись' : 'Изменить запись' }}</span>
    </template>

    <template #popupBody>
      <div class="popup-body-container">
        <div class="popup-body-container-section">
          <span class="popup-title-section">
            Личная информация
          </span>
          <div class="popup-body-container-section-content">
            <p
              v-for="(formColumnPersonalInfo, key) in formColumnsPersonalInfo"
              :key="key"
              class="input-container"
            >
              <span class="input-container-span">
                {{ formColumnPersonalInfo.content }}
              </span>
              <InputBaseComp
                :input-column-key="store.studentObject[formColumnPersonalInfo.key as keyof StudentType]"
                @new-student-value="cloneStudent[formColumnPersonalInfo.key as keyof StudentType] = $event"
              />
            </p>
          </div>
        </div>
        <div class="popup-body-container-section">
          <span class="popup-title-section">
            Адрес
          </span>
          <div class="popup-body-container-section-content">
            <p
              v-for="(formColumnAddress, key) in formColumnsAddress"
              :key="key"
              class="input-container"
            >
              <span class="input-container-span">
                {{ formColumnAddress.content }}
              </span>
              <InputBaseComp
                :input-column-key="store.studentObject[formColumnAddress.key as keyof StudentType]"
                @new-student-value="cloneStudent[formColumnAddress.key as keyof StudentType] = $event"
              />
            </p>
          </div>
        </div>
        <div class="popup-body-container-section">
          <span class="popup-title-section">
            Контакты
          </span>
          <div class="popup-body-container-section-content">
            <p
              v-for="(formColumnContacts, key) in formColumnsContacts" 
              :key="key"
              class="input-container"
            >
              <span class="input-container-span">
                {{ formColumnContacts.content }}
              </span>
              <InputBaseComp
                :input-column-key="store.studentObject[formColumnContacts.key as keyof StudentType]"
                @new-student-value="cloneStudent[formColumnContacts.key as keyof StudentType] = $event"
              />
            </p>
          </div>
        </div>
        <div class="popup-body-container-section">
          <span class="popup-title-section">
            Информация о институте
          </span>
          <div class="popup-body-container-section-content">
            <p
              v-for="(formColumnUniversity, key) in formColumnsUniversity"
              :key="key"
              class="input-container"
            >
              <span class="input-container-span">
                {{ formColumnUniversity.content }}
              </span>
              <InputBaseComp
                :input-column-key="store.studentObject[formColumnUniversity.key as keyof StudentType]"
                @new-student-value="cloneStudent[formColumnUniversity.key as keyof StudentType] = $event"
              />
            </p>
          </div>
        </div>
      </div>
    </template>

    <template #popupFooter>
      <ButtonBaseComponent
        class="button button-confirm"
        @click-action="saveStudent()"
      >
        <template #buttonContent>
          {{ props.isNew ? "Добавить" : "Изменить" }}
        </template>
      </ButtonBaseComponent>
      <ButtonBaseComponent
        class="button button-deny"
        @click-action="closePopupAddEdit()"
      >
        <template #buttonContent>
          Отмена
        </template>
      </ButtonBaseComponent>
    </template>
  </PopupBaseComp>
</template>

<script lang="ts" setup>
import PopupBaseComp from "@/components/baseComponents/Popup/PopupBaseComp.vue";
import InputBaseComp from "@/components/baseComponents/Input/InputBaseComp.vue";
import ButtonBaseComponent from "@/components/baseComponents/Button/ButtonBaseComponent.vue";
import { defineProps, onMounted } from 'vue';
import { useStore } from '@/stores/store.ts';
import { ColumnType, StudentType } from '@/types/models.ts';
import _ from 'lodash';

const emit = defineEmits(['closePopupAddEdit'])

const props = defineProps({
  isNew: {
    type: Boolean,
    default: false
  }
})

const store = useStore()

const formColumnsPersonalInfo: ColumnType[] = ([
    { key: "name", content: "Имя:" },
    { key: "surname", content: "Фамилия:" },
    { key: "patron", content: "Отчество:" },
])

const formColumnsAddress: ColumnType[] = ([
    { key: "city", content: "Город:" },
    { key: "postIndex", content: "Почтовый индекс:" },
    { key: "street", content: "Улица:" }
])

const formColumnsContacts: ColumnType[] = ([
    { key: "email", content: "Email:" },
    { key: "phoneNumber", content: "Номер телефона:" }
])

const formColumnsUniversity: ColumnType[] = ([
    { key: "faculty", content: "Факультет:" },
    { key: "specialty", content: "Специальность:" },
    { key: "course", content: "Курс:" },
    { key: "groupName", content: "Группа:" }
])

const cloneStudent: { [key: string]: number | string; id: number } = _.cloneDeep(store.studentObject)

const saveStudent = async () => {
    if (props.isNew === true) {
        store.studentObject = cloneStudent
        await store.addStudent(store.studentObject)
        store.studentObject = { id: Number(null) }
        emit('closePopupAddEdit')
    }
    else {
        store.studentObject = cloneStudent
        await store.editStudent(store.studentObject)
        store.studentObject = { id: Number(null) }
        emit('closePopupAddEdit')
    }
}

const closePopupAddEdit = () => {
    emit('closePopupAddEdit')
    store.studentObject = { id: Number(null) }
}

onMounted(() => {
    document.addEventListener('keyup', (event) => {
        if (event.key === "Escape") {
            closePopupAddEdit()
        }
    })
})
</script>

<style lang="scss" scoped>
.button {
    margin: 1rem 4rem 0 4rem;
    padding: 0.3rem 1rem;
    &-close {
        background-color: white;
        margin-left: 95%;

        &-image {
            width: 30px;
            height: 30px;

            &:hover {
                opacity: 0.75;
            }
        }
    }
}
</style>