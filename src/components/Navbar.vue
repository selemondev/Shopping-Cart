<script setup lang="ts">
import { useProductStore } from '@/stores/productStore';
const store = useProductStore()
</script>
<template>
<header>
    <nav class="w-full h-14 bg-gray-100 flex justify-between items-center px-2">
        <div class="flex items-center space-x-1">
            <img src="https://pinia.vuejs.org/logo.svg" alt="Pinia" class="w-10 h-10">
            <h1 class="font-bold text-base md:text-2xl">Store</h1>
        </div>
        <div>
            <div class="w-5.5 h-5.5 rounded-full text-center bg-red-500">
                <span class="text-white text-sm">{{store.cartQuantity}}</span>
            </div>
            <h4 class="text-xl"><router-link to="/cart"><i class="fas fa-shopping-cart"></i></router-link></h4>
        </div>
    </nav>
</header>
</template>