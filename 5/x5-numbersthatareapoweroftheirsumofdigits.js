function powerSumDigTerm(n) {
	let satisfies = [];
	let current = 81;
	while (satisfies.length < n) {
		if (squareOfDigs(current)){
			satisfies.push(current);
		}
	}
	return satisfies.pop();
}

function squareOfDigs(num) {
	let numstring = num.toString();
	let result = 0;
	let powerResult = 0;
	let counter = 0;

	for (let i = 0; i < numstring.length; i++){
		result += Number(numstring[i]);
	}
	while (powerResult < num) {
		counter++;
		if (powerResult === num) {
			return true;
		} else {
			powerResult = Math.pow(result, counter);
		}
	}
	return false;
}