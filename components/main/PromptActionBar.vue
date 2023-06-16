<template>
  <div class="flex flex-rows p-16px gap-sm justify-between bg-white">
    <div class="flex flex-rows">
      <div class="flex flex-rows gap-sm items-center">
        <p class="text-sm">Family:</p>
        <CommonSelect
          title="OpenAI"
          :value="selectedGroup"
          :items="group_items"
          :select="onGroupSelect"
        />
      </div>
      <div class="flex flex-rows pl-10 items-center gap-sm">
        <p class="text-sm">Model:</p>
        <CommonSelect
          :value="selectedModel"
          :items="model_items"
          :select="onModelSelect"
        />
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
      <CommonButton :click="onRun">RUN</CommonButton>
      <CommonButton :outline="true">Save</CommonButton>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    promptInput: {
      type: String,
      default: () => "",
    },
    onNewResult: {
      type: Function,
      default: () => {},
    },
  },
  setup() {
    const { data: modelGroups } = useFetch("/api/model_groups");
    const { data: models } = useFetch("/api/models");

    return {
      models,
      modelGroups,
    };
  },
  data() {
    return {
      selectedGroup: 1,
      selectedModel: 1,
    };
  },
  computed: {
    group_items() {
      return (this.modelGroups ? this.modelGroups : []).map((item) => ({
        key: item.id,
        value: item.name,
      }));
    },
    model_items() {
      return (this.models ? this.models : [])
        .filter((model) => model.groupId === this.selectedGroup)
        .map((item) => ({ key: item.id, value: item.name }));
    },
  },
  methods: {
    onGroupSelect(ev) {
      this.selectedGroup = parseInt(ev.target.value);
    },
    onModelSelect(ev) {
      this.selectedModel = parseInt(ev.target.value);
    },
    async onRun() {
      const { data: result } = await useFetch("/api/run", {
        method: "POST",
        body: {
          model: this.models[this.selectedModel].name,
          content: this.promptInput,
        },
      });
      if (result) {
        this.onNewResult(result.value);
      }
    },
  },
};
</script>
