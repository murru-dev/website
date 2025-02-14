<script lang="ts" setup>
const props = defineProps<{
  project: IProjectItem;
}>();

const bg = computed(() => props.project.bg);
const name = computed(() => props.project.name);
const client = computed(() => props.project.client);
const description = computed(() => props.project.description);
const tags = computed(() => props.project.tags);
</script>
<template>
  <div class="project" :style="`background: url(${bg});`">
    <!-- Filter effect here -->
    <div class="bg-filter"></div>

    <!-- Child div that stays unaffected -->
    <div class="content">
      <!-- Header -->
      <div class="py-4 flex items-center justify-between">
        <div class="text-left">
          <h3 class="text-xl">{{ name }}</h3>
          <span class="text-gray-400 capitalize">{{ client }}</span>
        </div>

        <ButtonCircle icon="i-material-symbols-arrow-outward-rounded" />
      </div>

      <!-- Content -->
      <div style="display: grid; grid-template-rows: 1fr auto">
        <!-- Body -->
        <p class="py-4 text-left">{{ description }}</p>

        <!-- Footer -->
        <div class="mt-4 flex flex-wrap gap-2">
          <UKbd v-for="tag in tags" :key="tag" class="uppercase">{{
            tag
          }}</UKbd>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.project {
  @apply relative border border-gray-600 rounded-3xl overflow-hidden;
  height: 400px;
  background-size: cover !important;

  .bg-filter {
    @apply absolute inset-0 bg-black bg-opacity-50;
    backdrop-filter: blur(3px);
  }

  .content {
    @apply absolute p-10;
  }
}
</style>
