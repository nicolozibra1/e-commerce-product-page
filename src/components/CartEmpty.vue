<template>
    <div class="cart">
        <div class="card rounded-3">
            <div class="card-header bg-white d-flex align-items-center p-3">
                <h6 class="text-capitalize fw-semibold m-0">cart</h6>
            </div>
            <div class="card-body p-4">
                <div class="row my-3">
                    <div class="col-12 product d-flex justify-content-between align-items-center">
                        <h6 class="m-auto p-5">Your cart is empty.</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store.js';
export default {
    name: 'CartEmpty',
    data() {
        return {
            store,
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.cart {
    width: 95%;
    height: 30vh;
}
h6{
    color: $dark-grayish-blue;
    font-weight: 700;
}
</style>