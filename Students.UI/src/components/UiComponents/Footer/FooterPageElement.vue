<template>
  <footer class="footer">
    <span class="footer-span">
      Copyright 2024 @Sovuux
    </span>
    <div class="footer-container">
      <ButtonBaseComponent
        v-for="(link, index) in links"
        :key="index"
        class="footer-container-link"
      >
        <template #buttonContent>
          <a
            :href="link.href"
            target="_blank"
          >
            <img
              :src="link.image"
              alt="link"
            >
          </a>
        </template>
      </ButtonBaseComponent>
    </div>
  </footer>
</template>

<script setup lang="ts">
import ButtonBaseComponent from "@/components/baseComponents/Button/ButtonBaseComponent.vue";
import VkIco from "@/assets/SvgImages/vk.svg"
import GitIco from "@/assets/SvgImages/github.svg"
import TelegramIco from "@/assets/SvgImages/telegram.svg"

const links = [
  { image: VkIco, href: "https://vk.com/hateadvertising" },
  { image: GitIco, href: "https://github.com/sovuux" },
  { image: TelegramIco, href: "https://t.me/hateadvertising" }
]
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #4CAF50;
  &-span {
    letter-spacing: 1px;
    color: white;
    padding-top: 0.5rem;
  }
  &-container {
    &-link {
      background: none;
      padding:  0.5rem 1rem 0 1rem;
    }
  }
}
</style>