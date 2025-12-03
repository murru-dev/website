<script lang="ts" setup>
const isOpen = ref<boolean>(false);
const { pages } = usePage();
const { language } = useLanguage();
</script>
<template>
  <div class="mobile-toggler-wrapper">
    <UButton
      @click="isOpen = true"
      icon="i-pajamas-hamburger"
      variant="outline"
      size="xl"
    />

    <UModal v-model="isOpen" fullscreen>
      <UCard
        :ui="{
          base: 'h-full flex flex-col',
          rounded: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
          body: {
            base: 'grow',
          },
        }"
      >
        <template #header>
          <div class="header-wrapper">
            <div class="title">Menu</div>
            <div class="actions">
              <ButtonThemeToggler />
              <!-- <ButtonLangToggler /> -->
              <UDivider icon="i-fluent-divider-tall-16-filled" size="xs" />
              <UButton
                icon="i-heroicons-x-mark-20-solid"
                variant="outline"
                size="xl"
                @click="isOpen = false"
              />
            </div>
          </div>
        </template>
        <NuxtLink
          v-for="page in pages"
          :key="page.name.en.toLowerCase().replaceAll(' ', '-')"
          :to="page.url"
          class="link"
          @click="isOpen = false"
        >
          {{ language === "en" ? page.name.en : page.name.es }}
        </NuxtLink>
        <!-- <ULink to="/" class="text-2xl font-semibold"> Home </ULink> -->
      </UCard>
    </UModal>
  </div>
</template>
<style lang="scss" scoped>
.mobile-toggler-wrapper {
  @apply hidden;

  @media (max-width: 1024px) {
    @apply block;
  }
}

.header-wrapper {
  @apply flex items-center justify-between pt-4;

  .title {
    @apply text-3xl font-semibold;
  }

  .actions {
    @apply flex items-center;
  }
}

.link {
  @apply my-2 text-2xl font-semibold block;
}
</style>
