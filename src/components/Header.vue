<template>
    <header>    
        <nav class="navbar">
            
            <div class="d-flex gap-2">
                
                <v-btn slim class="menu-mobile" icon="mdi-menu" id="menu-activator">                   
                </v-btn>
                
                <v-menu location="right" style="width: 200px;" attach="true" activator="#menu-activator">
                    <v-list-item style="border: 1px solid aliceblue;" class="bg-white" v-for="(item,index) in rotas" :key="index" :value="index">
                        <RouterLink style="text-decoration: none; color: black;" :to="item.value">{{ item.nome }}</RouterLink>                  
                    </v-list-item>
                </v-menu>
                
                <h2>
                    Luan<span>Bregunce</span>
                </h2>
            </div>
            
            <ul class="nav-items">
                <li v-for="(item) in rotas">
                    <RouterLink :class="'nav-item '+ routCheck(item.value)" :to="item.value">{{ item.nome }}</RouterLink>
                </li>
            </ul>
            
            <div style="display: flex; justify-content: space-between; gap: 20px;">
                <v-btn
                    icon
                    variant="text"
                    class="github-btn"
                    @click="(a:any) => a.view?.window.open('https://github.com/bregunceluan')">
                    <v-icon>mdi-github</v-icon>
                </v-btn>
                <div class="language-switch">
                    <v-switch 
                        :false-value="Language.ENG" 
                        :true-value="Language.PT" 
                        flat 
                        v-on:update:model-value="(a:any) => valueChange(a)"
                        density="compact" 
                        style="padding-top: 10px; color: white;">
                    </v-switch>
                    <img 
                        :src="state?.language === Language.ENG ? usFlag : brFlag" 
                        :alt="state?.language === Language.ENG ? 'US Flag' : 'BR Flag'"
                        class="flag"
                    />
                </div>
            </div>
            
        </nav>
    </header>
</template>

<script setup lang="ts">

import { useRoute } from 'vue-router';
import { GlobalStateValues, Language } from '../store/globalState';
import { inject, onBeforeMount, ref } from 'vue';
import { availableRoutesBR,availableRoutesENG } from '@/router';
import brFlag from '@/assets/br.png?url';
import usFlag from '@/assets/us.png?url';

const rotas = ref(availableRoutesENG);
const language = ref(Language.ENG ? "ENG" : "PT");
const state = inject<GlobalStateValues>('globalState')

onBeforeMount(() =>{
    state!.language = Language.ENG;
})

function valueChange(val : Language){
    rotas.value = val === Language.PT ? availableRoutesBR : availableRoutesENG;
    language.value = val === Language.ENG ? "ENG" : "PT";
    state!.language = val;
}


const rout = useRoute();
function routCheck(path:string):string{
    if(path == rout.fullPath){
        return 'active';
    }
    return '';
}


</script>

<style scoped>


header{
    .navbar{
        display: flex;
        justify-content: space-between;
        padding: 2px 3%;
        width: 100%;
    }
    
    h2{
        color: rgb(252, 255, 71);
        align-self: center;
        font-size: 25px;        
        span{
            font-weight: bold;
            color:#e3e2e2;
        }
        
    }
    
    .nav-items{
        display: flex;
        gap:32px;
        justify-content: space-between;
        align-items: center;
        list-style: none;
        
        .nav-item{
            text-decoration: none;
            font-size: 16px;
            color: #e3e2e2;
            padding: 4px 0px;
            transition: color 0.3s;
            
            &.active,
            &:hover {
                color: #ffffff;
                border-bottom: 2px solid rgb(252, 255, 71);
            }            
            
        }
        
    }
    
    .github-btn {
        color: #e3e2e2;
        transition: all 0.3s ease;
        margin-top: 5px;
        
        &:hover {
            color: rgb(252, 255, 71);
            transform: translateY(-2px);
        }
    }
    
    
    
}

@media (width <= 650px) {
    h2{
        visibility: collapse;
        width: 10px;
    }
    span{
        visibility: collapse;
    }
    
    .menu-mobile{
        visibility: visible;
        align-self: center;
    }
    .nav-items{
        visibility: collapse;
        width: 10px;
    }
    
}

@media (width > 650px) {
    .menu-mobile{
        visibility: collapse;
        align-self: center;
        justify-self: center;
    }
}

.language-switch {
    display: flex;
    align-items:center;
    gap: 8px;
}

.flag {
    width: 24px;
    height: 24px;
    object-fit: cover;
    border-radius: 4px;
    margin-left: 4px;
}

</style>