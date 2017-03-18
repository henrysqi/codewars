function validBraces(braces){
  console.log(braces);
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let history = [];
  for (let i = 0; i < braces.length; i++){
    switch (braces[i]) {
      case '(':
        count1++;
        history.push('count1')
        break;
      case ')':
        count1--;
        if (history[history.length-1] !== 'count1') {
          return false
        } else {
          history.pop();
        }
        break;
      case '[':
        count2++;
        history.push('count2')
        break;
      case ']':
        count2--;
        if (history[history.length-1] !== 'count2') {
          return false
        } else {
          history.pop();
        }
        break;
      case '{':
        count3++;
        history.push('count3')
        break;
      case '}':
        count3--;
        if (history[history.length-1] !== 'count3') {
          return false
        } else {
          history.pop();
        }
        break;
    }
    if (count1 < 0 || count2 < 0 || count3 < 0) {
      return false;
    }
  }
  if (count1 === 0 && count2 === 0 && count3 === 0) {
    return true;
  } else {
    return false;
  }
}