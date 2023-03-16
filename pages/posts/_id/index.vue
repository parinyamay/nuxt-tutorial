<template>
    <SinglePost :post="singlePost" @sendData="onSubmitted" />
</template>

<script>
import axios from 'axios'
import SinglePost from '@/components/posts/SinglePost'

export default {
    components: { SinglePost },
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
}
</script>
