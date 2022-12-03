import {OptionsIcon, BadgesIcon} from './'
import { useThemeContext } from '../contexts/ThemeContextProvider';
import { useMenuContext } from '../contexts/MenuContextProvider';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	const { darkMode } = useThemeContext();

  return (
	<nav className="h-20 p-4 flex justify-around items-center border-b-2 dark:border-buttonDark sticky bg-navbarLight dark:bg-navbarDark">
		<a href="http://localhost:3000" className="self-center">
		<div className="flex items-center justify-left">
			<NavLink to="/" end><img className="h-16 mr-3 dark:opacity-90" src={darkMode === true? "/logo-white.png" : "/logo-black.png"}  alt="logo"></img></NavLink>

		</div>
		</a>
		<div className="flex top-1.5 self-end absolute right-9">
			<BadgesIcon />
			<OptionsIcon />
		</div>
	</nav>
  )
}

export default Navbar