<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

defineProps({
  sliders: Array,
});
</script>
<template>
  <section
    :class="`info info-slider--${index}`"
    v-for="(item, index) in sliders"
    :key="index"
  >
    <div class="container">
      <h2 class="info__title">
        {{ item.title }}
      </h2>
      <swiper
        :pagination="{
          clickable: true,
          bulletActiveClass: 'info-bullet-active',
          bulletClass: 'info-bullet',
          renderBullet: (index, className) => {
            return `<span class=${className}>${item.pagination[index]}</span>`;
          },
        }"
        :modules="[Pagination]"
        class="swiperInfo"
      >
        <swiper-slide
          v-for="(slide, index) in item.slides"
          :key="index"
          :style="{ background: `url(${slide.img})` }"
        >
          <div class="info-slide__inner">
            <img class="info-slide__icon" :src="slide.icon" alt="" />
            <h3 class="info-slide__title">{{ slide.title }}</h3>
            <p class="info-slide__text">{{ slide.text }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style lang="scss">
.swiperInfo {
  border-radius: 80px;
}

.swiperInfo .swiper-pagination {
  width: unset;
  height: 54px;
  border-radius: 86px;
  background-color: rgba(255, 255, 255, 0.42);
  border: 1px solid rgba(255, 255, 255, 0.32);
  display: flex;
  align-items: center;
  padding: 5px;
  top: 45px;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}

.info-bullet {
  border-radius: 55px;
  font-family: "VelaSans-SemiBold";
  font-size: 20px;
  line-height: 89%;
  color: #fff;
  cursor: pointer;
  padding: 12px 26px;
  position: relative;
  transition: all 1s;
}

.info-bullet-active {
  color: #333343;
}

.info-bullet-active::before {
  position: absolute;
  content: "";
  background-color: #35ec6f;
  transition: all 1s;
  width: 100%;
  height: 100%;
  z-index: -1;
  top: 0;
  left: 0;
  border-radius: 55px;
}

.swiperInfo .swiper-slide {
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
}

.info-slide {
  &__inner {
    padding-bottom: 60px;
    padding-left: 60px;
    max-width: 808px;
  }
  &__icon {
    width: 52px;
    height: 52px;
    margin-bottom: 10px;
  }
  &__title {
    font-family: "VelaSans-SemiBold";
    font-weight: 600;
    font-size: 64px;
    line-height: 100%;
    margin-bottom: 10px;
  }
  &__text {
    font-family: "VelaSans-Medium";
    font-size: 26px;
    line-height: 100%;
  }
}

@media (max-width: 800px) {
  .info-slide {
    &__title {
      font-size: 50px;
    }
    &__text {
      font-size: 20px;
    }
  }
}
@media (max-width: 700px) {
  .info-bullet {
    font-size: 15px;
  }
  .info-slide {
    &__icon {
      width: 45px;
      height: 45px;
    }
    &__title {
      font-size: 35px;
    }
    &__text {
      font-size: 16px;
    }
  }
}

@media (max-width: 600px) {
  .info-bullet {
    padding: 10px 16px;
  }
}

@media (max-width: 480px) {
  .swiperInfo {
    border-radius: 32px;
  }
  .info-bullet {
    font-size: 12px;
  }
  .swiperInfo .swiper-pagination {
    height: 40px;
  }
  .swiperInfo .swiper-slide {
    height: 518px;
    border-radius: 32px;
  }
  .info-slide {
    &__inner {
      padding-left: 22px;
      padding-bottom: 22px;
    }
    &__title {
      font-size: 26px;
    }
  }
}

@media (max-width: 400px) {
}
</style>
