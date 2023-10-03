<template>
  <div class="container">
    <div class="flex flex-row flex-wrap">
      <CouncilorCard
        v-for="(councilor, index) in councilorOrganized.newSorted"
        :key="councilor.id"
        :title="councilor.title"
        :type="councilor.type"
        :party="councilor.party"
        :address="councilor.address"
        :telephone="councilor.telephone"
        :mail="councilor.mail"
        :figure="councilor.figure"
        :facebook="councilor.facebook"
        :line="councilor.line"
        :ig="councilor.ig"
        :index="index"
      />
    </div>
  </div>
</template>

<script setup>
import councilor from "@/data/councilor.json";

const councilorOrganized = {
  newSorted: [...councilor],
};
</script>

<style scoped></style>
