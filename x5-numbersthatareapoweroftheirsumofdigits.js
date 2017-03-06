function powerSumDigTerm(n) {
	let satisfies = [];
	
	let i = 10;
	while (satisfies.length < n) {
		let sum = sumOfDigs(i);
		let j = 2
		while (Math.pow(sum, j) < i) {
			if (Math.pow(sum, j) === i) {
				satisfies.push(i)
			}
			j++;
		}
		i++;
	}
	return satisfies.pop();
}

function sumOfDigs(num) {
	let numstring = num.toString();
	let result = 0;
	for (let i = 0; i < numstring.length; i++) {
		result += Number(numstring[i]);
	}
	return result;
}