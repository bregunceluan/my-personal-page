<template>
    <RouterLink :to="'/blog/' + post.name" class="blog-card">
        <div class="blog-image" v-if="post.image">
            <img :src="post.image" :alt="post.title">
        </div>
        <div class="blog-content">
            <div class="blog-title">{{post.title}}</div>
            <div class="blog-preview">{{post.preview}}</div>
            <div class="blog-tags" v-if="post.tags && post.tags.length">
                <span v-for="tag in post.tags" :key="tag" class="tag">{{tag}}</span>
            </div>
        </div>
    </RouterLink>
</template>

<script setup lang="ts">
import { BlogPostData } from '@/models/entity';

const props = defineProps<{
    item:BlogPostData
}>()
const post = props.item;
</script>

<style scoped>
.blog-card {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    transition: transform 0.2s;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.blog-card:hover {
    transform: scale(1.02);
}

.blog-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-radius: 4px;
}

.blog-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.blog-card:hover .blog-image img {
    transform: scale(1.05);
}

.blog-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.blog-title {
    font-size: 1.2em;
    font-weight: 600;
    color: #2c3e50;
}

.blog-preview {
    font-size: 0.9em;
    color: #4a5568;
    line-height: 1.5;
}

.blog-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
}

.tag {
    background-color: #edf2f7;
    color: #4a5568;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.8rem;
}
</style>