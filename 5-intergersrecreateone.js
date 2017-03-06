function listSquared(m, n) {
    // your code
    var result = [];
    for (let i = m; i <= n; i++) {
      if (checkCond(i)){
          result.push(checkCond(i))
      }
    }
    return result;
}

function checkCond(num){
  var devisors = [];
  for (var i = 1; i <= num; i++){
    if (num % i === 0){
      devisors.push(i);
    }
  }
  let sum = devisors.map(elem => elem*elem).reduce((a,b) => a+b)
  if (Math.sqrt(sum) % 1 === 0){
  	return [num, sum]
  } else {
  	return false
  }
}