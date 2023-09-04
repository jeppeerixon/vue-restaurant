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
    margin-top: 1rem;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  @media (min-width: 1024px) {
  .booking {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
}
</style>