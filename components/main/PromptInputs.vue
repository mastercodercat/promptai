<template>
  <div class="p-24px flex flex-1 flex-col gap-sm">
    <!-- <div class="text-xs text-grey-text">Inputs</div> -->
    <div
      v-for="(item, key) of promptInputs"
      :key="key"
      class="flex flex-col gap-sm items-baseline"
    >
      <div
        class="rounded-prompt text-sm px-3 py-1 text-white"
        :style="'background-color: ' + item.color"
      >
        {{ item.content }}
      </div>
      <input
        class="w-full p-16px rounded-xl bg-white"
        :value="promptValues[item.content] ? promptValues[item.content] : ''"
        @input="onEdit($event, item.content)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    promptInputs: {
      type: Array,
      default: () => [],
    },
    promptValues: {
      type: Object,
      default: () => {},
    },
    onPromptValueChanged: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    onEdit(ev, key) {
      this.onPromptValueChanged(key, ev.target.value);
    },
  },
};
</script>
