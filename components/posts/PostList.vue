<template>
    <b-row class="py-2">
        <PostContent
            v-for="post in posts"
            :id="post.id"
            :key="post.id"
            :title="post.title"
            :content="post.content"
            :image="post.image"
            :is-admin="isAdmin"
        />
    </b-row>
</template>

<script>
import PostContent from '@/components/PostContent.vue'

export default {
    components: { PostContent },
    props: {
        isAdmin: {
            type: Boolean,
            default: false,
        },
        posts: {
            type: Array,
            required: true,
        },
    },
}
</script>
