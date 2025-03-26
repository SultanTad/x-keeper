<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
</script>
<template>
  <swiper
    :navigation="true"
    :slides-per-view="3"
    :direction="'vertical'"
    :loop="true"
    :modules="[Navigation]"
    class="swiperVertical"
  >
    <swiper-slide class="swiperVertical-slide"
      ><img
        class="swiperVertical-slide__img"
        src="../../assets/images/monitor.png"
        alt=""
      />
      <div class="swiperVertical-slide__inner">
        <h4 class="swiperVertical-slide__title">
          Для сотрудников безопасности
        </h4>
        <p class="swiperVertical-slide__text">
          Устанавливаем маяки на любые виды и типы предметов лизинга, а также
          производим маркировку Удобный интерфейс личного кабинета, упрощающий
          поиск объектов
        </p>
      </div>
    </swiper-slide>
    <swiper-slide class="swiperVertical-slide"
      ><img
        class="swiperVertical-slide__img"
        src="../../assets/images/monitor.png"
        alt=""
      />
      <div class="swiperVertical-slide__inner">
        <h4 class="swiperVertical-slide__title">
          Для сотрудников безопасности
        </h4>
        <p class="swiperVertical-slide__text">
          Устанавливаем маяки на любые виды и типы предметов лизинга, а также
          производим маркировку Удобный интерфейс личного кабинета, упрощающий
          поиск объектов
        </p>
      </div>
    </swiper-slide>
    <swiper-slide class="swiperVertical-slide"
      ><img
        class="swiperVertical-slide__img"
        src="../../assets/images/monitor.png"
        alt=""
      />
      <div class="swiperVertical-slide__inner">
        <h4 class="swiperVertical-slide__title">
          Для сотрудников безопасности
        </h4>
        <p class="swiperVertical-slide__text">
          Устанавливаем маяки на любые виды и типы предметов лизинга, а также
          производим маркировку Удобный интерфейс личного кабинета, упрощающий
          поиск объектов
        </p>
      </div>
    </swiper-slide>
    <swiper-slide class="swiperVertical-slide"
      ><img
        class="swiperVertical-slide__img"
        src="../../assets/images/monitor.png"
        alt=""
      />
      <div class="swiperVertical-slide__inner">
        <h4 class="swiperVertical-slide__title">
          Для сотрудников безопасности
        </h4>
        <p class="swiperVertical-slide__text">
          Устанавливаем маяки на любые виды и типы предметов лизинга, а также
          производим маркировку Удобный интерфейс личного кабинета, упрощающий
          поиск объектов
        </p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss">
.swiperVertical {
  height: 500px;
  &-slide {
    background-color: #ebecf3;
    border-radius: 80px;
    display: flex;
    align-items: center;
    height: 270px;
  }
  .swiper-wrapper {
    align-items: center;
    justify-content: center;
    transform: rotate(90deg) !important;
  }
  .swiper-backface-hidden .swiper-slide {
    transform: unset;
  }
}
</style>
