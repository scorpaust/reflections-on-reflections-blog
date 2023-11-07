// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    ["@storyblok/nuxt", { accessToken: process.env.NUXT_STORYBLOK_TOKEN }],
    "@nuxtjs/tailwindcss",
    ["@nuxtjs/i18n", {
      strategy: 'prefix_except_default',
      locales: ['en', 'pt'],
      defaultLocale: 'en'
    }],
  ],
  devtools: { enabled: true },
})
