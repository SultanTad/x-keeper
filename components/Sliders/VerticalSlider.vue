<script setup>
import { ref, onMounted } from "vue";
import MonitorImg from "@/assets/images/monitor.png";
import "v-slick-carousel/style.css";
import { VSlickCarousel } from "v-slick-carousel";

const currentSlide = ref(0);

const updateActiveSlide = (current, next) => {
  currentSlide.value = next;
  console.log(currentSlide.value);
};

const settings = {
  infinite: true,
  arrows: true,
  speed: 500,
  slidesToShow: 1.5,
  slidesToScroll: 1,
  centerMode: true,
  vertical: true,
  adaptiveHeight: true,
  cssEase: "linear",
};

const slides = [
  {
    img: MonitorImg,
    title: "Для сотрудников безопасности1",
    text1:
      "Устанавливаем маяки на любые виды и типы предметов лизинга, а также производим маркировку",
    text2: "Удобный интерфейс личного кабинета, упрощающий поиск объектов",
  },
  {
    img: MonitorImg,
    title: "Для сотрудников безопасности2",
    text1:
      "Устанавливаем маяки на любые виды и типы предметов лизинга, а также производим маркировку",
    text2: "Удобный интерфейс личного кабинета, упрощающий поиск объектов",
  },
  {
    img: MonitorImg,
    title: "Для сотрудников безопасности3",
    text1:
      "Устанавливаем маяки на любые виды и типы предметов лизинга, а также производим маркировку",
    text2: "Удобный интерфейс личного кабинета, упрощающий поиск объектов",
  },
  {
    img: MonitorImg,
    title: "Для сотрудников безопасности4",
    text1:
      "Устанавливаем маяки на любые виды и типы предметов лизинга, а также производим маркировку",
    text2: "Удобный интерфейс личного кабинета, упрощающий поиск объектов",
  },
];

const getSlideClass = (index) => {
  if (index === currentSlide.value) return "center-slide";
  if (index === (currentSlide.value - 1 + slides.length) % slides.length)
    return "prev-slide";
  if (index === (currentSlide.value + 1) % slides.length) return "next-slide";
  return "hidden-slide";
};

onMounted(() => {
  console.log(currentSlide.value);
});
</script>
<template>
  <div class="slider-container">
    <VSlickCarousel v-bind="settings" @beforeChange="updateActiveSlide">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="slide"
        :class="getSlideClass(index)"
      >
        <img :src="slide.img" :alt="slide.title" />
        <div class="slide__inner">
          <h4 class="slide__title">
            {{ slide.title }}
          </h4>
          <p class="slide__text">
            {{ slide.text1 }}
            <span>{{ slide.text2 }}</span>
          </p>
        </div>
      </div>
    </VSlickCarousel>
  </div>
</template>

<style lang="scss">
.v-slick-slide-group {
  z-index: -1;
}
.v-slick-slide-group.active.center.current {
  z-index: 10000;
}

.slide {
  background-color: #ebecf3;
  border-radius: 80px;
  display: flex;
  align-items: center;
  height: 260px !important;
  img {
    margin-right: 150px;
    padding-left: 25px;
  }
  &__inner {
    max-width: 400px;
  }
  &__title {
    font-family: "VelaSans-ExtraBold";
    font-size: 24px;
    margin-bottom: 30px;
  }
  &__text {
    font-family: "VelaSans-Medium";
    font-size: 17px;
    line-height: 100%;
    span {
      display: block;
      margin-top: 20px;
    }
  }
  &.center-slide {
    transform: rotateX(0deg) translateZ(150px) scale(1) !important;
    transition: all 1s;
  }
  &.prev-slide {
    transform: rotateX(50deg) translateZ(-215px) scale(0.94) !important;
    transition: all 1s;
    opacity: 0.5;
  }
  &.next-slide {
    transform: rotateX(-50deg) translateZ(-215px) scale(0.94) !important;
    transition: all 1s;
    opacity: 0.5;
  }
  &.hidden-slide {
    transform: rotateX(90deg) translateZ(-200px);
    opacity: 0;
    z-index: 1;
  }
}

.v-slick-list {
  height: 400px !important; /* Делаем высоту адаптивной */
}

.v-slick-arrow.next,
.v-slick-arrow.prev {
  right: 15px;
  background-image: url(../../assets/images/vertical-slider-arrow.svg);
  width: 45px;
  height: 45px;
  background-size: 18px;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
}

.v-slick-arrow.prev {
  top: 45%;
  left: unset;
}

.v-slick-arrow.next {
  top: 52%;
  transform: rotate(180deg);
}

.v-slick-arrow.prev:before {
  content: "";
}
.v-slick-arrow.next:before {
  content: "";
}

@media (min-width: 1200px) {
  .slide {
    &__title {
      font-size: 36px;
      margin-bottom: 50px;
    }
    &__text {
      font-size: 20px;
    }
    img {
      margin-right: 118px;
      padding-left: 91px;
      width: 436px;
      height: 365px;
    }
    &__inner {
      max-width: 618px;
    }
  }
  .v-slick-list {
    height: 800px !important;
    padding: 100px 0 !important;
  }
  .slide.prev-slide {
    transform: rotateX(50deg) translateZ(-470px) scale(0.94) !important;
  }
  .slide.next-slide {
    transform: rotateX(-50deg) translateZ(-470px) scale(0.94) !important;
  }
  .slide {
    height: 540px !important;
  }
  .v-slick-arrow.next,
  .v-slick-arrow.prev {
    width: 70px;
    height: 70px;
    &:hover {
      background-color: rgba(255, 255, 255, 0.4);
    }
  }
}

@media (max-width: 850px) {
  .slide img {
    margin-right: 50px;
  }
}

@media (max-width: 740px) {
  .slide__title {
    font-size: 18px;
  }
  .slide__text {
    font-size: 12px;
  }
  .slide img {
    width: 130px;
  }
}

@media (max-width: 670px) {
  .slide__inner {
    max-width: 300px;
  }
}

@media (max-width: 550px) {
  .slide img {
    margin-right: 30px;
    width: 80px;
  }
}

@media (max-width: 480px) {
  .slider-container {
    display: none;
  }
  .slide img {
    margin-right: 10px;
    padding-left: 10px;
  }
  .slide__inner {
    max-width: 200px;
  }
  .v-slick-arrow.next,
  .v-slick-arrow.prev {
    width: 25px;
    height: 25px;
  }
}

@media (max-width: 400px) {
  .slide {
    flex-direction: column;
  }
  .slide img {
    margin-top: 8px;
  }
  .slide__title {
    margin-bottom: 10px;
    text-align: center;
  }
  .slide__text {
    text-align: center;
  }
}
</style>
