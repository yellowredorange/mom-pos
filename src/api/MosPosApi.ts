import axios from 'axios'
import { AllMenusApiResponse,MenuItem,UploadImageResponse  } from '../interfaces/Menu'
import { CreateOrderRequest, OrderResponse  } from '../interfaces/Order'

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
export const submitOrder = async (orderData: CreateOrderRequest): Promise<OrderResponse> => {
  try {
    const response = await api.post('/Order', orderData);
    return response.data;
  } catch (error) {
    console.error('Error submit order', error);
    throw error;
  }
};
export const getOrderHistory = async (): Promise<OrderResponse[]> => {
  try {
    const response = await api.get<OrderResponse[]>('/order/history');
    return response.data;
  } catch (error) {
    console.error('Error fetching order history:', error);
    throw error;
  }
};
export const uploadImage = async (imageFile: File): Promise<string> => {
  try {
    const formData = new FormData();
    formData.append('image', imageFile);

    const response = await api.post<UploadImageResponse>('/upload-image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data.imageUrl;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

export const updateMenuItem = async (menuItemId: number, menuItemData: Partial<MenuItem>): Promise<MenuItem> => {
  try {
    const response = await api.put<MenuItem>(`/MenuItem/${menuItemId}`, menuItemData);
    return response.data;
  } catch (error) {
    console.error('Error updating menu item:', error);
    throw error;
  }
};


export const addMenuItem = async (menuItemData: Omit<MenuItem, 'menuItemId'>): Promise<MenuItem> => {
  try {
    const response = await api.post<MenuItem>('/MenuItem', menuItemData);
    return response.data;
  } catch (error) {
    console.error('Error adding menu item:', error);
    throw error;
  }
};