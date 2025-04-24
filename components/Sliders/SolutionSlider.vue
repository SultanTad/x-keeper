<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref, computed, onMounted, onUnmounted } from "vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import { Pagination, Mousewheel } from "swiper/modules";

const windowWidth = ref(0);

const updateWidth = () => {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
  }
};

onMounted(() => {
  updateWidth();
  window.addEventListener("resize", updateWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});

const slidesOffsetBefore = computed(() => {
  if (windowWidth.value > 1200) return 430;
  if (windowWidth.value <= 800) return 0;
  return 0;
});
const slidesPerView = computed(() => {
  if (windowWidth.value < 400) return 1;
  if (windowWidth.value > 400) return 1.5;
  if (windowWidth.value > 800) return 2.2;
  return 2;
});
</script>
<template>
  <swiper
    :pagination="{
      type: 'progressbar',
    }"
    :slides-offset-before="slidesOffsetBefore"
    :slides-per-view="slidesPerView"
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
  padding-left: 16px;
  width: 100%;
  overflow: unset;
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
  line-height: normal;
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
.solutions__turnkey .swiperSolution .swiper-wrapper .swiper-slide {
  width: 300px;
  height: auto;
  background-color: #ebecf3;
  display: flex;
  align-items: start;
  flex-direction: column;
  padding: 40px;
  border-radius: 80px;
}

@media (min-width: 1200px) {
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
    max-width: 297px;
  }
  .swiperSolution .swiper-slide {
    max-width: 431px;
    padding: 48px;
  }
}

@media (max-width: 800px) {
  .swiperSolution .swiper-pagination {
    left: 50%;
    transform: translateX(-50%);
  }
  .solutions__turnkey .swiperSolution .swiper-wrapper .swiper-slide {
    border-radius: 32px;
    padding: 20px;
  }
}
@media (max-width: 480px) {
  .swiperSolution {
    padding-bottom: 30px;
  }
  .swiperSolution .swiperSolution-slide__title {
    font-size: 18px;
  }
  .swiperSolution .swiperSolution-slide__text {
    font-size: 15px;
    line-height: 100%;
  }
  .swiperSolution .swiperSolution-slide__img {
    width: 88px;
    height: 95px;
    margin-bottom: 22px;
  }
  .swiperSolution .swiper-slide {
    padding: 17px 34px 29px 24px;
    border-radius: 32px;
    max-width: 300px;
  }
  .swiperSolution .swiper-pagination {
    height: 2px;
  }
}
</style>
