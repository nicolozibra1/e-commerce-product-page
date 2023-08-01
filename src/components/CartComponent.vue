<template>
    <div class="cart" v-if="store.cart.length > 0">
        <div class="card border-light rounded-3">
            <div class="card-header bg-white d-flex align-items-center p-3">
                <h6 class="text-capitalize fw-semibold m-0">cart</h6>
            </div>
            <div class="card-body p-4">
                <div class="row my-3" v-if="store.cart.length > 0">
                    <div class="col-12 product d-flex justify-content-between align-items-center">
                        <img :src="'img/' + image" :alt="name">
                        <div class="product-detail">
                            <span class="product-name">{{ name }}</span>
                            <div class="product-price d-flex">
                                <span>${{ price }}</span>
                                <div v-if="store.quantityAdded > 1" class="quantity-added">
                                    <span class="ps-1">x {{ store.quantityAdded }}</span>
                                    <span class="ps-2 fw-semibold text-black">${{ store.totalProductPrice }} </span>
                                </div>
                            </div>
                        </div>
                        <img src="img/icon-delete.svg" alt="icon-delete" class="icon" @click="removeProduct(index)">
                    </div>
                </div>
                <button class="btn checkout text-capitalize text-white fw-semibold my-2">checkout</button>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store.js';
export default {
    name: 'CartComponent',
    props: ['image', 'name', 'price'],
    data() {
        return {
            store,
            qtyTotalPrice: undefined
        }
    },
    methods: {
        removeProduct(index) {
            store.cart.splice(index, 1);
            store.quantityAdded = 0;
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.cart {
    width: 95%;
    height: 30vh;
    @media screen and (min-width: 768px) {
        width: 70%;
    }
    @media screen and (min-width: 1440px) {
        width: 20%;
    }
    .card{
        box-shadow: rgba(17, 17, 26, 0.1) 0px 20px 40px, rgba(17, 17, 26, 0.1) 0px 24px 40px;
    }
    .product{
        color: $dark-grayish-blue;
        img{
            width: 50px;
            height: 50px;
            border-radius: 5px;
        }
        .icon{
            width: 15px;
            height: 20px;
            &:hover{
                cursor: pointer;
            }
        }
    }
    .checkout{
        background-color: $orange;
        width: 100%;
        padding: 14px 0;
        border-radius: 10px;
    }
}
</style>