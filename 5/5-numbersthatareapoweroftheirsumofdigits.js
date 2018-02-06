function powerSumDigTerm(n) {
	if (n < 1) {
		return null;
	}
	var qualify = [];
	for (var base = 2; base < 1000; base++) {
		var currentVal = base;
		for (var exponent = 2; exponent < 100; exponent++) {
			currentVal = Math.pow(base,exponent);
			if (base === addDigits(currentVal)) {
				qualify.push(currentVal);
				if (qualify.length > 100) {
					break;
				}
			}
		}
		if (qualify.length > 100) {
		  break;
		}
	}
	var sortedQualify = qualify.sort(function(a,b) {return a-b});
	return sortedQualify[n-1];
}


function addDigits(num) {
	var digitsArray = num.toString().split("");
	return digitsArray.reduce(function(a,b) {
		return Number(a)+Number(b);
	})
}

/////////////////////////////////////////////////

// function powerSumDigTerm(n) {
// 	var counter = 0;
// 	var currentNum = 81;
//     while (counter < n) {
// 		var digitSum = addDigits(currentNum);
// 		if (AisPowerOfB(currentNum, digitSum)) {
// 			counter++;
// 			if (counter === n) {
// 				return currentNum;
// 			}
// 		}
// 		currentNum++;
//     }
// }

// function addDigits(num) {
// 	var digitsArray = num.toString().split("");
// 	return digitsArray.reduce(function(a,b) {
// 		return Number(a)+Number(b);
// 	})
// }

// function AisPowerOfB(a, b) {
// 	while (a % b === 0 && b !== 1) {
// 		a = a / b
// 	}
// 	return a === 1;
// }

