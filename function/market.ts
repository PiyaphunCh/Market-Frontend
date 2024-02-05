import { marketItemInitialStateType } from '../src/interface/market'

export const arraysEqual = (
  a: marketItemInitialStateType[],
  b: marketItemInitialStateType[]
) => {
  const dataChange: marketItemInitialStateType[] = []
  let equal: boolean = true
  if (a == null || b == null) equal = false
  if (a.length !== b.length) equal = false

  for (let i = 0; i < a.length; i++) {
    if (a[i].buyPrice !== b[i].buyPrice) {
      equal = false
      dataChange.push(a[i])
    }
  }

  return { equal: equal, dataChange: dataChange }
}

export const searchArr = async (
  data: marketItemInitialStateType[],
  searchWord: string
) => {
  const newData = await data.filter((item) => {
    if (item.name.toLowerCase().includes(searchWord.toLowerCase())) return item
  })
  return newData
}
