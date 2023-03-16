<template>
    <b-container fluid>
        <Header />
        <PostList :posts="loadData" />
    </b-container>
</template>

<script>
import Header from '@/components/Header'
import PostList from '@/components/posts/PostList'

export default {
    components: { Header, PostList },
    computed: {
        loadData() {
            console.log(this.$store.getters.getAllPosts)
            return this.$store.getters.getAllPosts
        },
    },
}
</script>
