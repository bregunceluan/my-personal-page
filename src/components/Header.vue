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
                <v-btn variant="flat" class="btn-Github" icon="mdi-github" @click="(a:any) => a.view?.window.open('https://github.com/bregunceluan')"></v-btn>
                <v-switch :true-value="Language.ENG" :false-value="Language.PT" flat v-on:update:model-value="(a:any) => valueChange(a)"
                    density="compact" style="padding-top: 10px; color: white;" :label="language">
                </v-switch>
            </div>
            
        </nav>
    </header>
</template>

<script setup lang="ts">

import { useRoute } from 'vue-router';
import { Language } from '../store/globalState';
import { ref } from 'vue';
import { availableRoutesBR,availableRoutesENG } from '@/router';
import { eventBus } from '@/models/events';

const rotas = ref(availableRoutesBR);
const language = ref(Language.ENG ? "ENG" : "PT");

function valueChange(val : Language){
    eventBus.emit('languageChanged', val);
    rotas.value = val === Language.PT ? availableRoutesBR : availableRoutesENG;
    language.value = val === Language.ENG ? "ENG" : "PT";
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
    
    .btn-Github{
        border-radius: 24px;
        padding: 10px 22px;
        cursor: pointer;
        background-color: #ffffff;
        border: none;
        transition: all 0.3s;
        margin-top: 5px;        
        &:hover{
            background-color: #e3e2e2;
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

</style>