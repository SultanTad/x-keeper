<script setup>
import { ref } from "vue";
const activeIndexes = ref([]);
const servicesList = [
  "лизинг",
  "автопрокат и такси",
  "для интеграторов",
  "автопрокат и такси",
  "для интеграторов",
  "лизинг",
];

const setActive = (index) => {
  if (activeIndexes.value.includes(index)) {
    // Если элемент уже выбран, удаляем его из массива
    activeIndexes.value = activeIndexes.value.filter((i) => i !== index);
  } else {
    // Если элемент не выбран, добавляем его в массив
    activeIndexes.value.push(index);
  }
};
const isActive = (index) => {
  return activeIndexes.value.includes(index);
};
</script>
<template>
  <section class="drop-message">
    <div class="container">
      <h2 class="drop-message__title">Оставить заявку</h2>
      <h3 class="drop-message__subtitle">
        Заполните заявку или позвоните нам: <span>+7 (495) 989-22-83</span>
      </h3>
      <div class="drop-message__services">
        <h3 class="drop-message__services-title">
          Выберите необходимые услуги
        </h3>
        <ul class="drop-message__services-list">
          <li
            class="drop-message__services-item"
            v-for="(item, index) in servicesList"
            :key="index"
            @click="setActive(index)"
          >
            <Button greyFilled :class="{ activeBg: isActive(index) }">{{
              item
            }}</Button>
          </li>
        </ul>
      </div>
      <div class="drop-message__contacts">
        <h3 class="drop-message__contacts-title">Контактные данные</h3>
        <form class="drop-message__contacts-form">
          <Input :type="'text'" :placeholder="'Имя'" />
          <Input :type="'number'" :placeholder="'Телефон'" />
          <Input :type="'email'" :placeholder="'Email'" />
        </form>
      </div>
      <div class="drop-message__link">
        <Button grey>отправить</Button>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.drop-message {
  padding-top: 115px;
  color: #333343;
  &__title {
    text-align: center;
    font-family: "VelaSans-Regular";
    font-weight: 400;
    font-size: 70px;
    line-height: 100%;
  }
  &__subtitle {
    font-family: "VelaSans-Medium";
    font-weight: 500;
    font-size: 26px;
    line-height: 100%;
    text-align: center;
    margin-top: 16px;
    span {
      font-family: "VelaSans-bold";
      font-weight: 700;
    }
  }
  &__services {
    padding: 70px 0;
    &-title {
      font-family: "VelaSans-ExtraBold";
      font-weight: 800;
      font-size: 26px;
      line-height: 120%;
      margin-bottom: 30px;
    }
    &-list {
      display: flex;
      flex-wrap: wrap;
      max-width: 700px;
      gap: 10px;
    }
  }
  .activeBg {
    background: #35ec6f;
  }
  &__contacts {
    &-title {
      font-family: "VelaSans-ExtraBold";
      font-weight: 800;
      font-size: 26px;
      line-height: 120%;
      margin-bottom: 30px;
    }
    &-form {
      display: flex;
      flex-direction: column;
      gap: 20px 0;
    }
  }
  &__link {
    display: flex;
    justify-content: center;
    margin-top: 70px;
    button {
      width: 320px;
      height: 70px;
      font-size: 22px;
      font-family: "VelaSans-bold";
      font-weight: 700;
    }
  }
}

@media (min-width: 1500px) {
  .drop-message {
    &__title {
      font-size: 90px;
    }
    &__services {
      padding: 118px 0;
      &-title {
        margin-bottom: 50px;
      }
    }
    &__contacts {
      &-title {
        margin-bottom: 50px;
      }
      &-form {
        gap: 42px 0;
      }
    }
    &__link {
      margin-top: 102px;
    }
  }
}
@media (max-width: 800px) {
  .drop-message__subtitle span {
    display: block;
  }
}
@media (max-width: 600px) {
  .drop-message {
    &__title {
      font-size: 30px;
    }
    &__subtitle {
      font-size: 20px;
    }
    &__services-title {
      font-size: 18px;
    }
  }
}
</style>
