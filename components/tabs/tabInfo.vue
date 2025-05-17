<script setup>
import { ref, watch, nextTick, onMounted, defineProps } from "vue";

defineProps({
  slides: Array,
  pagination: Array,
});

const activeTab = ref(0);
const tabPaginationRef = ref(null);
const hoverIndex = ref(null);

const setActiveTab = (index) => {
  activeTab.value = index;
  hoverIndex.value = null;
};

const handleMouseOver = (index) => {
  hoverIndex.value = index;
  const pagination = tabPaginationRef.value.$el;
  if (index > activeTab.value) {
    pagination.style.setProperty("--scaleX", `${1.08}`);
    pagination.style.setProperty("--transform-origin", "left");
  }
  if (index < activeTab.value) {
    pagination.style.setProperty("--scaleX", `${1.08}`);
    pagination.style.setProperty("--transform-origin", "right");
  }
};

const handleMouseLeave = () => {
  hoverIndex.value = null;
  const pagination = tabPaginationRef.value.$el;
  pagination.style.setProperty("--scaleX", `${1}`);
  pagination.style.setProperty("--transform-origin", "center");
};

function updateBackgroundPosition() {
  const pagination = tabPaginationRef.value.$el;
  const bullets = pagination.querySelectorAll(".tabInfo__bullet");

  const activeBulletWidth = bullets[activeTab.value].offsetWidth;
  pagination.style.setProperty("--bullet-width", `${activeBulletWidth}px`);

  let translateX = 0;
  for (let i = 0; i < activeTab.value; i++) {
    translateX += bullets[i].offsetWidth + 5;
  }
  // translateX += 5;
  pagination.style.setProperty("--translate-x", `${translateX}px`);
}

watch(activeTab, async (newTab) => {
  await nextTick();
  const pagination = tabPaginationRef.value.$el;
  const bullets = pagination.querySelectorAll(".tabInfo__bullet");

  const activeBulletWidth = bullets[newTab].offsetWidth;
  pagination.style.setProperty("--bullet-width", `${activeBulletWidth}px`);

  let translateX = 0;
  for (let i = 0; i < newTab; i++) {
    translateX += bullets[i].offsetWidth;
  }
  translateX += 5;
  pagination.style.setProperty("--translate-x", `${translateX}px`);
});
onMounted(async () => {
  await nextTick();
  updateBackgroundPosition();
});
</script>
<template>
  <div class="tabInfo">
    <TabPagination
      :pagination="pagination"
      :activeTab="activeTab"
      @set-tab="setActiveTab"
      @mouse-over-tab="handleMouseOver"
      @mouse-leave-tab="handleMouseLeave"
      ref="tabPaginationRef"
    />
      <div
        class="tabInfo__content"
        v-for="(slide, index) in slides"
        :key="slide"
        :style="{ backgroundImage: `url(${slide.img})` }"
        :class="{ 'tabInfo__content--active': index === activeTab }"
      >
        <div class="tabInfo__content-inner">
          <img class="tabInfo__content-icon" :src="slide.icon" alt="" />
          <h3 class="tabInfo__content-title">{{ slide.title }}</h3>
          <p class="tabInfo__content-text">{{ slide.text }}</p>
        </div>
      </div>
  </div>
</template>

<style lang="scss">
.tabInfo {
  border-radius: 80px;
  height: 500px;
  position: relative;
  overflow: hidden;
  &__content {
    position: absolute;
    height: 500px;
    width: 100%;
    border-radius: 80px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: end;
    overflow: hidden;
    visibility: hidden;
    opacity: 0;
    transform: scale(1.1);
    &--active {
      visibility: visible;
      opacity: 1;
      transform: scale(1);
      transition: transform .8s, opacity .8s;
    }
    &-inner {
      padding-bottom: 60px;
      padding-left: 60px;
    }
    &-icon {
      width: 52px;
      height: 52px;
      margin-bottom: 10px;
    }
    &-title {
      font-family: "VelaSans-SemiBold";
      font-weight: 600;
      font-size: 64px;
      line-height: normal;
      margin-bottom: 10px;
      max-width: 773px;
    }
    &-text {
      font-family: "VelaSans-Medium";
      font-size: 26px;
      font-weight: 500;
      line-height: normal;
      max-width: 808px;
    }
  }
}

@media (min-width: 1550px) {
  .tabInfo__content {
    &--active {
      height: 725px;
    }
  }
}

@media (min-width: 1200px) {
  .tabInfo {
    scale: 1.2;
  }
}

@media (max-width: 800px) {
  .tabInfo_-content {
    &-title {
      font-size: 50px;
    }
    &-text {
      font-size: 20px;
    }
  }
}
@media (max-width: 700px) {
  .tabInfo__bullet {
    font-size: 15px;
  }
  .tabInfo__content {
    &-icon {
      width: 45px;
      height: 45px;
    }
    &-title {
      font-size: 35px;
    }
    &-text {
      font-size: 16px;
    }
  }
}

@media (max-width: 600px) {
  .tabInfo__bullet {
    padding: 10px 16px;
  }
  .info-slider--0 {
    .tabInfo__content{
      background-position: right;
    }
  }
}

@media (max-width: 480px) {
  .tabInfo {
    border-radius: 32px;
  }
  .tabInfo__bullet {
    font-size: 12px;
  }
  .tabInfo__pagination {
    height: 40px;
  }
  .tabInfo__content {
    height: 518px;
    border-radius: 32px;
  }
  .tabInfo__content {
    &-inner {
      padding-left: 22px;
      padding-bottom: 22px;
    }
    &-title {
      font-size: 26px;
    }
  }
}

@media (max-width: 440px) {
  .info-slider--1 {
    .tabInfo__pagination {
      width: 210px;
    }
  }
}
</style>
