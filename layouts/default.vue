<template>
  <div class="wrapper">
    <TheHeader />
    <div class="container">
      <div class="widget" @click="activatedWidget">
        <img src="../assets/images/widget.svg" alt="" />
      </div>
    </div>
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
    if (newVal) {
      nuxtApp.$ScrollTrigger.create({
        trigger: "#__nuxt",
        start: "top top",
        end: "50px top",
        scrub: true,
        onUpdate: () => {
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
