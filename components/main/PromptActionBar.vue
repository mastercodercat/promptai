<template>
  <div class="flex flex-rows p-16px gap-sm justify-between">
    <div class="flex flex-rows">
      <div class="flex flex-rows gap-sm items-center">
        <p class="text-sm">Family:</p>
        <CommonSelect
          title="OpenAI"
          :value="selectedModel"
          :items="group_items"
          :select="onGroupSelect"
        />
      </div>
      <div class="flex flex-rows pl-10 items-center gap-sm">
        <p class="text-sm">Model:</p>
        <CommonSelect :value="model_items[0].key" :items="model_items" />
      </div>
    </div>
    <div class="flex flex-rows gap-sm items-center">
      <div>
        <span
          class="border border-grey-border rounded-lg p-1 text-xs text-grey-text"
          >Ctrl</span
        >
        <span class="text-xs text-grey-text px-1">+</span>
        <span
          class="border border-grey-border rounded-lg p-1 text-xs text-grey-text"
          >Enter</span
        >
      </div>
      <CommonButton>RUN</CommonButton>
      <CommonButton :outline="true">Save</CommonButton>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model_groups: [
        { id: 1, name: "GPT-3" },
        { id: 3, name: "Codex" },
      ],
      models: [
        { id: 1, name: "text-davinci-003", groupId: 1 },
        { id: 2, name: "text-curie-001", groupId: 1 },
        { id: 3, name: "text-babbage-001", groupId: 1 },
        { id: 4, name: "text-ada-001", groupId: 1 },
        { id: 5, name: "code-davinci-002", groupId: 3 },
        { id: 6, name: "code-cushman-001\t", groupId: 3 },
      ],
      selectedModel: 1,
    };
  },
  computed: {
    group_items() {
      return this.model_groups.map((item) => ({
        key: item.id,
        value: item.name,
      }));
    },
    model_items() {
      return this.models
        .filter((model) => model.groupId === this.selectedModel)
        .map((item) => ({ key: item.id, value: item.name }));
    },
  },
  methods: {
    onGroupSelect(ev) {
      this.selectedModel = parseInt(ev.target.value);
    },
  },
};
</script>