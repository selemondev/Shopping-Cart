import { defineStore, acceptHMRUpdate} from "pinia";
import axios from "axios";
import type { ProductTypes } from "../Types/productStoreTypes";
export const useProductStore = defineStore({
    id: "productStore",
    state: () => ({
        products: [] as ProductTypes[],
        cart: JSON.parse(localStorage.getItem('cart') as string) ? localStorage.getItem('cart') : [],
    }),

    getters: {
        cartQuantity: (state) => {
            return state.cart?.length
        }
    },

    actions: {
        async fetchProducts() {
            const response = await axios.get("https://fakestoreapi.com/products");
            response.data.map((product:ProductTypes) => {
                this.products.push(product)
            });
        }
    }
});

if(import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
}