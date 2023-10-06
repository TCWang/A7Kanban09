<template>
  <div class="container">
    區域重要建設列表: 請點擊 <mark>建設項目</mark> 查詢相關資訊。
    <div class="table-container">
      <div class="table-col">
        <CouncilorRow class="bg-indigo-200" :isHeader="true" />
        <CouncilorRow
          v-for="(service, index) in servicesOrganized.newSorted"
          :key="service.No"
          :Title="service.Title"
          :No="service.No"
          :Category="service.Category"
          :Category1="service.Category1"
          :Category2="service.Category2"
          :Subtitle="service.Subtitle"
          :Description="service.Description"
          :Date1="service.Date"
          :Link="service.Link"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import services from "@/data/services.json";

// interface RowProps {
//   name: string;
// };
// const props = defineProps<RowProps>();

// const servicesnamed = services.find((r) => r.Category === name);
const servicesOrganized = {
  newSorted: [...services],
};
</script>

<style scoped></style>
