<script setup lang="ts">
  import SearchDate from '@/components/SearchDate.vue';
  import SearchResult from '@/components/SearchResult.vue'
  import SearchConfirm from '@/components/SearchConfirm.vue'
</script>

<template>
  <div class="booking">
    <SearchDate />
    <SearchResult />
    <SearchConfirm />
  </div>
</template>
  
<style scoped>
  .booking {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
</style>