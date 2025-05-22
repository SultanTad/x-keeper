<script setup>
import { defineProps } from "vue";
defineProps({
  pagination: Array,
});

const activeTab = defineModel("activeTab", { type: Number });

const tabPaginationRef = ref(null);
const hoverIndex = ref(null);

const setActiveTab = (index) => {
  activeTab.value = index;
  hoverIndex.value = null;
};

const handleMouseOver = (index) => {
  hoverIndex.value = index;
  const pagination = tabPaginationRef.value;
  if (index > activeTab.value) {
    pagination.style.setProperty("--scaleX", `${1.08}`);
    pagination.style.setProperty("--transform-origin", "left");
  }
  if (index < activeTab.value) {
    pagination.style.setProperty("--scaleX", `${1.08}`);
    pagination.style.setProperty("--transform-origin", "right");
  }
};

const handleMouseLeave = () => {
  hoverIndex.value = null;
  const pagination = tabPaginationRef.value;
  pagination.style.setProperty("--scaleX", `${1}`);
  pagination.style.setProperty("--transform-origin", "center");
};

function updateBackgroundPosition() {
  const pagination = tabPaginationRef.value;
  const bullets = pagination.querySelectorAll(".tab__bullet");

  const activeBulletWidth = bullets[activeTab.value].offsetWidth;
  pagination.style.setProperty("--bullet-width", `${activeBulletWidth}px`);

  let translateX = 0;
  for (let i = 0; i < activeTab.value; i++) {
    translateX += bullets[i].offsetWidth + 5;
  }
  translateX += 5;

  pagination.style.setProperty("--translate-x", `${translateX}px`);
}

watch(activeTab, async (newTab) => {
  await nextTick();
  const pagination = tabPaginationRef.value;
  const bullets = pagination.querySelectorAll(".tab__bullet");

  const activeBulletWidth = bullets[newTab].offsetWidth;
  pagination.style.setProperty("--bullet-width", `${activeBulletWidth}px`);

  let translateX = 0;
  for (let i = 0; i < newTab; i++) {
    translateX += bullets[i].offsetWidth;
  }
  translateX += 5;
  pagination.style.setProperty("--translate-x", `${translateX}px`);
});

onMounted(async () => {
  await nextTick();
  updateBackgroundPosition();
});
</script>
<template>
  <div class="tab__pagination" ref="tabPaginationRef">
    <div
      class="tab__bullet"
      v-for="(bullet, index) in pagination"
      :key="index"
      :class="{ 'tab__bullet--active': index === activeTab }"
      @click="setActiveTab(index)"
      @mouseover="handleMouseOver(index)"
      @mouseleave="handleMouseLeave"
    >
      {{ bullet }}
    </div>
  </div>
</template>

<style lang="scss">
.tab__pagination {
  width: max-content;
  height: 54px;
  border-radius: 86px;
  background-color: rgba(255, 255, 255, 0.42);
  border: 1px solid rgba(255, 255, 255, 0.32);
  display: flex;
  align-items: center;
  padding: 5px;
  top: 65px;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 100;
  &::before {
    content: "";
    position: absolute;
    background-color: #35ec6f;
    border-radius: 55px;
    height: calc(100% - 10px);
    width: var(--bullet-width, 0);
    top: 5px;
    left: 0;
    transform: translateX(var(--translate-x, 0)) scaleX(var(--scaleX, 1));
    transition: transform 1s ease, width 1s ease, transform-origin 1s ease;
    transform-origin: var(--transform-origin, center);
    z-index: 0;
  }
}

.tab__bullet {
  border-radius: 55px;
  font-family: "VelaSans-SemiBold";
  font-weight: 600;
  font-size: 20px;
  line-height: 89%;
  color: #fff;
  cursor: pointer;
  padding: 12px 26px;
  position: relative;
  transition: all 1s;

  &--active {
    color: #333343;
  }
}

@media (max-width: 800px) {
  .tabProducts {
    .tab__bullet {
      padding: 10px 16px;
      font-size: 15px;
    }
  }
}

@media (max-width: 565px) {
  .tabProducts {
    .tab-bullet {
      font-size: 12px;
    }
  }
  .tabProducts {
    .tab__pagination {
      height: 40px;
    }
  }
}

@media (max-width: 480px) {
  .tabProducts {
    .tab__pagination {
      top: 38px;
    }
    .tab-bullet {
      padding: 10px 9px;
    }
  }
  .tab {
    &__pagination {
      &::before {
        content: none;
        display: none;
      }
    }
    &__bullet {
      transition: background-color 0.2s;
      &--active {
        background-color: #35ec6f;
        border-radius: 55px;
        transition: background-color 0.2s;
      }
    }
  }
}
</style>
