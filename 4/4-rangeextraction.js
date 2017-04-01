function solution(list){
  let result = "";
  let temp = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i+1] === list[i]+1) {
      temp.push(list[i])
    } else {
      temp.push(list[i])
      if (temp.length < 3) {
        for (let j = 0; j < temp.length; j++) {
          result += temp[j] + ",";
        }
        temp = [];
      } else {
        result += temp[j] + "-" + temp[temp.length-1] + ",";
        temp = [];
      }
    }
  }
  return result;
}

