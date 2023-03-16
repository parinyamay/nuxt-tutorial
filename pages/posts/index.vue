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
    data() {
        return {
            loadData: [
                {
                    id: '1',
                    title: 'Card 1',
                    content: 'Sampler text...',
                    image: 'https://picsum.photos/600/300/?image=20',
                },
                {
                    id: '2',
                    title: 'Card 2',
                    content: 'Sampler text...',
                    image: 'https://picsum.photos/600/300/?image=21',
                },
                {
                    id: '3',
                    title: 'Card 3',
                    content: 'Sampler text...',
                    image: 'https://picsum.photos/600/300/?image=22',
                },
                {
                    id: '4',
                    title: 'Card 4',
                    content: 'Sampler text...',
                    image: 'https://picsum.photos/600/300/?image=23',
                },
            ],
        }
    },
}
</script>
