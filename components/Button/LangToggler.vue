<script lang="ts" setup>
const { language } = useLanguage();

const themeIcon = computed(() =>
  language.value === "es"
    ? "i-material-symbols-language-us-rounded"
    : "i-material-symbols-language-spanish-rounded"
);
const themeTooltip = computed(() =>
  language.value === "es" ? "Cambiar a inglés" : "Change to spanish"
);

const toggleLang = () => {
  localStorage.setItem("lang", language.value === "es" ? "en" : "es");
  language.value = localStorage.getItem("lang")!;
};
</script>
<template>
  <UTooltip :text="themeTooltip">
    <UButton
      :icon="themeIcon"
      size="sm"
      color="primary"
      square
      variant="ghost"
      @click="toggleLang"
    />
  </UTooltip>
</template>
