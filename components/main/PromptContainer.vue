<template>
  <div class="border border-grey-border w-full rounded-prompt overflow-hidden">
    <MainPromptEditor
      :prompt-content="promptContent"
      :content-changed="contentChanged"
    />
    <div class="flex flex-row bg-grey-bright">
      <MainPromptInputs
        :prompt-inputs="promptInputs"
        :prompt-values="promptValues"
        :on-prompt-value-changed="onValueChanged"
      />
      <MainPromptPreview :prompt-inputs="promptPreview" />
    </div>
    <MainPromptActionBar />
  </div>
</template>

<script>
import { splitTokenFromContent } from "~/utils/utils";

const initialContent = `Given the following fruit, output the closest color hex value that matches the color of that fruit.

Fruit:
{{ fruit }}

Color hex string:
`;

export default {
  data() {
    return {
      promptContent: initialContent,
      promptValues: {},
    };
  },
  computed: {
    promptInputs() {
      return splitTokenFromContent(this.promptContent).filter(
        (item) => item.type === 2
      );
    },
    promptPreview() {
      return splitTokenFromContent(this.promptContent).map((item) => {
        if (item.type === 2) {
          item.value = this.promptValues[item.content];
        }
        return item;
      });
    },
  },
  methods: {
    contentChanged(text) {
      this.promptContent = text;
    },
    onValueChanged(key, value) {
      this.promptValues[key] = value;
    },
  },
};
</script>
