<script setup>

import { onBeforeMount, onMounted,ref } from 'vue';

function goToAbout() {
    this.$router.push('/about')
}

const displayedText = ref("");

onMounted(()=>{
    type()
})

const textArray = ["Hello, world!", "Coding the AEC Industry.", "Enjoy your stay!"];
const textIndex = ref(0);
const charIndex = ref(0);
const isErasing = ref(false);

const typingSpeed = 50;
const erasingSpeed = 50;
const delayBetweenWords = 500;

const type = () => {
    const currentText = textArray[textIndex.value];
    
    if (!isErasing.value && charIndex.value < currentText.length) {
        displayedText.value += currentText.charAt(charIndex.value);
        charIndex.value++;
        setTimeout(type, typingSpeed);
    } else if (isErasing.value && charIndex.value > 0) {
        displayedText.value = currentText.substring(0, charIndex.value - 1);
        charIndex.value--;
        setTimeout(type, erasingSpeed);
    } else {
        isErasing.value = !isErasing.value;
        
        if (!isErasing.value) {
            textIndex.value = (textIndex.value + 1) % textArray.length;
        }
        setTimeout(type, delayBetweenWords);
    }
};


</script>

<template>
    
    <div class="container">
        <div class="mainContent">
            <h1>Developer</h1>
            <h2>Civil Engineer</h2>
            <div class="typing-effect">{{ displayedText }}</div>
        </div>
        
    </div>
    
</template>

<style scoped>

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(95vh - 60px);
    text-align: center;
}

h1{
    color: rgb(233, 232, 232);
    font-size: 5em;
    align-self: flex-start;
    font-family: "Merriweather Sans", sans-serif;
    user-select: none;
}

h2{
    color: rgb(233, 232, 232);
    font-size: 5em;
    align-self: flex-end;
    text-wrap:wrap;
    font-family: "Merriweather Sans", sans-serif; 
    user-select: none;  
}

h1:hover,h2:hover{
    color: rgb(252, 255, 71);
    transition: color 0.3s;
}

.mainContent{
    display: flex;
    flex-direction: column;
}


.typing-effect {
    height: 70px;
    font-family: "VT323", monospace;
    font-size: 2em;
    white-space: nowrap;
    overflow: hidden;
    color: rgb(252, 255, 71);;
}

.cursor {
    display: inline-block;
    width: 2px;
    background-color: black;
    animation: blink 0.7s steps(1) infinite;
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}

@media (width <= 600px) {
    h1,h2{
        font-size: 2em;
    }

    .typing-effect{
        font-size: 30px;
    }
}

</style>