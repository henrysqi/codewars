function lastDigit(as){

  return getBigNum(as, 10);
}

function getBigNum(arr, mod) {
  console.log(arr, mod)
  if (arr.length === 1) {
    return arr[0]%mod;
  } else {
    var valuesSeen = [];
    var i = 1;
    var base = arr.shift();
    while (true) {
      var val = (Math.pow(base, i)) % mod;
      if (valuesSeen.indexOf(val) === -1) {
        valuesSeen.push(val);
      } else {
        break;
      }
      i++;
    }
    var bigNum = getBigNum(arr, i-1);
    return (Math.pow(base, bigNum))%mod;
  }
}

function getLastDigit(num) {
  var str = num.toString();
  return str[str.length-1];
}

lastDigit([12,30,21]);