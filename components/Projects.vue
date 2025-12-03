<template>
  <section class="projects-wrapper" v-if="projects.length > 0">
    <Card class="card">
      <CardTitle text="Recent Works & Tutorials" />
      <div class="description">
        <p>
          Check out some of my design projects, meticulously crafted with love
          and dedication, each one reflecting the passion and soul I poured into
          every detail.
        </p>
      </div>
      <div class="grid-container">
        <ProjectCard
          v-for="(project, n) in projects"
          :key="`child-${n}`"
          :class="`child-${n + 1}`"
          :project="project"
        />
      </div>
      <div class="call-to-action">
        <ButtonCallToAction
          label="check them all"
          icon="i-material-symbols-light-workspaces"
          @click-call-to-action="goToProjectsAndTutorials"
        />
      </div>
    </Card>
  </section>
</template>
<script lang="ts" setup>
import type { IProjectItem } from "~/types";

defineProps({
  projects: {
    type: Array<IProjectItem>,
    required: true,
    default: [],
  },
});
const goToProjectsAndTutorials = () => {
  navigateTo("/projects-and-tutorials");
};
</script>
<style lang="scss" scoped>
.projects-wrapper {
  @apply mt-8;

  .card {
    @apply text-center;

    .description {
      @apply px-28 text-[16px] text-gray-400 mb-4;

      @media (max-width: 1024px) {
        @apply px-0;
      }
    }

    .grid-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;

      .child-2,
      .child-4,
      .child-6 {
        @apply mt-8;
      }

      @media (max-width: 1024px) {
        grid-template-columns: 1fr;

        .child-1,
        .child-2,
        .child-3,
        .child-4,
        .child-5,
        .child-6,
        .child-7,
        .child-8 {
          @apply mt-0;
        }
      }

      @media (max-width: 530px) {
        gap: unset;
        row-gap: 2rem;
      }
    }

    .call-to-action {
      @apply mx-auto;
    }
  }
}
</style>
