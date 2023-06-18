<template>
  <div>
    <div
      class="border border-grey-border w-full rounded-prompt overflow-hidden"
    >
      <div class="flex flex-row relative">
        <div class="flex flex-col w-1/2">
          <MainPromptEditor
            :prompt-content="promptContent"
            :tokens="tokens"
            :content-changed="contentChanged"
          />
          <div class="flex flex-col bg-grey-bright">
            <div class="flex flex-row gap-sm ml-2">
              <a
                href="#"
                :class="
                  'text-xs p-16px' +
                  (cur_tab === 1
                    ? ' text-black border-b-[1px] border-black'
                    : ' text-grey-text')
                "
                @click="switchTab(1)"
              >
                Inputs
              </a>
              <a
                href="#"
                :class="
                  'text-xs p-16px' +
                  (cur_tab === 2
                    ? ' text-black border-b-[1px] border-black'
                    : ' text-grey-text')
                "
                @click="switchTab(2)"
              >
                Preview
              </a>
            </div>
            <div class="h-60 overflow-y-scroll">
              <MainPromptInputs
                v-if="cur_tab === 1"
                :prompt-inputs="promptInputs"
                :prompt-values="promptValues"
                :on-prompt-value-changed="onValueChanged"
              />
              <MainPromptPreview
                v-if="cur_tab === 2"
                :prompt-inputs="promptPreview"
              />
            </div>
          </div>
        </div>
        <MainPromptResults :results="results" :running="running" />
      </div>
      <MainPromptActionBar
        :prompt-input="promptInput"
        :on-new-result="onNewResult"
        :running="running"
        :on-running="onStartRunning"
      />
    </div>
  </div>
</template>

<script>
import { encode } from "gpt-tokenizer";
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
      running: false,
      cur_tab: 1,
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
    tokens() {
      return encode(this.promptInput);
    },
  },
  methods: {
    contentChanged(text) {
      this.promptContent = text;
    },
    onValueChanged(key, value) {
      this.promptValues[key] = value;
    },
    onStartRunning() {
      this.running = true;
    },
    onNewResult(result) {
      this.running = false;
      this.results = [result, ...this.results];
    },
    switchTab(tabId) {
      this.cur_tab = tabId;
    },
  },
};
</script>
