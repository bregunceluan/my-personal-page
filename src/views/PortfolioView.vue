<script setup>
import PortfolioCard from '@/components/PortfolioCard.vue';
import { computed, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import engcalcThumb from "@/assets/engcalc.jpg";
import ysnpThumb from "@/assets/youshallnotpass.jpg";

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
    descriptionPT: "A API do EngCalc foi desenvolvida para apoiar engenheiros civis na automação de cálculos estruturais, como o dimensionamento de vigas submetidas a flexão, esforço cortante e torção.",
    descriptionENG: "The EngCalc API was developed to support civil engineers in automating structural calculations, such as the design of beams subjected to bending, shear, and torsion.",
    tecnologies:["C#","Vue.Js", "Rest API"],
    thumb:engcalcThumb,
    alt:"engcal"
},
{
    title: "You Shall Not Pass",
    link: "https://youshallnotpass.devluan.com/",
    descriptionPT: "O You Shall Not Pass é uma aplicação que monitora e exibe em tempo real IPs banidos de tentativas de ataque a servidores, como máquinas virtuais (VPS). Ele registra a localização geográfica dos atacantes, proporcionando uma visão clara das ameaças cibernéticas.",
    descriptionENG: "You Shall Not Pass is an application that monitors and displays in real-time IPs banned from server attack attempts, such as virtual private servers (VPS). It records the geographical location of attackers, providing a clear view of cyber threats.",
    tecnologies: ["Linux", "C#", "Cybersecurity", "Scripting"],
    thumb:ysnpThumb,
    alt:"youshallnotpass"
}
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