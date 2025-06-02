<script setup>
import Vue3Autocounter from "vue3-autocounter";
import { useAnimationStore } from "~/store/animationPlayedStore";

const windowWidth = ref(0);
const nuxtApp = useNuxtApp();
const stopScrollAnimationMain = useAnimationStore();

const updateWidth = () => {
  if (process.client) {
    windowWidth.value = window.innerWidth;
  }
};

const props = defineProps({
  number: Number,
  text: String,
  titleText: String,
  decimals: Number,
});

const animatedNumber = ref(1);

onMounted(async () => {
  await nextTick();
  updateWidth();
  window.addEventListener("resize", updateWidth);
});
watch(
  () => stopScrollAnimationMain.queueAnimationMainPage,
  (newVal) => {
    if (newVal && windowWidth.value > 1180) {
      nuxtApp.$ScrollTrigger.create({
        trigger: ".number-company__title",
        start: "top +=100",
        end: "+=600",
        onEnter: () => {
          useGSAP().to(".number-company__item > *", {
            y: 0,
            opacity: 1,
            duration: 1,
            onComplete: () => {
              animatedNumber.value = props.number;
            },
          });
        },
      });
    }
  }
);
onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});
</script>
<template>
  <div class="number-company__item">
    <h3 class="item__title" v-if="windowWidth > 1180">
      <vue3-autocounter
        ref="counter"
        :startAmount="1"
        :endAmount="animatedNumber"
        :duration="1.5"
        :decimals="decimals"
      />{{ titleText }}
    </h3>
    <h3 class="item__title" v-if="windowWidth < 1180">
      {{ number }}{{ titleText }}
    </h3>
    <p class="item__text">{{ text }}</p>
  </div>
</template>

<style lang="scss">
.number-company {
  &__item {
    border: 1px solid rgba(51, 51, 67, 0.4);
    border-radius: 80px;
    padding: 25px 10px 37px 32px;
    overflow: hidden;
  }
  .item__title {
    font-family: "VelaSans-Light";
    font-weight: 300;
    font-size: 90px;
    line-height: 95%;
    margin-bottom: 28px;
    opacity: 0;
    transform: translateY(350px);
  }
  .item__text {
    font-family: "VelaSans-Regular";
    font-size: 26px;
    line-height: 100%;
    opacity: 0;
    transform: translateY(350px);
  }
}
@media (min-width: 1550px) {
  .number-company__item {
    padding: 40px 10px 50px 52px;
  }

  .number-company .item__title {
    font-size: 140px;
  }
}
@media (max-width: 480px) {
  .number-company .item__title,
  .number-company .item__text {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
