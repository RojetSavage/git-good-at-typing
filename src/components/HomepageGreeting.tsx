import { useMenuContext } from '../contexts/MenuContextProvider'
import { Badges, Options } from './'

const HomepageGreeting = () => {
	const { menuState } = useMenuContext();
	
	return (
	<>
	{ menuState.badges ? <Badges /> : null}
	{ menuState.options ? <Options /> : null}

	</>
  )
}

export default HomepageGreeting