<script lang="ts" setup>
import alexAvatar from "@/assets/img/Alex-Pic-no-bg.png";
import type { IClientTestimony, ISocialAccount } from "~/types";

const socialAccounts: ISocialAccount[] = [
  {
    icon: "i-teenyicons-instagram-solid",
    url: "https://www.instagram.com/garramurru/",
  },
  {
    icon: "i-prime-twitter",
    url: "https://x.com/Murru90",
  },
  {
    icon: "i-brandico-linkedin",
    url: "https://www.linkedin.com/in/murrugarra/",
  },
  {
    icon: "i-bytesize-github",
    url: "https://github.com/murru-dev",
  },
];

// Home logic
const openCV = () => {
  window.open(
    "https://docs.google.com/document/d/1xIHZdrqBZmrJHR-V4vqHuRoI8cxmXSiSi04Rc-0zUZ4/edit?usp=sharing",
    "_blank",
    "noopener,noreferrer"
  );
};

const projects = ref([
  {
    bg: "https://bentos-react.vercel.app/assets/work1-CBmW8qa2.jpg",
    name: "Web Application One",
    client: "One",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales est sit amet tincidunt egestas.",
    tags: ["project", "application", "web", "fullstack"],
  },
  {
    bg: "https://bentos-react.vercel.app/assets/work2-DtmWxhl8.jpg",
    name: "Web Site One",
    client: "Two",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales est sit amet tincidunt egestas. Suspendisse vitae ipsum in mi suscipit.",
    tags: ["tutorial", "web", "frontend"],
  },
  {
    bg: "https://bentos-react.vercel.app/assets/work3-BeTDGQxd.jpg",
    name: "API One",
    client: "Thre",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales est sit amet tincidunt egestas. Suspendisse vitae ipsum in mi suscipit vestibulum quis eu.",
    tags: ["project", "backend"],
  },
  {
    bg: "https://bentos-react.vercel.app/assets/work4-MDM2TfKy.jpg",
    name: "Web Application Four",
    client: "Four",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales est sit amet tincidunt egestas.",
    tags: ["project", "application", "web", "fullstack"],
  },
]);

const testimonies = ref<IClientTestimony[]>([]);

// Query home data
const { data, status, error } = await useFetch("/api/home");

if (data.value?.status === "success") {
  testimonies.value = data.value?.testimonies;
}
</script>
<template>
  <!-- Home -->
  <section class="home-wrapper">
    <Card class="id-card">
      <img :src="alexAvatar" alt="Alex M avatar" class="avatar" />
      <h2 class="title">Alex Murrugarra</h2>
      <p class="description">
        I'm a <b>Web Developer</b> based in Entre Ríos, Argentina.
      </p>
      <div class="social-accounts">
        <a
          v-for="sa in socialAccounts"
          :key="sa.icon"
          :href="sa.url"
          target="_blank"
        >
          <UButton :icon="sa.icon" size="xl" square variant="outline" />
        </a>
      </div>
    </Card>

    <div class="rigth-wrapper">
      <Card title="hello there!">
        <h2 class="card-title">
          I'm Alex M, a dedicated software creator with a deep appreciation for
          the art of coding.
        </h2>
        <ButtonCallToAction
          label="download my CV"
          icon="i-ph-read-cv-logo-fill"
          @click-call-to-action="openCV"
        />
      </Card>

      <!-- Stats -->
      <Card>
        <div class="stats">
          <div class="text-center">
            <h2 class="card-title mb-7">+10</h2>
            <p class="text-gray-400">Años de Experiencia</p>
          </div>
          <div class="text-center">
            <h2 class="card-title mb-7">3</h2>
            <p class="text-gray-400">Proyectos Entregados</p>
          </div>
          <div class="text-center">
            <h2 class="card-title mb-7">10</h2>
            <p class="text-gray-400">Tutoriales en Youtube</p>
          </div>
        </div>
      </Card>
    </div>
  </section>

  <!-- Testimonials -->
  <Testimonials :testimonies="testimonies" />

  <!-- Projects -->
  <Projects :projects="projects" />
</template>
<style lang="scss">
.home-wrapper {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2em;

  .id-card {
    @apply text-center w-[412px];

    .avatar {
      @apply w-[300px] mx-auto;
    }

    .title {
      @apply text-[40px] mb-2;
    }

    .description {
      @apply text-gray-400;
    }

    .social-accounts {
      @apply flex items-center justify-around mt-8;
    }

    @media (max-width: 1024px) {
      @apply w-full;
    }
  }

  .rigth-wrapper {
    @apply grid grid-rows-[auto,_1fr] gap-8;

    .stats {
      @apply grid grid-cols-3 gap-8;

      div:nth-child(3) {
        @media (max-width: 1024px) {
          @apply col-span-2;
        }
        @media (max-width: 530px) {
          @apply col-span-1;
        }
      }

      @media (max-width: 1024px) {
        @apply grid-cols-2;
      }

      @media (max-width: 530px) {
        @apply grid-cols-1;
      }
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}
</style>
