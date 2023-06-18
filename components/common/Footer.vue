<template>
  <div>
    <hr class="mx-16" />
    <div class="flex justify-center mt-5 flex-rows items-center">
      <img
        v-if="$colorMode.preference === 'dark'"
        src="~/assets/images/icon_white.png"
        class="w-8 h-8"
      />
      <img v-else src="~/assets/images/icon.png" class="w-8 h-8" />
      <div class="pl-2">©&nbsp;2023&nbsp;PromptMonkey</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonFooter",
};
</script>
