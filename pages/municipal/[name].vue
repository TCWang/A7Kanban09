<template>
  <NuxtLayout name="detailpage">
    <div>
      <h2>{{ name }} 服務詳細資料</h2>
    </div>
  </NuxtLayout>
</template>

<script setup>
// import { useMeta } from "vue-meta";

const route = useRoute();
const name = route.params.name;

useHead({
  title: "公共服務 - " + name,
  meta: [{ name: "description", content: "A7地方行政-公共服務匯總" }],
});
</script>

<style scoped></style>
