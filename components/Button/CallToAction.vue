<script lang="ts" setup>
const { label, icon } = defineProps<{
  label: string;
  icon: string;
}>();

const emits = defineEmits(["clickCallToAction"]);
</script>
<template>
  <UButton
    :label="label"
    :ui="{ rounded: 'rounded-2xl' }"
    class="call-to-action"
    @click="emits('clickCallToAction')"
  >
    <template #trailing>
      <UIcon :name="icon" class="w-5 h-5" />
    </template>
  </UButton>
</template>
<style lang="scss" scoped>
.call-to-action {
  @apply mt-8 py-3 px-6 capitalize;
}
</style>
