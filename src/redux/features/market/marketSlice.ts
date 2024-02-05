// src/reducers/IncDecSlice.ts
import { createSlice } from '@reduxjs/toolkit'
import { marketItemInitialStateType } from '../../../interface/market'

interface itemState {
  items: marketItemInitialStateType[]
  isLoading: boolean
  isLoadingPost: boolean
  isSuccessPost: boolean
  error: string
}

const initialState: itemState = {
  items: [],
  isLoading: false,
  isLoadingPost: false,
  isSuccessPost: false,
  error: 'undefined'
}

const marketSlice = createSlice({
  name: 'marketSlice',
  initialState,
  reducers: {
    getDataRolStart: (state) => {
      state.isLoading = true
    },
    getAllItemRolSuccess: (state, action) => {
      state.items = action.payload
      state.isLoading = false
    },
    getDataRolError: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
    setAllItemsRolStart: (state) => {
      state.isLoadingPost = true
    },
    setAllItemsRolSuccess: (state, action) => {
      state.isSuccessPost = action.payload
      state.isLoadingPost = false
      state.isSuccessPost = true
    },
    setAllItemsRolError: (state, action) => {
      state.error = action.payload
      state.isLoadingPost = false
      state.isSuccessPost = false
    },
    clearSuccess: (state) => {
      state.isSuccessPost = false
    }
  }
})

export const marketServices = {
  actions: marketSlice.actions
}

const marketReducer = marketSlice.reducer
export default marketReducer
