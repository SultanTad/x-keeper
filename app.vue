<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { ScrollTrigger } from "gsap/ScrollTrigger";

onBeforeMount(() => {
  useGSAP().registerPlugin(ScrollTrigger);
});
</script>
