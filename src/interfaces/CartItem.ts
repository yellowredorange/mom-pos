export interface CartItem {
  menu_id: number
  item_name: string | null
  item_description: string | null
  price: number
  category: string | null
  available: boolean
  image: string
  quantity: number // 添加數量屬性
}
