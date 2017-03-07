function LCS(x, y) {
  let result1 = compareStrings(x, y);
  let result2 = compareStrings(y, x);
  
  if (result1.length > result2.length) {
    return result1;
  } else {
    return result2;
  }
}

function compareStrings(string1, string2) {
  let copy1 = string1.slice();
  let copy2 = string2.slice();
  let result = "";
  let currentComparisonPoint = 0;
  for (let i = 0; i < copy1.length; i++){ 
    for (let j = currentComparisonPoint; j < copy2.length; j++) {
      if (copy2[j] === copy1[i]) {
        result += copy2[j];
        currentComparisonPoint = j + 1;
        i++;
      }
    }  
  }
  return result;
}