<script setup lang="ts">
import {inject, onBeforeMount, ref } from 'vue'
import BlogCard from '@/components/BlogCard.vue'
import { BlogPostData } from '@/models/entity'
import { GlobalStateValues } from '@/store/globalState'
import { getBlogPostFolders, getBlogPostText } from '@/models/apifunctions'
import { parseHeaderAndContent } from '@/models/helpers'

const state = inject<GlobalStateValues>('globalState')
const blogPosts = ref<BlogPostData[]>([])

onBeforeMount(async () => {
    debugger

    const dirPosts = await getBlogPostFolders();
    
    if(dirPosts){      
        dirPosts.forEach(async(dir) =>{

            let postContent = await getBlogPostText(dir.name)
            
            let parsed = parseHeaderAndContent(postContent);
            blogPosts.value.push(parsed)
            state?.blogPosts.push(parsed);
        })
    }
    
})

    
</script>



<template>
    <div class="blog-container">
        <div v-for="post in blogPosts" :key="post.id" class="blog-card">
            <BlogCard :item="post" />
        </div>
        <p v-if="blogPosts.length < 1" class="no-posts">
            No blog posts available.
        </p>
    </div>
</template>

<style scoped>
.blog-container {
    padding: 20px;
    display: grid;
    gap: 20px;
    width: 100%;
    grid-template-columns: 1fr;
    overflow-y: auto;
    max-height: 90vh;
}

.blog-card {
    width: 98%;
    justify-self: center;
}

@media (min-width: 768px) {
    .blog-container {
        grid-template-columns: 1fr 1fr;
    }
}

.no-posts {
    text-align: center;
    font-size: 1em;
    color: #777;
    grid-column: 1 / -1;
}
</style>