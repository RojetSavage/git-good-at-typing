import React from 'react'
import levelsInformation from '../data/levelsInformation'

const getLevelDifficulty = (levelName: string) => {
	let difficulty = "Default"
	
	Object.entries(levelsInformation).forEach(el => {
		Object.keys(el[1]).forEach(level => {
			if (level === levelName) {
				difficulty = el[0]
			}
		}) 
	})

	return difficulty
}

export default getLevelDifficulty