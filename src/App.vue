<template>
  <HeaderComponent />
  <SingleProduct />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import SingleProduct from './components/SingleProduct.vue';

  export default {
    name: 'App',
    components: {
      HeaderComponent,
      SingleProduct
    }
  }
</script>

<style lang="scss" scoped>

</style>
