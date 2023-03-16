<template>
    <AdminForm @sendData="onSubmitted" />
</template>

<script>
import axios from 'axios'
import AdminForm from '@/components/admin/AdminForm'

export default {
    components: { AdminForm },
    methods: {
        onSubmitted(postData) {
            const URL = 'https://nuxt-tutorial-1f803-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
            axios
                .post(URL, postData)
                .then((res) => {
                    console.log(res)
                    this.$router.push('/admin/posts')
                })
                .catch((err) => {
                    console.error(err.response.data)
                })
        },
    },
}
</script>
