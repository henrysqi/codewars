function expandedForm(num) {
  let numstring = num.toString();
  let result = "";
  for (let i = 0; i < numstring.length; i++){
    result += numstring[i] === "0" ? "" : numstring[i] + getZeroes(numstring.length-i-1) + " + ";
  }
  return result.slice(0, result.length-3);
}

function getZeroes(num) {
  let result = "";
  for (let i = 0; i < num; i++){result += "0"}
  return result;
}