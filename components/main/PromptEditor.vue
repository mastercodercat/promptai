<template>
  <div class="flex flex-col bg-dark-bg p-24px gap-sm">
    <div class="text-grey-text text-xs">Prompt</div>
    <div
      class="rounded-[8px] bg-editor text-white p-24px leading-editor whitespace-pre-wrap"
    >
      <div
        :contentEditable="isEditing"
        aria-multiline="true"
        @keyup="onEditorChanged"
        id="editor"
        @focusout="onEditEnd"
        role="textbox"
        spellcheck="false"
        class="bg-transparent text-white w-full"
        :on-change="onEditorChanged"
        v-if="isEditing"
      >
        {{ editorContent }}
      </div>
      <div class="whitespace-pre-wrap" @click="onEdit" v-else>
        <span
          v-for="item of htmlContents"
          :class="item.type == 2 ? 'rounded-prompt px-3' : ''"
          :style="item.type == 2 ? 'background-color: ' + item.color : ''"
        >
          {{ item.content }}
        </span>
        <span class="float-left rounded-prompt px-3 border border-white"
          >Completion</span
        >
      </div>
    </div>
    <div class="text-white">Tokens: {{ promptContent.split(" ").length }}</div>
  </div>
</template>

<script>
import { splitTokenFromContent } from "~/utils/utils";

export default {
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
  props: {
    promptContent: String,
    contentChanged: Function,
  },
  methods: {
    onEditorChanged(ev) {
      this.contentChanged(ev.target.innerText);
    },
    onEdit(ev) {
      this.isEditing = true;
      this.editorContent = this.promptContent;
      return true;
    },
    onEditEnd(ev) {
      this.isEditing = false;
      return true;
    },
  },
  updated() {
    if (document.getElementById("editor")) {
      document.getElementById("editor").focus();
    }
  },
  setup() {
    const editor = ref(null);
    return {
      editor,
    };
  },
};
</script>