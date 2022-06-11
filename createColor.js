const getRandomColorStr = () => {
	const hexadecimalValuesList = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

	const getColorValueStr = () => {
		let currentIndexInt = hexadecimalValuesList.length;
		let temporaryValue, randomIndex;
		while (0 !== currentIndexInt) {
			randomIndex = Math.floor(Math.random() * currentIndexInt);
			currentIndexInt -= 1;

			temporaryValue = hexadecimalValuesList[currentIndexInt];
			hexadecimalValuesList[currentIndexInt] = hexadecimalValuesList[randomIndex];
			hexadecimalValuesList[randomIndex] = temporaryValue;
		}
	};

	const getHexadecimalColorValue = () => {
		let colorBaseStr = '#';
		for (let index = 0; index < 6; index++) {
			getColorValueStr(hexadecimalValuesList);
			colorBaseStr += hexadecimalValuesList[0];
		}
		return colorBaseStr;
	};
	
    return getHexadecimalColorValue();
};