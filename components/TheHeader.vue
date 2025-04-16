<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const openBurger = ref(false);
const openMenu = ref(false);
const route = useRoute();

const activatedBurgerMenu = () => {
  if (document.body.style.overflow === "hidden") {
    document.body.style.overflow = "";
  } else {
    document.body.style.overflow = "hidden";
  }
  openBurger.value = !openBurger.value;
  openMenu.value = !openMenu.value;
};

const closeMenu = () => {
  if (window.innerWidth <= 800 && (openBurger.value || openMenu.value)) {
    openBurger.value = false;
    openMenu.value = false;
    document.body.style.overflow = "";
  }
};

watch(
  () => route.path,
  () => {
    closeMenu();
  }
);
</script>

<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <img
          class="main-logo-invisible"
          src="../assets/images/logo.svg"
          alt="Logo"
        />
        <NuxtLink to="/"
          ><img class="main-logo" src="../assets/images/logo.svg" alt="Logo"
        /></NuxtLink>
        <div class="nav__inner">
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
          <NuxtLink>
            <Button green>личный кабинет</Button>
          </NuxtLink>
          <NuxtLink to="/drop-message">
            <Button greyFilled class="grey-btn" :link="'/drop-message'"
              >оставить заявку</Button
            >
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.main-logo {
  position: relative;
  z-index: 1000;
}
.main-logo-invisible {
  opacity: 0;
  position: absolute;
}
.header {
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 80px;
  z-index: 3;
  background: transparent;
}
.nav {
  display: flex;
  align-items: center;
  &__inner {
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
  }
  &-btns {
    margin-bottom: 30px;
    button {
      width: 100%;
    }
    .grey-btn {
      background: #d9d9d9;
      margin-top: 16px;
    }
  }
}

@media (max-width: 800px) {
  .header {
    height: 50px;
  }
  .main-logo {
    width: 30px;
    height: 21px;
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
