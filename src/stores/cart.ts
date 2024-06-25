// src/stores/cart.ts
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as Array<{ id: number; name: string; price: string }>,
  }),
  getters: {
    cartItems: (state) => state.cart,
    cartTotal: (state) =>
      state.cart.reduce(
        (total, item) => total + parseFloat(item.price.replace('$', '')),
        0,
      ),
  },
  actions: {
    addToCart(item: { id: number; name: string; price: string }) {
      this.cart.push(item)
    },
    removeFromCart(index: number) {
      this.cart.splice(index, 1)
    },
  },
})
