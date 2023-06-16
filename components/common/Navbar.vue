<template>
  <nav class="relative w-full flex flex-rows justify-between">
    <img
      v-if="$colorMode.preference === 'dark'"
      src="~/assets/images/logo_dark.png"
      class="w-logo h-logo"
    />
    <img v-else src="~/assets/images/logo.png" class="w-logo h-logo" />
    <div class="flex flex-rows gap-sm items-center">
      <CommonToggle text="Night Mode" :on-toggle="onThemeToggle" />
      <CommonButton>Login</CommonButton>
    </div>
  </nav>
</template>

<script>
export default {
  name: "CommonNavbar",
  methods: {
    onThemeToggle() {
      const colorMode = useColorMode();
      colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
    },
  },
};
</script>
