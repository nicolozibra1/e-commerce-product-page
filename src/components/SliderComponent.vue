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
            <div class="box-thumb" :class="{'selected' : store.imageSelected === index}" v-for="(item,index) in product.images" @click="currentImage(index)">
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
            },
            currentImage(index) {
                store.imageSelected = index;
                this.$emit('selected')
                console.log(index)
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
    .slider{
        position: relative;
        .box-image{
            width: 100%;
            height: 35vh;
            overflow: hidden;
            @media screen and (min-width: 576px) {
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
            border-radius: 15px;
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .selected{
            border: 3px solid $orange;
            img{
                opacity: 0.40;
            }
        }
    }
    
</style>