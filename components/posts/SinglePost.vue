<template>
    <b-container fluid="md" class="py-2">
        <b-row>
            <b-col lg="12" class="py-5">
                <h1 class="mt-4">{{ post.title }}</h1>
                <p>
                    by <strong>{{ post.author }}</strong>
                </p>
                <hr />
                <b-img :src="post.image" style="width: 100%; height: auto"></b-img>
                <hr />
                <p>{{ post.content }}</p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            singlePost: { ...this.post },
        }
    },
}
</script>
