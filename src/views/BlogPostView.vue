<template>
  <div class="blog-post-view">
    <div v-if="loading" class="loading">
      Loading...
    </div>
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    <BlogPost
      v-else-if="post"
      :title="post.title"
      :content="post.content"
      :date="post.date"
      :tags="post.tags"
    />
    <div v-else class="error">
      Post not found
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, inject } from 'vue';
import { useRoute } from 'vue-router';
import BlogPost from '@/components/BlogPost.vue';
import { BlogPostData } from '@/models/entity';
import { GlobalStateValues } from '@/store/globalState';
import { getBlogPostText } from '@/models/apifunctions';
import { parseHeaderAndContent } from '@/models/helpers';

const state = inject<GlobalStateValues>('globalState');
const route = useRoute();
const post = ref<BlogPostData | null>(null);
const loading = ref(true);
const error = ref('');

async function fetchPost(postName: string) {
  try {
    loading.value = true;
    error.value = '';
    
    const getPostText = await getBlogPostText(postName);

    const parsed = parseHeaderAndContent(getPostText);
    post.value = parsed;
    
    if (state && !state.blogPosts.find(p => p.name === postName)) {
      state.blogPosts.push(parsed);
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'An error occurred while loading the blog post';
    console.error('Error loading blog post:', err);
  } finally {
    loading.value = false;
  }
}




onMounted(async () => {
  debugger
  const postId = route.params.postName as string;
  
  // First try to find the post in the global state
  if (state?.blogPosts) {
    post.value = state.blogPosts.find(p => p.name === postId) || null;
  }
  
  // If not found in state, fetch it
  if (!post.value) {
    await fetchPost(postId);
  } else {
    loading.value = false;
  }
});
</script>

<style scoped>
.blog-post-view {
  min-height: 92vh;
  background-color: #f7fafc;
  padding: 2rem 0;
}

.loading, .error {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 92vh;
  font-size: 1.2rem;
  color: #4a5568;
}

.error {
  color: #e53e3e;
}
</style> 