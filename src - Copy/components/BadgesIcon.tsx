import { useMenuContext } from '../contexts/MenuContextProvider'

const BadgesIcon = () => {
	const { handleMenuChange } = useMenuContext();

  return (
	<div className="text-xl  mr-14 p-8 h-8 w-8 flex items-center justify-center rounded-full hover:cursor-pointer z-auto bg-slate-300 hover:bg-slate-100 dark:text-white dark:bg-buttonDark hover:dark:bg-buttonHoverDark" onClick={() => handleMenuChange('badges')}>
		<p className="opacity-90 dark:text-white text-md font-semibold">
			Badges
		</p>
		{/* absolute right-0 */}
	</div>  
	)
}

export default BadgesIcon