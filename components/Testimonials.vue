<script lang="ts" setup>
import type { IClientTestimony } from "~/types";

const props = defineProps({
  testimonies: {
    type: Array<IClientTestimony>,
    required: true,
    default: [],
  },
});

const { language } = useLanguage();
const cardTitle = computed<string>(() =>
  language.value === "en" ? "testimonials" : "testimonios"
);
const title = computed<string>(() =>
  language.value === "en" ? "Client Reviews!" : "Opiniones de Clientes!"
);
const index = ref<number>(0);
const comment = computed<string>(() =>
  language.value === "es"
    ? props.testimonies[index.value].testimony.es
    : props.testimonies[index.value].testimony.en
);
const avatar = computed<string>(() => props.testimonies[index.value].avatar);
const name = computed<string>(() => props.testimonies[index.value].name);
const position = computed<string>(() =>
  language.value === "es"
    ? props.testimonies[index.value].position.es
    : props.testimonies[index.value].position.en
);
const company = computed<string>(() => props.testimonies[index.value].company);

const next = () => {
  if (index.value === props.testimonies.length - 1) {
    index.value = 0;
    return;
  }
  index.value++;
};

const prev = () => {
  if (index.value === 0) {
    index.value = props.testimonies.length - 1;
    return;
  }
  index.value--;
};
</script>
<template>
  <section class="testimonials-wrapper">
    <Card
      :title="cardTitle"
      align-title="center"
      v-if="props.testimonies.length > 0"
    >
      <div class="content">
        <h2 class="card-title">{{ title }}</h2>
        <br />
        <div class="testimony">
          <h3 class="text">"{{ comment }}”</h3>
          <br />
          <br />
          <div class="foot">
            <div class="client">
              <UAvatar :src="avatar" alt="Client Avatar" size="3xl" />
              <div class="meta">
                <p>{{ name }}</p>
                <p class="company">{{ position }} - {{ company }}</p>
              </div>
            </div>
            <div class="controls">
              <ButtonCircle
                icon="i-material-symbols-arrow-back-ios-rounded"
                @click="next"
              />
              <ButtonCircle
                icon="i-material-symbols-arrow-forward-ios-rounded"
                @click="prev"
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  </section>
</template>
<style lang="scss">
.testimonials-wrapper {
  @apply mt-8;

  .content {
    @apply text-center;

    .testimony {
      @apply w-9/12 m-auto;

      @media (max-width: 530px) {
        @apply w-full;
      }

      .text {
        @apply text-3xl;

        @media (max-width: 530px) {
          @apply text-2xl;
        }
      }

      .foot {
        @apply w-full flex items-center justify-between;

        @media (max-width: 1024px) {
          @apply flex-col gap-10;
        }

        .client {
          @apply flex items-center gap-4;

          @media (max-width: 530px) {
            @apply flex-col;
          }

          .meta {
            @apply text-left text-xl;

            @media (max-width: 530px) {
              @apply text-center;
            }

            .company {
              @apply text-gray-400;
            }
          }
        }
      }
    }
  }
}
</style>
