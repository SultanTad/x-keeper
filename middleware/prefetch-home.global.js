import { useAnimationStore } from "~/store/animationPlayedStore";
export default defineNuxtRouteMiddleware((to, from) => {
  const notMainPageFirst = useAnimationStore();
  if (process.client && from.fullPath !== "/" && to.fullPath === "/") {
    notMainPageFirst.animationPlayed = true;
  }
});
