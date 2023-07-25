<template>
    <header class="container">
        <nav class="d-flex justify-content-between align-items-center p-4">
            <div class="d-flex align-items-center gap-3">
                <div class="hamburger">
                    <img src="img/icon-menu.svg" alt="hamburger-menu">
                </div>
                <div class="box-logo d-flex align-items-center">
                    <img src="img/logo.svg" alt="logo">
                </div>
                <div class="navbar-desk d-none">
                    <ul class="d-flex text-capitalize list-unstyled gap-4 m-0">
                        <li>collections</li>
                        <li>men</li>
                        <li>women</li>
                        <li>about</li>
                        <li>contact</li>
                    </ul>
                </div>
            </div>
            <div class="d-flex align-items-center gap-3">
                <div class="cart">
                    <img src="img/icon-cart.svg" alt="cart">
                </div>
                <div class="user-picture d-flex align-items-center pt-1">
                    <img src="img/image-avatar.png" alt="avatar" class="w-100">
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent'
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
    .debug{
        border: 1px solid red;
    }
    .user-picture{
        max-width: 25px;
        max-height: 25px;
    }
    @media screen and (min-width: 992px) {
        .hamburger{
            display: none;
        }
        .navbar-desk{
            display: inline-block !important;
            color: $dark-grayish-blue;
        }
        .user-picture{
            max-width: 50px;
            max-width: 50px;
            margin-left: 40px;
        }
        .box-logo{
            margin-right: 40px;
        }
    }
</style>