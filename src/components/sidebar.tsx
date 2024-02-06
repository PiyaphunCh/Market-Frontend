import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
const SideBar = () => {
  const menu = [{ name: 'rol', src: 'rol.webp' }]

  return (
    <div className=" bg-gray-400 h-[95dvh] relative left-0 w-[13%] rounded-lg shadow-2xl drop-shadow-2xl">
      <div className="p-2 flex flex-col gap-y-1">
        <div className="text-black bg-white m-2 sm:-m-0.5 sm:my-2 rounded-lg py-2 flex justify-center  items-center gap-y-1 shadow-lg drop-shadow-lg font-bold">
          <div className="sm:w-full sm:text-center text-right">
            <FontAwesomeIcon icon={faHome} />
          </div>
          <div className="ml-3 sm:hidden text-center"> {'Home'}</div>
        </div>
        {menu.map((item, key) => {
          return (
            <div
              key={key}
              className="text-black bg-white m-2 sm:-m-0.5 sm:my-2 rounded-lg py-2 flex justify-center  items-center gap-y-1 shadow-lg drop-shadow-lg font-bold"
            >
              <img className="sm:hidden h-20" src={`/icon/${item.src}`} />
              <div className="hidden sm:block uppercase sm:text-sm px-2">
                {' '}
                {item.name}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SideBar
