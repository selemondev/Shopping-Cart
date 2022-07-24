<script setup lang="ts">
import { watchEffect, ref } from 'vue';
import { useProductStore } from '@/stores/productStore';
import type { ProductTypes } from "../Types/productStoreTypes";
import Loader from '@/components/Loader.vue';
const store = useProductStore();
const products = ref<ProductTypes[]>([]);
const loading = ref(false);
watchEffect(() => {
  store.fetchProducts();
});
watchEffect(() => {
  products.value = store.products;
  loading.value = store.loading;
});

</script>

<template>
  <main class="flex justify-center items-center flex-wrap">
    <div v-if="loading">
      <Loader/>
    </div>
    <div v-else v-for="product in products" :key="product.id" class="px-4 border border-gray-200 rounded-sm w-80 m-10">
    <div class="grid place-items-center">
      <img :src="product.image" :alt="product.title" class="w-48 h-48 md:w-64 md:h-64">
    </div>

    <div class="space-y-4">
      <div>
        <h1 class="font-bold">{{product.title}}</h1>
      </div>
      <div>
          <h4 class="font-bold">Price: ${{product.price}}</h4>
      </div>

      <div>
        <button @click="store.addToCart(product)" class="bg-black hover:bg-white hover:text-black mb-2 transition duration-200 ease-in border border-black text-white py-1.5 px-2 rounded-md">Add To Cart</button>
      </div>
    </div>
    </div>
  </main>
</template>
