<template>
    <div class="p-24px flex flex-1 flex-col gap-sm">
        <div class="text-xs text-grey-text">Preview</div>
        <div class="whitespace-pre-wrap">
            <span 
                v-for="item of promptInputs" 
                :style="item.type==2?'color: ' + item.color:''"
                >
                {{ item.type==2?(item.value?item.value:''):item.content }}
            </span>
            <span class="float-left rounded-prompt px-3 border border-black">Completion</span>
        </div>
    </div>
</template>

<script>
import {splitTokenFromContent} from '~/utils/utils';

export default {
    props: {
        promptInputs: Array
    }
}
</script>