<template>
  <div class="municipal">
    <div class="flex flex-col md:flex-row flex-wrap">
      <MunicipalCard
        v-for="(municipal, index) in municipalOrganized.newSorted"
        :key="municipal.id"
        :title="municipal.title"
        :address="municipal.address"
        :telephone="municipal.telephone"
        :hours="municipal.hours"
        :link="municipal.link"
        :figure="municipal.figure"
        :description="municipal.description"
        :index="index"
      />
    </div>
  </div>
</template>

<script setup>
import municipal from "@/data/municipal.json";

const municipalOrganized = {
  newSorted: [...municipal],
};
</script>

<style scoped></style>
