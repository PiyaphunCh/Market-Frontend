import { marketItemInitialStateType } from '../interface/market'
import {
  getAllItemsRol,
  setAllItemsRol
} from '../redux/features/market/action/marketAction'
import { marketServices } from '../redux/features/market/marketSlice'
import { useAppDispatch, useAppSelector } from '../redux/hooks'

export const useMarket = () => {
  const dispatch = useAppDispatch()

  const items = useAppSelector((state) => state.market.items)
  const isLoading = useAppSelector((state) => state.market.isLoading)
  const isLoadingPost = useAppSelector((state) => state.market.isLoadingPost)
  const isSuccessPost = useAppSelector((state) => state.market.isSuccessPost)

  const handleGetAllItems = async () => {
    dispatch(marketServices.actions.getDataRolStart())
    const res = await getAllItemsRol()
    dispatch(marketServices.actions.getAllItemRolSuccess(res))
  }

  const handleSetAllItemsRol = async (
    dataChange: marketItemInitialStateType[]
  ) => {
    const items = dataChange.map((item) => {
      return { id: item._id, buyPrice: item.buyPrice }
    })
    dispatch(marketServices.actions.setAllItemsRolStart())
    const res = await setAllItemsRol(items)
    dispatch(marketServices.actions.setAllItemsRolSuccess(res))
  }

  const handleClearSuccess = async () => {
    dispatch(marketServices.actions.clearSuccess())
  }

  return {
    items,
    isLoading,
    isLoadingPost,
    isSuccessPost,
    handleGetAllItems,
    handleSetAllItemsRol,
    handleClearSuccess
  }
}
