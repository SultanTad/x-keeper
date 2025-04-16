<template>
  <section class="contacts">
    <div class="container">
      <h2 class="contacts__title">Контакты</h2>
      <h3 class="contacts__subtitle">
        Eдиный справочный номер: <span>8 (800) 222-22-83</span>
      </h3>
      <div class="contacts__inner">
        <div class="contacts__info">
          <h4 class="contacts__info-title">Центральный офис</h4>
          <p class="contacts__info-text">
            143405, Россия, Московская область, г. Красногорск, Ильинское шоссе,
            1а
          </p>
          <p class="contacts__info-text">
            +7(495) 989-22-83  (Многоканальный) support@x-keeper.ru 
            (Техническая поддержка) info@x-keeper.ru
          </p>
          <p class="contacts__info-text">
            Понедельник - пятница, с 10.00 до 18.00
            <span>Суббота, воскресенье - выходные</span>
          </p>
        </div>
        <div class="contacts__requisites">
          <h4 class="contacts__requisites-title">Реквизиты</h4>
          <p class="contacts__requisites-text">
            <span
              >Сокращенное наименование: ООО "Икс-кипер"(правообладатель)</span
            >
            <span>Фирменное (полное официальное) наименование: </span>
            <span>Общество с ограниченной ответственностью «Икс-кипер»</span>
            <span>ИНН/КПП: 7728880184/772801001</span>
            <span>ОГРН: 114774610219 от 30.05.2014</span>
          </p>
          <p class="contacts__requisites-text">
            <span>Сокращенное наименование: ООО"Икс-про"(производитель)</span>
            <span>Фирменное (полное официальное) наименование:</span>
            <span>Общество с ограниченной ответственностью «Икс-про»</span>
            <span>ИНН/КПП: 5024180471/502401001</span>
            <span>ОГРН: 1175024030653</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.contacts {
  padding-top: 115px;
  &__title {
    font-size: 90px;
    font-family: "VelaSans-Regular";
    font-weight: 400;
    line-height: 110%;
    margin-bottom: 40px;
    text-align: center;
    color: #333343;
  }
  &__subtitle {
    font-size: 26px;
    font-family: "VelaSans-Medium";
    font-weight: 500;
    line-height: 100%;
    text-align: center;
    color: #333343;
    span {
      font-family: "VelaSans-bold";
    }
  }
  &__inner {
    padding-top: 120px;
    display: flex;
    gap: 0 27px;
  }
  &__info,
  &__requisites {
    &-title {
      font-family: "VelaSans-ExtraBold";
      font-size: 26px;
      line-height: 120%;
      margin-bottom: 40px;
    }
    &-text {
      font-size: 20px;
      font-family: "VelaSans-Medium";
      line-height: normal;
      margin-bottom: 40px;
    }
  }
  &__info {
    max-width: 472px;
  }
  &__requisites {
    max-width: 688px;
    &-text {
      span {
        display: block;
        &:first-child {
          font-family: "VelaSans-ExtraBold";
        }
      }
    }
  }
}
@media (max-width: 800px) {
  .contacts {
    padding-top: 80px;
    &__inner {
      flex-direction: column;
      padding-top: 90px;
    }
    &__title,
    &__subtitle {
      text-align: left;
    }
  }
}
@media (max-width: 630px) {
  .contacts {
    &__subtitle {
      line-height: 125%;
      span {
        display: block;
      }
    }
  }
}
@media (max-width: 480px) {
  .contacts {
    &__title {
      font-size: 38px;
      margin-bottom: 24px;
    }
    &__subtitle {
      line-height: 125%;
      span {
        display: block;
      }
    }
    &__info,
    &__requisites {
      &-title {
        font-size: 24px;
        color: #333343;
        line-height: 110%;
        margin-bottom: 24px;
      }
      &-text {
        font-size: 18px;
        line-height: 145%;
        &:last-child {
          margin-bottom: unset;
        }
      }
    }
    &__info {
      margin-bottom: 100px;
    }
  }
}
</style>
