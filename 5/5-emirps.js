function findEmirp(n){
	let result = [];
	let sum = 0;
	for (let i = 0; i <= n; i++){
		let isprime = true;
		for (let j = 2; j * j <= i; j++){
			if (i % j === 0){
				isprime = false;
				break;
			}
		}
		if (isprime){
			let reverseisprime = true;
			let rev = reverseNum(i);
			if (rev <= i || rev % 2 === 0){
				continue;
			}
			for (let k = 2; k * k <= rev; k++){
				if (rev % k === 0){
					reverseisprime = false;
					break;
				}
			}
			if (reverseisprime){
				result.push(i);
				sum += i;
				if (rev <= n){
					result.push(rev);
					sum += rev;
				}
			}
		}
	}
	
	result = result.sort((a,b) => a-b);
	return [result.length, result[result.length-1], sum]
}



/*============================================================*/


function reverseNum(num){
	var numstring = num.toString();
	var reversed = "";
	for (var i = numstring.length-1; i >= 0; i--){
		reversed += numstring.charAt(i);
	}
	return Number(reversed);
}

function isPalim(num){
	var numstring = num.toString();
	var reversed = "";
	for (var i = numstring.length-1; i >= 0; i--){
		reversed += numstring.charAt(i);
	}
	if (numstring === reversed){
		return true;
	} else {
		return false;
	}
}

var lastPrime = 2

function isPrime(num){
	if (num < 2){
		return false;
	}
	if (num === 2){
		return true;
	}
	for (var lastPrime = 2; lastPrime < num; lastPrime++){
		if (num % lastPrime === 0){
			lastPrime = num;
			return false;
		}
	}
  lastPrime = num;
	return true;
}