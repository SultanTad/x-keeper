<script setup>
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Vue3Autocounter from "vue3-autocounter";

const props = defineProps({
  number: Number,
  text: String,
  titleText: String,
  decimals: Number,
});



const animatedNumber = ref(1);

onMounted(async () => {
  await nextTick();
  const item = document.querySelector("#item");

  ScrollTrigger.create({
    trigger: item,
    start: "top 75%",
    onEnter: (self) => {
      useGSAP().to(item, {
        y: 0,
        opacity: 1.25,
        duration: 1.25,
        onComplete: () => {
          animatedNumber.value = props.number;
        },
      });
    },
  });
});
</script>
<template>
  <div id="item" class="number-company__item">
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
