<script lang="ts" setup>
import type { IProjectItem } from "~/types";

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
  <div class="project-card" :style="`background: url(${bg});`">
    <!-- Filter effect here -->
    <div class="bg-filter"></div>

    <!-- Child div that stays unaffected -->
    <div class="content">
      <div class="header">
        <div class="title">
          <h3>{{ name }}</h3>
          <span>{{ client }}</span>
        </div>

        <!-- Check Project Action -->
        <ButtonCircle icon="i-material-symbols-arrow-outward-rounded" />
      </div>
      <div class="description">
        {{ description }}
      </div>
      <div class="tags-wrapper">
        <div class="tags">
          <UKbd v-for="tag in tags" :key="tag" class="uppercase">{{
            tag
          }}</UKbd>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.project-card {
  @apply relative border border-gray-600 rounded-3xl overflow-hidden;
  height: 400px;
  background-size: cover !important;

  .bg-filter {
    @apply absolute inset-0 bg-black bg-opacity-50;
    backdrop-filter: blur(3px);
  }

  .content {
    @apply absolute p-10 w-full h-full grid grid-rows-[auto_1fr_auto];

    .header {
      @apply py-4 flex items-center justify-between;

      .title {
        @apply text-left;

        h3 {
          @apply text-xl;
        }

        span {
          @apply text-gray-400 capitalize;
        }
      }
    }

    .description {
      @apply text-left py-6;

      @media (max-width: 530px) {
        @apply overflow-y-scroll;
      }
    }

    .tags-wrapper {
      @apply mt-4 text-left;

      @media (max-width: 530px) {
        @apply overflow-x-auto w-full whitespace-nowrap;
      }

      .tags {
        @apply flex gap-2 flex-wrap;

        @media (max-width: 530px) {
          @apply min-w-max flex-nowrap pb-3;
        }
      }
      /* @apply mt-4 overflow-x-auto w-full whitespace-nowrap;

      .tags {
        @apply flex gap-2 min-w-max;
      } */
    }
  }
}
</style>
