<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import SliderBg from "@/assets/images/blurred_red.webp";
import GrayArrow from "@/assets/images/gray-arrow.svg";
import WhiteArrow from "@/assets/images/white-arrow.svg";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const windowWidth = ref(0);

const updateWidth = () => {
  if (process.client) {
    windowWidth.value = window.innerWidth;
  }
};

const paginationText1 = ["Invis Duos 3D L", "Invis Duos S"];
const paginationText2 = ["автомобили", "грузы"];
const sliderContent1 = [
  {
    img: SliderBg,
    title: "X-KEEPER",
    subtitle: "Invis DUOS 3D L",
    text: [
      "Без подключения к бортовой сети",
      "Автономная работа не менее трёх лет с учётом типовых требований лизинговых компаний",
      "Самое низкое потребление в классе (0,6 mkA)",
      "Степень защиты IP65",
    ],
  },
  {
    img: SliderBg,
    title: "X-KEEPER",
    subtitle: "Invis DUOS S",
    text: [
      "Без подключения к бортовой сети",
      "Автономная работа не менее трёх лет с учётом типовых требований лизинговых компаний",
      "Самое низкое потребление в классе (0,6 mkA)",
      "Степень защиты IP652",
    ],
  },
];
const sliderContent2 = [
  {
    img: SliderBg,
    title: "Снижение угроз и рисков",
    text: "Инвестируйте в надёжное управление вашими активами и снизьте риски до минимума. Мы готовы предложить индивидуальные решения, адаптированные под ваши потребности и специфику бизнеса",
  },
  {
    img: SliderBg,
    title: "Снижение угроз и рисков2",
    text: "Инвестируйте в надёжное управление вашими активами и снизьте риски до минимума. Мы готовы предложить индивидуальные решения, адаптированные под ваши потребности и специфику бизнеса",
  },
];
const sliderContent3 = [
  {
    img: SliderBg,
    specifications: {
      property: {
        location: "Определение местоположения",
        dataTransfer: "Передача данных",
        simCards: "Sim-карт в устройстве",
        dataInterval: "Интервал передачи данных",
        dimensions: "Габариты",
        weight: "Вес",
        temperatureRange: "Температурный режим",
        dataStorage: "Хранение данных на сервере",
        installationType: "Тип установки",
        powerElements: "Элементы питания",
      },
      value: {
        location: "ГЛОНАСС / GPS / LBS",
        dataTransfer: "GSM / GPRS / SMS",
        simCards: "2",
        dataInterval: "1 раз/10 мин. -1 раз/неделя",
        dimensions: "70х50х20 мм",
        weight: "110 г",
        temperatureRange: "от -40 С° до +85 С°",
        dataStorage: "Без ограничений",
        installationType: "Скрытый",
        powerElements: "CR123A 1550мA (2 шт)",
      },
    },
  },
  {
    img: SliderBg,
    specifications: {
      property: {
        location: "Определение местоположения2",
        dataTransfer: "Передача данных2",
        simCards: "Sim-карт в устройстве",
        dataInterval: "Интервал передачи данных",
        dimensions: "Габариты",
        weight: "Вес",
        temperatureRange: "Температурный режим",
        dataStorage: "Хранение данных на сервере",
        installationType: "Тип установки",
        powerElements: "Элементы питания",
      },
      value: {
        location: "ГЛОНАСС / GPS / LBS",
        dataTransfer: "GSM / GPRS / SMS",
        simCards: "2",
        dataInterval: "1 раз/10 мин. -1 раз/неделя",
        dimensions: "70х50х20 мм",
        weight: "110 г",
        temperatureRange: "от -40 С° до +85 С°",
        dataStorage: "Без ограничений",
        installationType: "Скрытый",
        powerElements: "CR123A 1550мA (2 шт)",
      },
    },
  },
];
const productAdvantagesList = [
  "Зона охвата весь мир",
  "Гарантии качества и надёжности",
  "Самое длительное время автономной работы среди аналогичных устройств",
  "Поддержка двух SIM-карт и более (повышение устойчивости работы системы к перебоям сети связи)",
  "от –40 до +85: устойчивость к перепадам температуры",
];
const principleList = [
  {
    number: "01.",
    text: "Основное время Invis DUOS находится в состоянии «Сна». В этом режиме Invis DUOS не расходует энергию батарей и не излучает никаких сигналов, что делает его максимально скрытным",
  },
  {
    number: "02.",
    text: "В интервальном режиме Invis DUOS «просыпается» и извещает Владельца о местоположении, а также передает всю информацию о состоянии устройства: заряде батарей, скорости движения, направлении движения, температуре и т.д",
  },
  {
    number: "03.",
    text: "Интервал извещений владелец определяет самостоятельно.Увеличить интервал можно до семи суток, а в экстренных случаях, уменьшить до одной минуты",
  },
];

