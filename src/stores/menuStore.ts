import { defineStore } from 'pinia';
import { MenuConfiguration, Category, MenuItem } from '../interfaces/Menu';
import { addMenuItem, getAllMenus,getOrderHistory,removeMenuItem,submitOrder, updateCategory, updateMenuItem } from '../api/MosPosApi';
import { OrderItem, CreateOrderRequest, OrderResponse } from '@/interfaces/Order';
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
  lastChecked: number | null;
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
    lastSelectedCategory: null as number | null,
    lastChecked: null as number | null,
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
    async checkMenuUpdate() {
      const now = Date.now();
      if (this.lastChecked && now - this.lastChecked < 24 *60 * 60 * 1000) {
        return;
      }
      await this.fetchAllMenus();
      this.lastChecked = now;
    },
    async fetchAllMenus() {
      this.loading = true;
      this.error = null;
      try {
        const data = await getAllMenus();
        data.forEach(menuConfig => {
          menuConfig.categories.forEach(category => {
            category.menuItems.forEach(item => {
              item.categoryId = category.categoryId;
            });
          });
        });
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
    setCurrentCategory(category: Category | number | null) {
      if (typeof category === 'number') {
        this.currentCategory = this.categories.find(c => c.categoryId === category) || null;
      } else {
        this.currentCategory = category;
      }
      if (this.currentCategory) {
        this.menuItems = this.currentCategory.menuItems.map(item => ({
          ...item,
          categoryId: this.currentCategory!.categoryId
        }));
        this.lastSelectedCategory = this.currentCategory.categoryId;
      }
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
        this.cart[cartItemIndex].quantity += quantity;
        this.cart[cartItemIndex].totalPrice += totalPrice;
      } else {
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
    async checkout() {
      try {
        const orderItems: OrderItem[] = this.cart.map(item => ({
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
          items: orderItems
        };
        const response = await submitOrder(orderRequest);

        if (response) {
          this.cart = [];
          this.orderSuccess = true;
          return response;
        }
      } catch (error) {
        console.error('Checkout failed:', error);
        this.error = 'Checkout failed. Please try again.';
        throw error;
      }
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
            options: item.selectedOptions.filter(option => option.option !== '').map(option => ({
              optionCategory: option.category,
              optionName: option.option}))
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
    async getAllOrders(): Promise<OrderResponse[]>  {
      try {
        return await getOrderHistory();
      } catch (error) {
        console.error('Error fetching order history:', error);
        throw error;
      }
    },
async addMenuItem(menuItem: Omit<MenuItem, 'menuItemId'>) {
  try {
    const newItem = await addMenuItem(menuItem);
    const category = this.categories.find(c => c.categoryId === newItem.categoryId);
    if (category) {
      category.menuItems.push(newItem);
    }
    return newItem;
  } catch (error) {
    console.error('Error adding menu item:', error);
    throw error;
  }
},

async removeMenuItem(removeItem:MenuItem) {
  try {
    await removeMenuItem(removeItem.menuItemId);
    if (this.currentMenuConfiguration) {
      const updatedCategories = this.currentMenuConfiguration.categories.map(category => {
        if (category.categoryId === removeItem.categoryId) {
          return {
            ...category,
            menuItems: category.menuItems
              .filter(item => item.menuItemId !== removeItem.menuItemId)
              .map((item, index) => ({ ...item, sortOrder: index + 1 }))
          };
        }
        return category;
      });

      this.currentMenuConfiguration = {
        ...this.currentMenuConfiguration,
        categories: updatedCategories
      };
    }
    return true;
  } catch (error) {
    console.error('Error removing menu item:', error);
    throw error;
  }
},

async updateMenuItem(menuItem: MenuItem) {
  try {
    const updatedItem = await updateMenuItem(menuItem.menuItemId, menuItem);
    const category = this.categories.find(c => c.categoryId === updatedItem.categoryId);
    if (category) {
      const index = category.menuItems.findIndex(item => item.menuItemId === updatedItem.menuItemId);
      if (index !== -1) {
        category.menuItems[index] = updatedItem;
      }
    }
    return updatedItem;
  } catch (error) {
    console.error('Error updating menu item:', error);
    throw error;
  }
},

async updateCategory(category: Category) {
  try {
    const updatedCategory = await updateCategory(category.categoryId, category);
    const index = this.categories.findIndex(c => c.categoryId === updatedCategory.categoryId);
    if (index !== -1) {
      this.categories[index] = updatedCategory;
    }
    return updatedCategory;
  } catch (error) {
    console.error('Error updating category:', error);
    throw error;
  }
},
// async updateCategorySortOrder(categories: Category[]) {
//   try {
//     const updatedCategories = await updateCategoriesSortOrder(categories);
//     this.categories = updatedCategories;
//   } catch (error) {
//     console.error('Error updating category sort order:', error);
//     throw error;
//   }
// },

  },
persist:true
})