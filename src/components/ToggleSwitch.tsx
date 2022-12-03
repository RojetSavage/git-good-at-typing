import './options.css'
import { useThemeContext } from '../contexts/ThemeContextProvider'

const ToggleSwitch = () => {
	const {toggleDarkMode, darkMode } = useThemeContext();

	return (
		<>
		<label className="relative inline-block w-12 h-7" >
			<input type="checkbox" checked={darkMode} className="input opacity-0 w-0 h-0" onClick={toggleDarkMode}></input>
			<span className="slider round absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-toggleSwitch"></span>
		</label>
		</>
	)
}

export default ToggleSwitch