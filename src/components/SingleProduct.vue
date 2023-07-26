<template>
    <div v-for="product in store.products">
        <SliderComponent :image="product.images[this.index]" @next-image="goNext" @previous-image="goBack" />
        <div class="product-info p-3">
            <h6 class="text-uppercase">{{ product.brand }}</h6>
            <h1 class="fw-semibold">{{ product.name }}</h1>
            <p>{{ product.description }}</p>
        </div>
        <div class="product-price d-flex justify-content-between align-items-center px-3">
            <div class="discounted d-flex align-items-center gap-3">
                <h2 class="fw-semibold m-0">${{ this.discountPrice }}</h2>
                <div class="badge">
                    <span class="fs-6">{{ product.discount }}%</span>
                </div>
            </div>
            <div class="list-price">
                <span class="text-decoration-line-through fw-semibold">${{ product.price }}</span>
            </div>
        </div>
        <div class="quantity-selector mt-4 mx-3 px-3 py-1 d-flex align-items-center justify-content-between">
            <span class="subtract" @click="chooseQuantity('decrease')">-</span>
            <span class="fw-semibold">{{ this.quantityChoosed }}</span>
            <span class="add" @click="chooseQuantity('increase')">+</span>
        </div>
        <div class="add2cart d-flex justify-content-center align-items-center mx-3 mt-3">
            <button class="btn text-white" @click="addToCart">
                <img src="img/icon-cart.svg" alt="icon-cart">
                Add to cart
            </button>
        </div>
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
                index: 0,
                discountPrice: undefined,
                quantityChoosed: 0
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
            },
            discountCalculator() {
                for(let i = 0; i < store.products.length; i++) {
                    this.discountPrice = (store.products[i].price * store.products[i].discount / 100).toFixed(2);
                }
            },
            chooseQuantity(qty) {
                if(qty === 'increase'){
                    this.quantityChoosed++
                }
                else if(qty === 'decrease' && this.quantityChoosed > 0){
                    this.quantityChoosed--
                }
                else{
                    this.quantityChoosed = 0
                }
            },
            addToCart() {
                store.quantityAdded = this.quantityChoosed
            }
        },
        mounted() {
            this.discountCalculator()
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/variables' as *;

    h6{
        color: $orange;
        font-size: 14px;
        font-weight: 700;
    }
    .discounted{
        .badge{
            background-color: $pale-orange;
            span{
                color: $orange;
            }
        }
    }
    .list-price{
        color: $grayish-blue
    }
    .quantity-selector{
        background-color: $light-grayish-blue;
        border-radius: 10px;
        .add, .subtract{
            font-size: 30px;
            font-weight: 700;
            color: $orange;

        }
    }
    .add2cart{
        button{
            background-color: $orange;
            width: 100%;
            padding: 14px 0;
            border-radius: 10px;
        }
        img{
            filter: brightness(0) invert(1);
        }
    }
</style>