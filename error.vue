<script lang="ts" setup>
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>
<template>
  <h1>holisssss esta es la página de error!</h1>
  <h2>{{ error }}</h2>
</template>
