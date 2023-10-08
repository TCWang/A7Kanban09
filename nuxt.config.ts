// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge"],

  image: {
    //Options
  },

  css: ["@/assets/css/tailwind.css"],

  app: {
    head: {
      title: "A7社區網站-地方行政",
      meta: [
        {
          name: "description",
          content: "A7新林口-社區網站 V2.0 地方行政",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
});
