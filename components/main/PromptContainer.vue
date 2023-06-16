<template>
  <div>
    <div
      class="border border-grey-border w-full rounded-prompt overflow-hidden"
    >
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
      <MainPromptActionBar
        :prompt-input="promptInput"
        :on-new-result="onNewResult"
      />
    </div>
    <MainPromptResults :results="results" />
  </div>
</template>

<script>
import { splitTokenFromContent } from "~/utils/utils";

const initialContent = `Given the following fruit, output the closest color hex value that matches the color of that fruit.

Fruit:
{{ fruit }}

Color hex string:
`;

const initialValue = { fruit: "Banana" };

export default {
  data() {
    return {
      promptContent: initialContent,
      promptValues: initialValue,
      results: [],
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
    promptInput() {
      return splitTokenFromContent(this.promptContent)
        .map((item) => {
          if (item.type === 2) {
            item.value = this.promptValues[item.content];
          }
          return item;
        })
        .reduce((pv, cv) => {
          return pv + (cv.value ? cv.value : cv.content);
        }, "");
    },
  },
  methods: {
    contentChanged(text) {
      this.promptContent = text;
    },
    onValueChanged(key, value) {
      this.promptValues[key] = value;
    },
    onNewResult(result) {
      this.results = [result, ...this.results];
    },
  },
};
</script>
