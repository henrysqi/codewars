function rotate(str){
  let result = [];
  let current = str;
  for (let i = 0; i < str.length; i++) {
    let newCurrent = current.slice(1) + current[0];
    result.push(newCurrent);
    current = newCurrent;
  }
  return result;
}
