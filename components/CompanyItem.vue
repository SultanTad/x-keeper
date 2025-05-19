<script setup>
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Vue3Autocounter from "vue3-autocounter";
import { useEventBus } from "@vueuse/core";

const props = defineProps({
  number: Number,
  text: String,
  titleText: String,
  decimals: Number,
});

const animatedNumber = ref(1);
const bus = useEventBus("scrollTriggerReady");

onBeforeMount(() => {
  useGSAP().registerPlugin(ScrollTrigger);
});

onMounted(async () => {
  await nextTick();
  bus.on(() => {
    ScrollTrigger.create({
      trigger: ".number-company__title",
      start: "top top",
      end: "+=600",
      onEnter: (self) => {
        console.log("start");
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
  });
});
onUnmounted(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>
<template>
  <div class="number-company__item">
    <h3 class="item__title">
      <vue3-autocounter
        ref="counter"
        :startAmount="1"
        :endAmount="animatedNumber"
        :duration="1.5"
        :decimals="decimals"
      />{{ titleText }}
    </h3>
    <p class="item__text">{{ text }}</p>
  </div>
</template>
