<template>
    <b-container fluid>
        <PostList :posts="loadData" :is-admin="true" />
        <!-- <b-button @click="postsAll">Load...</b-button> -->
    </b-container>
</template>

<script>
import PostList from '@/components/posts/PostList'

export default {
    components: { PostList },
    computed: {
        loadData() {
            console.log(this.$store.getters.getAllPosts)
            return this.$store.getters.getAllPosts
        },
    },
}
</script>
