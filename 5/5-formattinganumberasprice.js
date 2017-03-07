function numberToPrice(num) {
  if (isNaN(num) || num.length === 0){
    return 'NaN';
  }
  let numParts = num.toString().split(".");
  if (numParts.length === 1){
    if (num < 0){
      numParts[0] = numParts[0].slice(1);
      return '-' + handleDollars(numParts[0]) + '.00';
    } else {
      return handleDollars(numParts[0]) + '.00';
    }
  } else {
    if (num < 0) {
      numParts[0] = numParts[0].slice(1);
      return '-' + handleDollars(numParts[0]) + '.' + handleCents(numParts[1]);
    } else {
      return handleDollars(numParts[0]) + '.' + handleCents(numParts[1]);
    }
  }
}

function handleDollars(numstring) {
  let counter = 0;
  let result = '';
  for (let i = numstring.length-1; i >= 0; i--){
    result += numstring[i];
    counter++;
    if (counter%3 === 0 && i !== 0){
      result += ','
    }
  }
  return result.split("").reverse().join("");
}

function handleCents(numstring) {
  if (numstring.length === 1){
    return numstring + '0';
  } else {
    return numstring.slice(0,2);
  }
}