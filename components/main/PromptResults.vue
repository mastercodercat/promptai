<template>
  <div
    class="pt-24px pl-24px pb-24px absolute top-0 bottom-0 left-1/2 w-1/2 flex flex-col border-l-[1px]"
  >
    <div class="text-grey-text text-xs mb-1">Results</div>
    <div class="overflow-y-scroll pr-16px">
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
        class="flex flex-col gap-sm mt-2"
      >
        <p
          :class="
            $colorMode.preference === 'dark' ? 'text-white' : 'text-black'
          "
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
