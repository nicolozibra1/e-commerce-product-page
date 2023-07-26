<template>
    <header class="container">
        <nav class="d-flex justify-content-between align-items-center p-4">
            <div class="d-flex align-items-center gap-3">
                <div class="hamburger">
                    <img src="img/icon-menu.svg" alt="hamburger-menu" v-if="this.menuOpen === false" @click="toggleMenu">
                    <div v-if="this.menuOpen === true">
                        <div class="menu-open">
                            <img src="img/icon-close.svg" alt="icon-close" class="mb-5 mt-2 ms-2" @click="toggleMenu">
                            <ul class="d-flex flex-column fw-semibold text-capitalize list-unstyled gap-4 mb-0 ms-2">
                                <li>collections</li>
                                <li>men</li>
                                <li>women</li>
                                <li>about</li>
                                <li>contact</li>
                            </ul>
                        </div>
                        <div class="layover"></div>
                    </div>
                </div>
                <div class="box-logo d-flex align-items-center" v-if="this.menuOpen === false">
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
        name: 'HeaderComponent',
        data() {
            return{
                menuOpen: false,
            }
        },
        methods: {
            toggleMenu() {
                this.menuOpen = !this.menuOpen
                console.log(this.menuOpen)
            }
        }
        
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
    .menu-open{
        height: 100vh;
        width: 65%;
        position: absolute;
        top: 0;
        left: 0;
        padding: 25px 30px;
    }
    .layover{
        height: 100vh;
        width: 35%;
        position: absolute;
        top: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.450);
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
    @media screen and (min-width: 1440px) {
        header{
            padding: 20px 0;
            border-bottom: 1px solid $grayish-blue;
        }
        nav{
            padding: 20px 0 !important;
        }
    }
</style>