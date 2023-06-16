<template>
  <button
    :class="
      'uppercase text-center px-16px py-6px shadow-btn text-btn-size rounded-btn-radius ' +
      (!outline
        ? 'bg-btn-color text-btn-text'
        : 'border-btn-color border text-btn-color')
    "
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "CommonButton",
  props: {
    outline: Boolean,
  },
};
</script>
