<template>
  <button
    class="btn"
    :class="{
      'btn--green': green,
      'btn--white': white,
      'btn--transparent': transparent,
      'btn--grey': grey,
      'btn--grey-filled': greyFilled,
    }"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  white: Boolean,
  green: Boolean,
  transparent: Boolean,
  grey: Boolean,
  greyFilled: Boolean,
});
</script>

<style lang="scss">
.btn {
  color: #333343;
  font-family: "VelaSans-SemiBold";
  font-weight: 600;
  font-size: 16px;
  line-height: 89%;
  letter-spacing: normal;
  border-radius: 132px;
  padding: 8px 21px;
  height: 48px;
  cursor: pointer;
  &--white {
    background: #fff;
    border: 1px solid rgba(51, 51, 67, 0.4);
    width: 170px;
  }
  &--green {
    background: #35ec6f;
    border: 1px solid #fff;
  }
  &--transparent {
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
  }
  &--grey {
    background: transparent;
    border: 1px solid #333343;
    color: #333343;
    opacity: 0.4;
  }
  &--grey-filled {
    background: #ebecf3;
    color: #333343;
    border: none;
  }
}
@media (min-width: 1000px) {
  .btn {
    &--white,
    &--grey-filled {
      &:hover {
        background: #d9dae1;
      }
    }
    &--green {
      &:hover {
        background: #1bf761;
      }
    }
  }
}
</style>
