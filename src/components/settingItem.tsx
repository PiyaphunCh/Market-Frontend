import { ChangeEvent, useEffect, useState } from 'react'
import { marketItemInitialStateType } from '../interface/market'
import { arraysEqual } from '../../function/market'

interface SettingItemProps {
  data: marketItemInitialStateType[]
  setIsChange: (newValue: boolean) => void
  setDataChange: (newValue: marketItemInitialStateType[]) => void
  isLodingInput: boolean
}

const SettingItem: React.FC<SettingItemProps> = ({
  data,
  setIsChange,
  setDataChange,
  isLodingInput
}) => {
  const [dataNew, setDataNew] = useState([...data])

  useEffect(() => {
    setDataNew([...data])
  }, [data])

  const handleChangeData = (e: ChangeEvent<HTMLInputElement>, key: number) => {
    const dataPre = [...dataNew]
    const dataObj = { ...dataPre[key] }
    dataObj.buyPrice = parseInt(e.target.value)
    dataPre[key] = dataObj
    setDataNew([...dataPre])
  }

  useEffect(() => {
    const compareArrays = async () => {
      const { equal, dataChange } = await arraysEqual(dataNew, data)
      if (equal) {
        setIsChange(false)
      } else {
        setDataChange([...dataChange])
        setIsChange(true)
      }
    }
    compareArrays()
  }, [dataNew])

  return (
    <div className=" w-[100%] max-h-[80dvh] min-h-[80dvh] rounded-md overflow-y-auto overflow-x-auto">
      {
        <div className="flex flex-wrap gap-3 sm:gap-5 m-5 sm:m-2 w-full justify-center">
          {data.length !== 0 ? (
            data.map((item: marketItemInitialStateType, key: number) => {
              return (
                <div
                  key={key}
                  className="bg-white shadow-lg drop-shadow-lg w-[15%] sm:w-[43%] h-[20%] relative rounded-lg"
                >
                  <div className="w-[100%] p-3">
                    <div className="w-[100%] text-center text-black border-b-2 pb-1 min-h-[70px] max-h-[70px] text-wrap  truncate flex items-center justify-center font-bold">
                      {item.name}
                    </div>
                    <img className="w-[70%] mx-auto my-5" src={item.img} />
                    <div className="flex min-w-full flex-col mt-2 border-t-2 pt-2">
                      <div className="text-black text-center mb-1 text-[14px]">
                        Purchase price
                      </div>
                      {!isLodingInput ? (
                        <input
                          type="text"
                          id="buyPrice"
                          className="focus:outline-none h-8 border text-center border-gray-300 text-sm rounded-lg   block w-full p-2.5 sm:p-1 bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white  "
                          placeholder="0"
                          defaultValue={
                            item.buyPrice === null ? 0 : item.buyPrice
                          }
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleChangeData(e, key)
                          }
                        />
                      ) : (
                        <div className="h-8" />
                      )}
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <div className="text-black w-full h-[75dvh] flex justify-center items-center font-bold">
              <div>items not found!</div>
            </div>
          )}
        </div>
      }
    </div>
  )
}

export default SettingItem
