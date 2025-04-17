<script setup>
import PortfolioCard from '@/components/PortfolioCard.vue';
import { computed, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

onBeforeMount(() => {
})

const portfolioContainer = document.getElementById('portfolioContainer');
const noPostsMessage = document.getElementById('noPostsMessage');

const portfolioPosts = [
{ 
    title: "EngCalc",
    link:"https://engcalc-api.devluan.com/",
    descriptionPT: "A API do EngTools foi desenvolvida para apoiar engenheiros civis na automação de cálculos estruturais, como o dimensionamento de vigas submetidas a flexão, esforço cortante e torção.",
    descriptionENG: "The EngTools API was developed to support civil engineers in automating structural calculations, such as the design of beams subjected to bending, shear, and torsion.",
    tecnologies:["C#","Vue.Js", "Rest API"] 
},
];

</script>



<template>
    <div class="portfolio-container">
        <div v-for="post in portfolioPosts" href="#" class="portfolio-card">
            <PortfolioCard :item="post">
            </PortfolioCard>
        </div>
        <p v-if="portfolioPosts.length < 1" class="no-posts" id="noPostsMessage">
            Falha para obter conteúdo dos portfolios.
        </p>
    </div>
</template>

<style scoped>

.portfolio-container {
    padding: 20px;
    display: grid;
    gap: 50px;
    width: 100%;
    grid-template-columns: 1fr;
    overflow-y:auto;
    max-height: 90vh;
}

.portfolio-card{
    width:98% ;
    justify-self: center;
}

@media (min-width: 768px) {
    .portfolio-container {
        grid-template-columns: 1fr 1fr;
    }
}

.no-posts {
    text-align: center;
    font-size: 1em;
    color: #777;
}
</style>