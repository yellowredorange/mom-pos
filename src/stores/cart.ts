import { defineStore } from 'pinia'
import { CartItem } from '@/interfaces/CartItem'
import { Menu } from '@/interfaces/Menu'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as CartItem[],
  }),
  getters: {
    cartItems: (state) => state.cart,
    cartTotal: (state) => {
      return state.cart.reduce((total, item) => {
        return total + item.price * item.quantity
      }, 0)
    },
  },
  actions: {
    addToCart(item: Menu) {
      const cartItem: CartItem = {
        ...item,
        quantity: 1, // 默認數量為1
      }
      const existingItem = this.cart.find((i) => i.menu_id === cartItem.menu_id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        this.cart.push(cartItem)
      }
    },
    increaseQuantity(menu_id: number) {
      const item = this.cart.find((i) => i.menu_id === menu_id)
      if (item) {
        item.quantity += 1
      }
    },
    decreaseQuantity(menu_id: number) {
      const item = this.cart.find((i) => i.menu_id === menu_id)
      if (item && item.quantity > 1) {
        item.quantity -= 1
      }
    },
    removeFromCart(menu_id: number) {
      const index = this.cart.findIndex((item) => item.menu_id === menu_id)
      if (index !== -1) {
        this.cart.splice(index, 1)
      }
    },
    clearCart() {
      this.cart = []
    },
  },
})
