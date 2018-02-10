/*
1. as[1]^X mod 10
2. find how many cycles of base
3. next num in array to the X mod result from (2)
4. do it till get lastnum mod Y, unless stopped earlier (every num in cycle is even and mod is 2 => 0)
5. evaluate and go backwards

*/

function lastDigit(as){

  return getBigNum(as, 10);
}

function getBigNum(arr, mod) {
  console.log(arr, mod)
  if (arr.length === 1) {
    return arr[0]%mod;
  } else {
    var lastDigitsSeen = [];
    var i = 1;
    var base = arr.shift();
    while (true) {
      var lastDigit = getLastDigit(Math.pow(base, i));
      if (lastDigitsSeen.indexOf(lastDigit) === -1) {
        lastDigitsSeen.push(lastDigit)
      } else {
        break;
      }
    }
    var bigNum = getBigNum(arr, lastDigitsSeen.length);
    return (Math.pow(base, bigNum))%mod;
  }
}

function getLastDigit(num) {
  var str = num.toString();
  return str[str.length-1];
}

lastDigit([12,30,21]);