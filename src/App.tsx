import { useEffect, useState } from 'react'
import './App.css'
import SettingItem from './components/settingItem'
import SideBar from './components/sidebar'
import TopBar from './components/topBar'
import { useMarket } from './hook/market'
import { marketItemInitialStateType } from './interface/market'
import { Helmet } from 'react-helmet'
import toast, { Toaster } from 'react-hot-toast'
import { searchArr } from '../function/market'

function App() {
  const {
    items,
    isLoading,
    isSuccessPost,
    handleGetAllItems,
    handleClearSuccess
  } = useMarket()
  const [isChange, setIsChange] = useState<boolean>(false)
  const [dataChange, setDataChange] = useState<marketItemInitialStateType[]>([])
  const [searchWord, setSearchWord] = useState<string>('')
  const [itemsShow, setItemsShow] = useState<marketItemInitialStateType[]>([
    ...items
  ])
  const [isLodingInput, setIsLodingInput] = useState<boolean>(false)

  const handleReloadInput = () => {
    setIsLodingInput(true)
    setTimeout(() => {
      setIsLodingInput(false), [1000]
    })
  }

  const searchItems = async () => {
    const itemsBysearch = await searchArr(items, searchWord)
    setItemsShow([...itemsBysearch])
  }

  const handleGetAllItemsBySearch = () => {
    if (searchWord === '') {
      setItemsShow([...items])
    } else {
      searchItems()
    }
    setIsLodingInput(true)
    setTimeout(() => {
      setIsLodingInput(false), [1000]
    })
  }
  useEffect(() => {
    handleGetAllItems()
  }, [])

  useEffect(() => {
    if (items.length > 0) {
      setItemsShow([...items])
    }
    handleReloadInput()

    if (searchWord !== '') {
      handleGetAllItemsBySearch()
    }
  }, [items])

  useEffect(() => {
    handleGetAllItems()
    if (isSuccessPost) {
      toast.success('Update Successfully')
    }
    setIsChange(false)
    handleClearSuccess()
  }, [isSuccessPost])

  useEffect(() => {
    handleGetAllItemsBySearch()
  }, [searchWord])

  const handleCancleChange = () => {
    setDataChange([])
    setIsChange(false)
    setItemsShow([...items])
    handleReloadInput()
  }

  return (
    <div className="h-screen w-[100%] flex p-5 gap-3 sm:gap-0">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Price Searcher</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <div>
        <Toaster />
      </div>

      <SideBar />
      <div className="flex flex-col justify-center w-full">
        <TopBar
          isChange={isChange}
          dataChange={dataChange}
          searchWord={searchWord}
          setSearchWord={setSearchWord}
          numItemsShow={itemsShow.length}
          numItemsAll={items.length}
          handleCancleChange={handleCancleChange}
        />
        <SettingItem
          data={itemsShow}
          setIsChange={setIsChange}
          setDataChange={setDataChange}
          isLodingInput={isLodingInput}
          isLoading={isLoading}
        />
      </div>
    </div>
  )
}

export default App
