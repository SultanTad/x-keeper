<script setup>
import { useRoute } from "vue-router";
import { useAnimationStore } from "~/store/animationPlayedStore";

const stopAnimation = useAnimationStore();
const openBurger = ref(false);
const openMenu = ref(false);
const route = useRoute();
const activeHeader = ref(false);
const deactiveHeaderBgScroll = ref(false);

const activatedBurgerMenu = () => {
  if (document.body.style.overflow === "hidden") {
    document.body.style.overflow = "";
  } else {
    document.body.style.overflow = "hidden";
  }
  openBurger.value = !openBurger.value;
  openMenu.value = !openMenu.value;
  deactiveHeaderBgScroll.value = !deactiveHeaderBgScroll.value;
};

const closeMenu = () => {
  if (window.innerWidth <= 800 && (openBurger.value || openMenu.value)) {
    openBurger.value = false;
    openMenu.value = false;
    deactiveHeaderBgScroll.value = false;
    document.body.style.overflow = "";
  }
};

onMounted(() => {
  if (route.path !== "/") {
    stopAnimation.delayedAnimation = true;
  }
});

watch(
  () => route.path,
  () => {
    closeMenu();
    activeHeader.value = true;
  }
);
</script>

<template>
  <header class="header" :class="{ deactive: deactiveHeaderBgScroll }">
    <div class="container">
      <nav class="nav">
        <NuxtLink to="/" v-if="route.path === '/'"
          ><img
            class="main-logo"
            :class="{ after_animation: activeHeader }"
            src="../assets/images/logo.svg"
            alt="Logo"
        /></NuxtLink>
        <NuxtLink to="/" v-if="route.path !== '/'"
          ><img
            class="main-logo-no-animation"
            src="../assets/images/logo.svg"
            alt="Logo"
        /></NuxtLink>
        <div
          class="nav__inner"
          :class="{ after_animation: activeHeader }"
          v-if="route.path === '/'"
        >
          <ul class="menu__list">
            <li class="menu__item">
              <NuxtLink to="/products">Продукция</NuxtLink>
            </li>
            <li class="menu__item">
              <NuxtLink to="/business-solutions">Решения для бизнеса</NuxtLink>
            </li>
          </ul>
          <div class="nav__btns">
            <NuxtLink>
              <Button white>личный кабинет</Button>
            </NuxtLink>
            <NuxtLink to="/drop-message">
              <Button green :link="'/drop-message'">оставить заявку</Button>
            </NuxtLink>
          </div>
        </div>
        <div class="nav__inner-no-animation" v-if="route.path !== '/'">
          <ul class="menu__list">
            <li class="menu__item">
              <NuxtLink to="/products">Продукция</NuxtLink>
            </li>
            <li class="menu__item">
              <NuxtLink to="/business-solutions">Решения для бизнеса</NuxtLink>
            </li>
          </ul>
          <div class="nav__btns">
            <NuxtLink>
              <Button white>личный кабинет</Button>
            </NuxtLink>
            <NuxtLink to="/drop-message">
              <Button green :link="'/drop-message'">оставить заявку</Button>
            </NuxtLink>
          </div>
        </div>
        <div
          class="burger-menu"
          :class="{ open: openBurger }"
          @click="activatedBurgerMenu"
        ></div>
      </nav>
    </div>
  </header>
  <div class="mobile__menu" :class="{ open__menu: openMenu }">
    <ul class="mobile__menu-list">
      <li class="mobile__menu-item">
        <NuxtLink to="/products">Продукция</NuxtLink>
      </li>
      <li class="mobile__menu-item">
        <NuxtLink to="/business-solutions">Решения для бизнеса</NuxtLink>
      </li>
    </ul>
    <div class="mobile__menu-btns">
      <NuxtLink to="/drop-message">
        <Button green>оставить заявку</Button>
      </NuxtLink>
      <NuxtLink>
        <Button white class="grey-btn" :link="'/drop-message'"
          >личный кабинет</Button
        >
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss">
.main-logo {
  opacity: 0;
  &.after_animation {
    opacity: 1;
  }
}
.main-logo,
.main-logo-no-animation,
.main-logo-after-animation {
  position: relative;
  z-index: 10000;
}
.header {
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 80px;
  z-index: 10000;
  background: transparent;
  &.deactive {
    background: unset !important;
    backdrop-filter: unset !important;
    transition: background 0.4s, backdrop-filter 0.4s;
  }
}
.nav {
  display: flex;
  align-items: center;
  &__inner {
    transform: translateY(-100px);
    &.after_animation {
      transform: translateY(0);
    }
  }
  &__inner,
  .nav__inner-no-animation {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
  .menu__list {
    display: flex;
    align-items: center;
    gap: 0 28px;
    padding-left: 84px;
    color: #333343;
    font-family: "VelaSans-SemiBold";
    font-style: 14px;
    line-height: 100%;
    letter-spacing: normal;
  }
  &__btns {
    display: flex;
    align-items: center;
    gap: 0 10px;
  }
  .burger-menu {
    width: 28px;
    height: 12px;
    position: relative;
    cursor: pointer;
    z-index: 100;
    display: none;
    align-items: center;
    justify-content: flex-end;
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 2px;
      width: 100%;
      background-color: #333343;
      transition: all 0.3s ease 0s;
    }
    &::before {
      top: 0;
    }
    &::after {
      bottom: 0;
    }
    &.open {
      &::before {
        top: 50%;
        transform: rotate(-45deg) translate(0, -50%);
      }
      &::after {
        bottom: 50%;
        transform: rotate(45deg) translate(0, 50%);
      }
      span {
        transform: scale(0);
      }
    }
    span {
      height: 2px;
      width: 100%;
      background: #333343;
      transform: scale(1);
    }
  }
}

.mobile__menu {
  background: rgba(255, 255, 255, 0.59);
  backdrop-filter: blur(53.3px);
  -webkit-backdrop-filter: blur(53.3px);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100dvw;
  height: 100dvh;
  padding-top: 100px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;
  transform: translateX(-100%);
  transition: all 1s;
  &.open__menu {
    transform: translateX(0);
    transition: all 1s;
  }
  &-item {
    font-family: "VelaSans-ExtraBold";
    font-size: 28px;
    line-height: 110%;
    margin-bottom: 30px;
    color: #333343;
  }
  &-btns {
    margin-bottom: 30px;
    button {
      width: 100%;
      height: 54px;
    }
    .grey-btn {
      margin-top: 16px;
    }
  }
}

@media (min-width: 1550px) {
  .nav__btns .btn--white {
    font-size: 15px;
  }
}

@media (max-width: 800px) {
  .header {
    height: 50px;
  }
  .main-logo,
  .main-logo-no-animation {
    width: 30px;
    height: 21px;
    max-width: unset;
  }
  .nav {
    .menu__list,
    &__btns {
      display: none;
    }
    .burger-menu {
      display: flex;
    }
  }
}
</style>
