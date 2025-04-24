<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import { Pagination, Mousewheel } from "swiper/modules";
</script>
<template>
  <swiper
    :pagination="{
      type: 'progressbar',
    }"
    :slides-offset-before="slidesOffsetBefore"
    :slides-per-view="slidesPerView"
    :space-between="14"
    :mousewheel="true"
    :modules="[Pagination, Mousewheel]"
    class="swiperAdvantages"
  >
    <swiper-slide
      ><img
        class="swiperAdvantages-slide__img"
        src="../../assets/images/monitor.png"
        alt=""
      />
      <h4 class="swiperAdvantages-slide__title">
        Для сотрудников безопасности
      </h4>
      <p class="swiperAdvantages-slide__text">
        Устанавливаем маяки на любые виды и типы предметов лизинга, а также
        производим маркировку
      </p>
      <p class="swiperAdvantages-slide__text">
        Удобный интерфейс личного кабинета, упрощающий поиск объектов
      </p>
    </swiper-slide>
    <swiper-slide
      ><img
        class="swiperAdvantages-slide__img"
        src="../../assets/images/monitor.png"
        alt=""
      />
      <h4 class="swiperAdvantages-slide__title">
        Для сотрудников безопасности
      </h4>
      <p class="swiperAdvantages-slide__text">
        Устанавливаем маяки на любые виды и типы предметов лизинга, а также
        производим маркировку
      </p>
      <p class="swiperAdvantages-slide__text">
        Удобный интерфейс личного кабинета, упрощающий поиск объектов
      </p>
    </swiper-slide>
    <swiper-slide
      ><img
        class="swiperAdvantages-slide__img"
        src="../../assets/images/monitor.png"
        alt=""
      />
      <h4 class="swiperAdvantages-slide__title">
        Для сотрудников безопасности
      </h4>
      <p class="swiperAdvantages-slide__text">
        Устанавливаем маяки на любые виды и типы предметов лизинга, а также
        производим маркировку
      </p>
      <p class="swiperAdvantages-slide__text">
        Удобный интерфейс личного кабинета, упрощающий поиск объектов
      </p>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss">
.swiperAdvantages {
  padding-bottom: 50px;
  padding-left: 16px;
}
.swiperAdvantages .swiperAdvantages-slide__img {
  width: 150px;
  height: 170px;
  margin-bottom: 30px;
}
.swiperAdvantages .swiperAdvantages-slide__title {
  margin-bottom: 15px;
  max-width: 247px;
  font-family: "VelaSans-ExtraBold";
  font-weight: 800;
  font-size: 20px;
  line-height: 120%;
}
.swiperAdvantages .swiperAdvantages-slide__text {
  max-width: 223px;
  font-family: "VelaSans-Medium";
  font-size: 15px;
  margin-bottom: 20px;
}
.swiperAdvantages .swiper-pagination {
  top: unset;
  bottom: 0;
  left: 500px;
  width: 271px;
}

.swiperAdvantages
  .swiper-pagination-progressbar
  .swiper-pagination-progressbar-fill {
  background: #333343;
}
.swiperAdvantages .swiper-slide {
  max-width: 250px;
  width: 100%;
  height: auto;
  background-color: #ebecf3;
  display: flex;
  align-items: start;
  flex-direction: column;
  padding: 40px;
  border-radius: 80px;
}

@media (min-width: 1200px) {
  .swiperAdvantages .swiperAdvantages-slide__img {
    width: 200px;
    height: 220px;
  }
  .swiperAdvantages .swiperAdvantages-slide__title {
    font-size: 26px;
    max-width: unset;
  }
  .swiperAdvantages .swiperAdvantages-slide__text {
    font-size: 20px;
    max-width: 240px;
  }
  .swiperAdvantages .swiper-slide {
    width: 431px;
    padding: 63px 48px;
  }
}

@media (max-width: 800px) {
  .swiperAdvantages .swiper-pagination {
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
@media (max-width: 480px) {
  .swiperAdvantages {
    padding-bottom: 30px;
  }
  .swiperAdvantages .swiperAdvantages-slide__title {
    font-size: 18px;
  }
  .swiperAdvantages .swiperAdvantages-slide__text {
    font-size: 15px;
    line-height: 100%;
  }
  .swiperAdvantages .swiperAdvantages-slide__img {
    width: 120px;
    height: 127px;
    margin-bottom: 22px;
  }
  .swiperAdvantages .swiper-slide {
    padding: 17px 34px 29px 24px;
    border-radius: 32px;
    max-width: 300px;
  }
  .swiperAdvantages .swiper-pagination {
    height: 2px;
  }
}
@media (min-width: 480px) {
  .swiperAdvantages {
    display: none;
  }
}
</style>
