import axios from 'axios'
import { Menu } from '../interfaces/Menu'

const api = axios.create({
  baseURL: import.meta.env.VITE_API,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getMenu = async (): Promise<Menu[]> => {
  const response = await api.get('/menu')
  return response.data
}
export const getMenuById = async (id: number): Promise<Menu> => {
  const response = await api.get(`/menu/${id}`)
  return response.data
}

export const postMenu = async (menu: Menu): Promise<Menu> => {
  const response = await api.post('/menu', menu)
  return response.data
}
