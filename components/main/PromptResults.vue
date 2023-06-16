<template>
  <div>
    <div v-if="running" class="flex justify-center">
      <client-only>
        <Vue3Lottie
          animation-link="https://assets6.lottiefiles.com/packages/lf20_fxiiHu.json"
          :height="100"
          :width="200"
        />
      </client-only>
    </div>
    <div
      v-for="(item, key) of results"
      :key="key"
      class="flex flex-col gap-sm mt-10"
    >
      <p
        :class="$colorMode.preference === 'dark' ? 'text-white' : 'text-black'"
      >
        Completion
      </p>
      <div
        :class="
          'border rounded-8px border-grey-border p-24px ' +
          ($colorMode.preference === 'dark' ? 'text-white' : 'text-black')
        "
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    results: {
      type: Array,
      default: () => [],
    },
    running: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>
