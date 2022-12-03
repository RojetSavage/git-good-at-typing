import React, { useState, useEffect, useRef } from 'react'


const useTimer = () => {
	const [time, setTime] = useState(0)
	const [beginTiming, setBeginTiming] = useState(false); 

	useEffect(() => {
		const userInputField = document.getElementById('userInputField');
		userInputField?.addEventListener('keydown', () => {
			startTimer()
		})
		return userInputField?.removeEventListener('keydown', () => { startTimer() })
	},[])
	
	useEffect(() => {
		if (beginTiming) {
			const timeout = setTimeout(() => setTime(prevState => prevState + 1), 1000)
		} 		
	}, [time, beginTiming])

	function startTimer() {
		setBeginTiming(true);
	}


	return {
		time,
		setTime
	};
}

export default useTimer;