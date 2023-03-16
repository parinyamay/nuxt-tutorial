<template>
    <AdminForm @sendData="onSubmitted" />
</template>

<script>
import AdminForm from '@/components/admin/AdminForm'

export default {
    components: { AdminForm },
    methods: {
        onSubmitted(postData) {
            this.$store.dispatch('addPost', postData).then((res) => {
                this.$router.push('/admin/posts')
            })
        },
    },
}
</script>
