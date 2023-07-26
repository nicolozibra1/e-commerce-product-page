<template>
    <div class="slider">
        <div class="box-image">
            <img :src="'img/' + image">
        </div>
        <div class="icon d-flex justify-content-between">
            <div @click="goBack" class="previous d-flex justify-content-center align-items-center ms-3">
                <img src="img/icon-previous.svg" alt="previous">
            </div>
            <div @click="goNext" class="next d-flex justify-content-center align-items-center me-3">
                <img src="img/icon-next.svg" alt="next">
            </div>
        </div>
    </div>
    <div class="thumbnail d-none w-100">
        <div class="d-flex justify-content-between mt-5" v-for="product in store.products">
            <div class="box-thumb" v-for="(item,index) in product.images">
                <img :src="'img/' + item" :alt="product.name">
            </div>
        </div>
    </div>
    
</template>

<script>
import {store} from '../data/store.js'
    export default {
        name: 'SliderComponent',
        props: ['image'],
        data() {
            return {
                store
            }
        },
        methods: {
            goNext() {
                this.$emit('next-image')
            },
            goBack() {
                this.$emit('previous-image')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .slider{
        position: relative;
        .box-image{
            width: 100%;
            height: 35vh;
            overflow: hidden;
            @media screen and (min-width: 768px) {
                height: 55vh;
            }
            @media screen and (min-width: 1440px) {
                border-radius: 20px;
            }
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
            }
        }
        .icon{
            position: absolute;
            top: calc(50% - 20px);
            left: 0;
            width: 100%;
            @media screen and (min-width: 1440px) {
                display: none !important;
            }
            .previous, .next{
                width: 40px;
                height: 40px;
                background-color: white;
                border-radius: 50%;
                img{
                    width: 25%;
                }
            }
        }
    }
    .thumbnail{
        @media screen and (min-width: 1440px) {
            display: inline-block !important;
        }
        .box-thumb{
            width: 100px;
            height: 100px;
            border-radius: 10px;
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    
</style>