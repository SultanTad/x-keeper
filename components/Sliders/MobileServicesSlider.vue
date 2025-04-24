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
    class="swiperServices"
  >
    <swiper-slide
      ><img
        class="swiperServices-slide__img"
        src="../../assets/images/monitor.png"
        alt=""
      />
      <h4 class="swiperServices-slide__title">Техническая поддержка</h4>
    </swiper-slide>
    <swiper-slide
      ><img
        class="swiperServices-slide__img"
        src="../../assets/images/monitor.png"
        alt=""
      />
      <h4 class="swiperServices-slide__title">Ремонт и обслуживание</h4>
    </swiper-slide>
    <swiper-slide
      ><img
        class="swiperServices-slide__img"
        src="../../assets/images/monitor.png"
        alt=""
      />
      <h4 class="swiperServices-slide__title">Поддержка в вопросах безопасности</h4>
    </swiper-slide>
    <swiper-slide
      ><img
        class="swiperServices-slide__img"
        src="../../assets/images/monitor.png"
        alt=""
      />
      <h4 class="swiperServices-slide__title">Поддержка в вопросах безопасности</h4>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss">
.swiperServices {
  padding-bottom: 50px;
  padding-left: 16px;
}
.swiperServices .swiperServices-slide__img {
  width: 150px;
  height: 170px;
  margin-bottom: 30px;
}
.swiperServices .swiperServices-slide__title {
  margin-bottom: 15px;
  max-width: 247px;
  font-family: "VelaSans-ExtraBold";
  font-weight: 800;
  font-size: 20px;
  line-height: 120%;
}
.swiperServices .swiperServices-slide__text {
  max-width: 223px;
  font-family: "VelaSans-Medium";
  font-size: 15px;
  margin-bottom: 20px;
}
.swiperServices .swiper-pagination {
  top: unset;
  bottom: 0;
  left: 500px;
  width: 271px;
  height: 2px;
}

.swiperServices
  .swiper-pagination-progressbar
  .swiper-pagination-progressbar-fill {
  background: #333343;
}
.swiperServices .swiper-slide {
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
  .swiperServices .swiperServices-slide__img {
    width: 200px;
    height: 220px;
  }
  .swiperServices .swiperServices-slide__title {
    font-size: 26px;
    max-width: unset;
  }
  .swiperServices .swiperServices-slide__text {
    font-size: 20px;
    max-width: 240px;
  }
  .swiperServices .swiper-slide {
    width: 431px;
    padding: 63px 48px;
  }
}

@media (max-width: 800px) {
  .swiperServices .swiper-pagination {
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
@media (max-width: 480px) {
  .swiperServices {
    padding-bottom: 30px;
  }
  .swiperServices .swiperServices-slide__title {
    font-size: 24px;
  }
  .swiperServices .swiperServices-slide__text {
    font-size: 15px;
    line-height: 100%;
  }
  .swiperServices .swiperServices-slide__img {
    width: 151px;
    height: 162px;
    margin-bottom: 51px;
  }
  .swiperServices .swiper-slide {
    padding: 17px 34px 29px 24px;
    border-radius: 32px;
    max-width: 300px;
  }
}
@media (min-width: 480px) {
  .swiperServices {
    display: none;
  }
}
</style>
