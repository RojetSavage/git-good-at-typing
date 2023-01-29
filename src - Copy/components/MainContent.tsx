import { UserInputField, InformationBar, TestText, LevelSummary, Badges, Options, LoadingSpinner } from '.'
import { useMenuContext } from '../contexts/MenuContextProvider';
import useNewLevel from '../hooks/useNewLevel'
import useTextGenerator from '../hooks/useTextGenerator'

const MainContent = ( {levelName}: {levelName: string} ) => {
	const { menuState } = useMenuContext();
	const { userInput, setUserInput, currentWordIndex, testingText, completedLevel, correctArray, page, nextPage, wordsArray, setCorrectArray, setCurrentWordIndex, resetLevel } = useNewLevel(levelName);
	const { loading } = useTextGenerator(levelName)

	return (
	<>
		{ menuState.badges ? <Badges /> : null}
		{ menuState.options ? <Options /> : null}
		{
			loading ? <LoadingSpinner /> : 
			completedLevel ? <LevelSummary correctArray={correctArray} resetLevel={resetLevel}/> : 
			<main className="flex flex-col justify-center items-center bg-lightBackground dark:bg-darkBackground bg-cover bg-fixed">
				<InformationBar correctArray={correctArray} currentWordIndex={currentWordIndex} testTextLength={testingText.length}/>
				<TestText correctArray={correctArray} currentWordIndex={currentWordIndex} wordsArray={wordsArray} page={page} />
				<UserInputField userInput={userInput} setUserInput={setUserInput} currentWordIndex={currentWordIndex} setCorrectArray={setCorrectArray} setCurrentWordIndex={setCurrentWordIndex} testingText={testingText} nextPage={nextPage} page={page} />
			</main>
		}
	</>
	)
}

export default MainContent