<script setup>
import { onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.to(".about-us__service", {
    opacity: 1,
    duration: 2.5,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".about-us",
      start: "bottom bottom",
      once: true,
    },
  });
});

const swiperPaginationContent = ["автомобили", "спецтехника", "грузы"];
</script>
<template>
  <main class="main">
    <div class="main__bg"></div>
    <section class="promo">
      <div class="container">
        <div class="promo__inner">
          <div class="promo__content">
            <h1 class="promo__title">
              120 000
              <span>клиентов по всему миру</span>
            </h1>
            <h2 class="promo__sub-title">
              X-Keeper — безопасность для вашего бизнеса
            </h2>
            <p class="promo__text">
              Используем передовые технологии для мониторинга, аутсорсинг
              лизинговых операций и инструменты аналитики
            </p>
            <div class="promo__btns">
              <NuxtLink><Button green>оставить заявку</Button></NuxtLink>
              <NuxtLink><Button white>подробнее</Button></NuxtLink>
            </div>
          </div>
          <div class="promo__banner">
            <img src="../assets/images/promo-banner.webp" alt="promo-banner" />
          </div>
        </div>
      </div>
    </section>
    <section class="info">
      <div class="container">
        <h2 class="info__title">
          Ведущий разработчик и производитель устройств для спутникового (GNSS)
          мониторинга
        </h2>
        <swiper
          :pagination="{
            clickable: true,
            bulletActiveClass: 'info-bullet-active',
            bulletClass: 'info-bullet',
            renderBullet: (index, className) => {
              return `<span class=${className}>${swiperPaginationContent[index]}</span>`;
            },
          }"
          :modules="[Pagination]"
          class="swiperInfo"
        >
          <swiper-slide
            ><img src="../assets/images/cargoes.webp" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img
              src="../assets/images/aerial-view-car-driving-through-autumn-forest-country-road-1.webp"
              alt=""
          /></swiper-slide>
          <swiper-slide
            ><img
              src="../assets/images/yellow-bulldozer-field-against-backdrop-snowy-forest-1.webp"
              alt=""
          /></swiper-slide>
        </swiper>
      </div>
    </section>
    <section class="about-us">
      <div class="container">
        <div class="about-us__inner">
          <div class="about-us__info">
            <h2 class="about-us__title">Коротко о нас</h2>
            <p class="about-us__text">
              Открываем новые горизонты и снижаем риски для бизнеса, улучшаем
              качество жизни и безопасность людей с помощью разработанных нами
              навигационно-связных технологий и IT-инфраструктуры
            </p>
          </div>
          <div class="about-us__services">
            <p class="about-us__service">Инвестиции в инженерные разработки</p>
            <p class="about-us__service">Собственное производство</p>
            <p class="about-us__service">
              Уникальная экспертиза, подтверждённая опытом и реализованными
              проектами
            </p>
            <p class="about-us__service">
              Участие в глобальных инициативах, направленных на развитие и
              внедрение технологий будущего
            </p>
            <p class="about-us__service">
              Партнёры компании – крупнейшие игроки лизинга и государственные
              структуры отрасли связи
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="number-company">
      <div class="container">
        <h2 class="number-company__title">Цифры компании</h2>
        <div class="number-company__list">
          <div class="number-company__item">
            <h3 class="item__title">19</h3>
            <p class="item__text">лет в бизнесе</p>
          </div>
          <div class="number-company__item">
            <h3 class="item__title">11</h3>
            <p class="item__text">запатентованных технологий</p>
          </div>
          <div class="number-company__item">
            <h3 class="item__title">1.5М+</h3>
            <p class="item__text">активных устройств</p>
          </div>
          <div class="number-company__item">
            <h3 class="item__title">120k</h3>
            <p class="item__text">клиентов по всему миру</p>
          </div>
        </div>
      </div>
    </section>
    <section class="trust__info">
      <div class="container">
        <div class="trust__info-inner">
          <h3 class="trust__info-text">
            С нами вы получаете высокотехнологичное оборудование и уверенность в
            том, что ваши активы всегда будут доступны и защищены
          </h3>
          <NuxtLink><Button green>оставить заявку</Button></NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.main__bg {
  background-color: #ebecf3;
  height: 650px;
  border-bottom-right-radius: 80px;
  border-bottom-left-radius: 80px;
  left: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}
