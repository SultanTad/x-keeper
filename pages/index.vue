<script setup>
import ForestCountry from "@/assets/images/forest-country-road-1.webp";
import YellowBulldozer from "@/assets/images/yellow-bulldozer.webp";
import Cargoes from "@/assets/images/cargoes.webp";
import FirstSlide from "@/assets/images/image55.png";
import WhiteBlackBg from "@/assets/images/white-black-background.png";
import Icon1 from "@/assets/images/icon-1.svg";
import Icon2 from "@/assets/images/icon-2.svg";
import Icon3 from "@/assets/images/icon-3.svg";
import Circles from "@/assets/images/circles.svg";
import Globe from "@/assets/images/globe.svg";
import GlobeWithDots from "@/assets/images/globe-with-dots.svg";
import { useAnimationStore } from "~/store/animationPlayedStore";

const notMainPageFirst = useAnimationStore();
const stopScrollAnimationMain = useAnimationStore();
const nuxtApp = useNuxtApp();
const aboutUsActiveIndex = ref(-1);
const trustGlobeActiveIndex = ref(-1);
const trustInfoList = [
  "Наши устройства",
  "бесперебойно работают",
  "по всему миру",
];

const windowWidth = ref(0);
const isMounted = ref(false);

const updateWidth = () => {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
  }
};

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

