<template>
    <div class="p-24px flex flex-1 flex-col gap-sm">
        <div class="text-xs text-grey-text">Inputs</div>
        <div v-for="item of promptInputs" class="flex flex-col gap-sm items-baseline">
            <div class="rounded-prompt text-sm px-3 py-1 text-white" :style="'background-color: ' + item.color">{{ item.content }}</div>
            <input class="w-full p-16px rounded-xl bg-white" :value="promptValues[item.content]?promptValues[item.content]:''" @input="onEdit($event, item.content)" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        promptInputs: Array,
        promptValues: Array,
        onPromptValueChanged: Function
    },
    methods: {
        onEdit(ev, key) {
            console.log(ev.target.value, key);
            this.onPromptValueChanged(key, ev.target.value);
        }
    }
}
</script>