const productsAdvantagesActiveIndex = ref(-1);

onBeforeMount(() => {
  useGSAP().registerPlugin(ScrollTrigger);
  updateWidth();
  window.addEventListener("resize", updateWidth);
});

onMounted(async () => {
  await nextTick(() => {
    if (process.client) {
      ScrollTrigger.refresh();
    }
  });
  if (windowWidth.value > 1180) {
    ScrollTrigger.create({
      trigger: "#productsAdvantagesScroll",
      start: "top +=50",
      end: "+=2700",
      pin: true,
      once: true,
      onUpdate: (self) => {
        const progress = self.progress;

        productsAdvantagesActiveIndex.value =
          progress === 0 ? -1 : Math.floor(progress * 5);

        useGSAP().to("#productsAdvantagesLine", {
          scaleY: progress,
          duration: 0,
        });

        if (progress === 1) {
          self.disable();
          nextTick(() => {
            ScrollTrigger.refresh();
          });
        }
      },
    });
  }
});

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  window.removeEventListener("resize", updateWidth);
});
</script>

<template>
  <div class="container">
    <section class="products__hero">
      <h2 class="products__hero-title">Маяки X-Keeper</h2>
      <TabProducts
        class="products__hero-slider"
        :pagination="paginationText1"
        :slides="sliderContent1"
      />
    </section>
    <section class="products__advantages" id="productsAdvantagesScroll">
      <div class="products__advantages-inner">
        <h3 class="products__advantages-title">Преимущества</h3>
        <div class="products__advantages-content">
          <div class="products__advantages-animation">
            <div class="products__advantages-line">
              <div
                id="productsAdvantagesLine"
                class="products__advantages-line-indicator"
              />
              <div class="products__advantages-line-background" />
            </div>
            <ul class="products__advantages-list">
              <li
                class="products__advantages-list__item"
                v-for="(item, index) in productAdvantagesList"
                :key="index"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="theft-protection">
      <h2 class="theft-protection__title">Защита от угона</h2>
      <TabProducts :pagination="paginationText2" :slides="sliderContent2" />
    </section>

    <section class="geo-location">
      <div class="geo-location__inner">
        <h3 class="geo-location__title">Где и как посмотреть местоположение</h3>
        <p class="geo-location__text">
          Пользователь может посмотреть информацию о местоположении и состоянии
          объекта, а также изменить настройки в «Личном кабинете» с любого
          компьютера или мобильного устройства с доступом в интернет
        </p>
      </div>
    </section>

    <section class="profile">
      <div class="profile__bg">
        <NuxtLink
          ><Button green class="btn--profile"
            ><span>демо личного кабинета</span>
          </Button></NuxtLink
        >
      </div>
    </section>

    <section class="working-principle">
      <div class="working-principle__inner">
        <h3 class="working-principle__title">Принцип работы устройства</h3>
        <ul class="working-principle__list">
          <li
            class="working-principle__item"
            v-for="(item, index) in principleList"
            :key="index"
          >
            <span>{{ item.number }}</span
            >{{ item.text }}
          </li>
        </ul>
      </div>
    </section>

    <section class="technical-parameters">
      <h3 class="technical-parameters__title">Технические параметры</h3>
      <TabProducts :pagination="paginationText1" :slides="sliderContent3" />
    </section>

    <section class="documentation">
      <h2 class="documentation__title">Документация</h2>
      <div class="documentation__links">
        <NuxtLink class="documentation__link"
          ><button class="documentation__link-btn--white">
            <p>Руководство пользователя</p>
            <img :src="GrayArrow" alt="gray-arrow" /></button
        ></NuxtLink>
        <NuxtLink class="documentation__link"
          ><button class="documentation__link-btn--black">
            <p>Нотификация X-Keeper</p>
            <img :src="WhiteArrow" alt="white-arrow" /></button
        ></NuxtLink>
      </div>
      <div class="documentation__request">
        <NuxtLink to="/drop-message"><Button green>оставить заявку</Button></NuxtLink>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.products__hero {
  padding-top: 150px;
  &-title {
    text-align: center;
    font-family: "VelaSans-Regular";
    font-weight: 400;
    font-size: 70px;
    line-height: 80%;
    color: #333343;
    margin-bottom: 50px;
  }
}

