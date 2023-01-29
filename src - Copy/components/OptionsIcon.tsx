import { useMenuContext } from '../contexts/MenuContextProvider';

const OptionsIcon = () => {
	const { handleMenuChange } = useMenuContext(); 

	return (
		<div className="text-xl p-8 h-8 w-10 flex items-center justify-center rounded-full hover:cursor-pointer z-auto bg-slate-300 hover:bg-slate-100 dark:bg-buttonDark" onClick={() => handleMenuChange('options')}>
			<p className="opacity-90 dark:text-white text-md font-semibold">
			Options
			</p>
		</div>  
	)
}

export default OptionsIcon