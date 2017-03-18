function incrementString (string) {
  let stringCopy = ""
  let nums = ""
  let foundString = false;
  for (let i = string.length-1; i >= 0; i--){
    if (isNaN(string[i])){
      foundString = true;
      stringCopy = string.slice(0, i + 1);
      nums = string.slice(i + 1, string.length);
      break;
    }
  }
	if (!stringCopy) {
		return incrementNum(string);
	}
  return foundString ? stringCopy + incrementNum(nums) : string + '1';
}

function incrementNum(numstring){
	let zeroes = "";
	let nums = "";
	for (let i = 0; i < numstring.length; i++){
		if (numstring[i] === '0') {
			zeroes += '0'
		} else {
			nums = numstring.slice(i);
			break;
		}
	}
	if (zeroes){
		let newNums = Number(nums) + 1
		let newZeroes;
		if (zeroes.length === 1) {
			newZeroes = '';
		} else {
			newZeroes = zeroes.slice(1);
		}
		return newNums.toString().length === nums.length ? zeroes + newNums : newZeroes + newNums;
	} else {
		return (Number(nums) + 1).toString()
	}
}
