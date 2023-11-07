<template>
  <!-- Card -->
  <div class="bg-zinc-100 p-2 rounded-2xl shadow-md w-full md:w-1/2 xl:w-1/3">
    <!-- Flex Container -->
    <div class="flex flex-row rounded-l-xl">
      <!-- Image -->
      <a :href="`municipal/${title}`">
        <NuxtImg
          :src="`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/municipal/${figure}`"
          alt=""
          class="object-fit rounded-xl md:rounded-l-xl md:rounded-r-none transform hover:scale-110 hover:rounded-xl duration-200 w-[120px] h-[120px]"
        />
      </a>

      <!-- Content -->
      <div class="p-2 md:p-4">
        <a :href="link">
          {{ title }}
        </a>

        <nl>
          <li v-if="address">地址: {{ address }}</li>
          <li v-if="telephone">電話: {{ telephone }}</li>
          <li v-if="hours">時間: {{ hours }}</li>
        </nl>

        <div class="flex flex-row mt-4 space-x-4">
          <a v-show="link" :href="link">
            <NuxtImg
              class="h-12 hover:border-yellow-300 hover:border-2"
              src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Web.jpeg"
            />
          </a>
          <a v-if="description" :href="`/municipal/${title}`">
            <button
              class="h-10 px-4 rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500"
            >
              詳細資料
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface CardProps {
  title: string;
  key: string;
  address: string;
  telephone: string;
  hours: string;
  link: string;
  description: string;
  figure: string;
  index: number;
}

const props = defineProps<CardProps>();
</script>

<style scoped></style>
