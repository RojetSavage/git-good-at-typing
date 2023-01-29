import { useMenuContext } from '../contexts/MenuContextProvider'
import { Badges, Options } from './'

const HomepageGreeting = () => {
	const { menuState } = useMenuContext();
	
	return (
	<>
	{ menuState.badges ? <Badges /> : null}
	{ menuState.options ? <Options /> : null}
		<div className="flex items-center justify-center text-black dark:text-white bg-lightBackground dark:bg-darkBackground bg-cover bg-fixed">
			Homepage Greeting
		</div>
	</>
  )
}

export default HomepageGreeting