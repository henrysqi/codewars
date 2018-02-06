function powerSumDigTerm(n) {
	var counter = 0;
	var currentNum = 81;
    while (counter < n) {
		var digitSum = addDigits(currentNum);
		if (AisPowerOfB(currentNum, digitSum)) {
			counter++;
			if (counter === n) {
				return currentNum;
			}
		}
		currentNum++;
    }
}

function addDigits(num) {
	var digitsArray = num.toString().split("");
	return digitsArray.reduce(function(a,b) {
		return Number(a)+Number(b);
	})
}

function AisPowerOfB(a, b) {
	while (a % b === 0 && b !== 1) {
		a = a / b
	}
	return a === 1;
}

