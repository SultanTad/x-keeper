<script setup>
const { type, placeholder, shouldValidate, isInvalid } = defineProps({
  type: String,
  placeholder: String,
  shouldValidate: Boolean,
  isInvalid: Boolean,
});
const inputValue = defineModel({ type: String, required: true });

const isFocused = ref(false);

const isLabelShrunk = computed(() => {
  return isFocused.value || inputValue.value.length > 0;
});
</script>

<template>
  <div class="input-wrapper">
    <input
      :type="type"
      class="input"
      v-model="inputValue"
      :class="{ invalid: isInvalid }"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
    <label
      :title="placeholder"
      :class="{ filled: isLabelShrunk}"
    ></label>
  </div>
</template>

<style lang="scss">
.input-wrapper {
  position: relative;
}

input[type="number"] {
  -moz-appearance: textfield;
}

.input {
  border-top: unset;
  border-right: unset;
  border-left: unset;
  border-bottom: 1px solid #33334366;
  font-size: 26px;
  font-family: "VelaSans-SemiBold";
  font-weight: 600;
  line-height: normal;
  width: 100%;
  padding: 10px 0;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid #333343;
  }

  &:focus + label::before {
    line-height: 20px;
    font-size: 20px;
    top: -10px;
    background: #fff;
    left: 0;
  }
  &.invalid {
    border-bottom: 1px solid #ff0000;
  }
}

label::before {
  content: attr(title);
  position: absolute;
  top: 10px;
  left: 0;
  font-size: 24px;
  color: #777;
  transition: 300ms all;
  font-family: "VelaSans-Medium";
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

label.filled::before {
  line-height: 20px;
  font-size: 20px;
  top: -10px;
  background: #fff;
  left: 0;
}
</style>
