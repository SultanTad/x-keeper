<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
defineProps({
  paginationText: Array,
  sliderContent: Array,
});
</script>
<template>
  <swiper
    :pagination="{
      clickable: true,
      bulletActiveClass: 'product-bullet-active',
      bulletClass: 'product-bullet',
      renderBullet: (index, className) => {
        return `<span class=${className}>${paginationText[index]}</span>`;
      },
    }"
    :slides-per-view="1"
    :modules="[Pagination]"
    class="swiperProducts"
  >
    <swiper-slide
      v-for="(content, index) in sliderContent"
      :key="index"
      :style="{ backgroundImage: `url(${content.img})` }"
    >
      <div
        class="swiper-slide__inner"
        :class="{ specifications: content.specifications }"
      >
        <h2 class="swiper-slide__title">
          {{ content.title }}
          <span>{{ content.subtitle }}</span>
        </h2>
        <ul class="swiper-slide__list" v-if="Array.isArray(content.text)">
          <li
            class="list__item"
            v-for="(item, index) in content.text"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
        <p v-else class="swiper-slide__text">{{ content.text }}</p>

        <div class="swiper-slide__table" v-if="content.specifications">
          <div
            class="swiper-slide__table-inner"
            v-for="(prop, key) in content.specifications?.property"
            :key="key"
          >
            <p class="table-property">{{ prop }}</p>
            <p class="table-value">{{ content.specifications.value[key] }}</p>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss">
.swiperProducts {
  .swiper-slide {
    height: 500px;
    border-radius: 80px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: end;
    color: #fff;
    &__inner {
      padding-left: 50px;
    }
    .specifications {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      padding-left: unset;
    }
    &__title {
      font-family: "VelaSans-bold";
      font-size: 35px;
      margin-bottom: 25px;
      max-width: 380px;
      span {
        display: block;
      }
    }
    &__list {
      padding-bottom: 60px;
    }
    &__text {
      padding-bottom: 34px;
      font-family: "VelaSans-Medium";
      font-size: 20px;
      line-height: 100%;
      max-width: 700px;
    }
    &__table {
      display: flex;
      flex-direction: column;
      max-width: 770px;
      width: 100%;
      padding-top: 130px;
      gap: 5px 0;
      padding-right: 10px;
      padding-left: 10px;
      &-inner {
        display: flex;
        justify-content: space-between;
        padding-bottom: 8px;
        border-bottom: 1px solid #ffffff33;
        .table-property {
          font-family: "VelaSans-Regular";
          font-weight: 400;
          font-size: 13px;
          line-height: 120%;
          opacity: 0.8;
        }
        .table-value {
          font-family: "VelaSans-Medium";
          font-weight: 500;
          font-size: 17px;
          line-height: 120%;
        }
      }
      &-inner:last-child {
        padding-bottom: unset;
        border-bottom: unset;
      }
    }
    .list__item {
      list-style-type: disc;
      font-family: "VelaSans-Medium";
      font-size: 20px;
      line-height: 100%;
      margin-bottom: 21px;
    }
    .list__item::marker {
      font-size: 10px;
    }
  }
  .swiper-pagination {
    width: unset;
    height: 54px;
    border-radius: 86px;
    background-color: rgba(255, 255, 255, 0.42);
    border: 1px solid rgba(255, 255, 255, 0.32);
    display: flex;
    align-items: center;
    padding: 5px;
    top: 38px;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }

  .product-bullet {
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

  .product-bullet-active {
    color: #333343;
  }

  .product-bullet-active::before {
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
}

@media (min-width: 1500px) {
  .swiperProducts {
    .swiper-slide {
      height: 725px;
      &__title {
        font-size: 50px;
        margin-bottom: 48px;
      }
      &__list {
        padding-bottom: 118px;
      }
      &__text {
        font-size: 26px;
      }
      .list__item {
        font-size: 26px;
      }
      &__table {
        gap: 14px 0;
        &-inner {
          display: flex;
          justify-content: space-between;
          padding-bottom: 16px;
          border-bottom: 1px solid #fff;
          .table-property {
            font-size: 18px;
          }
          .table-value {
            font-size: 22px;
          }
        }
      }
    }
  }
}

@media (max-width: 800px) {
  .swiperProducts .swiper-slide {
    border-radius: 32px;
  }
  .swiperProducts .product-bullet {
    padding: 12px 16px;
    font-size: 15px;
  }
}

@media (max-width: 565px) {
  .swiperProducts .product-bullet {
    font-size: 12px;
  }
  .swiperProducts .swiper-pagination {
    height: 40px;
  }
  .products__hero .swiperProducts .swiper-pagination {
    width: 230px;
  }
  .technical-parameters .swiperProducts .swiper-pagination {
    width: 230px;
  }
}
@media (max-width: 480px) {
  .products__hero .swiperProducts .swiper-slide {
    &__title {
      font-size: 26px;
    }
  }
  .theft-protection .swiperProducts .swiper-slide {
    &__title {
      font-size: 20px;
    }
  }
  .swiperProducts .swiper-slide {
    height: 518px;
    &__text {
      font-size: 16px;
    }
  }
  .swiperProducts .swiper-slide .list__item {
    font-size: 13px;
  }
  .products__hero .swiperProducts .swiper-slide__inner {
    padding-left: 30px;
  }
  .theft-protection .swiperProducts .swiper-slide__inner {
    padding-left: 22px;
  }
  .swiperProducts .swiper-slide__table-inner .table-property {
    font-size: 11px;
  }
  .swiperProducts .swiper-slide__table-inner .table-value {
    font-size: 13px;
  }
}
</style>
