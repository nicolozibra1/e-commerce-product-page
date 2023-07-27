<template>
  <HeaderComponent />
  <SingleProduct />
  <div v-if="store.cartOpen" class="cart-container d-flex justify-content-center">
    <CartComponent v-for="product in store.cart" :image="product.images[0]" :name="product.name" :price="product.finalPrice" class="cart" />
  </div>
</template>

<script>
import { store } from './data/store.js';
import HeaderComponent from './components/HeaderComponent.vue';
import SingleProduct from './components/SingleProduct.vue';
import CartComponent from './components/CartComponent.vue';

  export default {
    name: 'App',
    components: {
      HeaderComponent,
      SingleProduct,
      CartComponent
    },
    data() {
      return {
        store
      }
    }
  }
</script>

<style lang="scss" scoped>
    .cart{
      position: absolute;
      top: 10%;
    }
</style>
