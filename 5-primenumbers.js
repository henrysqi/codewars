function isPrime(number) {
  if (number < 2) {
    return false;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true
  }
}

function getPrimes(start, finish) {
  if (finish < start) {
    let temp = finish;
    finish = start;
    start = temp;
  }
  let result = [];
  for (let i = start; i <= finish; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  return result;
}