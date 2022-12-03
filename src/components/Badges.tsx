import { AiOutlineClose } from 'react-icons/ai'
import { useMenuContext } from '../contexts/MenuContextProvider';

const Badges = () => {
  const { handleMenuChange } = useMenuContext();

  return (
    <div className="absolute top-24 right-8 h-96 w-96 bg-slate-400 rounded-xl p-2 z-10 dark:bg-buttonDark">
      <div className="absolute top-0 right-0 p-2 mt-3 mr-3 rounded-full hover:bg-white hover:cursor-pointer" onClick={() => handleMenuChange('badges')} >
        <AiOutlineClose />
      </div>
      <div className="bg-slate-300 w-full h-full rounded-xl p-2 flex flex-col justify-start items-center font-medium text-xl dark:bg-buttonHoverDark">
        <h1 className="my-2 ">Badges:</h1>

      </div>
    </div>)
}

export default Badges