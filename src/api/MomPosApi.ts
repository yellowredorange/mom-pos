import axios from 'axios'
import { AllMenusApiResponse,Category,MenuItem,MenuItemOption,UploadImageResponse  } from '../interfaces/Menu'
import{LoginInfo,RegisterInfo,UserInfo} from '../interfaces/User'
import { CreateOrderRequest, OrderResponse  } from '../interfaces/Order'
import { Cookies } from 'quasar'

const api = axios.create({
  baseURL: import.meta.env.VITE_API,
  headers: {
      'Content-Type': 'application/json',
      'token': Cookies.get("token") ? Cookies.get("token") : ""
  },
  withCredentials: true
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
    const response = await api.get<OrderResponse[]>('/Order/user');
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

//Omit是為了移除MenuItem中的menuItemId，讓我不用重複新增物件
export const addMenuItem = async (menuItemData: Omit<MenuItem, 'menuItemId'>): Promise<MenuItem> => {
  try {
    const response = await api.post<MenuItem>('/MenuItem', menuItemData);
    return response.data;
  } catch (error) {
    console.error('Error adding menu item:', error);
    throw error;
  }
};

export const removeMenuItem = async (menuItemId:number): Promise<number> => {
  try {
    const response = await api.delete(`/MenuItem/${menuItemId}`);
    return response.data;
  } catch (error) {
    console.error('Error adding menu item:', error);
    throw error;
  }
};

export const updateCategory = async (categoryId: number, categoryData: Partial<Category>): Promise<Category> => {
  try {
    const response = await api.put<Category>(`/Category/${categoryId}`, categoryData);
    return response.data;
  } catch (error) {
    console.error('Error updating category:', error);
    throw error;
  }
};

export const addCategoryAPI = async (categoryData: Omit<Category, 'categoryId'>): Promise<Category> => {
  try {
    const response = await api.post<Category>('/Category', categoryData);
    return response.data;
  } catch (error) {
    console.error('Error adding menu item:', error);
    throw error;
  }
};

export const removeCategoryAPI  = async (categoryId: number): Promise<Category> => {
  try {
    const response = await api.delete(`/Category/${categoryId}`);
    return response.data;
  } catch (error) {
    console.error('Error updating category:', error);
    throw error;
  }
};

export const updateAllMenuConfiguration = async (changes: {
  updatedCategories: Partial<Category>[],
  updatedMenuItems: Partial<MenuItem>[]
}) => {
  try {
    const response = await api.put('/MenuConfiguration/update-all', changes);
    return response.data;
  } catch (error) {
    console.error('Error updating menu configuration:', error);
    throw error;
  }
};

export const saveMenuItemOption = async (option: MenuItemOption): Promise<MenuItemOption> => {
  try {
    const response = await api.post('/MenuItemOption', option);
    return response.data;
  } catch (error) {
    console.error('Error saving menu item option:', error);
    throw error;
  }
};

export const deleteMenuItemOption = async (optionId: number): Promise<void> => {
  try {
    await api.delete(`/MenuItemOption/${optionId}`);
  } catch (error) {
    console.error('Error deleting menu item option:', error);
    throw error;
  }
};

export const login = async (loginInfo: LoginInfo): Promise<string> => {
  try {
    const response = await api.post('/Auth/login', loginInfo);
    return response.data;
  } catch (error: any) {
    // Extract the 'errors' field from the response
    const errorMessage = error.response?.data?.errors || 'An unexpected error occurred.';
    console.error('Login Error:', errorMessage);
    throw new Error(errorMessage); // Throw the extracted error message
  }
};

export const register = async(registerInfo: RegisterInfo):Promise<string> =>{
  try{
    const response = await api.post('/Auth/register',registerInfo);
    return response.data;
  } catch (error) {
    console.error('Error register', error);
    throw error;
  }
}

export async function getUserInfoById(id: number): Promise<UserInfo> {
  try {
    const response = await api.get<UserInfo>(`/UserInfo/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching UserInfo by ID:', error);
    throw error;
  }
}

// Add a new UserInfo
export async function addUserInfo(userInfo: UserInfo): Promise<UserInfo> {
  try {
    const response = await api.post<UserInfo>(`/api/UserInfo`, userInfo);
    return response.data;
  } catch (error) {
    console.error('Error adding new UserInfo:', error);
    throw error;
  }
}

// Update an existing UserInfo
export async function updateUserInfo(userInfo: UserInfo): Promise<UserInfo> {
  try {
    const response = await api.put<UserInfo>(`/api/UserInfo/${userInfo.userInfoId}`, userInfo);
    return response.data;
  } catch (error) {
    console.error('Error updating UserInfo:', error);
    throw error;
  }
}

// Delete a UserInfo by ID
export async function deleteUserInfo(id: number): Promise<void> {
  try {
    await api.delete(`/api/UserInfo/${id}`);
  } catch (error) {
    console.error('Error deleting UserInfo:', error);
    throw error;
  }
}

