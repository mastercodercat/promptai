<template>
  <select
    class="bg-[#0000000f] px-2 py-1 rounded-xl text-sm"
    :value="value"
    @change="select"
  >
    <option v-if="title" disabled>{{ title }}</option>
    <option v-for="(item, key) of items" :key="key" :value="item.key">
      {{ item.value }}
    </option>
  </select>
</template>

<script>
export default {
  name: "CommonSelect",
  props: {
    value: {
      type: Number,
      default: () => 0,
    },
    title: {
      type: String,
      default: () => "",
    },
    items: {
      type: Array,
      default: () => [],
    },
    select: {
      type: Function,
      default: () => {},
    },
  },
};
</script>
