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
    title: "EngTools",
    link:"https://engtools-api.devluan.com/",
    descriptionPT: "Esta calculadora foi desenvolvida para auxiliar engenheiros civis no dimensionamento de vigas submetidas a flexão, esforço cortante e torção. Ela oferece uma interface intuitiva que exibe detalhadamente todas as propriedades da viga e do aço, garantindo precisão e facilidade no cálculo.",
    descriptionENG: "This calculator is designed to assist civil engineers in sizing beams subjected to bending, shear, and torsion. It provides an intuitive interface that thoroughly details all the properties of the beam and the steel, ensuring accuracy and ease of calculation.",
    tecnologies:["C#","Vue.Js"] 
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