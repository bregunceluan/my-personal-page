<script setup lang="ts">
import { inject, onBeforeMount, onMounted, ref, watch } from 'vue'
import { GlobalStateValues, Language } from '../store/globalState';

const state = inject<GlobalStateValues>('globalState')
const description = ref<About>()

interface About {
  title: string;
  content: string;
  experience: {
    engineering: string[];
    softwareDevelopment: string[];
    softwares: string[];
  };
}

const about = ref<{ pt: About; en: About }>({
  pt: {
    title: "Desenvolvedor e Engenheiro Civil",
    content:
      "Sou desenvolvedor com formação em engenharia civil. Uma das minhas paixões é por meio da tecnologia, criar aplicações que permitem melhorar a indústria da construção civil. Tenho experiência em criar softwares/aplicações para desktop e WEB. Caso tenha interesse, você pode ir até a sessão de blog e portfólio para saber um pouco mais de meus trabalhos. Algumas das minhas habilidades e experiências são:",
    experience: {
      engineering: ["Structural Analysis", "BIM", "Cálculo"],
      softwareDevelopment: ["C#", "Vue.js", "TypeScript", "Python"],
      softwares: ["Revit", "Speckle", "Git", "Docker"],
    },
  },
  en: {
    title: "Developer and Civil Engineer",
    content:
      "I am a developer with a background in civil engineering. One of my passions is using technology to create applications that improve the construction industry. I have experience in developing desktop and web applications. If you are interested, you can visit the blog and portfolio section to learn more about my work. Some of my skills and experience include:",
    experience: {
      engineering: ["Structural Analysis", "BIM", "Calculations"],
      softwareDevelopment: ["C#", "Vue.js", "TypeScript", "Python"],
      softwares: ["Revit", "Speckle", "Git", "Docker"],
    },
  },
});

onBeforeMount(() => {
    description.value = state?.language === Language.PT ? about.value.pt : about.value.en
})

watch(state!, (value) => {
    description.value = value?.language === Language.PT ? about.value.pt : about.value.en;
})
</script>

<template>
  <div class="container">
    <div class="card">
      <h1>{{ description?.title }}</h1>
      <p class="content">{{ description?.content }}</p>
      
      <div class="experience-section">
        <div class="experience-category">
          <h2>Engineering</h2>
          <ul>
            <li v-for="(item, index) in description?.experience.engineering" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>

        <div class="experience-category">
          <h2>Software Development</h2>
          <ul>
            <li v-for="(item, index) in description?.experience.softwareDevelopment" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>

        <div class="experience-category">
          <h2>Software Tools</h2>
          <ul>
            <li v-for="(item, index) in description?.experience.softwares" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.card {
  background-color: aliceblue;
  width: 90%;
  max-width: 1000px;
  border-radius: 20px;
  max-height: 90%;
  overflow-y: auto;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card > h1 {
  color: #2c3e50;
  margin: 0;
  font-size: 2rem;
  font-weight: 600;
}

.content {
  font-size: 1rem;
  line-height: 1.4;
  color: #4a5568;
  margin: 0;
  flex: 0 0 auto;
}

.experience-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 0;
  flex: 1;
}

.experience-category {
  background-color: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
}

.experience-category h2 {
  color: #2c3e50;
  font-size: 1.1rem;
  margin: 0 0 0.5rem 0;
  font-weight: 500;
}

.experience-category ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.experience-category li {
  color: #4a5568;
  padding: 0.25rem 0;
  font-size: 0.9rem;
  border-bottom: 1px solid #edf2f7;
}

.experience-category li:last-child {
  border-bottom: none;
}

@media (max-width: 768px) {
  .card {
    width: 95%;
    padding: 1rem;
  }

  .card > h1 {
    font-size: 1.75rem;
  }

  .experience-section {
    grid-template-columns: 1fr;
  }

  .content {
    font-size: 0.9rem;
  }
}
</style>