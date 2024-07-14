import { MenuItem } from "./Menu";
export interface SelectedOption {
  category: string;
  option: string;
  additionalPrice: number;
}

export interface CartItem extends MenuItem {
  quantity: number;
  selectedOptions: SelectedOption[];
  totalPrice: number;
}

export interface OrderOption {
optionCategory: string;
  optionName: string;}

export interface OrderItem {
  menuItemId: number;
  quantity: number;
  options: OrderOption[];
}

export interface CreateOrderRequest {
  items: OrderItem[];
}

//api打回來的order裡的項目
export interface OrderItemResponse {
  orderItemId: number;
  menuItemId: number;
  menuItemName: string;
  quantity: number;
  unitPrice: number;
  options: string[];
  totalPrice:number;
}

export interface OrderResponse {
  orderId: number;
  orderDate: string;
  totalAmount: number;
  orderItems: OrderItemResponse[];
}

