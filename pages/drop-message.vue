<script setup>
import { ref, onMounted } from "vue";
const activeIndexes = ref([]);
const servicesList = [
  "лизинг",
  "автопрокат и такси",
  "для интеграторов",
  "автопрокат и такси",
  "для интеграторов",
  "лизинг",
];

// Состояния для каждого инпута
const name = ref("");
const phone = ref("");
const email = ref("");

// Состояние для активации валидации
const shouldValidate = ref(false);

// Проверки для каждого инпута
const isNameInvalid = computed(() => {
  if (!shouldValidate.value) return false;
  return name.value.trim() === ""; // Проверка на пустое имя
});

const isPhoneInvalid = computed(() => {
  if (!shouldValidate.value) return false;
  if (phone.value === "") return true; // Пустое поле
  const cleanValue = String(phone.value).replace(/\D/g, ""); // Убираем все не-цифры
  return cleanValue.length !== 11; // Номер должен быть 11 цифр (включая код страны)
});

const isEmailInvalid = computed(() => {
  if (!shouldValidate.value) return false;
  if (email.value === "") return true; // Пустое поле
  // Простая проверка email (наличие @ и домена)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !emailPattern.test(email.value);
});

// Обработчик кнопки "Отправить"
const handleSubmit = () => {
  shouldValidate.value = true;
};

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
    <div class="mini-container">
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
          <Input
            :type="'text'"
            :placeholder="'Имя'"
            v-model="name"
            :isInvalid="isNameInvalid"
            :shouldValidate="shouldValidate"
          />
          <Input
            :type="'tel'"
            :placeholder="'Телефон'"
            v-model="phone"
            :isInvalid="isPhoneInvalid"
            :shouldValidate="shouldValidate"
          />
          <Input
            :type="'email'"
            :placeholder="'Email'"
            v-model="email"
            :isInvalid="isEmailInvalid"
            :shouldValidate="shouldValidate"
          />
        </form>
      </div>
      <div class="drop-message__link">
        <Button grey @click="handleSubmit">отправить</Button>
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
    line-height: normal;
  }
  &__subtitle {
    font-family: "VelaSans-Medium";
    font-weight: 500;
    font-size: 26px;
    line-height: normal;
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

@media (min-width: 1200px) {
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
    padding-top: 80px;
    &__title {
      font-size: 30px;
    }
    &__subtitle {
      font-size: 20px;
    }
    &__services-title {
      font-size: 24px;
      line-height: 110%;
    }
  }
}
@media (max-width: 480px) {
  .drop-message {
    &__title {
      font-size: 38px;
      line-height: 110%;
      text-align: left;
    }
    &__subtitle {
      font-size: 18px;
      line-height: 125%;
      text-align: left;
    }
    &__services {
      padding-bottom: 90px;
      padding-top: 60px;
      &-list {
        flex-direction: column;
        flex-wrap: unset;
      }
    }
    &__link {
      margin-top: 98px;
      button {
        font-size: 16px;
        height: 54px;
      }
    }
  }
}
</style>
