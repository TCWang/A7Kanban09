<template>
  <div>
    <nav
      class="flex items-center justify-between flex-wrap px-6 py-2 bg-indigo-800"
    >
      <div class="flex items-center flex-shrink-0 text-yellow-200 mr-6">
        <a href="/" class="font-semibold text-lg tracking-tight text-yellow-200"
          >A7新林口-地方行政</a
        >
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-1 border rounded text-indigo-200 border-indigo-400 hover:text-white hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        class="w-full block flex-grow lg:flex lg:items-center lg:w-auto bg-indigo-600 lg:bg-indigo-800"
      >
        <div class="lg:space-x-4 lg:flex-grow">
          <a
            href="/constructions"
            class="navbar-brand block mt-1 lg:inline-block lg:mt-0 text-indigo-200 hover:text-yellow-200"
          >
            區域建設
          </a>
          <a
            href="/expectations"
            class="navbar-brand block mt-1 lg:inline-block lg:mt-0 text-indigo-200 hover:text-yellow-200"
          >
            居民期望
          </a>
          <a
            href="/municipal"
            class="navbar-brand block mt-1 lg:inline-block lg:mt-0 text-indigo-200 hover:text-yellow-200"
          >
            公共事務
          </a>
          <a
            href="/councilor"
            class="navbar-brand block mt-1 lg:inline-block lg:mt-0 text-indigo-200 hover:text-yellow-200"
          >
            議員交流
          </a>
          <a
            href="/community"
            class="navbar-brand block mt-1 lg:inline-block lg:mt-0 text-indigo-200 hover:text-yellow-200"
          >
            里長交流
          </a>
        </div>
        <div>
          <a
            href="/websites"
            class="navbar-brand inline-block text-base px-4 py-1 leading-none border rounded text-yellow-200 border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >社區網站</a
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup></script>

<style scoped></style>
