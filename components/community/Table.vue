<template>
  <div class="container">
    <div class="flex flex-row flex-wrap">
      <communityCard
        v-for="(community, index) in communityOrganized.newSorted"
        :key="community.id"
        :title="community.title"
        :type="community.type"
        :party="community.party"
        :address="community.address"
        :telephone="community.telephone"
        :mail="community.mail"
        :figure="community.figure"
        :facebook="community.facebook"
        :line="community.line"
        :ig="community.ig"
        :index="index"
      />
    </div>
  </div>
</template>

<script setup>
import community from "@/data/community.json";

const communityOrganized = {
  newSorted: [...community],
};
</script>

<style scoped></style>
