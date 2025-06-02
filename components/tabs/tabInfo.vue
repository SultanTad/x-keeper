<script setup>
defineProps({
  slides: Array,
  pagination: Array,
});

const activeTab = ref(0);
</script>
<template>
  <div class="tabInfo">
    <TabPagination :pagination="pagination" v-model:activeTab="activeTab" />
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
    transform: scale(1.1);
    opacity: 0;
    transition: opacity 1.5s, transform 1.5s;
    &--active {
      opacity: 1;
      transform: scale(1);
      transition: opacity 1.5s, transform 1.5s;
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
  .tabInfo {
    height: 725px;
  }
  .tabInfo__content {
    &--active {
      height: 725px;
    }
  }
}

@media (max-width: 800px) {
  .tabInfo__content {
    &-title {
      font-size: 50px;
    }
    &-text {
      font-size: 20px;
    }
  }
}
@media (max-width: 700px) {
  .tabInfo {
    .tab__bullet {
      font-size: 15px;
    }
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
  .tabInfo {
    .tab__bullet {
      padding: 10px 16px;
    }
  }
  .info-slider--0 {
    .tabInfo__content {
      background-position: right;
    }
  }
}

@media (max-width: 480px) {
  .tabInfo {
    border-radius: 32px;
  }
  .tabInfo {
    .tab__bullet {
      font-size: 12px;
    }
  }
  .tabInfo {
    .tab__pagination {
      height: 40px;
    }
  }
  .tabInfo__content {
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
    .tabInfo {
      .tab__pagination {
        width: 210px;
      }
    }
  }
}
</style>
