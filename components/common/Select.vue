<template>
    <select 
        class="bg-[#0000000f] px-2 py-1 rounded-xl text-sm"
        :value="value"
        @change="select">
        <option disabled v-if="title">{{ title }}</option>
        <option v-for="item of items" :value="item.key">{{ item.value }}</option>
    </select>
</template>

<script>
export default {
    props: {
        value: String,
        title: String,
        items: Array,
        select: Function
    }
}
</script>