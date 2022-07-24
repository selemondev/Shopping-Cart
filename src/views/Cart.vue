<script setup lang="ts">
import { watchEffect, ref } from 'vue';
import { useProductStore } from '@/stores/productStore';
import type { ProductTypes } from '@/Types/productStoreTypes';
const store = useProductStore()
const products = ref<ProductTypes[]>([]);
watchEffect(() => {
  products.value = store.cart;
});
</script>
<template>
  <div class="overflow-y-auto h-96 py-2 px-4">
    <div v-if="store.cartQuantity === 0" class="mt-32 grid place-items-center">
    <h2 class="font-bold text-2xl">Your Cart Is Empty</h2>
    </div>
    <div v-else v-for="product in products" :key="product.id" class="max-h-96 py-2 space-y-2 bg-gray-100 border border-gray-200 rounded-md w-full grid place-items-center px-6 my-4 md:px-4 md:h-32 md:flex md:justify-between md:items-center md:space-y-0">
    <div>
      <img :src="product.image" :alt="product.title" class="w-28 h-28 rounded-md">
    </div>

    <div>
      <p>{{product.title}}</p>
    </div>

    <div>
      <p class="font-bold">Price: ${{product.price}}</p>
    </div>

    <div>
      <span>Quantity: {{ store.itemQuantity(product)}}</span>
    </div>

    <div class="flex items-center space-x-2">
      <button @click="store.removeFromCart(product)" class="py-1 rounded-md px-2 bg-yellow-500 hover:bg-yellow-600">-</button>
      <p>{{store.itemQuantity(product)}}</p>
      <button @click="store.addToCart(product)" class="py-1 rounded-md px-2 bg-yellow-500 hover:bg-yellow-600">+</button>
    </div>
    </div>
  </div>
      <div v-if="store.cartQuantity > 0" class="mt-10 w-full grid place-items-center bg-white absolute z-5 md:mt-20">
        <p class="font-bold text-2xl">Total: ${{store.productTotal.toFixed(2)}}</p>
    </div>
</template>