<template>
  <div>
    <div
      v-for="(item, key) of results"
      :key="key"
      class="flex flex-col gap-sm mt-10"
    >
      <p>Completion</p>
      <div class="border rounded-8px border-grey-border p-24px text-black">
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
  },
};
</script>
