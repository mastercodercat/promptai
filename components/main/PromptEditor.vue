<template>
  <div class="flex flex-col bg-dark-bg p-24px gap-sm">
    <div class="text-grey-text text-xs">Prompt</div>
    <div
      class="rounded-[8px] bg-editor text-white p-24px leading-editor whitespace-pre-wrap"
    >
      <div
        v-if="isEditing"
        id="editor"
        aria-multiline="true"
        role="textbox"
        spellcheck="false"
        class="bg-transparent text-white w-full"
        :contentEditable="isEditing"
        :on-change="onEditorChanged"
        @keyup="onEditorChanged"
        @focusout="onEditEnd"
      >
        {{ editorContent }}
      </div>
      <div v-else class="whitespace-pre-wrap" @click="onEdit">
        <span
          v-for="(item, key) of htmlContents"
          :key="key"
          :class="item.type == 2 ? 'rounded-prompt px-3' : ''"
          :style="item.type == 2 ? 'background-color: ' + item.color : ''"
        >
          {{ item.content }}
        </span>
        <span class="float-left rounded-prompt px-3 border border-white">
          Completion
        </span>
      </div>
    </div>
    <div class="text-white">Tokens: {{ tokens.length }}</div>
  </div>
</template>

<script>
import { splitTokenFromContent } from "~/utils/utils";

export default {
  props: {
    promptContent: {
      type: String,
      default: () => "",
    },
    contentChanged: {
      type: Function,
      default: () => {},
    },
    tokens: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const editor = ref(null);
    return {
      editor,
    };
  },
  data() {
    return {
      isEditing: false,
      editorContent: "",
    };
  },
  computed: {
    htmlContents() {
      return splitTokenFromContent(this.promptContent);
    },
  },
  updated() {
    if (document.getElementById("editor")) {
      document.getElementById("editor").focus();
    }
  },
  methods: {
    onEditorChanged(ev) {
      this.contentChanged(ev.target.innerText);
    },
    onEdit() {
      this.isEditing = true;
      this.editorContent = this.promptContent;
      return true;
    },
    onEditEnd() {
      this.isEditing = false;
      return true;
    },
  },
};
</script>
