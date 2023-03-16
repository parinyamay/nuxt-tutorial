<template>
    <div>
        <b-carousel id="slider" controls indicators>
            <div v-for="item in items" :key="item.caption">
                <b-carousel-slide :caption="item.caption" :text="item.text" :img-src="item.image" />
            </div>
        </b-carousel>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            items: [
                {
                    caption: 'First slide',
                    text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
                    image: require('@/assets/jumbotron1.png'),
                },
                {
                    caption: 'Secode slide',
                    text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
                    image: require('@/assets/jumbotron2.png'),
                },
                {
                    caption: 'Third slide',
                    text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
                    image: require('@/assets/jumbotron3.png'),
                },
            ],
        }
    },
}
</script>
