<script setup lang="ts">
import { inject, onMounted, ref } from 'vue'
import { GlobalStateValues, Language } from '../store/globalState';
import { aboutTextENG,aboutTextPT } from '@/libs/contents';
import { eventBus } from '@/models/events';

const state = inject<GlobalStateValues>('globalState')
const desc = ref<string>(state?.language === Language.PT ? aboutTextPT : aboutTextENG)

onMounted(() => {
    eventBus.on('languageChanged', (lang:Language) => {
    desc.value = lang === Language.PT ? aboutTextPT : aboutTextENG;
  });
})

</script>

<template>
  
  <div class="container">
    
    <div class="card">
      <h1>Developer</h1>
      <h3>
        {{ desc }}
      </h3>
    </div>
    
  </div>
  
</template>


<style scoped>

.container{
  height: 92vh;
  justify-items: center;
  align-content: center;
}

.card{
  justify-items: center;
  background-color: aliceblue;
  width: 70%;
  border-radius: 30px;
  padding: 20px;
}

.card > h1{
  background-color: transparent;
}

.card > h3{
  background-color: transparent;
  font-size: 20px;
  font-weight: 300;
}

</style>