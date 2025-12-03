<template>
  <!-- Header -->
  <header class="main-header">
    <UContainer>
      <div class="wrapper">
        <div class="logo">MurruDev</div>
        <nav class="nav">
          <NuxtLink
            v-for="page in pages"
            :key="page.name.en.toLowerCase().replaceAll(' ', '-')"
            :to="page.url"
            class="link"
          >
            {{ language === "en" ? page.name.en : page.name.es }}
          </NuxtLink>
        </nav>
        <div class="actions">
          <UButton
            icon="i-ic-outline-handshake"
            size="sm"
            color="primary"
            variant="ghost"
            label="Hire Me"
            trailing
          />
          <UDivider
            icon="i-fluent-divider-tall-16-filled"
            size="xs"
            class="divider"
          />
          <ButtonThemeToggler />
          <!-- <UDivider
            icon="i-fluent-divider-tall-16-filled"
            size="xs"
            class="divider"
          />
          <ButtonLangToggler /> -->
        </div>
        <ButtonMobileToggler />
      </div>
    </UContainer>
  </header>

  <!-- Page slot -->
  <UContainer>
    <slot />
  </UContainer>

  <!-- Footer -->
  <footer>
    <UContainer class="footer">
      <div class="footer__row">
        <p>Copyright @2024, MurruDev All Rights Reserved.</p>
        <div class="flex items-center gap-2">
          <p>Developed with</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <path
              fill="red"
              d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812T2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25t-1.363 2.412t-2.625 2.963T13.45 19.7z"
            />
          </svg>
          <UIcon name="i-logos-digital-ocean-icon" />
          <UIcon name="i-logos-nuxt-icon" />
          <UIcon name="i-vscode-icons-file-type-typescript" class="text-3xl" />
          <UIcon name="i-logos-appwrite-icon" />
        </div>
      </div>
      <div class="footer__legal">
        <NuxtLink to="privacy-policy" class="link">
          Política de Privacidad
          <!-- {{ language === "en" ? page.name.en : page.name.es }} -->
        </NuxtLink>
        <br />
        <NuxtLink to="terms-and-conditions" class="link">
          Términos y Condiciones
          <!-- {{ language === "en" ? page.name.en : page.name.es }} -->
        </NuxtLink>
      </div>
    </UContainer>
  </footer>
</template>
<script lang="ts" setup>
const { pages } = usePage();
const { language } = useLanguage();
</script>
<style lang="scss">
.fade-out {
  @apply opacity-0 transition duration-500 ease-in-out;
}

.active-page {
  @apply text-primary;
}

.inactive-page {
  @apply text-gray-500;
}

.card-title {
  @apply text-[40px] mb-5;

  line-height: 50px;

  @media (max-width: 530px) {
    @apply text-3xl;
  }
}

.loading-wrapper {
  @apply w-screen h-screen flex flex-col justify-center items-center gap-5 text-3xl;

  .animation {
    @apply text-8xl;
  }
}
.main-header {
  .wrapper {
    @apply py-8 flex items-center justify-between;

    .nav {
      @apply flex items-center gap-4;

      .link {
        @apply text-lg cursor-pointer;
      }

      @media (max-width: 1024px) {
        @apply hidden;
      }
    }

    .logo {
      @apply text-3xl font-semibold;
    }

    .actions {
      @apply flex items-center;

      .divider > div.font-medium {
        @apply mx-0 !important;
      }

      @media (max-width: 1024px) {
        @apply hidden;
      }
    }
  }
}

.footer {
  &__row {
    @apply pt-14 pb-10 flex items-center justify-between;

    @media (max-width: 1024px) {
      @apply flex-col text-center gap-4;
    }
  }

  &__legal {
    @apply text-center mb-10;
  }
}
</style>
