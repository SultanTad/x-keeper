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
    :slides-offset-before="430"
    :slides-per-view="2.2"
    :space-between="20"
    :mousewheel="true"
    :modules="[Pagination, Mousewheel]"
    class="swiperSolution"
  >
    <swiper-slide
      ><img
        class="swiperSolution-slide__img"
        src="../../assets/images/monitor.png"
        alt=""
      />
      <h4 class="swiperSolution-slide__title">
        Удалённое подписание договора лизинга
      </h4>
      <p class="swiperSolution-slide__text">
        Подписание договорной документации под ключ с идентификацией подписантов
        и безопасным хранением в нашей базе данных
      </p>
    </swiper-slide>
    <swiper-slide
      ><img
        class="swiperSolution-slide__img"
        src="../../assets/images/monitor.png"
        alt=""
      />
      <h4 class="swiperSolution-slide__title">
        Удалённое подписание договора лизинга
      </h4>
      <p class="swiperSolution-slide__text">
        Подписание договорной документации под ключ с идентификацией подписантов
        и безопасным хранением в нашей базе данных
      </p>
    </swiper-slide>
    <swiper-slide
      ><img
        class="swiperSolution-slide__img"
        src="../../assets/images/monitor.png"
        alt=""
      />
      <h4 class="swiperSolution-slide__title">
        Удалённое подписание договора лизинга
      </h4>
      <p class="swiperSolution-slide__text">
        Подписание договорной документации под ключ с идентификацией подписантов
        и безопасным хранением в нашей базе данных
      </p>
    </swiper-slide>
  </swiper>
</template>

<style>
.swiperSolution {
  padding-bottom: 50px;
}
.swiperSolution .swiperSolution-slide__img {
  width: 150px;
  height: 170px;
  margin-bottom: 30px;
}
.swiperSolution .swiperSolution-slide__title {
  margin-bottom: 15px;
  max-width: 247px;
  font-family: "VelaSans-ExtraBold";
  font-weight: 800;
  font-size: 20px;
  line-height: 120%;
}
.swiperSolution .swiperSolution-slide__text {
  max-width: 223px;
  font-family: "VelaSans-Medium";
  font-size: 15px;
}
.swiperSolution .swiper-pagination {
  top: unset;
  bottom: 0;
  left: 500px;
  width: 271px;
}

.swiperSolution
  .swiper-pagination-progressbar
  .swiper-pagination-progressbar-fill {
  background: #333343;
}
.swiperSolution .swiper-slide {
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

@media (min-width: 1500px) {
    .swiperSolution .swiperSolution-slide__img {
        width: 200px;
        height: 220px;
    }
    .swiperSolution .swiperSolution-slide__title {
        font-size: 26px;
        max-width: unset;
    }
    .swiperSolution .swiperSolution-slide__text {
        font-size: 20px;
        max-width: 240px;
    }
    .swiperSolution .swiper-slide {
        width: 431px;
        padding: 63px 48px;
    }
}
</style>
