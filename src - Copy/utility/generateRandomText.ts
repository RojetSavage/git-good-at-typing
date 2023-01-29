
function generateRandomText(availableLetters:string, lengthOfWords:number, totalWords:number) {
	let lettersArray = availableLetters.split('');
	let randomTextArray = []
	for (let i=0; i<totalWords; i++) {
		let newWord = "";
		for (let j=0; j<lengthOfWords; j++) {
			let rand = Math.ceil(Math.random()*lettersArray.length-1)
			newWord+=lettersArray[rand] 
		}
		randomTextArray.push(newWord)
	}
	console.log(randomTextArray)
	return randomTextArray.join(' ').split(' ');
}


export default generateRandomText;