const sliders = [
  {
    title:
      "Ведущий разработчик и производитель устройств для спутникового (GNSS) мониторинга",
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

onBeforeMount(() => {
  updateWidth();
  window.addEventListener("resize", updateWidth);
});

onMounted(async () => {
  isMounted.value = true;
  await nextTick();
  nuxtApp.$ScrollTrigger.refresh();

  const tabInfos = document.querySelectorAll(".info");

  if (windowWidth.value > 1180) {
    nuxtApp.$ScrollTrigger.create({
      trigger: "#aboutUsScroll",
      start: "top top",
      end: "+=2700",
      pin: true,
      once: true,
      onUpdate: (self) => {
        const progress = self.progress;

        aboutUsActiveIndex.value =
          progress === 0 ? -1 : Math.floor(progress * 5);

        useGSAP().to("#aboutUsLine", {
          scaleY: progress,
          duration: 0,
        });

        if (progress === 1) {
          self.disable();
          stopScrollAnimationMain.queueAnimationMainPage = true;
          nextTick(() => {
            nuxtApp.$ScrollTrigger.refresh();
          });
        }
      },
    });
  }
  if (windowWidth.value > 1200) {
    tabInfos.forEach((tab) => {
      nuxtApp.$ScrollTrigger.create({
        trigger: tab,
        start: "top 30%",
        end: "top 30%",
        once: true,
        onUpdate: () => {
          useGSAP().fromTo(
            tab,
            { scale: 1.2 },
            {
              scale: 1,
              duration: 1,
              ease: "power2.out",
            }
          );
        },
      });
    });
  }

  nuxtApp.$ScrollTrigger.create({
    trigger: "#trustGlobe",
    start: "top top",
    end: "+=3000",
    scrub: true,
    pin: true,
    onUpdate: (self) => {
      const progress = self.progress;

      trustGlobeActiveIndex.value =
        progress === 0 ? -1 : Math.floor(progress * 6);

      const circlesScaleFactor = 0.8 + Math.floor(progress * 6) * 0.4;
      const opacityValue =
        trustGlobeActiveIndex.value >= 3
          ? 0
          : progress > 0
          ? Math.floor(progress * 6) / 6 + 0.5
          : 0;
      useGSAP().to("#trustGlobeCircles", {
        scale: circlesScaleFactor,
        duration: 0.3,
        opacity: opacityValue,
      });

      if (trustGlobeActiveIndex.value >= 3) {
        useGSAP().to(".trust-globe__text", {
          scale: 0,
        });

        useGSAP().to("#trustGlobeEarth", {
          scale: 1,
          duration: 0.3,
          opacity: 1,
        });

        if (trustGlobeActiveIndex.value >= 4) {
          useGSAP().to("#trustGlobeEarthWithDots", {
            duration: 0.3,
            opacity: 1,
          });
        } else {
          useGSAP().to("#trustGlobeEarthWithDots", {
            duration: 0.3,
            opacity: 0,
          });
        }

        if (trustGlobeActiveIndex.value >= 5) {
          useGSAP().to(".marquee", {
            duration: 0.3,
            opacity: 1,
          });
        } else {
          useGSAP().to(".marquee", {
            duration: 0.3,
            opacity: 0,
          });
        }
      } else {
        useGSAP().to(".trust-globe__text", {
          scale: 1,
        });

        useGSAP().to("#trustGlobeEarth", {
          scale: 0,
          duration: 0.3,
          opacity: 0,
        });
      }

      if (progress === 1) {
        self.disable();

        nextTick(() => {
          nuxtApp.$ScrollTrigger.refresh();
        });
      }
    },
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateWidth);
});
</script>
<template>
  <MainLoader v-if="!notMainPageFirst.animationPlayed" />
  <main class="main">
    <div class="main__bg"></div>
    <div class="container">
      <Widget/>
      <section class="promo">
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
              <NuxtLink to="/drop-message"
                ><Button green>оставить заявку</Button></NuxtLink
              >
              <NuxtLink><Button white>подробнее</Button></NuxtLink>
            </div>
          </div>
          <div class="promo__banner">
            <img src="../assets/images/promo-banner.webp" alt="promo-banner" />
          </div>
          <div class="promo__btns mobile">
            <NuxtLink to="/drop-message"
              ><Button green>оставить заявку</Button></NuxtLink
            >
            <NuxtLink><Button white>подробнее</Button></NuxtLink>
          </div>
        </div>
      </section>

      <section
        :class="`info info-slider--${index}`"
        v-for="(item, index) in sliders"
        :key="index"
      >
        <div class="info__title-wrap">
          <h2 class="info__title">
            {{ item.title }}
          </h2>
        </div>
        <TabInfo :slides="item.slides" :pagination="item.pagination" />
      </section>

      <section class="about-us" id="aboutUsScroll">
        <div class="about-us__inner">
          <div class="about-us__info">
            <h2 class="about-us__title">Коротко о нас</h2>
            <p class="about-us__text">
              Открываем новые горизонты IT, снижаем риски для бизнеса, улучшаем
              качество жизни и безопасность людей с помощью разработанных нами
              навигационно-связных технологий и IT-инфраструктуры
            </p>
          </div>
          <div class="about-us__services">
            <div class="about-us__animation-wrap">
              <div class="about-us__line">
                <div id="aboutUsLine" class="about-us__line-indicator" />
                <div class="about-us__line-background" />
              </div>
              <div class="services-wrap">
                <div
                  v-for="(block, index) in serviceBlocks"
                  :key="block.id"
                  class="service-block"
                >
                  <div
                    class="about-us__service"
                    v-if="isMounted"
                    :style="{
                      opacity:
                        windowWidth < 768 || aboutUsActiveIndex >= index
                          ? 1
                          : 0.2,
                    }"
                  >
                    {{ block.text }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="number-company">
        <h2 class="number-company__title">Цифры компании</h2>
        <div class="number-company__list">
          <CompanyItem :number="19" text="лет в бизнесе" :decimals="0" />
          <CompanyItem
            :number="11"
            text="запатентованных технологий"
            :decimals="0"
          />
          <CompanyItem
            :number="1.5"
            titleText="М+"
            text="активных устройств"
            :decimals="1"
          />
          <CompanyItem
            :number="120"
            titleText="k"
            text="клиентов по всему миру"
            :decimals="0"
          />
        </div>
      </section>
    </div>
    <section class="trust__info" id="trustGlobe">
      <div class="trust__info-inner">
        <div class="trust__info-text trust-globe__layout-container">
          <div class="trust-globe__image-wrapper">
            <img
              id="trustGlobeCircles"
              class="trust-globe__image--circles"
              :src="Circles"
              alt="circles"
            />
            <img
              id="trustGlobeEarth"
              class="trust-globe__image--earth"
              :src="Globe"
              alt="globe"
            />
            <img
              id="trustGlobeEarthWithDots"
              class="trust-globe__image--earth-dots"
              :src="GlobeWithDots"
              alt="globe"
            />
          </div>
          <div class="marquee">
            <ul>
              <li
                v-for="country in [
                  'Китай',
                  'Россия',
                  'Белоруссия',
                  'Сингапур',
                  'Турция',
                ]"
                class="minus"
              >
                <span>{{ country }} /</span>
              </li>
            </ul>

            <ul aria-hidden="true">
              <li
                v-for="country in [
                  'Китай',
                  'Россия',
                  'Белоруссия',
                  'Сингапур',
                  'Турция',
                ]"
                class="minus"
              >
                <span>{{ country }} /</span>
              </li>
            </ul>
          </div>
          <div class="container">
            <div class="trust-globe__text trust-globe__text--full-width">
              <div
                v-for="(item, index) in trustInfoList"
                class="trust-globe__text-line"
              >
                <span
                  :style="{
                    clipPath:
                      trustGlobeActiveIndex >= index
                        ? 'inset(0 0% -20% 0)'
                        : 'inset(0 100% -20% 0)',
                  }"
                  class="text-reveal"
                >
                  {{ item }}
                </span>
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <section class="trust__info">
        <div class="trust__info-inner">
          <h3 class="trust__info-text">
            С нами вы получаете высокотехнологичное оборудование и уверенность в
            том, что ваши активы всегда будут доступны и защищены
          </h3>
          <NuxtLink to="/drop-message"
            ><Button green class="trust__info-btn"
              >оставить заявку</Button
            ></NuxtLink
          >
        </div>
      </section>
    </div>
  </main>
