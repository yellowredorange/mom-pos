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

export interface CreateOrderItem {
  menuItemId: number;
  quantity: number;
  unitPrice: number;
  options: CreateOrderItemOption[];
}

export interface OrderItem extends CreateOrderItem {
  orderItemId: number;
  menuItemName : string;
}

export interface Order {
  orderId: number;
  orderDate: string;
  totalAmount: number;
  orderItems: OrderItem[];
}

export interface CreateOrderRequest {
  items: CreateOrderItem[];
  totalAmount: number;
}

export interface CreateOrderItemOption {
  optionCategory: string;
  optionName: string;
  additionalPrice: number;
}