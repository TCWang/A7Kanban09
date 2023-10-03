// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // mode: "spa",
  // router: {
  //   base: "/A7Kanban09/",
  // },
  modules: ["@nuxtjs/tailwindcss"],

  css: ["@/assets/css/tailwind.css"],

  app: {
    head: {
      title: "Nuxt 3 Crash Course",
      meta: [
        {
          name: "description",
          content: "A7Kanban template base on Nuxt 3 Crash Course",
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
