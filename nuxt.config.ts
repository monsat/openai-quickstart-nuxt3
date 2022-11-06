// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    openaiApiKey: process.env.OPENAI_API_KEY,
  },
})
