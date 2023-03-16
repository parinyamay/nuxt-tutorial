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
        return axios
            .get('https://nuxt-tutorial-1f803-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
            .then((res) => {
                console.log(res.data)
                const data = []
                for (const key in res.data) {
                    data.push({ ...res.data[key], id: key })
                }
                return {
                    loadData: data,
                }
            })
    },
    data() {
        return {
            loadData: [],
        }
    },
    // Async Await and Promise
    // methods: {
    //     async postsAll() {
    //         console.log('loading...')
    //         await this.getData().then((result) => {
    //             console.log(result)
    //         })
    //         console.log('loaded...')
    //     },

    //     getData() {
    //         return new Promise((resolve, reject) => {
    //             setTimeout(() => {
    //                 const res = axios
    //                     .get('https://nuxt-tutorial-1f803-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
    //                     .then((res) => {
    //                         return res
    //                     })
    //                 resolve(res)
    //             }, 4000)
    //         })
    //     },
    // },
}
</script>
