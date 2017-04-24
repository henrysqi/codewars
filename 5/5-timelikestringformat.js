function solution(hour) {
  let numstring = hour.toString();
  if (numstring.length === 3 || numstring.length === 4) {
    let first = numstring.slice(0, numstring.length - 2);
    let second = numstring.slice(-2);
    return first + ':' + second;
  } else {
    throw "you suck";
  }
}