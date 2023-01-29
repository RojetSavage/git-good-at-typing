import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineDown, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import levelsInformation from '../data/levelsInformation';

const activeLink = "flex p-2 xl:w-10/12 text-xl w-32 rounded-xl shadow-sm mr-5 mb-2 bg-slate-50 translate-x-3 transition-transform items-center dark:bg-darkhighlightWord"
const normalLink = "flex p-2 xl:w-10/12 text-xl rounded-xl shadow-sm mr-5 mb-2 hover:bg-slate-50 hover:translate-x-3 hover:transition-transform items-center xl:justify-start w-32 dark:hover:bg-darkhighlightWord"

const Sidebar = () => {
	const { pathname } = useLocation();
	const [open, setOpen] = useState<boolean>(true);
	const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

	useEffect(() => {
		window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
		if (windowWidth < 1280) {
			setOpen(true)
		}

		return window.removeEventListener('resize', () => setWindowWidth(window.innerWidth))
	}, [windowWidth])

	return (
		<>
			{
				open ?
					<div id="sidebar" className="h-20 overflow-x-scroll xl:overflow-x-hidden	
					xl:w-80 xl:left-0 xl:absolute xl:overflow-y-scroll xl:h-[calc(100vh-5rem)] bg-lightBackground dark:bg-darkBackground bg-cover bg-fixed">
						<div className="hidden xl:block  xl:absolute xl:top-0 xl:right-2 text-xl hover:bg-slate-50 p-3 mt-1 rounded-full cursor-pointer over:transition-transform hover:translate-x-1 dark:text-white dark:opacity-90 hover:dark:bg-buttonHoverDark dark:bg-buttonDark" onClick={() => setOpen(false)}>
							<AiOutlineLeft />
						</div>
						
						
						{/* Difficulty Headers */}
						<div className="xl:mt-10 xl:ml-9 flex xl:block relative top-2 ">
							{Object.entries(levelsInformation).map((item, idx) => (
								<div key={JSON.stringify(item)} className="flex xl:block">
									<div
										className="
									 xl:mt-4 xl:mb-2 xl:py-2 xl:w-10/12 hidden xl:inline-block
										text-2xl w-auto uppercase rounded-xl shadow-sm dark:text-white dark:bg-buttonDark hover:dark:bg-buttonHoverDark
										">

										<div className="relative flex left-2 dark:opacity-90">
											{item[0] == "Beginner" ? "Letters" : item[0] == "Intermediate" ? "Text" : item[0] == "Advanced" ? "Challenges" :  null }
											<div className="relative top-1 left-3">
												<AiOutlineDown />
											</div>
										</div>
									</div>

								{/* LevelLinks */}

									{ Object.entries(item[1]).map((level) => (
										<Link
										//entry[0] key which is level name
										//entry[1] level object
											to={`/${level[0]}`}
											key={level[0]}>

											<div 
												className={pathname.slice(1).replace('%20', ' ') == level[0] ? activeLink : normalLink}
											>
												<div className="dark:text-white">
												{level[1].icon}
												</div>
												<span className="capitalize ml-3 dark:text-white dark:opacity-90">
													{level[1].name}
												</span>
											</div>
										</Link>
									))}

								</div>
							))}
						</div>
					</div>
					:

					<div className="w-16 h-screen absolute">
						<div className="text-xl h-10 w-10 dark:bg-buttonDark dark:text-white dark:hover:bg-buttonHoverDark hover:bg-slate-50 mt-2 ml-2 rounded-full cursor-pointer flex items-center over:transition-transform justify-center hover:translate-x-3"
							onClick={() => setOpen(true)}>
							<AiOutlineRight />
						</div>
					</div>
			}
		</>
	)
}

export default Sidebar