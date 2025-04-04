<template>
  <Header></Header>
  <main>
    <RouterView />
    
  </main>
</template>

<script setup lang="ts">
  import Header from './components/Header.vue';
  import { log } from './models/apifunctions';
  log()
</script>
