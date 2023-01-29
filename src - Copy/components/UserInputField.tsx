import{ useRef, useEffect } from 'react';
import useNewLevel from '../hooks/useNewLevel';

interface UserInputFieldProps {
	userInput:string | undefined,
	currentWordIndex:number,
	setCorrectArray:React.Dispatch<React.SetStateAction<boolean[]>>,
	setCurrentWordIndex:React.Dispatch<React.SetStateAction<number>>,
	setUserInput: React.Dispatch<React.SetStateAction<string>>,
	testingText:string[],
	nextPage: () => void,
	page:number,

}

const UserInputField = ({userInput, currentWordIndex, setCorrectArray, setCurrentWordIndex, setUserInput, testingText, nextPage, page}:UserInputFieldProps) => {
	const userInputRef = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		if (userInputRef.current) {
			userInputRef.current.value = "";
		} 
	}, [page, userInput])

	const handleOnKeyDown = (e: any) => {
		if (userInput === undefined) return

		switch (e.code) {
		  case "Backspace":
			if (userInput[userInput.length - 1] === " ") {
			  e.preventDefault()
			}
			break;
	
		  case "Space":
			if (userInput[userInput.length - 1] === " ") {
			  e.preventDefault()
			}
			else if (userInput.trimStart().split(' ')[currentWordIndex % 20] === testingText[currentWordIndex]) {   
			  setCorrectArray(prevState => [...prevState, true])
			  setCurrentWordIndex(prevState => prevState + 1)
	
			} else {
			  setCorrectArray(prevState => [...prevState, false])
			  setCurrentWordIndex(prevState => prevState + 1)
			}
			nextPage()
			break;
	
		  default:
			break;
		}
	  }
	
	  const handleChange = (e: any) => {
		const { value } = e.target;
		setUserInput(value)
	  }

	return (
		<textarea id="userInputField" ref={userInputRef} autoFocus={true} className="resize-none border-2 text-4xl p-3 w-1/2 rounded-lg overflow-hidden bg-lightBackground dark:bg-darkBackground bg-cover bg-fixed border-black dark:border-slate-400 dark:text-white" spellCheck={false} style={{ height: "25vh"}} value={userInput} onKeyDown={handleOnKeyDown} onChange={handleChange}>  
		</textarea>
	)
}

export default UserInputField