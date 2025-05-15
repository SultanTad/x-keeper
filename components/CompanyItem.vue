<script setup>
import { onMounted } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const props = defineProps({
  number: Number,
  text: String,
  titleText: String,
});

const windowWidth = ref(0);

const updateWidth = () => {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
  }
};

const animateCounter = (number) => {
  setInterval(() => {
    if (number.value < 19) {
      number += 1;
    }
  }, 100);

  setInterval(() => {
    if (number.value < 11) {
      number += 1;
    }
  }, 100);
  setInterval(() => {
    if (number.value < 1.5) {
      number += 0.5;
    }
  }, 100);
  setInterval(() => {
    if (number.value < 120) {
      number += 1;
    }
  }, 15);
};
onBeforeMount(() => {
  useGSAP().registerPlugin(ScrollTrigger);
  updateWidth();
  window.addEventListener("resize", updateWidth);
});
onMounted(() => {
   if (windowWidth.value > 860) {
    ScrollTrigger.create({
      trigger: ".number-company__list",
      start: "bottom bottom",
      end: "bottom bottom",
      once: true,
      onUpdate: () => {
        useGSAP().fromTo(
          titles,
          { opacity: 0, y: 350 },
          {
            y: 0,
            opacity: 1,
            duration: 2,
            ease: "power3.out",
            stagger: 0.1,
            onComplete: setTimeout(() => {
              animateCounter();
            }, 500),
          }
        );
        useGSAP().fromTo(
          texts,
          { opacity: 0, y: 350 },
          {
            y: 0,
            opacity: 1,
            duration: 2,
            ease: "power3.out",
            stagger: 0.1,
          }
        );
      },
    });
  }
  if (windowWidth.value < 860) {
    ScrollTrigger.create({
      trigger: ".number-company__item",
      start: "top 70%",
      once: true,
      onEnter: () => {
        useGSAP().fromTo(
          ".item__title",
          { opacity: 0, y: 350 },
          {
            y: 0,
            opacity: 1,
            duration: 2,
            delay: 0.2,
            ease: "power3.out",
            onComplete: setTimeout(() => {
              animateCounter(props.number);
            }, 500),
          }
        );
        useGSAP().fromTo(
          ".item__text",
          { opacity: 0, y: 350 },
          {
            y: 0,
            opacity: 1,
            duration: 2,
            ease: "power3.out",
          }
        );
      },
    });
  }
});
</script>
<template>
  <div class="number-company__item">
    <h3 class="item__title">{{ number }}{{ titleText }}</h3>
    <p class="item__text">{{ text }}</p>
  </div>
</template>
