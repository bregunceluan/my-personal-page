<template>
    
    <div class="container" @click="(a) => a.view?.window.open(post.link)">
        
        <img width="30%" height="80%" src="../assets/engtools.jpg" alt="engtools">
        
        <div class="portfolio-card">
            <div class="portfolio-title">{{post.title}}</div>
            <div class="portfolio-preview">{{description}}</div>
            <v-chip class="ma-2" v-for="tec in post.tecnologies">
                <v-icon icon="mdi-label" start></v-icon>
                {{ tec }}
            </v-chip>
        </div>
    </div>
    
</template>

<script setup lang="ts">

import { eventBus } from '@/models/events';
import { GlobalStateValues, Language } from '@/store/globalState';
import { inject, onMounted, ref } from 'vue';


const state = inject<GlobalStateValues>('globalState')



const props = defineProps(['item'])
const post = props.item;

const description = ref(state?.language === Language.PT ? post.descriptionPT : post.descriptionENG);

onMounted(
    () => {
    eventBus.on('languageChanged', (lang:Language) => {
        description.value = lang === Language.PT ? post.descriptionPT : post.descriptionENG;});
    }
)
    
    
</script>

<style scoped>

img{
    border-radius: 8px;
    background-size: cover;
    background-position: center;
}

.container{
    display: flex;
    direction: row;
    align-items: center;
    padding-left: 10px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    text-decoration: none;
    color: inherit;
    min-height: 250px;
}

.portfolio-card {
    padding: 20px;
    
}

.container:hover {
    transform: scale(1.05);
    cursor: pointer;
}

.portfolio-title {
    font-size: 1.2em;
    margin-bottom: 10px;
    color: #333;
}

.portfolio-preview {
    font-size: 0.9em;
    color: #555;
    line-height: 1.5;
}
</style>