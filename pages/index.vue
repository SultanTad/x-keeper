<script setup>
import ForestCountry from "@/assets/images/forest-country-road-1.webp";
import YellowBulldozer from "@/assets/images/yellow-bulldozer.webp";
import Cargoes from "@/assets/images/cargoes.webp";
import FirstSlide from "@/assets/images/image55.png";
import WhiteBlackBg from "@/assets/images/white-black-background.png";
import Icon1 from "@/assets/images/icon-1.svg";
import Icon2 from "@/assets/images/icon-2.svg";
import Icon3 from "@/assets/images/icon-3.svg";

import { ScrollTrigger } from "gsap/ScrollTrigger";

onBeforeMount(() => {
  useGSAP().registerPlugin(ScrollTrigger);
});

const serviceBlocks = [
  { id: 1, text: "Инвестиции в инженерные разработки" },
  {
    id: 2,
    text: "Собственное производство",
  },
  {
    id: 3,
    text: "Уникальная экспертиза, подтверждённая опытом и реализованными проектами",
  },
  {
    id: 4,
    text: "Участие в глобальных инициативах, направленных на развитие и внедрение технологий будущего",
  },
  {
    id: 5,
    text: "Партнёры компании – крупнейшие игроки лизинга и государственные структуры отрасли связи",
  },
];

const activeWidget = ref(false);

const sliders = [
  {
    title: "Ведущий разработчик и производитель устройств для спутникового (GNSS) мониторинга",
    pagination: ["автомобили", "спецтехника", "грузы"],
    slides: [
      {
        img: ForestCountry,
        icon: Icon1,
        title: "До 5 лет без подзарядки",
        text: "Мы нашли оптимальное соотношение между эффективнностью програмного обеспечения и экономичностью батарей",
      },
      {
        img: YellowBulldozer,
        icon: Icon1,
        title: "Работа в экстремальных условиях",
        text: "Обеспечиваем устойчивость к перебоям сети связи в зонах с плохим покрытием и удалённых регионах",
      },
      {
        img: Cargoes,
        icon: Icon1,
        title: "Доступ по всему миру",
        text: "Автоматические переключение симкарт в зависимости от региона, позволяет контролировать грузы на всём пути следования",
      },
    ],
  },
  {
    title: "Инновационная компания в сфере навигационно - связных технологий",
    pagination: ["x-sim", "гибрид", "сеть"],
    slides: [
      {
        img: FirstSlide,
        icon: Icon2,
        title: "Инновации",
        text: "Сегодня мы создаём то, что станет стандартом завтра",
      },
      {
        img: FirstSlide,
        icon: Icon2,
        title: "Инновации",
        text: "Сегодня мы создаём то, что станет стандартом завтра",
      },
      {
        img: FirstSlide,
        icon: Icon2,
        title: "Инновации",
        text: "Сегодня мы создаём то, что станет стандартом завтра",
      },
    ],
  },
  {
    title: "Первая цифровая система аутсорсинга лизинговых операций в России",
    pagination: ["софт", "цифровизация", "отчётность"],
    slides: [
      {
        img: WhiteBlackBg,
        icon: Icon3,
        title: "IT-решения",
        text: "Мы позаботимся о важном, чтобы вы могли сосредоточиться на главном",
      },
      {
        img: WhiteBlackBg,
        icon: Icon3,
        title: "IT-решения 2",
        text: "Мы позаботимся о важном, чтобы вы могли сосредоточиться на главном",
      },
      {
        img: WhiteBlackBg,
        icon: Icon3,
        title: "IT-решения 3",
        text: "Мы позаботимся о важном, чтобы вы могли сосредоточиться на главном",
      },
    ],
  },
];

const activatedWidget = () => {
  activeWidget.value = !activeWidget.value;
};
const closeWidget = () => {
  activeWidget.value = false;
};

