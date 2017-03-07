function lastDigit(as){
  if (as.length === 0){
    return 1;
  }
  if (as.length === 1){
    return as[0]%10;
  }
  var lastNum = as[as.length-1] === 0 ? 1 : Math.pow(as[as.length-2], as[as.length-1])
  
  var newAs = as.slice(0,-2);
  newAs.push(lastNum);
  
  return lastDigit(newAs)
  
}
