import axios from 'axios'
import { AllMenusApiResponse  } from '../interfaces/Menu'
import { CreateOrderRequest, Order  } from '../interfaces/Order'

const api = axios.create({
  baseURL: import.meta.env.VITE_API,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getAllMenus = async (): Promise<AllMenusApiResponse>  => {
  try {
    const response = await api.get<AllMenusApiResponse>('/MenuConfiguration/allmenus');
    return response.data;
  } catch (error) {
    console.error('Error fetching all menus:', error);
    throw error;
}
}
export const submitOrder = async (orderData: CreateOrderRequest): Promise<Order> => {
  try {
    const response = await api.post('/Order', orderData);
    return response.data;
  } catch (error) {
    console.error('Error submit order', error);
    throw error;
  }
};
export const getOrderHistory = async (): Promise<Order[]> => {
  try {
    const response = await api.get<Order[]>('/Order');
    return response.data;
  } catch (error) {
    console.error('Error fetching order history:', error);
    throw error;
  }
};