.promo {
  padding-top: 134px;
  padding-bottom: 54px;
  color: #333343;
  &__inner {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border-radius: 80px;
  }
  &__content {
    padding-left: 36px;
    padding-top: 40px;
  }
  &__banner {
    img {
      height: 460px;
      border-radius: 80px;
      object-fit: cover;
    }
  }
  &__title {
    font-family: "VelaSans-Light";
    font-size: 50px;
    line-height: 120%;
    margin-bottom: 40px;
    span {
      display: block;
      font-family: "VelaSans-ExtraBold";
      font-size: 22px;
      line-height: 100%;
    }
  }
  &__sub-title {
    font-family: "VelaSans-bold";
    font-size: 30px;
    line-height: 110.00000000000001%;
    max-width: 481px;
    margin-bottom: 18px;
  }
  &__text {
    font-family: "VelaSans-Medium";
    font-size: 17px;
    line-height: 100%;
    margin-bottom: 80px;
    max-width: 516px;
  }
  &__btns {
    display: flex;
    gap: 0 10px;
    align-items: center;
  }
}

.info {
  padding-top: 200px;
  &__title {
    font-family: "VelaSans-ExtraBold";
    font-size: 36px;
    line-height: 125%;
    color: #333343;
    margin-bottom: 50px;
    text-align: center;
  }
}

.swiperInfo .swiper-pagination {
  max-width: 499px;
  height: 54px;
  border-radius: 86px;
  background-color: rgba(255, 255, 255, 0.42);
  border: 1px solid rgba(255, 255, 255, 0.32);
  display: flex;
  align-items: center;
  padding: 5px;
  top: 38px;
  left: 31%;
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
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 80px;
  }
}

.about-us {
  padding-top: 200px;
  &__inner {
    display: flex;
    justify-content: space-between;
  }
  &__title {
    font-family: "VelaSans-ExtraBold";
    font-size: 36px;
    line-height: 130%;
    color: #333343;
    margin-bottom: 32px;
  }
  &__text {
    font-family: "VelaSans-Light";
    font-size: 32px;
    line-height: 125%;
    color: #333343;
    max-width: 588px;
  }
  &__services {
    display: flex;
    flex-direction: column;
    gap: 45px 0;
    max-width: 576px;
  }
  &__service {
    font-family: "VelaSans-ExtraBold";
    font-size: 26px;
    line-height: 120%;
    opacity: 0.2;
  }
}

.number-company {
  padding-top: 200px;
  color: #333343;
  &__title {
    font-family: "VelaSans-Regular";
    font-weight: 400;
    font-size: 90px;
    line-height: 100%;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 50px;
  }
  &__item {
    border: 1px solid #333343;
    border-radius: 80px;
    padding: 25px 10px 37px 32px;
  }
  .item__title {
    font-family: "VelaSans-Light";
    font-weight: 300;
    font-size: 90px;
    line-height: 95%;
    margin-bottom: 28px;
  }
  .item__text {
    font-family: "VelaSans-Regular";
    font-size: 26px;
    line-height: 100%;
  }
}

.trust__info {
  padding-top: 100px;
  button {
    cursor: pointer;
  }
  &-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 70px 0;
  }
  &-text {
    font-family: "VelaSans-Medium";
    font-weight: 500;
    font-size: 26px;
    line-height: 100%;
    color: #333343;
    max-width: 935px;
    text-align: center;
  }
}

@media (min-width: 1500px) {
  .main__bg {
    height: 846px;
  }
  .promo {
    &__banner {
      img {
        height: unset;
      }
    }
    &__content {
      padding-left: 56px;
      padding-top: 60px;
    }
    &__title {
      margin-bottom: 87px;
      font-size: 70px;
    }
    &__sub-title {
      font-size: 38px;
    }
    &__text {
      margin-bottom: 108px;
      font-size: 20px;
    }
  }
  .about-us {
    &__services {
      gap: 74px 0;
    }
  }
  .number-company {
    &__list {
      margin-top: 72px;
    }
    &__item {
      padding: 40px 10px 50px 52px;
    }
    .item__title {
      font-size: 140px;
    }
  }
  .trust__info {
    padding-top: 146px;
  }
}
</style>
