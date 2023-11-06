// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    ["@storyblok/nuxt", { accessToken: process.env.NUXT_STORYBLOK_TOKEN }],
    "@nuxtjs/tailwindcss"
  ],
  devtools: { enabled: true }
})
