<template>
  <!-- Card -->
  <div class="bg-zinc-100 p-2 m-2 rounded-2xl shadow-md">
    <!-- Flex Container -->
    <div class="flex flex-row rounded-l-xl">
      <!-- Image -->
      <NuxtImg
        :src="`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/${figure}`"
        alt=""
        class="object-fit rounded-xl h-40 md:h-48 md:rounded-l-xl md:rounded-r-none transform hover:scale-110 hover:rounded-xl duration-200"
      />
      <!-- Content -->
      <div class="p-2 md:p-4">
        <h3 class="text-center text-gray-800 md:text-left">{{ title }} 議員</h3>

        <nl>
          <li>政黨: {{ party }}</li>
          <li>服務處: {{ address }}</li>
          <li>電話: {{ telephone }}</li>
          <li>郵箱: {{ mail }}</li>
        </nl>

        <div class="flex flex-row mt-4 space-x-4">
          <a :href="`/councilor/${title}`">
            <button
              class="h-10 px-4 rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500"
            >
              地區服務
            </button>
          </a>

          <a v-show="facebook" :href="facebook">
            <NuxtImg
              class="h-12 hover:border-yellow-300 hover:border-2"
              src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/LOG-01-Facebook.png"
            />
          </a>
          <a v-show="line" :href="line">
            <NuxtImg
              class="h-12 hover:border-yellow-300 hover:border-2"
              src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/LOG-01-Line.png"
            />
          </a>
          <a v-show="ig" :href="ig">
            <NuxtImg
              class="h-12 hover:border-yellow-300 hover:border-2"
              src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/LOG-01-Ig.png"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface CardProps {
  title: string;
  type: string;
  key: string;
  party: string;
  address: string;
  telephone: string;
  mail: string;
  figure: string;
  facebook: string;
  line?: string;
  ig?: string;
  index: number;
}

const props = defineProps<CardProps>();
</script>

<style scoped></style>
