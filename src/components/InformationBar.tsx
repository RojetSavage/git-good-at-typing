import {Timer} from './'

interface InformationBarProps {
	correctArray: boolean[],
	currentWordIndex:number,
	testTextLength:number,
}

const InformationBar = ({ correctArray, currentWordIndex, testTextLength }: InformationBarProps) => {

  return (
	<div className="mb-2 mt-20 w-1/2 flex items-center justify-around rounded-lg wrap border-black border-2 dark:border-slate-400">
	<div className="text-2xl dark:text-white dark:opacity-90">
	  Completed: { (currentWordIndex/testTextLength*100).toFixed(2) }%
	</div>
	<div className="text-2xl dark:text-white dark:opacity-90">
	  Correct: { correctArray.length > 0 ? (correctArray.filter(bool => bool===true).length / correctArray.length * 100).toFixed(2) : "0" }%
	</div>
	<div>
	  <Timer />
	</div>
  </div>  )
}

export default InformationBar