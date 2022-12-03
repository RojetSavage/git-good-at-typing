import useNewLevel from '../hooks/useNewLevel'

interface TestTextProps {
	wordsArray: string[],
	correctArray: boolean[],
	currentWordIndex: number,
	page:number,
}


const TestText = ({wordsArray, correctArray, currentWordIndex, page}: TestTextProps) => {
	

	return (
	<div className="mb-2 text-4xl p-2 w-1/2 border-2 border-black rounded-lg overflow-hidden dark:border-slate-400" style={{ height: "25vh" }}> {
		wordsArray.map((word, idx) => {
		  if (correctArray[(page * 20) + idx]) {
			return <span className="dark:text-white dark:opacity-90" style={{ textDecoration: "green underline" }} key={idx}>{word}{' '}</span>
		  }

		  else if (correctArray[(page * 20) + idx] === undefined) {
			return <span key={idx} className="dark:text-white dark:opacity-90">{word}{' '}</span>
		  }

		  else {
			return <span style={{ textDecoration: "red underline" }} className="dark:text-white dark:opacity-90" key={idx}>{word}{' '}</span>
		  }
		}).map((word, idx) => {
		  if (idx === currentWordIndex%20) {
			return <mark className="bg-highlightWord dark:bg-darkhighlightWord rounded-lg" key={idx}>{word}</mark>
		  } else {
			return word
		  }
		})
	  }
	  </div>  )
}

export default TestText