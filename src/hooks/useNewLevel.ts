import { useState, useEffect } from 'react';
import useTextGenerator from './useTextGenerator';
import useTimer from './useTimer';
import { useLocation } from 'react-router';

const useNewLevel = (levelName: string) => {
	const {setTime} = useTimer()
	const wordsPerPage = 20;
	const [userInput, setUserInput] = useState("");
	const [currentWordIndex, setCurrentWordIndex] = useState(0)
	const [correctArray, setCorrectArray] = useState<boolean[]>([]);
	const [page, setPage] = useState(0);
	const [wordsArray, setWordsArray] = useState<string[]>([])
	const [testingText, setTestingText] = useState<string[]>([]);
	const [toggleLevelReset, setToggleLevelReset] = useState(false);
	const [completedLevel, setCompletedLevel] = useState(false);
	const {levelWords} = useTextGenerator(levelName)
	let { pathname } = useLocation()

	//On every render change the testing text
	useEffect(() => {
		if (levelWords) {
			setTestingText(levelWords)
		}
	})

	//Displaying the words to be typed based on page
	useEffect(() => {
		setWordsArray(testingText.slice(page * wordsPerPage, page * wordsPerPage + wordsPerPage))
	}, [page, testingText, wordsPerPage])

	useEffect(() => {
		resetLevel()
	}, [pathname])

	const resetLevel = () => {
		setUserInput('');
		setCurrentWordIndex(0);
		setCorrectArray([]);
		setPage(0);
		setTime(0)
		setCompletedLevel(false)
		console.log(completedLevel)
	}

	const nextPage = () => {
		const totalPageNumbers = Math.ceil(testingText.length / wordsPerPage);
		if (currentWordIndex === page * wordsPerPage + wordsPerPage - 1 || currentWordIndex === testingText.length - 1) {
			setPage(prevState => prevState + 1)
			setUserInput('');
			if (page === totalPageNumbers - 1) {
				setCompletedLevel(true)
			}
		}
	}

	return {
		userInput,
		currentWordIndex,
		testingText,
		completedLevel,
		correctArray,
		page,
		wordsArray,
		setCorrectArray,
		setUserInput,
		setCompletedLevel,
		nextPage,
		setToggleLevelReset,
		setCurrentWordIndex,
		resetLevel
	}

}

export default useNewLevel;