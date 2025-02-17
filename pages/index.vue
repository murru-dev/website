<script lang="ts" setup>
import alexAvatar from "@/assets/img/Alex-Pic-no-bg.png";
import type { IClientTestimony, ILanguageItem, ISocialAccount } from "~/types";

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

const { language } = useLanguage();

const description = ref<string>("");
const greetings = ref<string>("");
const whoAmI = ref<string>("");

const downloadCvLabel = ref<string>(
  language.value === "en" ? "download my CV" : "descarga my CV"
);
const openCV = () => {
  window.open(
    "https://docs.google.com/document/d/1xIHZdrqBZmrJHR-V4vqHuRoI8cxmXSiSi04Rc-0zUZ4/edit?usp=sharing",
    "_blank",
    "noopener,noreferrer"
  );
};

const experienceStats = ref<string>(
  language.value === "en" ? "years of experience" : "años de experiencia"
);
const projectsStats = ref({
  total: 0,
  label: language.value === "en" ? "finished projects" : "proyectos terminados",
});

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

const { data, status } = await useLazyFetch<any>("/api/home");

watch(data, (newData) => {
  if (newData && newData.status === "success") {
    projectsStats.value.total = projects.value.length;

    if (language.value === "en") {
      description.value = newData.pageContent.presentation.en;
      greetings.value = newData.pageContent.intro.title.en;
      whoAmI.value = newData.pageContent.intro.body.en;
    } else {
      description.value = newData.pageContent.presentation.es;
      greetings.value = newData.pageContent.intro.title.es;
      whoAmI.value = newData.pageContent.intro.body.es;
    }

    testimonies.value = newData.testimonies;
  }

  if (newData && newData.status === "fail") {
    throw createError({
      statusCode: data.value.code,
      statusMessage: data.value.message,
      fatal: true,
    });
  }
});
</script>
<template>
  <template v-if="status === 'pending'">
    <section class="home-wrapper">
      <Card class="id-card">
        <USkeleton
          class="avatar-skeleton mx-auto"
          :ui="{ rounded: 'rounded-full' }"
        />
        <br />
        <USkeleton class="h-10 w-full md:w-1/2 mx-auto" />
        <br />
        <USkeleton class="h-10 w-full" />
        <br />
        <br />
        <USkeleton class="h-5 w-full" />
        <br />
        <USkeleton class="h-5 w-full md:w-1/2 mx-auto" />
        <br />
        <div class="flex justify-between">
          <USkeleton class="h-11 w-11" />
          <USkeleton class="h-11 w-11" />
          <USkeleton class="h-11 w-11" />
          <USkeleton class="h-11 w-11" />
        </div>
      </Card>
      <div class="rigth-wrapper right-skeleton">
        <Card>
          <USkeleton class="h-5 w-24" />
          <br />
          <USkeleton class="h-10 w-full" />
          <br />
          <USkeleton class="h-10 w-full" />
          <br />
          <USkeleton class="h-10 w-full md:w-10/12" />
          <br />
          <br />
          <USkeleton
            class="h-11 w-full md:w-48"
            :ui="{ rounded: 'rounded-xl' }"
          />
        </Card>
        <br />
        <br />
        <Card>
          <div class="flex flex-col md:flex-row justify-around">
            <div>
              <USkeleton class="h-11 w-11 mx-auto" />
              <br />
              <USkeleton class="h-5 w-48" />
            </div>
            <div>
              <USkeleton class="h-11 w-11 mx-auto" />
              <br />
              <USkeleton class="h-5 w-48" />
            </div>
          </div>
        </Card>
      </div>
    </section>
  </template>
  <template v-else>
    <!-- Home -->
    <section class="home-wrapper">
      <Card class="id-card">
        <img :src="alexAvatar" alt="Alex M avatar" class="avatar" />
        <h2 class="title">Alex Murrugarra</h2>
        <p class="description">
          {{ description }}
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
        <Card :title="greetings">
          <h2 class="card-title">{{ whoAmI }}</h2>
          <ButtonCallToAction
            :label="downloadCvLabel"
            icon="i-ph-read-cv-logo-fill"
            @click-call-to-action="openCV"
          />
        </Card>

        <!-- Stats -->
        <Card>
          <div class="stats">
            <div class="text-center">
              <h2 class="card-title mb-7">+10</h2>
              <p class="text-gray-400 capitalize">{{ experienceStats }}</p>
            </div>
            <div class="text-center">
              <h2 class="card-title mb-7">{{ projectsStats.total }}</h2>
              <p class="text-gray-400 capitalize">{{ projectsStats.label }}</p>
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
</template>
<style lang="scss">
.avatar-skeleton {
  @apply h-[250px] w-[250px];

  @media (max-width: 530px) {
    @apply h-[250px] w-full;
  }
}
.right-skeleton {
  display: none !important;
  @media (min-width: 768px) {
    display: block !important;
  }
}

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
      @apply grid grid-cols-2 gap-8;

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
