<template>
  <NuxtLayout name="detailpage">
    <div name="detailpage">
      <div>
        <!-- <h2>{{ service.Title }} 詳細資料</h2>

      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/3 mx-1">
          <table class="table-auto w-full">
            <tr>
              <td>項目</td>
              <td>{{ service.Title }} - {{ service.Subtitle }}</td>
            </tr>
            <tr>
              <td>議員</td>
              <td>{{ service.Category }}</td>
            </tr>
            <tr>
              <td>類別</td>
              <td>{{ service.Category1 }} - {{ service.Category2 }}</td>
            </tr>
            <tr>
              <td>日期</td>
              <td>{{ service.Date }}</td>
            </tr>
            <tr>
              <td>網頁</td>
              <td>
                <a :href="service.Link">資料來源</a>
              </td>
            </tr>
          </table>
        </div>

        <div class="w-full md:w-2/3 mx-1">
          <h2>服務內容</h2>
          <div v-html="service.Description"></div>
        </div>
      </div> -->

        <councilorBack />
        <p>Test {{ title }} {{ service }}</p>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import services from "@/data/services.json";
// import { useMeta } from "vue-meta";

const route = useRoute();
const title = route.params.name;
const service = services.find((r) => r.Title === title);

useHead({
  title: "議員服務 - " + title,
});
</script>

<style scoped></style>