.products__advantages {
  padding-top: 100px;
  color: #333343;
  &-inner {
    display: flex;
    justify-content: space-between;
  }
  &-title {
    font-family: "VelaSans-ExtraBold";
    font-size: 36px;
    line-height: 125%;
  }
  &-content {
    max-width: 600px;
    height: 100%;
  }
  &-text {
    font-family: "VelaSans-Medium";
    font-size: 26px;
    line-height: normal;
    margin-bottom: 50px;
    font-weight: 500;
  }
  &-list__item {
    font-family: "VelaSans-ExtraBold";
    font-size: 24px;
    line-height: 164%;
    list-style-type: disc;
  }
  &-list__item::marker {
    font-size: 11px;
  }
  &-line {
    position: absolute;
    top: 0;
    left: auto;
    width: 2px;
    height: 100%;
    transform: translateX(-50px);
  }

  &-line-indicator {
    width: 2px;
    background-color: #333343;
    height: 100%;
    transform-origin: top;
    transform: scaleY(0);
    position: absolute;
  }

  &-line-background {
    width: 2px;
    background-color: #000;
    height: 100%;
    transform-origin: top;
    opacity: 0.2;
  }
  &-animation {
    display: flex;
    position: relative;
  }
}

.theft-protection {
  padding-top: 100px;
  &__title {
    font-family: "VelaSans-bold";
    font-size: 35px;
    line-height: 100%;
    color: #333343;
    text-align: center;
    margin-bottom: 40px;
  }
}

.geo-location {
  padding-top: 120px;
  &__inner {
    display: flex;
    justify-content: space-between;
    color: #333343;
  }
  &__title {
    font-family: "VelaSans-ExtraBold";
    font-size: 36px;
    line-height: 125%;
    max-width: 417px;
  }
  &__text {
    max-width: 615px;
    font-family: "VelaSans-Medium";
    font-weight: 500;
    font-size: 26px;
    line-height: normal;
  }
}

.profile {
  padding-top: 117px;
  &__bg {
    height: 500px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("../assets/images/desk-with-computer.png");
    .btn--profile {
      width: 320px;
      height: 70px;
      color: #333343;
      text-align: center;
      font-size: 22px;
      font-weight: 700;
      line-height: normal;
    }
  }
}

.working-principle {
  padding-top: 120px;
  color: #333343;
  &__inner {
    display: flex;
    justify-content: space-between;
  }
  &__title {
    font-family: "VelaSans-ExtraBold";
    font-weight: 800;
    font-size: 36px;
    line-height: 125%;
  }
  &__list {
    max-width: 585px;
  }
  &__item {
    font-family: "VelaSans-Regular";
    font-size: 26px;
    line-height: 140%;
    margin-bottom: 60px;
    span {
      font-family: "VelaSans-ExtraBold";
      font-weight: 800;
      font-size: 36px;
      line-height: 125%;
      margin-right: 10px;
    }
  }
}

.technical-parameters {
  padding-top: 100px;
  &__title {
    text-align: center;
    font-family: "VelaSans-bold";
    font-weight: 700;
    font-size: 50px;
    margin-bottom: 45px;
  }
}

.documentation {
  padding-top: 120px;
  &__title {
    text-align: center;
    font-family: "VelaSans-SemiBold";
    font-weight: 600;
    font-size: 50px;
    line-height: 130%;
    color: #333343;
    margin-bottom: 64px;
  }
  &__links {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
  }
  &__link {
    width: 50%;
    &-btn--white,
    &-btn--black {
      width: 100%;
      height: 195px;
      justify-content: space-between;
      display: flex;
      align-items: center;
      border-radius: 80px;
      p {
        padding-left: 54px;
        font-family: "VelaSans-Regular";
        font-size: 40px;
        font-weight: 400;
        line-height: 130%;
        text-align: left;
      }
    }
    &-btn--white {
      background: transparent;
      border: 1px solid #33334366;
      p {
        color: #333343;
      }
    }
    &-btn--black {
      background-color: #333343;
      border: none;
      p {
        color: #fff;
        max-width: 300px;
      }
    }
  }
  &__request {
    text-align: center;
    button {
      width: 320px;
      height: 70px;
      text-align: center;
      font-size: 22px;
      font-weight: 700;
      line-height: normal;
    }
  }
}

