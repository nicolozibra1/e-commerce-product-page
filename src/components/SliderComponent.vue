<template>
    <div class="slider">
        <div class="box-image">
            <img :src="'img/' + image" @click="toggleFullscreen">
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
    
    <div class="slider-fullscreen d-none" v-if="this.fullscreen">
        <div class="close d-flex justify-content-end mb-3">
            <img src="img/icon-close.svg" alt="icon-close" @click="toggleFullscreen" >
        </div>
        <div class="box-image">
            <img :src="'img/' + image">
        </div>
        <div class="icon d-flex justify-content-between">
            <div @click="goBack(index)" class="previous d-flex justify-content-center align-items-center ms-3">
                <img src="img/icon-previous.svg" alt="previous">
            </div>
            <div @click="goNext(index)" class="next d-flex justify-content-center align-items-center me-3">
                <img src="img/icon-next.svg" alt="next">
            </div>
        </div>
        <div class="thumbnail-fullscreen w-100">
            <div class="box-container d-flex justify-content-center gap-4 mt-5" v-for="product in store.products">
                <div class="box-thumb" :class="{'selected' : store.imageSelected === index}" v-for="(item,index) in product.images" @click="currentImage(index)">
                    <img :src="'img/' + item" :alt="product.name">
                </div>
            </div>
        </div>
    </div>

    <div class="layover d-none" v-if="this.fullscreen"></div>
    
</template>

<script>
import {store} from '../data/store.js'
    export default {
        name: 'SliderComponent',
        props: ['image'],
        data() {
            return {
                store,
                fullscreen: false,
                index: 0
            }
        },
        methods: {
            goNext() {
                this.$emit('next-image')
                if(this.index < 3) {
                    this.index++
                }
                else{
                    this.index = 0
                }
                this.currentImage(this.index)
            },
            goBack() {
                this.$emit('previous-image')
                if(this.index > 0) {
                    this.index--
                }
                else{
                    this.index = 3
                }
                this.currentImage(this.index)
            },
            currentImage(index) {
                this.index = index
                store.imageSelected = this.index;
                this.$emit('selected')
                console.log(index)
                console.log(this.index)
            },
            toggleFullscreen() {
                this.fullscreen = !this.fullscreen
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
                &:hover{
                    cursor: pointer;
                }
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
                &:hover{
                    cursor: pointer;
                    opacity: 0.70;
                }
            }
        }
        .selected{
            border: 3px solid $orange;
            img{
                opacity: 0.40;
            }
        }
    }

    @media screen and (min-width: 1440px) {
        .slider-fullscreen, .layover{
            display: block !important;
        }
    }

    // SLIDER FULLSCREEN
    .slider-fullscreen{
        position: absolute;
        top: 50%;
        left: 50%;
        max-height: 100vh;
        transform: translate(-50%, -50%);
        z-index: 9999;
        padding: 40px;
        @media screen and (max-height: 850px ) {
            display: flex !important;
        }
        img{
            position: relative;
            max-width: 600px;
            max-height: 600px;
            border-radius: 20px;
        }
        .close{
            &:hover{
                cursor: pointer;
            }
            @media screen and (max-height: 850px ) {
                position: absolute;
                right: 0;
            }
            img{
                width: 25px;
                height: 25px;
                filter: brightness(0) invert(1);
                &:hover{
                    filter: sepia(100%) hue-rotate(-25deg);
                }
            }
        }
        .icon{
            position: absolute;
            top: 40%;
            left: 0;
            width: 100%;
            @media screen and (max-height: 850px) {
                width: 60px;
                height: 100%;
                top: 0;
                left: calc(50% - 100px) ;
                display: flex;
                flex-direction: column;
            }
            .previous, .next{
                width: 60px;
                height: 60px;
                background-color: white;
                border-radius: 50%;
                &:hover{
                    cursor: pointer;
                }
                img{
                    width: 25%;
                }
                @media screen and (max-height: 850px) {
                    transform: rotate(90deg);
                    margin: 0 !important;
                }
            }
        }
    }
    .thumbnail-fullscreen{
        .box-container{
            @media screen and (max-height: 850px) {
                flex-direction: column !important;
                margin-left: 30px;
            }
        }
        .box-thumb{
            width: 100px;
            height: 100px;
            border-radius: 15px;
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
                &:hover{
                    cursor: pointer;
                    opacity: 0.70;
                }
            }
        }
        .selected{
            border: 3px solid $orange;
            img{
                opacity: 0.40;
            }
        }
    }
    .layover{
        height: 100vh;
        width: 100vw;
        position: absolute;
        top: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.700);
        z-index: 999;
    }
</style>