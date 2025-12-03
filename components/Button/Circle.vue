<script lang="ts" setup>
const { icon } = defineProps<{
  icon: string;
}>();
</script>
<template>
  <UButton
    :ui="{ rounded: 'rounded-full' }"
    :icon="icon"
    class="circle-btn"
  ></UButton>
</template>
<style lang="scss">
.circle-btn {
  @apply w-16 h-16 mx-2 justify-center;

  @media (max-width: 1024px) {
    @apply w-12 h-12;
  }

  @media (max-width: 530px) {
    @apply w-10 h-10;
  }
}
</style>