</template>

<style lang="scss">
.main {
  overflow: hidden;
}
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
}

.promo__inner {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border-radius: 80px;
}

.promo__content {
  display: flex;
  flex-direction: column;
  padding-left: 36px;
  padding-top: 40px;
}

.promo__banner {
  display: flex;
  align-items: center;
}

.promo__banner img {
  height: 460px;
  border-radius: 80px;
  object-fit: cover;
}

.promo__title {
  font-family: "VelaSans-Light";
  font-size: 50px;
  line-height: 120%;
  margin-bottom: 40px;
  font-weight: 300;
}

.promo__title span {
  display: block;
  font-family: "VelaSans-ExtraBold";
  font-size: 22px;
  line-height: 100%;
  font-weight: 800;
}

.promo__sub-title {
  font-family: "VelaSans-bold";
  font-size: 30px;
  line-height: 110.00000000000001%;
  max-width: 481px;
  margin-bottom: 18px;
}

.promo__text {
  font-family: "VelaSans-Medium";
  font-weight: 500;
  font-size: 17px;
  line-height: normal;
  margin-bottom: 80px;
  max-width: 516px;
}

.promo__btns {
  display: flex;
  gap: 0 10px;
  align-items: center;
}

.promo__btns.mobile {
  display: none;
}

.info {
  padding-top: 200px;
}

.info__title-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}

.info__title {
  font-family: "VelaSans-ExtraBold";
  font-size: 36px;
  font-weight: 800;
  line-height: 125%;
  color: #333343;
  margin-bottom: 50px;
  text-align: center;
  max-width: 983px;
}

.about-us {
  padding-top: 200px;
  color: #333343;
  width: 100%;
  &__animation-wrap {
    display: flex;
    position: relative;
  }
}

.about-us__inner {
  position: relative;
  display: flex;
  justify-content: space-between;
}

.about-us__title {
  font-family: "VelaSans-ExtraBold";
  font-weight: 800;
  font-size: 36px;
  line-height: 130%;
  margin-bottom: 32px;
}

.about-us__text {
  font-family: "VelaSans-Light";
  font-size: 25px;
  line-height: 125%;
  max-width: 588px;
  font-weight: 300;
}

.about-us__line {
  position: absolute;
  top: 0;
  left: auto;
  width: 2px;
  height: 100%;
  transform: translateX(-50px);
}

.about-us__line-indicator {
  width: 2px;
  background-color: #333343;
  height: 100%;
  transform-origin: top;
  transform: scaleY(0);
  position: absolute;
}

.about-us__line-background {
  width: 2px;
  background-color: #000;
  height: 100%;
  transform-origin: top;
  opacity: 0.2;
}

