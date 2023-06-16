import plugin from "vue3-lottie";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(plugin, { name: "Vue3Lottie" });
});
