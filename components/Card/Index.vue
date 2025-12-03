<script lang="ts" setup>
interface ICardProps {
  title?: string;
  alignTitle?: string;
}

const { title, alignTitle = "left" } = defineProps<ICardProps>();
</script>
<template>
  <UCard class="card">
    <p v-if="title" :class="`small-title text-${alignTitle}`">
      {{ title }}
    </p>
    <slot />
  </UCard>
</template>
<style lang="scss">
.card {
  @apply p-10 rounded-3xl;

  .small-title {
    @apply text-gray-400 capitalize mb-5;
  }
}
</style>
