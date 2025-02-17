<script lang="ts" setup>
const route = useRoute();

const projectSlug = computed<string | null>(() =>
  route.params.projectslug ? route.params.projectslug : null
);
</script>
<template>
  This will the page to check the {{ projectSlug }} project details
</template>
