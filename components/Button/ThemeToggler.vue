<script lang="ts" setup>
const colorMode = useColorMode();

const themeIcon = computed(() =>
  colorMode.preference === "light"
    ? "i-line-md-moon-filled-alt-loop"
    : "i-line-md-moon-filled-alt-to-sunny-filled-loop-transition"
);
const themeTooltip = computed(() =>
  colorMode.preference === "light"
    ? "Change to dark theme"
    : "Change to light theme"
);

const toggleTheme = () => {
  colorMode.preference = colorMode.value === "light" ? "dark" : "light";
};

if (!localStorage.getItem("nuxt-color-mode")) {
  localStorage.setItem("nuxt-color-mode", "light");
}
</script>
<template>
  <UTooltip :text="themeTooltip">
    <UButton
      :icon="themeIcon"
      size="sm"
      color="primary"
      square
      variant="ghost"
      @click="toggleTheme"
    />
  </UTooltip>
</template>
