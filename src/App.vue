<template>
  <HeaderComponent />
  <SingleProduct />
  <div v-if="store.cartOpen && store.cart.length > 0" class="cart-container d-flex justify-content-center">
    <CartComponent v-for="product in store.cart" :image="product.images[0]" :name="product.name" :price="product.finalPrice" class="cart" />
  </div>
  <div v-if="store.cartOpen && store.cart.length === 0" class="cart-container d-flex justify-content-center">
    <CartEmpty class="cart" />
  </div>
</template>

<script>
import { store } from './data/store.js';
import HeaderComponent from './components/HeaderComponent.vue';
import SingleProduct from './components/SingleProduct.vue';
import CartComponent from './components/CartComponent.vue';
import CartEmpty from './components/CartEmpty.vue';

  export default {
    name: 'App',
    components: {
      HeaderComponent,
      SingleProduct,
      CartComponent,
      CartEmpty
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
      @media screen and (min-width: 1440px) {
        right: 10%;
      }
    }
</style>
