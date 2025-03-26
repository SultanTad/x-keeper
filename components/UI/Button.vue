<template>
    <button class="btn" :class="{'btn--green': green, 'btn--white': white, 'btn--transparent': transparent}">
        <slot></slot>
    </button>
</template>

<script setup>
defineProps({
    white: Boolean,
    green: Boolean,
    transparent: Boolean
})
</script>

<style lang="scss">
.btn {
    color: #333343;
    font-family: "VelaSans-SemiBold";
    font-size: 16px;
    line-height: 89%;
    letter-spacing: normal;
    border-radius: 132px;
    padding: 8px 21px;
    width: 170px;
    height: 48px;
    &--white {
        background: #fff;
        border: 1px solid #33334366;
    }
    &--green {
        background: #35EC6F;
        border: 1px solid #fff;
    }
    &--transparent {
        background: transparent;
        border: 1px solid #fff;
        color: #fff;
    }
}
</style>