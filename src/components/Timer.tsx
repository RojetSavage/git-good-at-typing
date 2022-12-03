import React, { useEffect } from 'react'
import useTimer from '../hooks/useTimer'

const Timer = () => {
	let {time} = useTimer();

	return (
		<div className= "text-2xl dark:text-white dark:opacity-90" > Time: { time } </div>
  )
}

export default Timer