.about-us__services {
  display: flex;
  flex-direction: column;
  max-width: 540px;
}

.about-us .service-block {
  position: relative;
  padding-bottom: 30px;
}

.about-us .service-block:last-child {
  padding-bottom: 0;
}

.about-us__service {
  font-family: "VelaSans-ExtraBold";
  font-weight: 800;
  font-size: 24px;
  line-height: 120%;
  opacity: 0.2;
  transition: opacity 0.3s ease-in-out;
}

.number-company {
  padding-top: 200px;
  color: #333343;
}

.number-company__title {
  font-family: "VelaSans-Regular";
  font-weight: 400;
  font-size: 90px;
  line-height: normal;
}

.number-company__list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 50px;
}

.trust__info {
  padding-top: 100px;
}

.trust__info button {
  cursor: pointer;
  height: 70px;
  font-size: 22px;
}

.trust__info-btn {
  width: 320px;
}

.trust__info-inner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px 0;
}

.trust__info-text {
  font-family: "VelaSans-Medium";
  font-weight: 500;
  font-size: 26px;
  line-height: normal;
  color: #333343;
  max-width: 935px;
  text-align: center;
}

.trust-globe__layout-container {
  height: calc(100svh - 146px * 2);
  line-height: 1;
  position: relative;
  font-size: 6rem;
  text-align: start;
  max-width: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  gap: 10px;
}

.trust-globe__image-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.trust-globe__image--circles {
  position: absolute;
  opacity: 0;
  transform: scale(0);
}

.trust-globe__image--earth {
  position: absolute;
  opacity: 0;
  transform: scale(0);
}

.trust-globe__image--earth-dots {
  position: absolute;
  opacity: 0;
}

.trust-globe__text--full-width {
  width: 100%;
}

.trust-globe__text-line {
  color: rgba(0, 0, 0, 0.2);
  position: relative;
}

.trust-globe__text-line:nth-child(2) {
  text-align: center;
  .text-reveal {
    left: 24px;
  }
}
.trust-globe__text-line:nth-child(3) {
  text-align: right;
  .text-reveal {
    right: 0;
    left: unset;
  }
}

.text-reveal {
  clip-path: inset(0 100% -20% 0);
  position: absolute;
  color: #333343;
  transition: clip-path 0.5s ease-in-out;
  top: 0;
  left: 0;
  white-space: nowrap;
}

.marquee {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  width: 100%;
  font-size: 5rem;
  padding-block: 8px;
  overflow: hidden;
  user-select: none;
  --gap: 20px;
  display: flex;
  gap: var(--gap);
}

.marquee ul {
  list-style: none;
  flex-shrink: 0;
  min-width: 100%;
  display: flex;
  align-items: center;
  gap: var(--gap);
  transform: translateX(calc(-100% - var(--gap)));
  animation: scroll 20s linear infinite;
}

.marquee:hover ul {
  animation-play-state: paused;
}

@keyframes scroll {
  to {
    transform: translateX(calc(0% - var(--gap)));
  }
}

@media (min-width: 1350px) {
  .widget {
    right: calc((100vw - 1220px) / 2 + 3px);
  }
}

