<template>
    <div class="button-add-container">
        <button class="button-add" @click="showPopupAdd()">
            Добавить запись
        </button>
    </div>
</template>

<script>
import { useStore } from '@/stores/store.js'
export default {
    methods: {
        showPopupAdd() {
            const store = useStore()
            store.showPopupAdd(true)
        }
    }
}
</script>
