<script setup>
import Vue3Autocounter from "vue3-autocounter";
import { useAnimationStore } from "~/store/animationPlayedStore";

const windowWidth = ref(0);
const achievementsItemRef = ref(null);
const stopAnimation = useAnimationStore();
const nuxtApp = useNuxtApp();

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
  nuxtApp.$ScrollTrigger.refresh();
  updateWidth();
  window.addEventListener("resize", updateWidth);
});

watch(
  () => stopAnimation.queueAnimation,
  (newVal) => {
    if (newVal && windowWidth.value > 1180) {
      nuxtApp.$ScrollTrigger.create({
        trigger: achievementsItemRef.value,
        start: "top 50%",
        end: "top 50%",
        once: true,
        onEnter: () => {
          console.log("achievements__item");

          useGSAP().to(achievementsItemRef.value.children, {
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
  <div class="achievements__item" ref="achievementsItemRef">
    <p class="item__title" v-if="windowWidth > 1180">
      <vue3-autocounter
        ref="counter"
        :startAmount="1"
        :endAmount="animatedNumber"
        :duration="1.5"
        :decimals="decimals"
      />{{ titleText }}
    </p>
    <p class="item__title" v-if="windowWidth < 1180">
      {{ number }}{{ titleText }}
    </p>
    <p class="item__text">{{ text }}</p>
  </div>
</template>

<style lang="scss">
.achievements {
  &__item {
    overflow: hidden;
    .item__title {
      font-family: "VelaSans-Light";
      font-weight: 300;
      font-size: 65px;
      line-height: 95%;
      opacity: 0;
      transform: translateY(350px);
    }
    .item__text {
      font-family: "VelaSans-Medium";
      font-weight: 500;
      font-size: 17px;
      line-height: normal;
      padding-bottom: 20px;
      opacity: 0;
      transform: translateY(350px);
    }
  }
}
@media (max-width: 1150px) {
  .achievements .item__title,
  .achievements .item__text {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
