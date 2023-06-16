<template>
  <button
    :class="
      'uppercase text-center px-16px py-6px shadow-btn text-btn-size rounded-btn-radius ' +
      (!outline
        ? 'bg-btn-color text-btn-text'
        : 'border-btn-color border text-btn-color') +
      (loading ? 'bg-grey-text' : '')
    "
    :disabled="loading"
    @click="click"
  >
    <slot v-if="!loading"></slot>
    <CommonLoading v-else />
  </button>
</template>

<script>
export default {
  name: "CommonButton",
  props: {
    outline: {
      type: Boolean,
      default: () => false,
    },
    click: {
      type: Function,
      default: () => {},
    },
    loading: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>
