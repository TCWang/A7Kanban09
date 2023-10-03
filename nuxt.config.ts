// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  // mode: "spa",
  // router: {
  //   base: "/A7Kanban09/",
  // },
  modules: ["@nuxtjs/tailwindcss"],

  css: ["@/assets/css/tailwind.css"],

  app: {
    head: {
      title: "A7社區網站-V2.0",
      meta: [
        {
          name: "description",
          content: "A7新林口-社區網站 V2.0",
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
