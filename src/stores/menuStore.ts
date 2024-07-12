import { defineStore } from 'pinia';
import { MenuConfiguration, Category, MenuItem } from '../interfaces/Menu';
import { getAllMenus,submitOrder } from '../api/MosPosApi';
import { CreateOrderItem, CreateOrderRequest } from '@/interfaces/Order';
import { SelectedOption, CartItem } from '../interfaces/Order';


interface MenuState {
  menuConfigurations: MenuConfiguration[];
  currentMenuConfiguration: MenuConfiguration | null;
  currentCategory: Category | null;
  menuItems: MenuItem[];
  currentMenuItem: MenuItem | null;
  cart: CartItem[];
  loading: boolean;
  error: string | null;
  orderSuccess: boolean;
  lastSelectedCategory: number | null;
}

export const useMenuStore = defineStore('menu', {
  state: (): MenuState => ({
    menuConfigurations: [],
    currentMenuConfiguration: null,
    currentCategory: null,
    menuItems: [],
    currentMenuItem: null,
    cart: [],
    loading: false,
    error: null,
    orderSuccess: false,
    lastSelectedCategory: null
  }),

  getters: {
    categories: (state): Category[] => {
      return state.currentMenuConfiguration?.categories || [];
    },
    cartTotal(): number {
      return this.cart.reduce((total, item) => {
        const itemTotal = item.price * item.quantity;
        const optionsTotal = item.selectedOptions.reduce((optSum, opt) => optSum + opt.additionalPrice * item.quantity, 0);
        return total + itemTotal + optionsTotal;
      }, 0);},
    cartItemCount: (state) => {
      return state.cart.reduce((count, item) => count + item.quantity, 0);
    },
  },

  actions: {
    async fetchAllMenus() {
      this.loading = true;
      this.error = null;
      try {
        const data = await getAllMenus();
        this.menuConfigurations = data;
        if (this.menuConfigurations.length > 0) {
          this.setCurrentMenuConfiguration(this.menuConfigurations[0]);
        }
      } catch (error) {
        console.error('Error fetching menus:', error);
        this.error = 'Failed to fetch menu data';
      } finally {
        this.loading = false;
      }
    },

    setCurrentMenuConfiguration(menuConfiguration: MenuConfiguration) {
      this.currentMenuConfiguration = menuConfiguration;
      if (menuConfiguration.categories.length > 0) {
        this.setCurrentCategory(menuConfiguration.categories[0]);
      }
    },

    setCurrentCategory(category: Category) {
      this.currentCategory = category;
      this.menuItems = category.menuItems;
    },

    setCurrentMenuItem(itemId: number) {
      this.currentMenuItem = null;
      this.error = null;

      for (const category of this.categories) {
        const item = category.menuItems.find(item => item.menuItemId === itemId);
        if (item) {
          this.currentMenuItem = item;
          return;
        }
      }

      this.error = 'Menu item not found';
    },
    addToCart(menuItem: MenuItem, quantity: number, selectedOptions: SelectedOption[]) {
      const cartItemIndex = this.cart.findIndex(item => 
        item.menuItemId === menuItem.menuItemId &&
        JSON.stringify(item.selectedOptions) === JSON.stringify(selectedOptions)
      );

      const totalPrice = this.calculateTotalPrice(menuItem, quantity, selectedOptions);

      if (cartItemIndex !== -1) {
        // Update existing item
        this.cart[cartItemIndex].quantity += quantity;
        this.cart[cartItemIndex].totalPrice += totalPrice;
      } else {
        // Add new item
        this.cart.push({
          menuItemId: menuItem.menuItemId,
          name: menuItem.name,
          price: menuItem.price,
          quantity,
          selectedOptions,
          totalPrice,
          description: '',
          isActive: false,
          photoUrl: '',
          sortOrder: 0,
          categoryId: 0,
          menuItemOptions: []
        });
      }
    },

    updateCartItemQuantity(index: number, newQuantity: number) {
      const item = this.cart[index];
      if (item) {
        item.quantity = newQuantity;
        item.totalPrice = this.calculateTotalPrice(item, newQuantity, item.selectedOptions);
      }
    },

    removeFromCart(index: number) {
      this.cart.splice(index, 1);
    },

    calculateTotalPrice(item: MenuItem | CartItem, quantity: number, selectedOptions: SelectedOption[]): number {
      const basePrice = item.price;
      const optionsPrice = selectedOptions.reduce((sum, option) => sum + option.additionalPrice, 0);
      return (basePrice + optionsPrice) * quantity;
    },


    clearCart() {
      this.cart = [];
    },
    async submitOrder() {
      this.loading = true;
      this.error = null;
      this.orderSuccess = false;
      try {
        const orderData: CreateOrderRequest = {
          items: this.cart.map(item => ({
            menuItemId: item.menuItemId,
            quantity: item.quantity,
            unitPrice: item.price,
            options: item.menuItemOptions ? item.menuItemOptions.map(option => option.option) : []
          }))
        };
        console.log('Submitting order data:', JSON.stringify(orderData));
        await submitOrder(orderData);
        this.orderSuccess = true;
        this.clearCart();
      } catch (error) {
        console.error('Error submitting order:', error);
        this.error = 'Failed to submit order';
      } finally {
        this.loading = false;
      }
    },
    async checkout() {
      try {
        const orderItems: CreateOrderItem[] = this.cart.map(item => ({
          menuItemId: item.menuItemId,
          quantity: item.quantity,
          unitPrice: item.price,
          options: item.selectedOptions.map(opt => ({
            optionCategory: opt.category,
            optionName: opt.option,
            additionalPrice: opt.additionalPrice
          }))
        }));

        const orderRequest: CreateOrderRequest = {
          items: orderItems,
          totalAmount: this.cartTotal
        };

        const response = await submitOrder(orderRequest);
        
        if (response) {
          // 清空購物車
          this.cart = [];
          this.orderSuccess = true;
          return response;
        }
      } catch (error) {
        console.error('Checkout failed:', error);
        this.error = 'Checkout failed. Please try again.';
        throw error;
      }
    }
  },
});