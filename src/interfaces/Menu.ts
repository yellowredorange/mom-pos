export interface MenuItemOption {
  menuItemOptionId: number;
  option: string;
  optionCategory: string;
  additionalPrice: number;
  sortOrder: number;
  menuItemId: number;
}

export interface MenuItem {
  menuItemId: number;
  name: string;
  description: string;
  price: number;
  isActive: boolean;
  photoUrl: string;
  sortOrder: number;
  categoryId: number;
  menuItemOptions: MenuItemOption[];
}

export interface Category {
  categoryId: number;
  name: string;
  isActive: boolean;
  sortOrder: number;
  menuItems: MenuItem[];
}

export interface MenuConfiguration {
  menuConfigurationId: number;
  name: string;
  isActive: boolean;
  sortOrder: number;
  categories: Category[];
}

export type AllMenusApiResponse = MenuConfiguration[];

export type UploadImageResponse= {
  imageUrl: string;
}