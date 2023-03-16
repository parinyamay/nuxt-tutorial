<template>
    <b-container fluid>
        <PostList :posts="loadData" :is-admin="true" />
        <!-- <b-button @click="postsAll">Load...</b-button> -->
    </b-container>
</template>

<script>
import axios from 'axios'
import PostList from '@/components/posts/PostList'

export default {
    components: { PostList },
    asyncData(context) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const data = axios
                    .get('https://nuxt-tutorial-1f803-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
                    .then((res) => {
                        const postsData = []
                        for (const key in res.data) {
                            postsData.push({ ...res.data[key], id: key })
                        }
                        return {
                            loadData: postsData,
                        }
                    })
                resolve(data)
            }, 4000)
        })
    },
    data() {
        return {
            loadData: [],
        }
    },
}
</script>
