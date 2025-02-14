<script lang="ts" setup>
const props = defineProps({
  testimonies: {
    type: Array<ITestimony>,
    required: true,
    default: [],
  },
});

const index = ref<number>(0);
const active = computed<ITestimony>(() => props.testimonies[index.value]);
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
/* const carouselRef = ref(); */

onMounted(() => {
  /* setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 3000); */
});
</script>
<template>
  <section class="testimonials-wrapper">
    <Card
      title="testimonials"
      align-title="center"
      v-if="props.testimonies.length > 0"
    >
      <div class="content">
        <h2 class="card-title">What clients say!</h2>
        <br />
        <div class="testimony">
          <h3 class="text">"{{ active.text }}”</h3>
          <br />
          <br />
          <div class="foot">
            <div class="client">
              <UAvatar :src="active.avatar" alt="Client Avatar" size="3xl" />
              <div class="meta">
                <p>{{ active.name }}</p>
                <p class="company">
                  {{ active.position }} - {{ active.company }}
                </p>
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

          .meta {
            @apply text-left text-xl;

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
