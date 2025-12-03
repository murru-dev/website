<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <h2 class="card-title">{{ text }}</h2>
</template>
<style lang="scss" scoped>
.card-title {
  @apply text-[40px];

  @media (max-width: 530px) {
    @apply text-[30px];
  }
}
</style>