@media (min-width: 1550px) {
  .products__hero {
    padding-top: 220px;
    &-title {
      font-size: 110px;
      margin-bottom: 91px;
    }
    &-text {
      margin-bottom: 85px;
      font-size: 26px;
    }
    .list__item {
      font-size: 26px;
    }
  }
  .products__advantages {
    &-content {
      max-width: 669px;
    }
    &-list__item {
      font-size: 26px;
    }
  }
  .theft-protection {
    padding-top: 150px;
  }
  .geo-location {
    padding-top: 211px;
    &__title {
      font-size: 36px;
    }
  }
  .profile {
    &__bg {
      height: 755px;
    }
  }
  .working-principle {
    padding-top: 199px;
    &__item {
      margin-bottom: 147px;
    }
  }
  .documentation {
    &__links {
      margin-bottom: 94px;
    }
  }
}

@media (min-width: 1024px) {
  .profile__bg {
    background-image: url("../assets/images/desk-with-computer-desctop-version.png");
  }
}

@media (max-width: 880px) {
  .documentation {
    padding-top: 50px;
    &__links {
      flex-direction: column;
      gap: 20px 0;
    }
    &__link {
      width: 100%;
    }
    &__title {
      margin-bottom: 30px;
    }
  }
}

@media (max-width: 800px) {
  .products__advantages {
    padding-top: 90px;
    &-title {
      margin-bottom: 24px;
      font-size: 24px;
    }
    &-inner {
      flex-direction: column;
    }
    &-text {
      margin-bottom: 40px;
      font-size: 18px;
    }
    &-list {
      &__item {
        list-style: none;
        font-size: 18px;
        position: relative;
        padding-left: 16px;
        &::before {
          font-size: 10px;
          content: "•";
          position: absolute;
          left: 0;
          top: 0;
          color: #333343;
        }
      }
    }
    .line {
      display: none;
    }
  }
  .geo-location,
  .working-principle {
    padding-top: 90px;
    &__inner {
      flex-direction: column;
    }
    &__title {
      margin-bottom: 24px;
      font-size: 24px;
    }
    &__text {
      font-size: 18px;
      line-height: 125%;
    }
  }
  .profile {
    padding-top: 40px;
  }
  .technical-parameters {
    padding-top: 90px;
  }
  .theft-protection {
    padding-top: 90px;
  }
  .working-principle__item {
    span {
      display: block;
    }
  }
}

@media (max-width: 565px) {
  .products__hero {
    padding-top: 90px;
    &-title {
      margin-bottom: 30px;
      font-size: 40px;
    }
  }
  .profile {
    &__bg {
      border-radius: 32px;
    }
  }
  .technical-parameters {
    &__title {
      font-size: 24px;
      margin-bottom: 30px;
    }
  }
}

@media (max-width: 480px) {
  .profile__bg {
    background-size: contain;
    height: 533px;
  }
  .profile__bg .btn--profile {
    width: 214px;
    font-size: 14px;
    font-weight: 500;
    height: 41px;
    line-height: 89%;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      width: 126px;
    }
  }
  .working-principle__item {
    font-size: 18px;
    line-height: 125%;
    margin-bottom: 26px;
    span {
      font-size: 30px;
    }
  }
  .documentation {
    &__title,
    &__links {
      display: none;
    }
    &__request {
      button {
        height: 54px;
        font-size: 16px;
        font-weight: 600;
        line-height: 89%;
      }
    }
  }
}

@media (max-width: 460px) {
  .documentation__title {
    font-size: 30px;
  }
  .documentation__link-btn--white,
  .documentation__link-btn--black {
    height: 100px;
  }
  .documentation__link-btn--white p,
  .documentation__link-btn--black p {
    font-size: 25px;
  }
  .documentation__links {
    margin-bottom: 30px;
  }
}

@media (max-width: 350px) {
  .products__hero {
    &-title {
      font-size: 20px;
    }
  }
  .products__advantages {
    &-text {
      font-size: 16px;
    }
    &-list {
      &__item {
        font-size: 16px;
      }
    }
  }
  .geo-location,
  .working-principle {
    &__title {
      font-size: 22px;
    }
    &__text,
    &__item {
      font-size: 20px;
    }
  }
  .working-principle {
    &__item {
      margin-bottom: 30px;
    }
  }
  .profile {
    &__bg {
      .btn--profile {
        width: 210px;
        height: 40px;
      }
    }
  }
  .technical-parameters {
    padding-top: 20px;
  }
  .documentation__request button {
    width: 280px;
  }
}
</style>
