<template>
    <div v-for="product in store.products">
        <SliderComponent :image="product.images[this.index]" @next-image="goNext" @previous-image="goBack" />
    </div>
</template>

<script>
import { store } from '../data/store.js';
import SliderComponent from './SliderComponent.vue';
    export default {
        name: 'SingleProduct',
        components: {
            SliderComponent
        },
        data() {
            return {
                store,
                index: 0
            }
        },
        methods: {
            goNext() {
                for(let i = 0; i < store.products.length; i++) {
                    if(this.index < store.products[i].images.length -1) {
                        this.index++
                    }
                    else {
                        this.index = 0;
                    }
                    console.log(store.products[i].images[this.index])
                }
            },
            goBack() {
                for(let i = 0; i < store.products.length; i++) {
                    if(this.index > 0) {
                        this.index--
                    }
                    else {
                        this.index = 3;
                    }
                    console.log(store.products[i].images[this.index])
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>