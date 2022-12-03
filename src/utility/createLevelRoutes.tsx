import levelsInformation from "../data/levelsInformation"
import { Route } from "react-router";
import { MainContent } from "../components";

const createLevelRoutes = () => {
	const levelNames: string[] = [];
	
	Object.values(levelsInformation).forEach(obj => {
		Object.keys(obj).forEach(levelName => {
			levelNames.push(levelName)
		})
	})
	
	return levelNames.map((levelName) => (
		<Route key={levelName} path={`${levelName}`} element={<MainContent levelName={levelName}/>} />
	))
}

export default createLevelRoutes
