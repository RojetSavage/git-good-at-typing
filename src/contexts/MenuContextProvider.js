import { useContext, createContext, useState } from 'react';

const MenuContext = createContext();

const initState = {
	badges:false,
	options: false
}


export const MenuContextProvider = ({ children }) => {
	const [ menuState, setMenuState ] = useState(initState);

	const handleMenuChange = (menu) => {
		if (menuState[menu]) {
			setMenuState(initState)
		} else {
			setMenuState({
				...initState,
				[menu]: true
			})
		}
	}
	
	return (
		<MenuContext.Provider value={{
			handleMenuChange,
			menuState
		}}>
			{ children }
		</MenuContext.Provider>
	)}

export const useMenuContext = () => {
	return useContext(MenuContext);
}
