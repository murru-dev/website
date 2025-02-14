<script lang="ts" setup>
import alexAvatar from "@/assets/img/Alex-Pic-no-bg.png";

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

const projects = ref<IProjectItem[]>([]);

const testimonies = ref<ITestimony[]>([]);
onMounted(() => {
  // Query all home data
  // Testimonies
  testimonies.value = [
    {
      project: "Vocab Tracker",
      name: "Daniel Córdoba",
      company: "DC Vocabulary",
      position: "Owner",
      avatar:
        "https://cdn.prod.website-files.com/63fbd08ddcf51344a63f9add/63fbd08ddcf5138c183f9b00_Testimonial%20Avatar.png",
      text: "Alex is somebody you need as a steward of your brand. He’s able to craft compelling brand narratives that bring a company’s vision tadasdo life.",
      date: "Oct 18th, 2024",
    },
    {
      project: "Sells Quoter",
      name: "Martín López",
      company: "Alocra Group",
      position: "Team Sponsor",
      avatar: "https://avatars.githubusercontent.com/u/904724?v=4",
      text: "Alex is a game-changer! His expertise transforms ideas into powerful digital experiences that truly stand out. His technical skills elevate any project to success.",
      date: "Nov 5th, 2024",
    },
    {
      project: "Company Website",
      name: "Yoshua Carrasco",
      company: "Soluciones PDG SA",
      position: "Owner",
      avatar: "https://avatars.githubusercontent.com/u/7547335?v=4",
      text: "Alex's attention to detail and commitment to excellence the difference. He’s a problem solver who ensures every project exceeds expectations.",
      date: "Jan 27th, 2025",
    },
    {
      project: "Casas Padel Club Website",
      name: "Waleska Caballero",
      company: "Hue Agency",
      position: "Manager",
      avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
      text: "Alex delivers beyond expectations. His ability to turn complex challenges into simple, effective solutions is impressive.",
      date: "Feb 16th, 2025",
    },
  ];

  // Projects
  projects.value = [
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
  ];
});
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
