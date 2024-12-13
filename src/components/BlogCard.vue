<template>
    <div class="blog-card">
        <div class="blog-title">{{post.title}}</div>
        <div class="blog-preview">{{post.preview}}</div>
    </div>
</template>

<script setup>
const props = defineProps(['item'])
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
}

.blog-card:hover {
    transform: scale(1.05);
}

.blog-title {
    font-size: 1.2em;
    margin-bottom: 10px;
    color: #333;
}

.blog-preview {
    font-size: 0.9em;
    color: #555;
    line-height: 1.5;
}
</style>