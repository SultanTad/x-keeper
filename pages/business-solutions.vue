<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";
</script>

<template>
  <div class="container">
    <section class="hero">
      <div class="hero__inner">
        <img class="hero__logo" src="../assets/images/lising-main.png" alt="lising-main" />
        <h2 class="hero__title">IT решения для лизинга</h2>
        <h3 class="hero__text">
          С нами вы получаете высокотехнологичное оборудование и уверенность в том, что ваши активы всегда будут доступны и защищены
        </h3>
      </div>
    </section>
    <section class="solutions__banner">
      <div class="solutions__banner-img">
        <p class="solutions__banner-text">Устройства для мониторинга, аутсорсинг лизинговых операций, инструменты аналитики</p>
      </div>
    </section>

    <section class="history__milestone">
      <div class="history__milestone-inner">
        <h3 class="history__milestone-text">
          В 2016 году мы запустили цифровую систему аутсорсинга для лизинга, что позволило нашим клиентам вынести процесс выдачи автомобилей
          за пределы своих операций
        </h3>
      </div>
    </section>

    <section class="achievements">
      <div class="achievements__inner">
        <h3 class="achievements__title">X-Keeper в лизинге</h3>
        <div class="achievements__list">
          <div class="achievements__item">
            <p class="item__title">12 лет</p>
            <p class="item__text">сотрудничества</p>
          </div>
          <div class="achievements__item">
            <p class="item__title">63</p>
            <p class="item__text">контракта</p>
          </div>
          <div class="achievements__item">
            <p class="item__title">513k</p>
            <p class="item__text">закрытых поручений</p>
          </div>
          <div class="achievements__item">
            <p class="item__title">1.5M+</p>
            <p class="item__text">активных устройств</p>
          </div>
        </div>
      </div>
    </section>

    <section class="solutions__turnkey">
      <div class="solutions__turnkey-inner">
        <h2 class="solutions__turnkey-title">Реализация проекта аутсорсинга под ключ</h2>
        <p class="solutions__turnkey-subtitle">
          От анализа до поддержки, берем на себя выполнение бизнес-процессов, чтобы вы могли фокусироваться на развитии бизнеса
        </p>
      </div>
      <SolutionSlider />
    </section>

    <section class="banner">
      <img src="../assets/images/Frame 810424157.png" alt="" />
    </section>

    <section class="connection__advantages">
      <div class="container">
        <h2 class="connection__advantages-title">Преимущества подключения</h2>
        <h3 class="connection__advantages-subtitle">
          Оптимизация времени и затрат, профессиональная команда, адаптивность решений, защита данных и круглосуточная поддержка
        </h3>
        <VerticalSlider />
        <MobileAdvantagesSlider />
      </div>
    </section>

    <section class="services">
      <div class="services__inner">
        <h2 class="services__title">Сервис X-Keeper</h2>
        <h3 class="services__subtitle">
          На протяжении всего срока договора обеспечиваем бесперебойную эксплуатацию имущества, защиту от рисков и удобное управление
          имуществом
        </h3>
      </div>
      <div class="services__list">
        <div class="list__item-wrap">
          <div class="list__item">
            <img src="../assets/images/monitor.png" alt="service-img" />
            <p class="list__item-text">Техническая поддержка</p>
          </div>
        </div>
        <div class="list__item-wrap">
          <div class="list__item">
            <img src="../assets/images/monitor.png" alt="service-img" />
            <p class="list__item-text">Ремонт и обслуживание</p>
          </div>
        </div>
        <div class="list__item-wrap">
          <div class="list__item">
            <img src="../assets/images/monitor.png" alt="service-img" />
            <p class="list__item-text">Поддержка в вопросах безопасности</p>
          </div>
        </div>
        <div class="list__item-wrap">
          <div class="list__item">
            <img src="../assets/images/monitor.png" alt="service-img" />
            <p class="list__item-text">Поддержка в вопросах безопасности</p>
          </div>
        </div>
      </div>
      <MobileServicesSlider />
      <div class="services__link-btn">
        <NuxtLink><Button green>оставить заявку</Button></NuxtLink>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.hero {
  padding-top: 150px;
  &__inner {
    color: #333343;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__logo {
    margin-bottom: 12px;
  }
  &__title {
    font-family: "VelaSans-Regular";
    font-weight: 400;
    font-size: 70px;
    line-height: normal;
    margin-bottom: 20px;
    text-align: center;
  }
  &__text {
    text-align: center;
    font-family: "VelaSans-Medium";
    font-weight: 500;
    font-size: 26px;
    line-height: normal;
    max-width: 737px;
  }
}

