import React from 'react'
import { marketItemInitialStateType } from '../interface/market'
import { useMarket } from '../hook/market'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface TopBarProps {
  isChange: boolean
  dataChange: marketItemInitialStateType[]
  searchWord: string
  setSearchWord: (newValue: string) => void
  numItemsShow: number
  numItemsAll: number
  handleCancleChange: () => void
}

const TopBar: React.FC<TopBarProps> = ({
  isChange,
  dataChange,
  searchWord,
  setSearchWord,
  numItemsShow,
  numItemsAll,
  handleCancleChange
}) => {
  const { handleSetAllItemsRol } = useMarket()
  const handleClickSetAllItemsRol = () => {
    handleSetAllItemsRol(dataChange)
  }

  return (
    <div className="w-[100%] h-[10dvh] flex flex-col items-center justify-center gap-3 mb-2">
      <div className="w-full flex justify-between">
        <div className="text-black ml-5  flex justify-center items-center font-bold ">
          {searchWord !== ''
            ? `${numItemsShow} of ${numItemsAll}`
            : `${numItemsAll} items`}
        </div>
        <div className="p-1 border-2 border-gray-500 w-[200px] h-8 rounded-lg text-gray-700 text-center shadow-lg drop-shadow-lg flex flex-row justify-center items-center bg-white">
          <input
            className="w-[90%] text-center bg-white"
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
            placeholder="search..."
          />
          <div className="text-black w-[10%] min-w-[10%] mr-1">
            {searchWord !== '' && (
              <FontAwesomeIcon
                icon={faCircleXmark}
                onClick={() => setSearchWord('')}
              />
            )}
          </div>
        </div>
      </div>
      <div className="h-10 mb-2 w-full">
        {isChange && (
          <div className="ml-16  sm:ml-5 mr-8 sm:mr-0 flex justify-between font-bold">
            <button
              className="w-[80px] btn bg-red-500 p-2 rounded-md cursor-pointer shadow-lg drop-shadow-lg"
              onClick={() => handleCancleChange()}
            >
              Cancel
            </button>
            <button
              className="w-[80px] btn bg-green-500 p-2 rounded-md cursor-pointer shadow-lg drop-shadow-lg"
              onClick={() => handleClickSetAllItemsRol()}
            >
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default TopBar
