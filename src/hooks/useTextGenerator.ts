import { useState, useEffect } from 'react'
import generateRandomText from '../utility/generateRandomText';
import levelsInformation from '../data/levelsInformation';
import getLevelDifficulty from '../utility/getLevelDifficulty';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { RiContactsBookLine } from 'react-icons/ri';


const useTextGenerator = (levelName: string) => {
	const difficulty = getLevelDifficulty(levelName)
	const [levelWords, setLevelWords] = useState<string[]>([]);
	const [loading, setLoading] = useState(false)
	let { pathname } = useLocation()

	async function randomWordsAPI() {
		const options = {
			method: 'GET',
			url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
			params: {count: '20'},
			headers: {
			  'X-RapidAPI-Key': process.env.REACT_APP_RANDOM_WORDS_API_KEY,
			  'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
			}
		  };

		axios.request(options).then(res => {
			setLevelWords(res.data)
			setLoading(false)
		})
	}

	async function randomLoremAPI() {
		const options = {
			method: 'GET',
			url: 'https://lorem-ipsum-by-api-ninjas.p.rapidapi.com/v1/loremipsum',
			headers: {
			  'X-RapidAPI-Key': process.env.REACT_APP_LOREM_API_KEY,
			  'X-RapidAPI-Host': 'lorem-ipsum-by-api-ninjas.p.rapidapi.com'
			}
		  };

		axios.request(options).then(res => {
			setLevelWords(res.data.text.split(' '))
			setLoading(false)
		})
	}





	useEffect(() => {
		if (levelName === "Random Words" ) {
		setLoading(true)
		randomWordsAPI()
	} else if (levelName === "Latin" ) {
		setLoading(true)
		randomLoremAPI()
	} else if (difficulty === 'Beginner') {
		let randomLevelWords = generateRandomText(levelsInformation['Beginner'][levelName].availableLetters, 4, 20)
		let levelText = levelsInformation['Beginner'][levelName].text 
		if (levelText) {
			setLevelWords(randomLevelWords.concat(levelText.split(' ')))	
		} else {
			setLevelWords(randomLevelWords)
		}
	} else {
			setLevelWords(levelsInformation[difficulty][levelName].text.split(' '))
		}
	}, [pathname])

	return {
		levelWords,
		loading
	}

}


export default useTextGenerator;
