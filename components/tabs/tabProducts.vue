<script setup>
import { ref, defineProps } from "vue";

defineProps({
  slides: Array,
  pagination: Array,
});

const activeTab = ref(0);
</script>
<template>
  <div class="tabProducts">
    <TabPagination :pagination="pagination" v-model:activeTab="activeTab" />
    <div
      class="tabProducts__content"
      v-for="(content, index) in slides"
      :key="content"
      :style="{ backgroundImage: `url(${content.img})` }"
      :class="{ 'tabProducts__content--active': index === activeTab }"
    >
      <div
        class="tabProducts__content-inner"
        :class="{ specifications: content.specifications }"
      >
        <h2 class="tabProducts__content-title">
          {{ content.title }}
          <span>{{ content.subtitle }}</span>
        </h2>
        <ul
          class="tabProducts__content-list"
          v-if="Array.isArray(content.text)"
        >
          <li
            class="list__item"
            :class="`list__item--${index + 1}`"
            v-for="(item, index) in content.text"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
        <p
          v-if="!Array.isArray(content.text)"
          class="tabProducts__content-text"
        >
          {{ content.text }}
        </p>

        <div class="tabProducts__content-table" v-if="content.specifications">
          <div
            class="tabProducts__content-table-inner"
            v-for="(prop, key) in content.specifications?.property"
            :key="key"
          >
            <p class="table-property">{{ prop }}</p>
            <p class="table-value">{{ content.specifications.value[key] }}</p>
          </div>
        </div>
        <div class="tabProducts__content-links">
          <NuxtLink class="tabProducts__content-link">
            <Button transparent>руководство пользователя</Button>
          </NuxtLink>
          <NuxtLink class="tabProducts__content-link">
            <Button transparent>нотификация</Button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.tabProducts {
  height: 560px;
  border-radius: 80px;
  position: relative;
  overflow: hidden;
  &__content {
    position: absolute;
    height: 560px;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: end;
    color: #fff;
    visibility: hidden;
    opacity: 0;
    transform: scale(1.1);
    &--active {
      visibility: visible;
      opacity: 1;
      transform: scale(1);
      transition: transform 0.8s, opacity 1s;
    }
    &-inner {
      padding-left: 56px;
    }
    .specifications {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      padding-left: unset;
    }
    &-title {
      font-family: "VelaSans-bold";
      font-size: 35px;
      margin-bottom: 25px;
      line-height: normal;
      span {
        display: block;
      }
    }
    &-list {
      padding-bottom: 60px;
      max-width: 599px;
      width: 100%;
    }
    &-text {
      padding-bottom: 34px;
      font-family: "VelaSans-Medium";
      font-size: 20px;
      line-height: normal;
      max-width: 922px;
    }
    &-table {
      display: flex;
      flex-direction: column;
      max-width: 770px;
      width: 100%;
      padding-top: 130px;
      gap: 5px 0;
      &-inner {
        display: flex;
        justify-content: space-between;
        padding-bottom: 16px;
        padding-right: 10px;
        padding-left: 10px;
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
      line-height: normal;
      margin-bottom: 21px;
      &:last-child {
        margin-bottom: unset;
      }
    }
    .list__item--2 {
      max-width: 517px;
      width: 100%;
    }
    .list__item::marker {
      font-size: 10px;
    }
    &-links {
      display: none;
    }
  }
}

.technical-parameters .tabProducts .tabProducts__content,
.products__hero .tabProducts .tabProducts__content {
  background-image: none !important;
  background-color: #333343;
}

@media (min-width: 1550px) {
  .tabProducts {
    &__content {
      height: 725px;
      &-title {
        font-size: 50px;
        margin-bottom: 48px;
      }
      &-list {
        padding-bottom: 118px;
      }
      &-text {
        font-size: 26px;
      }
      .list__item {
        font-size: 26px;
      }
      &-table {
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
  .tabProducts {
    &__content {
      border-radius: 32px;
    }
  }
}

@media (max-width: 480px) {
  .products__hero .tabProducts {
    &__content {
      &-title {
        font-size: 26px;
      }
    }
  }
  .theft-protection .tabProducts {
    &__content {
      &-title {
        font-size: 26px;
        line-height: 100%;
      }
    }
  }
  .technical-parameters .tabProducts {
    &__content {
      height: unset;
      &-text {
        font-size: 16px;
      }
      &-links {
        margin-top: 39px;
        display: flex;
        flex-direction: column;
        gap: 16px 0;
        align-items: center;
        padding-bottom: 36px;
      }
      &-link {
        button {
          width: 285px;
          height: 44px;
        }
      }
      &-inner {
        flex-direction: column;
      }
      &-table {
        padding-top: 74px;
        &-inner {
          padding-bottom: 19px;
        }
      }
    }
  }
  .tabProducts {
    &__content {
      &-text {
        font-size: 16px;
        line-height: 120%;
      }
      .list__item {
        font-size: 16px;
        line-height: 120%;
      }
      &-table-inner {
        .table-property {
          font-size: 11px;
        }
        .table-value {
          font-size: 13px;
        }
      }
      &-list {
        padding-bottom: 36px;
      }
    }
  }
  .products__hero .tabProducts {
    &__content {
      &-inner {
        padding-left: 30px;
      }
    }
  }
  .theft-protection .tabProducts {
    &__content {
      &-inner {
        padding-left: 22px;
      }
    }
  }
}
</style>
