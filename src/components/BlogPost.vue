<template>
  <div class="blog-post">
    <div class="post-header">
      <h1>{{ title }}</h1>
      <div class="post-meta">
        <span class="date">{{ date }}</span>
        <div class="tags">
          <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
    <div class="post-content" v-html="renderedContent"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { marked } from 'marked';

const props = defineProps<{
  title: string;
  content: string;
  date: string;
  tags: string[];
}>();

const renderedContent = computed(() => {
  return marked(props.content);
});
</script>

<style scoped>
.blog-post {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  color: #2c3e50;
}

.post-header {
  margin-bottom: 2rem;
}

.post-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #1a202c;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #718096;
  font-size: 0.9rem;
}

.tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  background-color: #edf2f7;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  color: #4a5568;
}

.post-content {
  line-height: 1.7;
  font-size: 1.1rem;
}

.post-content :deep(h2) {
  font-size: 1.8rem;
  margin: 2rem 0 1rem;
  color: #1a202c;
}

.post-content :deep(h3) {
  font-size: 1.5rem;
  margin: 1.5rem 0 1rem;
  color: #1a202c;
}

.post-content :deep(p) {
  margin-bottom: 1.5rem;
}

.post-content :deep(code) {
  background-color: #f7fafc;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-family: monospace;
}

.post-content :deep(pre) {
  background-color: #2d3748;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin: 1.5rem 0;
}

.post-content :deep(pre code) {
  background-color: transparent;
  padding: 0;
  color: #e2e8f0;
}

.post-content :deep(blockquote) {
  border-left: 4px solid #e2e8f0;
  padding-left: 1rem;
  margin: 1.5rem 0;
  color: #718096;
}

.post-content :deep(ul), .post-content :deep(ol) {
  margin: 1.5rem 0;
  padding-left: 2rem;
}

.post-content :deep(li) {
  margin-bottom: 0.5rem;
}

.post-content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
  margin: 1.5rem 0;
}

@media (max-width: 768px) {
  .blog-post {
    padding: 1rem;
  }

  .post-header h1 {
    font-size: 2rem;
  }

  .post-content {
    font-size: 1rem;
  }
}
</style> 