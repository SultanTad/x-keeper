import { useAnimationStore } from "~/store/animationPlayedStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const notMainPageFirst = useAnimationStore();
  const stopAnimation = useAnimationStore();
  // const nuxtApp = useNuxtApp();

  if (process.client && from.fullPath !== "/" && to.fullPath === "/") {
    notMainPageFirst.animationPlayed = true;
  }
  if (
    process.client &&
    from.fullPath === "/business-solutions" &&
    to.fullPath !== "/business-solutions"
  ) {
    stopAnimation.queueAnimation = false;
  }
  if (process.client && from.fullPath === "/" && to.fullPath !== "/") {
    stopAnimation.queueAnimationMainPage = false;
  }
});
