<template>
    <AdminForm :post="singlePost" @sendData="onSubmitted" />
</template>

<script>
import axios from 'axios'
import AdminForm from '@/components/admin/AdminForm'

export default {
    components: { AdminForm },
    asyncData(context) {
        return axios
            .get(
                'https://nuxt-tutorial-1f803-default-rtdb.asia-southeast1.firebasedatabase.app/posts/' +
                    context.params.id +
                    '.json'
            )
            .then((res) => {
                return {
                    singlePost: { ...res.data, id: context.params.id },
                }
            })
            .catch((err) => {
                context.error(err)
            })
    },
    methods: {
        onSubmitted(postData) {
            this.$store.dispatch('addPost', postData).then((res) => {
                this.$router.push('/admin/posts')
            })
        },
    },
}
</script>
