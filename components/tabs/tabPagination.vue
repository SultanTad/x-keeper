<script setup>
defineProps({
  pagination: Array,
  activeTab: Number,
});
defineEmits(["set-tab", "mouse-over-tab", "mouse-leave-tab"]);
</script>
<template>
  <div class="tabInfo__pagination">
    <div
      class="tabInfo__bullet"
      v-for="(bullet, index) in pagination"
      :key="index"
      :class="{ 'tabInfo__bullet--active': index === activeTab }"
      @click="$emit('set-tab', index)"
      @mouseover="$emit('mouse-over-tab', index)"
      @mouseleave="$emit('mouse-leave-tab')"
    >
      {{ bullet }}
    </div>
  </div>
</template>

<style lang="scss">
.tabInfo__pagination {
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

.tabInfo__bullet {
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
</style>
