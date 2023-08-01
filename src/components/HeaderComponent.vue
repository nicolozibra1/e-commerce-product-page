<template>
    <header class="container">
        <nav class="d-flex justify-content-between align-items-center p-4">
            <div class="d-flex align-items-center gap-3">
                <div class="hamburger">
                    <svg v-if="this.menuOpen === false" @click="toggleMenu" width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fill-rule="evenodd"/></svg>
                    <div v-if="this.menuOpen === true">
                        <div class="menu-open">
                            <img src="/img/icon-close.svg" alt="icon-close" class="mb-5 mt-2 ms-2" @click="toggleMenu">
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
                    <img src="/img/logo.svg" alt="logo">
                </div>
                <div class="navbar-desk d-none">
                    <ul class="d-flex align-content-center text-capitalize list-unstyled m-0 h-100">
                        <li>collections</li>
                        <li>men</li>
                        <li>women</li>
                        <li>about</li>
                        <li>contact</li>
                    </ul>
                </div>
            </div>
            <div class="d-flex align-items-center gap-3">
                <div class="cart" @click="toggleCart">
                    <img src="/img/icon-cart.svg" alt="cart">
                    <BadgeCounter v-if="store.quantityAdded > 0" :count="store.quantityAdded" class="badge" />
                </div>
                <div class="user-picture d-flex align-items-center pt-1">
                    <img src="/img/image-avatar.png" alt="avatar" class="w-100">
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import { store } from '../data/store';
import BadgeCounter from './BadgeCounter.vue';

    export default {
        name: 'HeaderComponent',
        components: {
            BadgeCounter
        },
        data() {
            return{
                store,
                menuOpen: false,
            }
        },
        methods: {
            toggleMenu() {
                this.menuOpen = !this.menuOpen
                console.log(this.menuOpen)
            },
            toggleCart(){
                store.cartOpen = !store.cartOpen
            }
        }
        
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
    ul{
        li{
            &:hover{
                color: $black;
                cursor: pointer;
                transition: color 0.5s;
            }
        }
    }
    .cart{
        position: relative;
        &:hover{
            cursor: pointer;
            scale: 1.2;
            transition: scale 0.5s;
        }
        img{
            &:hover{
                filter: brightness(0);
            }        
        }
        .badge{
            position: absolute;
            left: 50%;
        }
    }
    .user-picture{
        max-width: 25px;
        max-height: 25px;
        img{
            border: 2px solid transparent;
            border-radius: 50%;
            &:hover{
                cursor: pointer;
                border: 2px solid $orange;
                transition: border 0.5s;
            }
        }   
    }
    .menu-open{
        background-color: white;
        height: 100vh;
        width: 65%;
        position: absolute;
        top: 0;
        left: 0;
        padding: 25px 30px;
        z-index: 999;
    }
    .layover{
        height: 100vh;
        width: 35%;
        position: absolute;
        top: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.450);
        z-index: 999;
    }
    @media screen and (min-width: 992px) {
        .hamburger{
            display: none;
        }
        .navbar-desk{
            color: $dark-grayish-blue;
            height: 100px;
            display: flex !important;
            align-items: center !important;
            li{ 
                padding: 0 20px;
                display: flex;
                align-items: center;         
                border: 2px solid transparent;
                &:hover{
                    border-bottom: 2px solid $orange;
                    transition: border-bottom 0.3s ease-in-out;
                }
            }
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
            padding: 0;
            border-bottom: 1px solid $grayish-blue;
        }
        nav{
            height: 100px;
            padding: 0 !important;
        }
    }
</style>