@media (min-width: 1000px) {
  .widget:hover img {
    animation: pulse 0.3s ease-in-out;
  }

  .icon-wrap:hover {
    background-color: #d9dae1;
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

@media (min-width: 1550px) {
  .main__bg {
    height: 846px;
  }

  .promo__banner img {
    height: unset;
  }

  .promo__content {
    padding-left: 60px;
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .promo__title {
    margin-bottom: 87px;
    font-size: 70px;
  }

  .promo__sub-title {
    font-size: 38px;
  }

  .promo__text {
    margin-bottom: 108px;
    font-size: 20px;
  }

  .about-us__text {
    font-size: 32px;
  }

  .about-us__services {
    max-width: 576px;
  }

  .about-us__service {
    font-size: 26px;
  }

  .about-us .service-block {
    padding-bottom: 74px;
  }

  .about-us .service-block:last-child {
    padding-bottom: 0;
  }

  .number-company__list {
    margin-top: 72px;
  }

  .trust__info {
    padding-top: 146px;
  }
  .marquee ul {
    min-width: 76%;
  }
  .trust-globe__text-line:nth-child(2) {
    .text-reveal {
      left: 90px;
    }
  }
}

@media (min-width: 1200px) {
  .info {
    scale: 1.2;
  }
}

@media (max-width: 1220px) {
  #trustGlobe {
    display: none;
  }
}

@media (max-width: 1180px) {
  .about-us__inner {
    flex-direction: column;
    justify-content: unset;
  }
  .about-us__services {
    display: flex;
  }
  .about-us__line {
    left: 50px;
  }
  .number-company {
    padding-top: 90px;
  }
}

@media (max-width: 1060px) {
  .about-us {
    padding-top: 90px;
  }

  .about-us__info {
    margin-bottom: 50px;
  }

  .about-us__line {
    display: none;
  }

  .about-us__line-indicator,
  .about-us__line-background {
    position: relative;
    width: 2px;
    display: inline-block;
  }

  .about-us__line-indicator {
    transform: scaleY(0);
    transform-origin: top;
  }
}

@media (max-width: 860px) {
  .number-company__list {
    grid-template-columns: 1fr;
    gap: 30px 0;
  }

  .number-company__item {
    border-radius: 32px;
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
  }

  .promo__btns.mobile {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    gap: 16px 0;
    width: 100%;
  }

  .promo__btns.mobile a {
    width: 100%;
  }

  .promo__btns.mobile a button {
    width: 100%;
  }

  .promo__inner {
    flex-direction: column;
    align-items: center;
    background: unset;
  }

  .promo__title {
    margin-bottom: 31px;
  }

  .promo__sub-title {
    margin-bottom: 10px;
  }

  .promo__text {
    margin-bottom: 29px;
  }

  .promo__content {
    padding-top: unset;
    padding-left: unset;
    text-align: center;
  }

  .promo__banner img {
    height: 341px;
  }

  .info {
    padding-top: 100px;
  }

  .info__title {
    font-size: 30px;
    margin-bottom: 30px;
  }

  .trust-globe__layout-container {
    height: auto;
    min-height: 60svh;
    font-size: 4rem;
  }
}

@media (max-width: 700px) {
  .info__title {
    font-size: 25px;
  }
}

@media (max-width: 480px) {
  .widget {
    width: 58px;
    height: 58px;
  }

  .widget img {
    width: 28px;
    height: 28px;
  }

  .info {
    padding-top: 90px;
  }

  .info__title {
    font-size: 16px;
  }

  .about-us__text {
    font-size: 18px;
  }

  .about-us__services {
    gap: 30px 0;
    max-width: 100%;
  }

  .about-us__service {
    font-size: 20px;
  }

  .number-company__title {
    font-size: 44px;
  }

  .number-company__list {
    margin-top: 30px;
  }

  .trust__info {
    padding-top: 50px;
  }

  .trust__info a {
    width: 100%;
  }

  .trust__info button {
    height: 54px;
    width: 100%;
    font-size: 16px;
  }

  .trust__info-text {
    font-size: 16px;
    line-height: 120%;
    max-width: 312px;
  }

  .trust__info-inner {
    gap: 40px 0;
  }

  .get-in-touch .title {
    margin-bottom: 20px;
  }

  .get-in-touch .contact-info p {
    font-size: 11px;
  }

  .promo {
    padding-bottom: unset;
  }

  .promo__content {
    width: 100%;
    text-align: left;
  }

  .promo__banner {
    width: 100%;
  }

  .promo__title span {
    font-size: 18px;
  }

  .promo__sub-title {
    font-size: 24px;
  }

  .promo__text {
    font-size: 16px;
  }

  .promo__banner img {
    border-radius: 32px;
    width: 100%;
  }

  .main__bg {
    border-bottom-right-radius: 32px;
    border-bottom-left-radius: 32px;
  }

  .trust-globe__layout-container {
    font-size: 2.5rem;
    min-height: 50svh;
    gap: 5px;
  }

  .marquee {
    font-size: 2.5rem;
  }
}

@media (max-width: 340px) {
  .trust__info {
    padding-top: 50px;
  }

  .trust__info-btn {
    width: 280px;
  }
}
</style>
