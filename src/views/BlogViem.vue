<script setup>
import { computed, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

onBeforeMount(() => {
})

const blogContainer = document.getElementById('blogContainer');
const noPostsMessage = document.getElementById('noPostsMessage');

const blogPosts = [
];

</script>



<template>
    <div class="blog-container">
        <div v-for="post in blogPosts" href="#" class="blog-card">
            <BlogCard :item="post">

            </BlogCard>
        </div>
        <p v-if="blogPosts.length < 1" class="no-posts" id="noPostsMessage">
            Falha para obter conteúdo dos blogs.
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
    overflow-y:auto;
    max-height: 90vh;
}

.blog-card{
    width:98% ;
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
}
</style>