const aboutUsActiveIndex = ref(-1);
const trustGlobeActiveIndex = ref(-1);
onMounted(() => {
  ScrollTrigger.create({
    trigger: "#aboutUsScroll",
    start: "top top",
    end: "+=3000",
    scrub: true,
    pin: true,
    onUpdate: (self) => {
      const progress = self.progress;

      aboutUsActiveIndex.value = progress === 0 ? -1 : Math.floor(progress * 5);

      useGSAP().to("#aboutUsLine", { scaleY: progress, duration: 0 });
    },
  });

  ScrollTrigger.create({
    trigger: "#trustGlobe",
    start: "top top",
    end: "+=4500",
    scrub: true,
    pin: true,
    onUpdate: (self) => {
      const progress = self.progress;

      trustGlobeActiveIndex.value = progress === 0 ? -1 : Math.floor(progress * 6);
    },
  });
});
</script>
<template>
  <main class="main">
    <div class="main__bg"></div>
    <div class="container">
      <div class="widget" @click="activatedWidget">
        <img src="../assets/images/widget.svg" alt="" />
      </div>
      <div class="get-in-touch" :class="{ open__widget: activeWidget }">
        <h2 class="title">Связаться</h2>
        <div class="icon-wrap" @click="closeWidget">
          <img class="get-in-touch--icon" src="../assets/images/close-get-in-touch.svg" alt="" />
        </div>
        <div class="contact-info">
          <p>WhatsApp <img src="../assets/images/Whatsapp.svg" alt="" /></p>
          <p>Telegram <img src="../assets/images/telegram.svg" alt="" /></p>
          <p>Написать на email</p>
          <p>Позвонить</p>
        </div>
      </div>
      <section class="promo">
        <div class="promo__inner">
          <div class="promo__content">
            <h1 class="promo__title">
              120 000
              <span>клиентов по всему миру</span>
            </h1>
            <h2 class="promo__sub-title">X-Keeper — безопасность для вашего бизнеса</h2>
            <p class="promo__text">
              Используем передовые технологии для мониторинга, аутсорсинг лизинговых операций и инструменты аналитики
            </p>
            <div class="promo__btns">
              <NuxtLink to="/drop-message"><Button green>оставить заявку</Button></NuxtLink>
              <NuxtLink><Button white>подробнее</Button></NuxtLink>
            </div>
          </div>
          <div class="promo__banner">
            <img src="../assets/images/promo-banner.webp" alt="promo-banner" />
          </div>
          <div class="promo__btns mobile">
            <NuxtLink to="/drop-message"><Button green>оставить заявку</Button></NuxtLink>
            <NuxtLink><Button white>подробнее</Button></NuxtLink>
          </div>
        </div>
      </section>
      <InfoSlider :sliders="sliders" />

      <section class="about-us" id="aboutUsScroll">
        <div class="about-us__inner">
          <div class="about-us__info">
            <h2 class="about-us__title">Коротко о нас</h2>
            <p class="about-us__text">
              Открываем новые горизонты IT, снижаем риски для бизнеса, улучшаем качество жизни и безопасность людей с помощью разработанных
              нами навигационно-связных технологий и IT-инфраструктуры
            </p>
          </div>
          <div class="about-us__services">
            <div class="about-us__line">
              <div
                id="aboutUsLine"
                style="width: 2px; background-color: #000; height: 100%; transform-origin: top; transform: scaleY(0); position: absolute" />
              <div style="width: 2px; background-color: #000; height: 100%; transform-origin: top; opacity: 0.2" />
            </div>
            <div v-for="(block, index) in serviceBlocks" :key="block.id" class="service-block">
              <div class="about-us__service" :style="{ opacity: aboutUsActiveIndex >= index ? 1 : 0.2 }">
                {{ block.text }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="number-company">
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
      </section>

      <section class="trust__info" id="trustGlobe">
        <div class="trust__info-inner">
          <div
            class="trust__info-text"
            style="
              line-height: 1;
              position: relative;
              font-size: 6rem;
              text-align: start;
              max-width: 100%;
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: start;
              gap: 10px;
            ">
            <div v-for="(item, index) in ['Наши устройства', 'бесперебойно', 'работают по всему миру']" style="color: rgba(0, 0, 0, 0.2)">
              <span
                :style="{ clipPath: trustGlobeActiveIndex >= index ? 'inset(0 0% -20% 0)' : 'inset(0 100% -20% 0)' }"
                style="position: absolute; color: #333343; transition: clip-path 0.3s ease-in-out"
                class="text-reveal">
                {{ item }}
              </span>
              {{ item }}
            </div>
          </div>
        </div>
      </section>

      <section class="trust__info">
        <div class="trust__info-inner">
          <h3 class="trust__info-text">
            С нами вы получаете высокотехнологичное оборудование и уверенность в том, что ваши активы всегда будут доступны и защищены
          </h3>
          <NuxtLink><Button green class="trust__info-btn">оставить заявку</Button></NuxtLink>
        </div>
      </section>
    </div>
  </main>
</template>

<style lang="scss">
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
.widget {
  position: fixed;
  bottom: 16px;
  right: 16px;
  background: #333343;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.get-in-touch {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 200;
  max-width: 450px;
  width: 100%;
  background-color: #ebecf3;
  border-radius: 34px;
  border: 2px solid #fff;
  display: none;
  &.open__widget {
    display: block;
  }
  .title {
    text-align: center;
    padding-top: 20px;
    font-family: "VelaSans-ExtraBold";
    font-weight: 800;
    margin-bottom: 43px;
    font-size: 26px;
    line-height: 120%;
  }
  .icon-wrap {
    background-color: #fff;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    position: absolute;
    right: 18px;
    top: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .contact-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
    padding: 0 18px 18px 18px;
    p {
      background-color: #fff;
      border-radius: 132px;
      padding: 17px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "VelaSans-SemiBold";
      font-weight: 600;
      font-size: 16px;
      img {
        margin-left: 6px;
      }
    }
  }
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
    display: flex;
    flex-direction: column;
    padding-left: 36px;
    padding-top: 40px;
  }
  &__banner {
    display: flex;
    align-items: center;
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
    font-weight: 300;
    span {
      display: block;
      font-family: "VelaSans-ExtraBold";
      font-size: 22px;
      line-height: 100%;
      font-weight: 800;
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
    font-weight: 500;
    font-size: 17px;
    line-height: normal;
    margin-bottom: 80px;
    max-width: 516px;
  }
  &__btns {
    display: flex;
    gap: 0 10px;
    align-items: center;
    &.mobile {
      display: none;
    }
  }
}

.info {
  padding-top: 200px;
  &__title-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__title {
    font-family: "VelaSans-ExtraBold";
    font-size: 36px;
    font-weight: 800;
    line-height: 125%;
    color: #333343;
    margin-bottom: 50px;
    text-align: center;
    max-width: 983px;
  }
}

.about-us {
  padding-top: 200px;
  color: #333343;
  &__inner {
    position: relative;
    display: flex;
    justify-content: space-between;
  }
  &__title {
    font-family: "VelaSans-ExtraBold";
    font-weight: 800;
    font-size: 36px;
    line-height: 130%;
    margin-bottom: 32px;
  }
  &__text {
    font-family: "VelaSans-Light";
    font-size: 32px;
    line-height: 125%;
    max-width: 588px;
    font-weight: 300;
  }
  &__line {
    position: absolute;
    top: 0;
    left: auto;
    width: 2px;
    height: 100%;
    transform: translateX(-20px);
  }
  &__services {
    display: flex;
    flex-direction: column;
    max-width: 576px;
  }
  .service-block {
    position: relative;
    padding-bottom: 45px;
    &:last-child {
      padding-bottom: 0;
    }
  }
  &__service {
    font-family: "VelaSans-ExtraBold";
    font-weight: 800;
    font-size: 26px;
    line-height: 120%;
    opacity: 0.2;
    transition: opacity 0.3s ease-in-out;
  }
}

.number-company {
  padding-top: 200px;
  color: #333343;
  &__title {
    font-family: "VelaSans-Regular";
    font-weight: 400;
    font-size: 90px;
    line-height: normal;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 50px;
  }
  &__item {
    border: 1px solid rgba(51, 51, 67, 0.4);

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
  &-btn {
    width: 320px;
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
    line-height: normal;
    color: #333343;
    max-width: 935px;
    text-align: center;
  }
}

.text-reveal {
  clip-path: inset(0 100% -20% 0);
}

@media (min-width: 1350px) {
  .widget {
    right: calc((100vw - 1352px) / 2 + 3px);
  }
}
@media (min-width: 1000px) {
  .widget {
    &:hover img {
      animation: pulse 0.3s ease-in-out;
    }
  }
  .icon-wrap {
    &:hover {
      background-color: #d9dae1;
    }
  }
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
}
@media (min-width: 1200px) {
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
      padding-left: 60px;
      padding-top: 60px;
      padding-bottom: 60px;
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
    .service-block {
      padding-bottom: 74px;
      &:last-child {
        padding-bottom: 0;
      }
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
  .swiperInfo .swiper-slide {
    height: 754px;
  }
}

@media (max-width: 1060px) {
  .about-us {
    padding-top: 90px;
    &__inner {
      flex-direction: column;
      justify-content: unset;
    }
    &__info {
      margin-bottom: 50px;
    }
  }
}

@media (max-width: 860px) {
  .number-company {
    padding-top: 90px;
    &__list {
      grid-template-columns: 1fr;
      gap: 30px 0;
    }
    &__item {
      border-radius: 32px;
    }
  }
}

@media (max-width: 800px) {
  .promo__btns {
    display: none;
  }
  .main__bg {
    height: 870px;
  }
  .promo {
    padding-top: 62px;
    &__btns {
      &.mobile {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        gap: 16px 0;
        width: 100%;
        a {
          width: 100%;
          button {
            width: 100%;
          }
        }
      }
    }
    &__inner {
      flex-direction: column;
      align-items: center;
      background: unset;
    }
    &__title {
      margin-bottom: 31px;
    }
    &__sub-title {
      margin-bottom: 10px;
    }
    &__text {
      margin-bottom: 29px;
    }
    &__content {
      padding-top: unset;
      padding-left: unset;
      text-align: center;
    }
    &__banner {
      img {
        height: 341px;
      }
    }
  }
  .info {
    padding-top: 100px;
    &__title {
      font-size: 30px;
      margin-bottom: 30px;
    }
  }
}

@media (max-width: 700px) {
  .info {
    &__title {
      font-size: 25px;
    }
  }
}

@media (max-width: 480px) {
  .widget {
    width: 58px;
    height: 58px;
    img {
      width: 28px;
      height: 28px;
    }
  }
  .info {
    padding-top: 90px;
    &__title {
      font-size: 16px;
    }
  }
  .about-us {
    &__text {
      font-size: 18px;
    }
    &__services {
      gap: 30px 0;
    }
    &__service {
      font-size: 20px;
    }
  }
  .number-company {
    &__title {
      font-size: 44px;
    }
    &__list {
      margin-top: 30px;
    }
  }
  .trust__info {
    padding-top: 50px;
    &-text {
      font-size: 16px;
      line-height: 120%;
      max-width: 312px;
    }
    &-inner {
      gap: 40px 0;
    }
  }
  .get-in-touch .title {
    margin-bottom: 20px;
  }
  .get-in-touch .contact-info p {
    font-size: 11px;
  }
  .promo {
    padding-bottom: unset;
    &__content {
      width: 100%;
      text-align: left;
    }
    &__banner {
      width: 100%;
    }
    &__title {
      span {
        font-size: 18px;
      }
    }
    &__sub-title {
      font-size: 24px;
    }
    &__text {
      font-size: 16px;
    }
    &__banner {
      img {
        border-radius: 32px;
      }
    }
  }
  .main__bg {
    border-bottom-right-radius: 32px;
    border-bottom-left-radius: 32px;
  }
}
@media (max-width: 340px) {
  .trust__info {
    padding-top: 50px;
    &-btn {
      width: 280px;
    }
  }
}
</style>
