<template>
  <div class="wrapper">
    <TheHeader />
    <slot />
    <TheFooter />
  </div>
</template>

<script setup>
import { useAnimationStore } from "~/store/animationPlayedStore";
const store = useAnimationStore();
const nuxtApp = useNuxtApp();

watch(
  () => store.delayedAnimation,
  (newVal) => {
    console.log(newVal);
    
    if (newVal) {
      nuxtApp.$ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "50px top",
        scrub: true,
        onUpdate: () => {
          console.log("active header");
          
          useGSAP().to(".header", {
            background: "rgba(255, 255, 255, 0.70)",
            backdropFilter: "blur(27px)",
            ease: "none",
          });
        },
      });
    }
  },
  { immediate: true }
);
</script>
