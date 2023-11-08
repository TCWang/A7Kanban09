<template>
  <div class="container">
    里長公告列表: 請點擊 <mark>公告項目</mark> 查詢相關資訊。
    <div class="table-container">
      <div class="table-col">
        <CommunityRow class="bg-indigo-200" :isHeader="true" />
        <CommunityRow
          v-for="(announcement, index) in announcementsOrganized.newSorted"
          :key="announcement.No"
          :Community="announcement.Community"
          :Title="announcement.Title"
          :No="announcement.No"
          :Category="announcement.Category"
          :Category1="announcement.Category1"
          :Category2="announcement.Category2"
          :Subtitle="announcement.Subtitle"
          :Description="announcement.Description"
          :Date1="announcement.Date"
          :Link="announcement.Link"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import announcements from "@/data/announcements.json";

// interface RowProps {
//   name: string;
// }
// const props = defineProps<RowProps>();

// const servicesnamed = services.find((r) => r.Category === name);

const route = useRoute();
const announcementsOrganized = {
  newSorted: [...announcements]
    .filter((announcement) => announcement.Category === route.params.name)
    .sort((a, b) => a.Date - b.Date),
};
</script>

<style scoped></style>
