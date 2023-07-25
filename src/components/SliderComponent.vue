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
            height: 320px;
            overflow: hidden;
            img{
                width: 100%;
                object-fit: contain;
            }
        }
        .icon{
            position: absolute;
            top: calc(50% - 20px);
            left: 0;
            width: 100%;
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
    
</style>