.solutions__banner {
  padding-top: 100px;
  &-img {
    background: url(../assets/images/sol-ban.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 550px;
    border-radius: 80px;
    display: flex;
    align-items: end;
    padding-bottom: 40px;
    padding-left: 57px;
  }
  &-text {
    font-family: "VelaSans-SemiBold";
    font-weight: 600;
    font-size: 35px;
    line-height: normal;
    color: #fff;
  }
}

.history__milestone {
  &-inner {
    height: 640px;
    max-width: 1145px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-text {
    font-family: "VelaSans-bold";
    font-size: 50px;
    line-height: 122%;
    color: #333343;
    text-align: center;
  }
}

.achievements {
  &__inner {
    display: flex;
    justify-content: space-between;
    color: #333343;
  }
  &__title {
    font-family: "VelaSans-bold";
    font-weight: 700;
    font-size: 50px;
    line-height: 100%;
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 550px;
    width: 100%;
    .item__title {
      font-family: "VelaSans-Light";
      font-weight: 300;
      font-size: 65px;
      line-height: 95%;
      margin-bottom: 10px;
    }
    .item__text {
      font-family: "VelaSans-Medium";
      font-weight: 500;
      font-size: 17px;
      line-height: normal;
      padding-bottom: 20px;
    }
  }
  &__item {
    border-bottom: 1px solid rgba(51, 51, 67, 0.4);
  }
}

.solutions__turnkey {
  padding-top: 150px;
  color: #333343;
  &-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 80px;
  }
  &-title {
    font-family: "VelaSans-bold";
    font-weight: 700;
    font-size: 55px;
    text-align: center;
    max-width: 700px;
    margin-bottom: 40px;
  }
  &-subtitle {
    font-family: "VelaSans-Medium";
    font-weight: 500;
    font-size: 20px;
    line-height: 100%;
    max-width: 650px;
  }
}

.banner {
  padding-top: 150px;
  img {
    height: 500px;
    width: 100%;
    object-fit: cover;
    border-radius: 80px;
  }
}

.connection__advantages {
  padding-top: 120px;
  color: #333343;
  &-title {
    font-family: "VelaSans-bold";
    font-size: 80px;
    text-align: center;
    margin-bottom: 48px;
  }
  &-subtitle {
    font-family: "VelaSans-Medium";
    font-weight: 500;
    font-size: 26px;
    line-height: normal;
    text-align: center;
    margin-bottom: 80px;
  }
}

.services {
  padding-top: 120px;
  color: #333343;
  &__inner {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  &__title {
    font-family: "VelaSans-bold";
    font-size: 55px;
    margin-bottom: 35px;
  }
  &__subtitle {
    font-family: "VelaSans-Medium";
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    max-width: 670px;
    line-height: normal;
    margin-bottom: 50px;
  }
  &__list {
    display: flex;
    gap: 0 20px;
    align-items: center;
    .list__item {
      background-color: #ebecf3;
      border-radius: 80px;
      height: 446px;
      width: 318px;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      padding: 30px 40px 50px 20px;
      img {
        width: 170px;
        height: 179px;
        margin-bottom: 30px;
      }
      &-text {
        font-family: "VelaSans-ExtraBold";
        font-size: 26px;
        line-height: 120%;
      }
    }
  }
  &__link-btn {
    padding-top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      width: 320px;
    }
  }
}

@media (min-width: 1200px) {
  .hero {
    padding-top: 206px;
    &__title {
      font-size: 90px;
    }
  }
  .solutions__banner {
    padding-top: 155px;
    &-img {
      height: 684px;
    }
    &-text {
      font-size: 50px;
    }
  }
  .achievements {
    &__list {
      gap: 46px;
      max-width: 656px;
      .item__title {
        font-size: 140px;
        margin-bottom: 16px;
      }
      .item__text {
        font-size: 26px;
        padding-bottom: 45px;
      }
    }
  }
  .solutions__turnkey {
    padding-top: 200px;
    &-inner {
      margin-bottom: 130px;
    }
    &-title {
      font-size: 80px;
      max-width: 886px;
    }
    &-subtitle {
      font-size: 26px;
      max-width: 852px;
    }
  }
  .banner {
    padding-top: 229px;
    img {
      height: 100%;
    }
  }
  .connection__advantages {
    padding-top: 216px;

    &-subtitle {
      margin-bottom: 130px;
    }
  }
  .services {
    padding-top: 180px;
    &__title {
      font-family: "VelaSans-bold";
      font-size: 80px;
      margin-bottom: 47px;
    }
    &__subtitle {
      font-size: 26px;
      max-width: 948px;
      margin-bottom: 92px;
    }
    &__link-btn {
      padding-top: 140px;
    }
  }
}
@media (max-width: 1070px) {
  .services__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px 0;
    .list__item-wrap {
      display: flex;
      justify-content: center;
    }
  }
}
@media (max-width: 800px) {
  .banner {
    padding-top: 90px;
  }
  .connection__advantages {
    padding-top: 50px;
    &-title {
      font-size: 50px;
    }
    &-subtitle {
      margin-bottom: 40px;
      font-size: 20px;
    }
  }
  .services {
    padding-top: 90px;
  }
  .hero {
    padding-top: 80px;
  }
}
@media (max-width: 700px) {
  .achievements {
    padding-top: 136px;
  }
  .solutions__turnkey {
    padding-top: 90px;
    &-title {
      font-size: 30px;
      margin-bottom: 20px;
      text-align: left;
    }
    &-subtitle {
      text-align: left;
    }
    &-inner {
      margin-bottom: 40px;
    }
  }
  .banner {
    img {
      border-radius: 32px;
    }
  }
  .services {
    &__list {
      grid-template-columns: 1fr;
      .list__item {
        height: 370px;
        width: 250px;
        img {
          width: 70px;
          height: 79px;
        }
      }
    }
    &__title {
      text-align: center;
    }
  }
}
@media (max-width: 600px) {
  .hero {
    &__logo {
      width: 133px;
      height: 138px;
      margin-bottom: 23px;
    }
    &__title {
      font-size: 38px;
      line-height: 110%;
      margin-bottom: 32px;
    }
    &__text {
      font-size: 18px;
      line-height: 125%;
    }
  }
  .solutions {
    &__banner {
      padding-top: 38px;
      &-img {
        border-radius: 32px;
        padding-left: 20px;
      }
      &-text {
        font-size: 22px;
        line-height: 120%;
      }
    }
  }
  .history__milestone {
    padding-top: 164px;
    &-inner {
      height: unset;
    }
    &-text {
      font-size: 28px;
    }
  }
  .achievements {
    &__title {
      margin-bottom: 45px;
    }
    &__inner {
      flex-direction: column;
    }
  }
}
@media (max-width: 480px) {
  .achievements {
    &__title {
      font-size: 24px;
    }
    &__item {
      .item__title {
        font-size: 100px;
      }
    }
    &__list {
      .item__text {
        font-size: 22px;
      }
    }
  }

  .connection__advantages {
    &-title {
      font-size: 24px;
      margin-bottom: 30px;
      line-height: 110%;
      text-align: left;
    }
    &-subtitle {
      font-size: 18px;
      line-height: 125%;
      text-align: left;
    }
  }
  .services {
    &__inner {
      align-items: start;
    }
    &__title {
      font-size: 24px;
      margin-bottom: 30px;
    }
    &__subtitle {
      font-size: 18px;
      line-height: 125%;
      text-align: left;
      margin-bottom: 30px;
    }
    &__list {
      display: none;
    }
    &__link-btn {
      padding-top: 90px;
      a {
        width: 100%;
        button {
          width: 100%;
        }
      }
    }
  }
  .solutions__turnkey {
    &-title {
      font-size: 24px;
      line-height: 110.00000000000001%;
    }
    &-subtitle {
      font-size: 18px;
      line-height: 125%;
    }
  }
  .banner {
    img {
      height: 372px;
    }
  }
}
@media (max-width: 400px) {
  .history__milestone-text {
    font-size: 22px;
  }
}
@media (max-width: 350px) {
  .hero {
    &__title {
      font-size: 25px;
    }
    &__text {
      font-size: 16px;
    }
  }
  .solutions__banner-text {
    font-size: 20px;
  }
  .solutions__turnkey {
    &-title {
      font-size: 20px;
    }
    &-subtitle {
      font-size: 15px;
    }
  }
}
</style>
