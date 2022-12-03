import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
	const [darkMode, setDarkMode] = useState(false);

	function toggleDarkMode() {
		document.documentElement.classList.toggle('dark')
		setDarkMode(prevState => !prevState)
	}

	return (
		<ThemeContext.Provider value={{
			toggleDarkMode,
			darkMode
		}}>
			{ children }
		</ThemeContext.Provider>
	)
}

export function useThemeContext() {
	return useContext(ThemeContext);
}