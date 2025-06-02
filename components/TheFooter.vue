<template>
  <div class="big-container">
    <footer class="footer">
      <div class="container">
        <div class="footer__inner">
          <img
            class="footer__logo"
            src="../assets/images/white-logo.svg"
            alt="footer-logo"
          />
          <div class="footer__content-wrapper">
            <div class="footer__info">
              <div class="footer__info-box">
                <NuxtLink class="info__text" to="/products">Продукция</NuxtLink>
                <NuxtLink class="info__text" to="/business-solutions"
                  >Решения для бизнеса</NuxtLink
                >
                <NuxtLink class="info__text" to="contacts">Контакты</NuxtLink>
              </div>
              <div class="footer__info-mobile-box">
                <NuxtLink class="info__text" to="/products">Продукция</NuxtLink>
                <NuxtLink class="info__text" to="/business-solutions"
                  >Решения для бизнеса</NuxtLink
                >
                <NuxtLink class="info__text" to="/contacts">Контакты</NuxtLink>
              </div>
              <div class="footer__info-number">
                <a href="tel:88002222283">8 800 222-22-83</a>
              </div>
            </div>
            <div class="footer__actions">
              <div class="footer__actions-box">
                <NuxtLink><Button transparent>личный кабинет</Button></NuxtLink>
                <NuxtLink to="/drop-message"
                  ><Button transparent>оставить заявку</Button></NuxtLink
                >
              </div>
              <div class="footer__actions-copyright">© 2006-2025 X-Keeper</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
.footer {
  background-color: #333343;
  color: #fff;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  margin-top: 200px;
  &__logo {
    width: 74px;
    height: 51px;
  }
  &__inner {
    height: 380px;
    padding: 40px 0;
    display: flex;
    justify-content: space-between;
  }
  &__content-wrapper {
    display: flex;
    gap: 0 100px;
  }
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: "VelaSans-Regular";
    font-weight: 400;
    font-size: 16px;
    line-height: 110.00000000000001%;
    &-box {
      display: flex;
      flex-direction: column;
      gap: 10px 0;
    }
    .info__text {
      margin-bottom: 15px;
    }
    &-mobile-box {
      display: none;
    }
    &-number {
      opacity: 0.5;
    }
  }
  &__actions {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &-box {
      display: flex;
      flex-direction: column;
      gap: 18px 0;
    }
    &-copyright {
      font-family: "VelaSans-Regular";
      font-weight: 400;
      font-size: 16px;
      line-height: 110.00000000000001%;
      opacity: 0.5;
    }
  }
}

@media (min-width: 1500px) {
  .footer {
    margin-top: 262px;
  }
}

@media (max-width: 580px) {
  .footer {
    border-top-right-radius: 32px;
    border-top-left-radius: 32px;
    border-bottom-left-radius: unset;
    border-bottom-right-radius: unset;
    margin-top: 80px;
    &__logo {
      margin-bottom: 72px;
    }
    &__inner {
      flex-direction: column;
    }
    &__content-wrapper {
      height: 100%;
    }
  }
}

@media (max-width: 480px) {
  .footer {
    &__content-wrapper {
      height: 100%;
      gap: 0 30px;
    }
    &__info {
      font-size: 12px;
      &-box {
        display: none;
      }
      &-mobile-box {
        display: flex;
        flex-direction: column;
        font-size: 15px;
        line-height: 120%;
      }
    }
    &__actions {
      justify-content: end;
      &-box {
        display: none;
      }
      &-copyright {
        font-size: 11px;
      }
    }
    &__logo {
      width: 48px;
      height: 33px;
    }
  }
}
</style>
