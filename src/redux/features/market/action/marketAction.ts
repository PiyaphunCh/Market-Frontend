import axios from 'axios'
import { urls } from '../../../../../config/urls'
export const getAllItemsRol = async () => {
  const response = await axios.post(urls.getItemRol, { game: 'rol' })
  return response.data.data
}

interface setItemsProp {
  id: string
  buyPrice: number
}

export const setAllItemsRol = async (items: setItemsProp[]) => {
  const response = await axios.post(urls.updateItemRol, { items: items })
  return response.data.data
}
