// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  css: [
    '~/assets/styles/style.css',
  ],
})
